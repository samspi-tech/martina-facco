import type { Gallery, Section } from '@/utils/types.ts';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

type GalleryHeaderProps = {
    section: Section;
    galleryDetails: Gallery;
};

const GalleryHeader = ({ section, galleryDetails }: GalleryHeaderProps) => {
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
            <Link to={`/${section}`}>
                <FaArrowLeft />
                <span>back to the list of galleries</span>
            </Link>
            <h3>{galleryName}</h3>
            <h2>{title}</h2>
            {projectScope && (
                <p>
                    Project scope &mdash; <span>{scopes}.</span>
                </p>
            )}
            {agency && (
                <p>
                    Agency &mdash; <span>{agency}.</span>
                </p>
            )}
            {isPersonalProject && <p>Personal Project.</p>}
            {isFreelance && <p>Freelance.</p>}
            {year && (
                <p>
                    Year &mdash; <span>{year}.</span>
                </p>
            )}
        </header>
    );
};

export default GalleryHeader;
