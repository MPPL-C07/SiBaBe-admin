import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Logo from '~/svg/pancake.svg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='layout min-h-main my-6 flex flex-row items-center'>
          <div className=''>
            <p className='text-base font-semibold'>Halo, Selamat Datang!</p>
            <h1 className='pt-3 text-5xl font-extrabold leading-tight'>
              Admin Fakhri
            </h1>
            <p className='pt-4 text-xl font-bold'>Bagaimana kabarmu saat ini?</p>
            <p>Mari buat perubahan demi masa depan toko lebih baik :D</p>
            <div className='flex gap-4 pt-6'>
              {/* <ButtonLink href='' className='rounded-2xl bg-brown py-4 px-20'>
                Daftar
              </ButtonLink>
              <ButtonLink
                href=''
                variant='outline'
                className='rounded-2xl py-4 px-20'
              >
                Login
              </ButtonLink> */}
            </div>
          </div>
          <Logo className='h-full w-5/12' />
        </div>
      </main>
    </Layout>
  );
}
