import { BASE_IMG_URL } from '@/utils/constants.ts';

type GalleryImageProps = {
    fileName: string;
    galleryName: string;
};

const GalleryImage = ({ fileName, galleryName }: GalleryImageProps) => {
    return (
        <div>
            <img src={`${BASE_IMG_URL}/${fileName}`} alt={galleryName} />
        </div>
    );
};

export default GalleryImage;
