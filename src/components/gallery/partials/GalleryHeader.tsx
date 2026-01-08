import type { Gallery } from '@/utils/types.ts';

type GalleryHeaderProps = {
    galleryDetails: Gallery;
};

const GalleryHeader = ({ galleryDetails }: GalleryHeaderProps) => {
    const {
        title,
        year,
        agency,
        projectScope,
        isFreelance,
        isPersonalProject,
    } = galleryDetails;

    const scopes = projectScope?.join(' / ');

    return (
        <header>
            <h2>{title}</h2>
            {projectScope && (
                <p>
                    <b>Project scope &mdash;</b> <span>{scopes}.</span>
                </p>
            )}
            {agency && (
                <p>
                    <b>Agency &mdash;</b> <span>{agency}.</span>
                </p>
            )}
            {isPersonalProject && (
                <p>
                    <b>Personal Project.</b>
                </p>
            )}
            {isFreelance && (
                <p>
                    <b>Freelance.</b>
                </p>
            )}
            {year && (
                <p>
                    <b>Year &mdash;</b> <span>{year}.</span>
                </p>
            )}
        </header>
    );
};

export default GalleryHeader;
