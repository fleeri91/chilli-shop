import { HeroProps } from '@/blocks/Hero';
import type { RequiredDataFromCollectionSlug } from 'payload';

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    title: 'Welcome to Our Site',
    subtitle: 'Explore what we have to offer.',
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    logo: {
      src: '/logo.png',
      alt: 'Site Logo',
    },
    image: {
      src: '/hero.jpg',
      alt: 'Hero Background Image',
    },
    button: {
      href: '/get-started',
      text: 'Get Started',
    },
  } satisfies HeroProps,
  meta: {
    description: 'An open-source website built with Payload and Next.js.',
    title: 'Payload Website Template',
  },
  title: 'Home',
  layout: [],
};
