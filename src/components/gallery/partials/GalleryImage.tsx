import { BASE_IMG_URL } from '@/utils/constants.ts';
import type { RefObject } from 'react';
import type { Swiper } from 'swiper/types';
import styles from '../Gallery.module.css';
import { FaEye } from 'react-icons/fa';

type GalleryImageProps = {
    fileName: string;
    galleryName: string;
    onToggle?: () => void;
    index?: number;
    swiperRef?: RefObject<Swiper | null>;
    hasHoverEffect?: boolean;
};

const GalleryImage = ({
    fileName,
    galleryName,
    onToggle,
    index,
    swiperRef,
    hasHoverEffect = false,
}: GalleryImageProps) => {
    const handleToggleImage = () => {
        if (index === undefined || !swiperRef) return;

        onToggle?.();
        swiperRef.current?.slideTo(index, 0);
    };

    return (
        <div
            onClick={handleToggleImage}
            className={`${styles.imageContainer} ${hasHoverEffect && styles.imageHover}`}
        >
            <img src={`${BASE_IMG_URL}/${fileName}`} alt={galleryName} />
            <span>
                <FaEye />
            </span>
        </div>
    );
};

export default GalleryImage;
