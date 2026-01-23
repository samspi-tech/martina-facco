import type { Content } from '@/utils/types.ts';

type GalleryHeaderProps = {
    galleryDetails: Content & { galleryName: string };
};

const GalleryHeader = ({ galleryDetails }: GalleryHeaderProps) => {
    const {
        title,
        galleryName,
        year,
        agency,
        projectScope,
        isFreelance,
        isPersonalProject,
    } = galleryDetails;

    const scopes = projectScope?.join(' • ');

    return (
        <header>
            {title && (
                <>
                    <h3>{galleryName}</h3>
                    <h2>{title}</h2>
                </>
            )}
            {projectScope && (
                <p>
                    Project scope &mdash; <span>{scopes}</span>
                </p>
            )}
            {agency && (
                <p>
                    Agency &mdash; <span>{agency}</span>
                </p>
            )}
            {isPersonalProject && <p>Personal Project</p>}
            {isFreelance && <p>Freelance</p>}
            {year && (
                <p>
                    Year &mdash; <span>{year}</span>
                </p>
            )}
        </header>
    );
};

export default GalleryHeader;
