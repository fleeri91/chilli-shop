import type { CollectionConfig } from 'payload';

export const Seeds: CollectionConfig = {
  slug: 'seeds',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'heatLevel', 'available'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'available',
      type: 'checkbox',
      label: 'Available for purchase',
      defaultValue: true,
    },
    {
      name: 'heatLevel',
      type: 'select',
      options: [
        { label: 'Mild', value: 'mild' },
        { label: 'Medium', value: 'medium' },
        { label: 'Hot', value: 'hot' },
        { label: 'Superhot', value: 'superhot' },
      ],
      required: true,
    },
    {
      name: 'scovilleRating',
      type: 'number',
      label: 'Scoville Heat Units (SHU)',
      required: false,
    },
    {
      name: 'species',
      type: 'select',
      options: [
        'Capsicum Annuum',
        'Capsicum Chinense',
        'Capsicum Frutescens',
        'Capsicum Baccatum',
        'Capsicum Pubescens',
      ],
      required: false,
    },
    {
      name: 'origin',
      type: 'text',
      label: 'Country / Region of Origin',
      required: false,
    },
    {
      name: 'germinationInfo',
      type: 'richText',
      label: 'Germination & Growing Info',
      required: false,
    },
    {
      name: 'stock',
      type: 'number',
      required: false,
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
