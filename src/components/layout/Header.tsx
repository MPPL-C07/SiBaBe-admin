import * as React from 'react';

import { useAppSelector } from '@/hooks/redux';
import useScrollPosition from '@/hooks/useScrollPosition';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import UnderlineLink from '../links/UnderlineLink';

const privateLinks = [
  { href: '/products', label: 'Kelola Produk' },
  { href: '/report', label: 'Laporan Bisnis' },
  { href: '/orders', label: 'Daftar Pemesanan' },
];

export default function Header() {
  const scrollPosition = useScrollPosition();
  const { user } = useAppSelector(({ user }) => user);

  const links = user && privateLinks;

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        scrollPosition > 0 ? 'bg-opacity-100' : 'bg-opacity-0'
      }`}
    >
      <div className='layout flex h-[150px] items-center justify-between'>
        <UnstyledLink
          href='/'
          className='text-xl font-bold hover:text-gray-600 '
        >
          Sahabat Bima
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links &&
              links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnderlineLink href={href} className='hover:text-gray-600'>
                    {label}
                  </UnderlineLink>
                </li>
              ))}
            <ButtonLink
              href={user ? '/auth/logout' : '/auth/login'}
              className='rounded-xl bg-brown py-2 px-4 font-secondary'
            >
              {user ? 'Logout' : 'Login'}
            </ButtonLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
