import * as React from 'react';

import { useAppSelector } from '@/hooks/redux';

import Button from '@/components/buttons/Button';
import CartRow from '@/components/CartRow';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Separator from '@/components/Separator';

import thousandSeparator from '@/util/thousandSeparator';

export default function CartPage() {
  const { cart } = useAppSelector(({ cart }) => cart);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='layout min-h-main mb-12 flex flex-col'>
          <p className='text-xl font-bold text-center'>Classification By</p>
          <Separator
            width='100%'
            height={2}
            color='#D6AD60BF'
            className='mt-8'
          />
          <div className='flex flex-row items-center justify-center font-secondary'>
            <button className='m-10'>Year</button>
            <button className='m-10'>Month</button>
          </div>
          {/* <div className='mt-12 mb-8 flex'>
            <div className='w-1/2 pl-6'>Produk</div>
            <div className='w-1/4 text-center'>Kuantitas</div>
            <div className='w-1/4 text-center'>Jumlah</div>
          </div>
          <Separator width='100%' color='#D6AD60BF' />
          {cart &&
            Object.values(cart.items).map((product) => (
              <>
                <CartRow key={product.name} product={product} />
                <Separator width='100%' color='#D6AD60BF' />
              </>
            ))} */}
          <div className='mt-9 flex items-center justify-end gap-7'>
            {/* <div className='text-end'>
              <p className='font-secondary text-sm font-semibold'>
                Total Harga
              </p>
              <p className='font-secondary text-2xl font-bold'>
                Rp {thousandSeparator(cart.total)}
              </p>
            </div> */}
            <div>
              <Button className='rounded-3xl bg-brown py-6 px-14 font-secondary'>
                Tambah Data Produksi
              </Button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
