import type { UniqueGalleryProps } from '@/utils/types.ts';
import GalleryImage from '@/components/gallery/partials/GalleryImage.tsx';
import styles from './ColmarOriginals.module.css';

const ColmarOriginalsGallery = ({
    images,
    galleryName,
}: UniqueGalleryProps) => {
    return (
        <div className={styles.colmarOriginalsGalleryContainer}>
            {images?.map((image) => {
                const { id, fileName } = image;

                return (
                    <GalleryImage
                        key={id}
                        fileName={fileName}
                        galleryName={galleryName}
                    />
                );
            })}
        </div>
    );
};

export default ColmarOriginalsGallery;
