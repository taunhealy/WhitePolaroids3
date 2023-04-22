import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';

// define the collection type

export type Type = {
  title: string
  description: string
  featuredMedia: MediaType
}

// define the collection config

const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    }
    {
      name: 'images',
      label: 'Images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    }
  ],
  },


