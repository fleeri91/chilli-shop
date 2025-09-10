'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { NavItem } from '@/types/Navigation';

export interface HeroProps {
  title: string;
  subtitle: string;
  navigation: NavItem[];
  logo: {
    src: string;
    alt: string;
  };
  image: {
    src: string;
    alt: string;
  };
  button: {
    href: string;
    text: string;
  };
}

export const Hero = ({
  navigation,
  title,
  subtitle,
  logo,
  image,
  button,
}: HeroProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-[780px]'>
      {/** Background */}
      <div aria-hidden='true' className='absolute -z-10 w-full inset-0 blur-sm'>
        <Image
          src={image.src ?? ''}
          alt={image.alt ?? ''}
          fill
          objectFit='cover'
        />
        <div className='absolute bg-black/50 inset-0' />
      </div>

      {/** Navigation */}
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          aria-label='Global'
          className='flex items-center justify-between p-6 lg:px-8'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image
                src={logo.src ?? ''}
                alt={logo.alt ?? ''}
                height={32}
                width={32}
                className='h-8 w-auto'
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(true)}
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200'
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm/6 font-semibold text-white'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a href='#' className='text-sm/6 font-semibold text-white'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>

        {/** Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className='lg:hidden'
        >
          <div className='fixed inset-0 z-50' />
          <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Image
                  src={logo.src ?? ''}
                  alt={logo.alt ?? ''}
                  height={32}
                  width={32}
                  className='h-8 w-auto'
                />
              </a>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(false)}
                className='-m-2.5 rounded-md p-2.5 text-gray-200'
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon aria-hidden='true' className='size-6' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-white/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/** Content */}
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-5xl text-shadow-lg font-semibold tracking-tight text-balance text-white sm:text-7xl'>
              {title}
            </h1>
            <p className='mt-8 text-lg text-shadow-lg font-medium text-pretty text-gray-300 sm:text-xl/8'>
              {subtitle}
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href={'#'}
                className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              >
                {button.text ?? ''}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
