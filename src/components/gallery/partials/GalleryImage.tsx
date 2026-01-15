import { BASE_IMG_URL } from '@/utils/constants.ts';
import styles from '../Gallery.module.css';

type GalleryImageProps = {
    fileName: string;
    galleryName: string;
};

const GalleryImage = ({ fileName, galleryName }: GalleryImageProps) => {
    return (
        <div className={styles.imageContainer}>
            <img src={`${BASE_IMG_URL}/${fileName}`} alt={galleryName} />
        </div>
    );
};

export default GalleryImage;
