export type Media = {
    id: string;
    fileName: string;
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
    images?: Media[];
    videos?: Media[];
};

export type Galleries = {
    artDirection: Gallery[];
    campaigns: Gallery[];
    graphicDesign: Gallery[];
};

export type Section = 'artDirection' | 'campaigns' | 'graphicDesign';

export type UniqueGalleryProps = {
    galleryName: string;
    images: Media[] | undefined;
};
