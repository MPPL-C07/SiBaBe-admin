import { useRouter } from 'next/router';
import * as React from 'react';
import { RiCloseFill } from 'react-icons/ri';

import { useAppDispatch } from '@/hooks/redux';

import { deleteProduct } from '@/redux/actions/Products';

import { Product } from '@/types';

type ProductDetailProps = {
  product: Product;
  setOpened: (opened: boolean) => void;
};

export default function ConfirmRemove({
  product,
  setOpened,
}: ProductDetailProps) {
  const dispatch = useAppDispatch();

  const Router = useRouter();

  const handleDelete = () => {
    setOpened(false);
    // console.log('delete' + product.id)
    dispatch(deleteProduct(product.id));
    Router.push('/products');
  };

  return (
    <div className='flex flex-row gap-24 overflow-hidden rounded-[50px] bg-gray-400 pb-8'>
      <div className='flex flex-col items-center justify-center'>
        <RiCloseFill
          className='absolute top-7 right-7 cursor-pointer text-2xl'
          onClick={() => setOpened(false)}
        />
        <div className='mx-14 mt-16 '>
          <p className='my-5 text-center font-secondary text-4xl font-bold'>
            Apakah Anda ingin menghapus produk {product.name} ?
          </p>
          <button
            className='rounded-full bg-red-500 py-2 px-4 text-3xl font-bold text-white hover:bg-red-700'
            onClick={() => setOpened(false)}
          >
            {' '}
            no{' '}
          </button>
          <button
            className='absolute right-12 rounded-full bg-emerald-500 py-2 px-4 text-3xl font-bold text-white hover:bg-emerald-700'
            onClick={handleDelete}
          >
            {' '}
            yes{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
