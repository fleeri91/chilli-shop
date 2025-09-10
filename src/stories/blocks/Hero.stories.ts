import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Hero } from '@/blocks/Hero';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Hero',
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigation: [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ],
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle:
      'Morbi non nisl ipsum. Nullam enim turpis, varius id est quis, iaculis posuere lectus. Nulla eget hendrerit massa, id varius odio. Vivamus elementum a augue vitae dapibus.',
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500',
      alt: 'logo',
    },
    image: {
      src: 'https://t4.ftcdn.net/jpg/14/26/35/31/360_F_1426353197_V4U5xA4CpQHoeHWhPbynnUO56X04fWgZ.jpg',
      alt: 'image',
    },
    button: {
      href: '#',
      text: 'Get started',
    },
  },
};
