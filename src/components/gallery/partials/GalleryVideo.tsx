import type { Video } from '@/utils/types.ts';
import { BASE_IMG_URL, BASE_VIDEO_URL } from '@/utils/constants.ts';
import styles from '../Gallery.module.css';
import { FaPlayCircle } from 'react-icons/fa';
import { type Dispatch, type SetStateAction } from 'react';

type GalleryVideoProps = {
    video: Video;
    videoPlaying: string | null;
    setVideoPlaying: Dispatch<SetStateAction<string | null>>;
};

const GalleryVideo = ({
    video,
    videoPlaying,
    setVideoPlaying,
}: GalleryVideoProps) => {
    const { title, source, thumbnail, id } = video;

    const isPlayVideo = videoPlaying === id;

    return (
        <div className={styles.iframeContainer}>
            <div className={isPlayVideo ? styles.hideVideoThumbnail : ''}>
                <img src={`${BASE_IMG_URL}/${thumbnail}`} alt={title} />
                <button
                    onClick={() => {
                        setVideoPlaying(id);
                    }}
                    aria-label="Play the video"
                    className={isPlayVideo ? styles.animateVideoButton : ''}
                >
                    <FaPlayCircle />
                </button>
            </div>
            {isPlayVideo && (
                <iframe
                    src={`${BASE_VIDEO_URL}/${source}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className={isPlayVideo ? styles.showVideo : ''}
                ></iframe>
            )}
        </div>
    );
};

export default GalleryVideo;
