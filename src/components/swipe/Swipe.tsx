import { Swiper } from 'swiper/react';
import styles from './Swipe.module.css';
import type { PropsWithChildren, RefObject } from 'react';
import type { Swiper as SwiperRef } from 'swiper/types';
import { Navigation } from 'swiper/modules';
// @ts-expect-error Cannot find module swiper/css or its corresponding type declarations.
import 'swiper/css';
// @ts-expect-error Cannot find module swiper/css/navigation or its corresponding type declarations.
import 'swiper/css/navigation';

type SwipeProps = {
    ref: RefObject<SwiperRef | null>;
};

const Swipe = ({ children, ref }: PropsWithChildren<SwipeProps>) => {
    return (
        <Swiper
            className={styles.customSwiper}
            onSwiper={(swiper) => {
                ref.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={30}
            navigation
        >
            {children}
        </Swiper>
    );
};

export default Swipe;
