import { useNavigate } from 'react-router';
import type { Galleries, Section } from '@/utils/types.ts';
import type { RefObject } from 'react';

export const useGalleryPagination = (
    section: Section,
    galleries: Galleries,
    galleryId: string,
    ref: RefObject<HTMLElement | null>
) => {
    const navigate = useNavigate();

    const gallery = galleries[section];
    const galleriesNum = gallery.length - 1;

    const currGallery = gallery.findIndex(({ id }) => {
        return id === galleryId;
    });

    const hasPrevPage = currGallery > 0;
    const hasNextPage = currGallery < galleriesNum;

    const prevGallery = currGallery - 1;
    const nextGallery = currGallery + 1;

    const prevGalleryName = gallery.at(prevGallery)?.galleryName;
    const nextGalleryName = gallery.at(nextGallery)?.galleryName;

    const handlePrevGallery = () => {
        if (hasPrevPage) {
            const prevGalleryId = gallery.at(prevGallery)?.id;

            navigate(`/${section}/${prevGalleryId}`);
            ref.current?.scrollIntoView();
        }
    };

    const handleNextGallery = () => {
        if (hasNextPage) {
            const nextGalleryId = gallery.at(nextGallery)?.id;

            navigate(`/${section}/${nextGalleryId}`);
            ref.current?.scrollIntoView();
        }
    };

    return {
        hasPrevPage,
        hasNextPage,
        prevGalleryName,
        nextGalleryName,
        handlePrevGallery,
        handleNextGallery,
    };
};
