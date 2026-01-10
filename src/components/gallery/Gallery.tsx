import { useParams } from 'react-router';
import { useGalleries } from '@/hooks/useGalleries.ts';
import type { Section } from '@/utils/types.ts';
import styles from './Gallery.module.css';
import GalleryImage from '@/components/gallery/partials/GalleryImage.tsx';
import GalleryHeader from '@/components/gallery/partials/GalleryHeader.tsx';
import GalleryPagination from '@/components/gallery/partials/GalleryPagination.tsx';
import { useRef } from 'react';
import Modal from '@/components/modal/Modal.tsx';
import { useModal } from '@/hooks/useModal.ts';
import { SwiperSlide } from 'swiper/react';
import Swipe from '@/components/swipe/Swipe.tsx';
import type { Swiper } from 'swiper/types';

const Gallery = () => {
    const { galleries } = useGalleries();
    const topElementRef = useRef<HTMLElement>(null);
    const { dialogRef, handleToggleModal } = useModal();
    const swiperRef = useRef<Swiper>(null);

    const { section, id: galleryId } = useParams<{
        section: Section;
        id: string;
    }>();

    if (!galleries || !section || !galleryId) return null;

    const filteredGallery = galleries[section]
        .filter(({ id }) => {
            return id === galleryId;
        })
        .at(0);

    const { images, galleryName } = filteredGallery!;

    return (
        <section ref={topElementRef} className={styles.gallery}>
            <GalleryHeader
                section={section}
                galleryDetails={filteredGallery!}
            />
            <div className={styles.allImagesContainer}>
                {images?.map((image, i) => (
                    <GalleryImage
                        key={image.id}
                        fileName={image.fileName}
                        galleryName={galleryName}
                        onToggle={handleToggleModal}
                        index={i}
                        swiperRef={swiperRef}
                        hasHoverEffect={true}
                    />
                ))}
            </div>
            <GalleryPagination
                section={section}
                galleries={galleries}
                galleryId={galleryId}
                ref={topElementRef}
            />
            <Modal ref={dialogRef} onToggle={handleToggleModal}>
                <Swipe ref={swiperRef}>
                    {images?.map((image) => (
                        <SwiperSlide key={image.id}>
                            <GalleryImage
                                fileName={image.fileName}
                                galleryName={galleryName}
                            />
                        </SwiperSlide>
                    ))}
                </Swipe>
            </Modal>
        </section>
    );
};

export default Gallery;
