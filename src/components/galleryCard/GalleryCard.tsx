import type { Gallery } from '@/utils/types.ts';
import { BASE_IMG_URL } from '@/utils/constants.ts';
import styles from './GalleryCard.module.css';
import { Link } from 'react-router';

type GalleryCardProps = {
    gallery: Gallery;
};

const GalleryCard = ({ gallery }: GalleryCardProps) => {
    const { galleryName, images } = gallery;

    const imageSrc = `${BASE_IMG_URL}/${images?.at(0)?.fileName}`;

    return (
        <Link to={''} className={styles.galleryCard}>
            <span>{images && <img src={imageSrc} alt={galleryName} />}</span>
            <span>{galleryName}</span>
        </Link>
    );
};

export default GalleryCard;
