import type { Video } from '@/utils/types.ts';
import { BASE_IMG_URL, BASE_VIDEO_URL } from '@/utils/constants.ts';
import styles from '../Gallery.module.css';
import { FaPlayCircle } from 'react-icons/fa';
import { useState } from 'react';

type GalleryVideoProps = {
    video: Video;
};

const GalleryVideo = ({ video }: GalleryVideoProps) => {
    const [isPlayVideo, setIsPlayVideo] = useState(false);

    const handlePlayVideo = () => setIsPlayVideo(true);

    const { title, source, thumbnail } = video;

    return (
        <div className={styles.iframeContainer}>
            <div className={isPlayVideo ? styles.hideVideoThumbnail : ''}>
                <img src={`${BASE_IMG_URL}/${thumbnail}`} alt={title} />
                <button
                    onClick={handlePlayVideo}
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
