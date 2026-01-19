import { useParams } from 'react-router';
import { useGalleries } from '@/hooks/useGalleries.ts';
import type { Section } from '@/utils/types.ts';
import styles from './Gallery.module.css';
import GalleryImage from '@/components/gallery/partials/GalleryImage.tsx';
import GalleryHeader from '@/components/gallery/partials/GalleryHeader.tsx';
import GalleryPagination from '@/components/gallery/partials/GalleryPagination.tsx';
import { useRef } from 'react';
import { EXCLUDED_GALLERIES, ONE_COLUMN_GALLERIES } from '@/utils/constants.ts';
import CpCompanyGallery from '@/components/cpCompanyGallery/CpCompanyGallery.tsx';
import ConbipelGallery from '@/components/conbipelGallery/ConbipelGallery.tsx';

const Gallery = () => {
    const { galleries } = useGalleries();
    const topElementRef = useRef<HTMLElement>(null);

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
            {galleryName === 'C.P. Company' && (
                <CpCompanyGallery images={images} galleryName={galleryName} />
            )}
            {galleryName === 'Conbipel' && (
                <ConbipelGallery images={images} galleryName={galleryName} />
            )}
            {!EXCLUDED_GALLERIES.includes(galleryName) && (
                <div
                    className={`${ONE_COLUMN_GALLERIES.includes(galleryName) ? styles.oneColumnImagesContainer : styles.allImagesContainer}`}
                >
                    {images?.map((image) => (
                        <GalleryImage
                            key={image.id}
                            fileName={image.fileName}
                            galleryName={galleryName}
                        />
                    ))}
                </div>
            )}
            <GalleryPagination
                section={section}
                galleries={galleries}
                galleryId={galleryId}
                ref={topElementRef}
            />
        </section>
    );
};

export default Gallery;
