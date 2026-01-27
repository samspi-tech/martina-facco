import type { Gallery, Section } from '@/utils/types.ts';
import { BASE_IMG_URL } from '@/utils/constants.ts';
import styles from './GalleryCard.module.css';
import { Link } from 'react-router';
import { useElementOnScreen } from '@/hooks/useElementOnScreen.ts';

type GalleryCardProps = {
    gallery: Gallery;
    sectionName: Section;
};

const GalleryCard = ({ gallery, sectionName }: GalleryCardProps) => {
    const { galleryName, id, content } = gallery;
    const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.2 });

    const firstGalleryContent = content.at(0);

    const firstImageFileName = firstGalleryContent?.images?.at(0)?.fileName;
    const firstVideoThumbnail = firstGalleryContent?.videos?.at(0)?.thumbnail;

    const imageName = firstImageFileName
        ? firstImageFileName
        : firstVideoThumbnail;

    const imageUrl = `${BASE_IMG_URL}/${imageName}`;

    return (
        <div ref={containerRef} className={styles.galleryCard}>
            <Link
                to={`/${sectionName}/${id}`}
                className={`${isVisible ? styles.showCard : styles.hideCard}`}
            >
                <span>{galleryName}</span>
                <span aria-hidden={true}></span>
                <span>
                    <img src={imageUrl} alt={galleryName} />
                </span>
            </Link>
        </div>
    );
};

export default GalleryCard;
