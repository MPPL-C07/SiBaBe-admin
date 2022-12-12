import { useRouter } from 'next/router';
import * as React from 'react';
import {
  RiCloseFill,
} from 'react-icons/ri';

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

  const dispatch = useAppDispatch()

  const Router = useRouter()

  const handleDelete = () => {
    setOpened(false)
    // console.log('delete' + product.id)
    dispatch(deleteProduct(product.id))
    Router.push("/products");
  }

  return (
    <div className='pb-8 flex flex-row gap-24 overflow-hidden rounded-[50px] bg-gray-400'>
      
      <div className='flex flex-col justify-center items-center'>
      <RiCloseFill
          className='absolute top-7 right-7 cursor-pointer text-2xl'
          onClick={() => setOpened(false)}
        />
      <div className='mx-14 mt-16'>
        <p className='font-secondary text-4xl font-bold text-center'>Apakah Anda ingin menghapus produk {product.name} ?</p>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-3xl' onClick={() => setOpened(false)}> no </button>
        <button className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full absolute right-12 text-3xl' onClick={handleDelete}> yes </button>
        </div>
      </div>
    </div>
  );
}
