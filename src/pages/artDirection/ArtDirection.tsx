import { useGalleries } from '@/hooks/useGalleries.ts';
import GalleryCard from '@/components/galleryCard/GalleryCard.tsx';
import styles from './ArtDirection.module.css';

const ArtDirection = () => {
    const { galleries } = useGalleries();

    return (
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
    );
};

export default ArtDirection;
