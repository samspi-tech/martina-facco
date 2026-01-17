import type { Gallery, Section } from '@/utils/types.ts';
import { BASE_IMG_URL } from '@/utils/constants.ts';
import styles from './GalleryCard.module.css';
import { Link } from 'react-router';

type GalleryCardProps = {
    gallery: Gallery;
    sectionName: Section;
};

const GalleryCard = ({ gallery, sectionName }: GalleryCardProps) => {
    const { galleryName, images, id } = gallery;

    const imageSrc = `${BASE_IMG_URL}/${images?.at(0)?.fileName}`;

    return (
        <Link to={`/${sectionName}/${id}`} className={styles.galleryCard}>
            <span>{galleryName}</span>
            <span>{images && <img src={imageSrc} alt={galleryName} />}</span>
        </Link>
    );
};

export default GalleryCard;
