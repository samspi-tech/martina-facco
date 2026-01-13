import { Swiper } from 'swiper/react';
import styles from './Swipe.module.css';
import type { PropsWithChildren, RefObject } from 'react';
import type { Swiper as SwiperRef } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-expect-error Cannot find module swiper/css or its corresponding type declarations.
import 'swiper/css';
// @ts-expect-error Cannot find module swiper/css/navigation or its corresponding type declarations.
import 'swiper/css/navigation';
// @ts-expect-error Cannot find module swiper/css/pagination or its corresponding type declarations.
import 'swiper/css/pagination';

type SwipeProps = {
    ref: RefObject<SwiperRef | null>;
};

const Swipe = ({ children, ref }: PropsWithChildren<SwipeProps>) => {
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
            {children}
        </Swiper>
    );
};

export default Swipe;
