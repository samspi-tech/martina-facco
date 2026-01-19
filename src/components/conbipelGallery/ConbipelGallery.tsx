import type { UniqueGalleryProps } from '@/utils/types.ts';
import { BASE_IMG_URL } from '@/utils/constants.ts';
import styles from './ConbipelGallery.module.css';

const ConbipelGallery = ({ images, galleryName }: UniqueGalleryProps) => {
    return (
        <div className={styles.conbipelGalleryContainer}>
            <div className={styles.carousel}>
                <img
                    src={`${BASE_IMG_URL}/${images?.at(0)?.fileName}`}
                    alt={galleryName}
                />
                <img
                    src={`${BASE_IMG_URL}/${images?.at(1)?.fileName}`}
                    alt={galleryName}
                />
                <img
                    src={`${BASE_IMG_URL}/${images?.at(2)?.fileName}`}
                    alt={galleryName}
                />
            </div>
            <div className={styles.oneColumnImages}>
                {images?.slice(3, 6).map((image) => {
                    const { id, fileName } = image;

                    return (
                        <img
                            key={id}
                            src={`${BASE_IMG_URL}/${fileName}`}
                            alt={galleryName}
                        />
                    );
                })}
            </div>
            <div className={styles.oneRowImages}>
                {images?.slice(6, 9).map((image) => {
                    const { id, fileName } = image;

                    return (
                        <div key={id}>
                            <img
                                src={`${BASE_IMG_URL}/${fileName}`}
                                alt={galleryName}
                            />
                        </div>
                    );
                })}
            </div>
            <div className={styles.gridLayout}>
                {images?.slice(9).map((image) => {
                    const { id, fileName } = image;

                    return (
                        <img
                            key={id}
                            src={`${BASE_IMG_URL}/${fileName}`}
                            alt={galleryName}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ConbipelGallery;
