import type { Video } from '@/utils/types.ts';
import { BASE_VIDEO_URL } from '@/utils/constants.ts';

type GalleryVideoProps = {
    video: Video;
};

const GalleryVideo = ({ video }: GalleryVideoProps) => {
    const { title, source } = video;

    return (
        <iframe
            title={title}
            allow="fullscreen"
            src={`${BASE_VIDEO_URL}/${source}`}
        ></iframe>
    );
};

export default GalleryVideo;
