import Button from '@/components/button/Button.tsx';
import type { Galleries, Section } from '@/utils/types.ts';
import { useGalleryPagination } from '@/hooks/useGalleryPagination.ts';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { RefObject } from 'react';

type GalleryPaginationProps = {
    section: Section;
    galleryId: string;
    galleries: Galleries;
    ref: RefObject<HTMLElement | null>;
};

const GalleryPagination = ({
    section,
    galleries,
    galleryId,
    ref,
}: GalleryPaginationProps) => {
    const {
        hasPrevPage,
        hasNextPage,
        prevGalleryName,
        nextGalleryName,
        handlePrevGallery,
        handleNextGallery,
    } = useGalleryPagination(section, galleries, galleryId, ref);

    return (
        <footer>
            {hasPrevPage ? (
                <Button
                    variant="outlinePrimary"
                    aria-label="Previous gallery"
                    onClick={handlePrevGallery}
                >
                    <FaChevronLeft />
                    <span>{prevGalleryName}</span>
                </Button>
            ) : (
                <span></span>
            )}
            {hasNextPage ? (
                <Button
                    variant="outlinePrimary"
                    aria-label="Next gallery"
                    onClick={handleNextGallery}
                >
                    <span>{nextGalleryName}</span>
                    <FaChevronRight />
                </Button>
            ) : (
                <span></span>
            )}
        </footer>
    );
};

export default GalleryPagination;
