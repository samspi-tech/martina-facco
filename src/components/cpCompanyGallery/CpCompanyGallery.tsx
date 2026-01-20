import styles from './CpCompany.module.css';
import { BASE_IMG_URL } from '@/utils/constants.ts';
import { FaEye } from 'react-icons/fa';
import { useState } from 'react';
import type { UniqueGalleryProps } from '@/utils/types.ts';
import GalleryImage from '@/components/gallery/partials/GalleryImage.tsx';

const CpCompanyGallery = ({ images, galleryName }: UniqueGalleryProps) => {
    const [carouselImageIndex, setCarouselImageIndex] = useState(0);

    const handleCarouselImage = () => {
        setCarouselImageIndex((prevState) => (prevState === 0 ? 1 : 0));
    };

    return (
        <div className={styles.cpCompanyGalleryContainer}>
            <div className={styles.carousel}>
                <img
                    src={`${BASE_IMG_URL}/${images?.at(carouselImageIndex)?.fileName}`}
                    alt={galleryName}
                />
                <button
                    onClick={handleCarouselImage}
                    aria-label="Turn over the photo"
                >
                    <FaEye />
                </button>
            </div>
            <div className={styles.masonryLayout}>
                {images?.slice(2).map((image) => {
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
        </div>
    );
};

export default CpCompanyGallery;
