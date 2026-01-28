import type { Section } from '@/utils/types.ts';

export const getSectionName = (section: Section) => {
    switch (section) {
        case 'artDirection': {
            return 'Art Direction';
        }
        case 'campaigns': {
            return 'Campaigns';
        }
        default: {
            return 'Graphic Design';
        }
    }
};
