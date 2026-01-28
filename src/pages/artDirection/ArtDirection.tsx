import { useGalleries } from '@/hooks/useGalleries.ts';
import GalleryCard from '@/components/galleryCard/GalleryCard.tsx';
import styles from './ArtDirection.module.css';
import Spinner from '@/components/spinner/Spinner.tsx';
import ErrorMessage from '@/components/errorMessage/ErrorMessage.tsx';

const ArtDirection = () => {
    const { galleries, isLoading, error } = useGalleries();

    if (isLoading) return <Spinner />;
    if (!error) return <ErrorMessage error="Failed to load galleries" />;

    return (
        <>
            <title>Art Direction &mdash; Martina Facco</title>
            <section className={styles.cardsContainer}>
                {galleries?.artDirection.map((gallery) => {
                    return (
                        <GalleryCard
                            key={gallery.id}
                            gallery={gallery}
                            sectionName="artDirection"
                        />
                    );
                })}
            </section>
        </>
    );
};

export default ArtDirection;
