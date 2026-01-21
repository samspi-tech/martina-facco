export type Image = {
    id: string;
    fileName: string;
};

export type Video = {
    id: string;
    title: string;
    source: string;
};

export type Gallery = {
    id: string;
    title: string;
    projectScope?: string[];
    agency?: string;
    isFreelance?: boolean;
    isPersonalProject?: boolean;
    year?: string;
    galleryName: string;
    thumbnail?: string;
    images?: Image[];
    videos?: Video[];
};

export type Galleries = {
    artDirection: Gallery[];
    campaigns: Gallery[];
    graphicDesign: Gallery[];
};

export type Section = 'artDirection' | 'campaigns' | 'graphicDesign';

export type UniqueGalleryProps = {
    galleryName: string;
    images: Image[] | undefined;
};
