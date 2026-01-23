import type { Gallery, Section } from '@/utils/types.ts';
import { BASE_IMG_URL } from '@/utils/constants.ts';
import styles from './GalleryCard.module.css';
import { Link } from 'react-router';

type GalleryCardProps = {
    gallery: Gallery;
    sectionName: Section;
};

const GalleryCard = ({ gallery, sectionName }: GalleryCardProps) => {
    const { galleryName, id, content } = gallery;

    const firstGalleryContent = content.at(0);

    const firstImageFileName = firstGalleryContent?.images?.at(0)?.fileName;
    const firstVideoThumbnail = firstGalleryContent?.videos?.at(0)?.thumbnail;

    const imageName = firstImageFileName
        ? firstImageFileName
        : firstVideoThumbnail;

    const imageUrl = `${BASE_IMG_URL}/${imageName}`;

    return (
        <Link to={`/${sectionName}/${id}`} className={styles.galleryCard}>
            <span>{galleryName}</span>
            <span>
                <img src={imageUrl} alt={galleryName} />
            </span>
        </Link>
    );
};

export default GalleryCard;
