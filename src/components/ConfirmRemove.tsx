import * as React from 'react';
import {
  RiCloseFill,
  RiStarSFill,
  RiStarSLine,
  RiUser3Line,
} from 'react-icons/ri';

import NextImage from '@/components/NextImage';
import Separator from '@/components/Separator';

import thousandSeparator from '@/util/thousandSeparator';

import { Product } from '@/types';

type ProductDetailProps = {
  product: Product;
  setOpened: (opened: boolean) => void;
};

export default function ConfirmRemove({
  product,
  setOpened,
}: ProductDetailProps) {
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
        <button className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full absolute right-12 text-3xl' onClick={() => setOpened(false)}> yes </button>
        </div>
      </div>
      {/* <div>
        <NextImage
          useSkeleton
          src={product.image}
          alt={product.name}
          width={482}
          height={320}
        />
        <div className='ml-14 mt-7'>
          <p className='font-secondary text-2xl'>{product.name}</p>
          <p className='font-secondary text-4xl font-bold'>
            Rp {thousandSeparator(product.price)}
          </p>
          <Separator width={400} color='#D6AD60' className='my-8' />
          <p className='font-secondary'>{product.description}</p>
        </div>
      </div>
      <div className='mr-14 mt-16 w-full'>
        <RiCloseFill
          className='absolute top-7 right-7 cursor-pointer text-4xl'
          onClick={() => setOpened(false)}
        />
        <p className='font-secondary'>Rating dan Ulasan</p>
        <Separator width={136} color='#D6AD60' />
        {product.reviews.map((review, i) => (
          <div key={review.id} className='my-7'>
            <div className='mb-4 flex justify-between'>
              <div className='flex items-center gap-3'>
                <RiUser3Line className='text-2xl' />
                <p className='ml-2 font-secondary text-sm'>{review.name}</p>
              </div>
              <div className='flex items-center'>
                {[...Array(review.rating)].map((_, i) => (
                  <RiStarSFill key={i} className='' />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <RiStarSLine key={i} className='' />
                ))}
              </div>
            </div>
            <p className='font-secondary text-xs'>{review.description}</p>
            {i !== product.reviews.length - 1 && (
              <Separator width='100%' color='#B3B3B3' className='my-6' />
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
}
