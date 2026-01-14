import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../Gallery.module.css';
import type { RefObject } from 'react';
import type { Swiper as SwiperRef } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-expect-error Cannot find module swiper/css or its corresponding type declarations.
import 'swiper/css';
// @ts-expect-error Cannot find module swiper/css/navigation or its corresponding type declarations.
import 'swiper/css/navigation';
// @ts-expect-error Cannot find module swiper/css/pagination or its corresponding type declarations.
import 'swiper/css/pagination';
import type { Media } from '@/utils/types.ts';
import GalleryImage from '@/components/gallery/partials/GalleryImage.tsx';

type GalleryLightboxProps = {
    galleryName: string;
    images: Media[] | undefined;
    ref: RefObject<SwiperRef | null>;
};

const GalleryLightbox = ({
    images,
    ref,
    galleryName,
}: GalleryLightboxProps) => {
    return (
        <Swiper
            onSwiper={(swiper) => {
                ref.current = swiper;
            }}
            spaceBetween={15}
            className={styles.customSwiper}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
        >
            {images?.map((image) => (
                <SwiperSlide key={image.id}>
                    <GalleryImage
                        fileName={image.fileName}
                        galleryName={galleryName}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default GalleryLightbox;
