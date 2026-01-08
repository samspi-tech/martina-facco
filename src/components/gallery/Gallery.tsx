import { useParams } from 'react-router';
import { useGalleries } from '@/hooks/useGalleries.ts';
import type { Section } from '@/utils/types.ts';
import styles from './Gallery.module.css';
import GalleryImage from '@/components/gallery/partials/GalleryImage.tsx';
import GalleryHeader from '@/components/gallery/partials/GalleryHeader.tsx';

const Gallery = () => {
    const { galleries } = useGalleries();

    const { section, id: galleryId } = useParams<{
        section: Section;
        id: string;
    }>();

    if (!galleries || !section) return null;

    const filteredGallery = galleries[section]
        .filter(({ id }) => {
            return id === galleryId;
        })
        .at(0);

    const { images, galleryName } = filteredGallery!;

    return (
        <section className={styles.gallery}>
            <GalleryHeader galleryDetails={filteredGallery!} />
            <div className={styles.imagesContainer}>
                {images?.map((image) => (
                    <GalleryImage
                        key={image.id}
                        fileName={image.fileName}
                        galleryName={galleryName}
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
