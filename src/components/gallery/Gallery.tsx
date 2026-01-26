import { Link, useParams } from 'react-router';
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
import ColmarOriginalsGallery from '@/components/colmarOriginalsGallery/ColmarOriginalsGallery.tsx';
import { FaArrowLeft } from 'react-icons/fa';
import GalleryVideoList from '@/components/gallery/partials/GalleryVideoList.tsx';

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

    const { galleryName, content } = filteredGallery!;

    const isStandardGallery = !EXCLUDED_GALLERIES.includes(galleryName);
    const isOneColumnGallery = ONE_COLUMN_GALLERIES.includes(galleryName);

    return (
        <section ref={topElementRef} className={styles.gallery}>
            <Link className={styles.navigateBackLink} to={`/${section}`}>
                <FaArrowLeft />
                <span>back to the list of galleries</span>
            </Link>
            {content.map((item) => {
                const { id: contentId, videos, images } = item;

                const galleryDetails = { ...item, galleryName };

                return (
                    <article key={contentId}>
                        <GalleryHeader galleryDetails={galleryDetails} />
                        {galleryName === 'C.P. Company' && (
                            <CpCompanyGallery
                                images={images}
                                galleryName={galleryName}
                            />
                        )}
                        {galleryName === 'Conbipel' && (
                            <ConbipelGallery
                                images={images}
                                galleryName={galleryName}
                            />
                        )}
                        {galleryName === 'Colmar Originals' && (
                            <ColmarOriginalsGallery
                                images={images}
                                galleryName={galleryName}
                            />
                        )}
                        {images && isStandardGallery && (
                            <div
                                className={`${isOneColumnGallery ? styles.oneColumnImagesContainer : styles.allImagesContainer} ${contentId === 'kiko-content-3' ? styles.kikoAsianTouchContainer : ''}`}
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
                        {videos && (
                            <GalleryVideoList videos={videos} id={contentId} />
                        )}
                    </article>
                );
            })}
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
