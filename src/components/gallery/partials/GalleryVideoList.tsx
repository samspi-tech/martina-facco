import type { Video } from '@/utils/types.ts';
import { useState } from 'react';
import GalleryVideo from '@/components/gallery/partials/GalleryVideo.tsx';
import styles from '../Gallery.module.css';

type GalleryVideoListProps = {
    id: string;
    videos: Video[];
};

const GalleryVideoList = ({ id, videos }: GalleryVideoListProps) => {
    const [currVideoPlaying, setCurrVideoPlaying] = useState<string | null>('');

    return (
        <div
            className={`${styles.allVideosContainer} ${id === 'clinique-content-2' ? styles.cliniqueVideoContainer : ''}`}
        >
            {videos.map((video) => (
                <GalleryVideo
                    key={video.id}
                    video={video}
                    currVideoPlaying={currVideoPlaying}
                    setCurrVideoPlaying={setCurrVideoPlaying}
                />
            ))}
        </div>
    );
};

export default GalleryVideoList;
