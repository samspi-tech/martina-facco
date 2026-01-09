import Button from '@/components/button/Button.tsx';
import type { Galleries, Section } from '@/utils/types.ts';
import { useGalleryPagination } from '@/hooks/useGalleryPagination.ts';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type GalleryPaginationProps = {
    section: Section;
    galleryId: string;
    galleries: Galleries;
};

const GalleryPagination = ({
    section,
    galleries,
    galleryId,
}: GalleryPaginationProps) => {
    const {
        hasPrevPage,
        hasNextPage,
        prevGalleryName,
        nextGalleryName,
        handlePrevGallery,
        handleNextGallery,
    } = useGalleryPagination(section, galleries, galleryId);

    return (
        <footer>
            {hasPrevPage ? (
                <Button
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
                <Button aria-label="Next gallery" onClick={handleNextGallery}>
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
