import { Block } from 'payload/types';

import { Type as MediaType } from '../../collections/Media';

  export const PortfolioHero: Block = {
    slug: 'portfolio-hero',
    labels: {
        singular: 'Portfolio Hero',
        plural: 'Portfolio Heroes',
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            type: 'upload',
            name: 'media',
            relationTo: 'media',
            label: 'Thumbnail Media',
            hasMany: false,
            required: true,
        },
    ],
};
