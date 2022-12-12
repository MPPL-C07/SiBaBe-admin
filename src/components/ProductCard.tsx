import * as React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

// import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import NextImage from '@/components/NextImage';

import thousandSeparator from '@/util/thousandSeparator';

import { Product } from '@/types';

type ProductCardProps = {
  product: Product;
  setOpenEditProduct: (opened: boolean) => void;
  setOpenConfirmRemove: (opened: boolean) => void;
  setSelectedProduct: (product: Product | null) => void;
};

export default function ProductCard({
  product,
  setOpenEditProduct,
  setOpenConfirmRemove,
  setSelectedProduct,
}: ProductCardProps) {
  // const { cart } = useAppSelector(({ cart }) => cart);
  // const dispatch = useAppDispatch();

  // const isInCart = (id: string) => {
  //   return !!cart.items[id];
  // };
  return (
    <div
      className='relative h-56 w-64 cursor-pointer overflow-hidden rounded-[30px] bg-grey transition-all duration-200 hover:scale-95'
      onClick={(e) => {
        e.stopPropagation();
        setOpenEditProduct(true);
        setSelectedProduct(product);
      }}
    >
      <NextImage
        useSkeleton
        src={product.image}
        alt={product.name}
        width={250}
        height={150}
        className='w-64'
      />
      <div className='
      absolute top-3 right-3 bg-auto bg-no-repeat bg-center bg-red-300 rounded-full p-1
      transition-all duration-200 hover:text-primary-50'
      onClick={(e) => {
        e.stopPropagation();
        setOpenConfirmRemove(true);
        setSelectedProduct(product);
      }}>
        <FiTrash2/>
      </div>
      <div className='flex h-16 items-center justify-between px-5 py-3'>
        <div className=''>
          <p className='font-secondary text-xs'>{product.name}</p>
          <p className='font-secondary text-base font-extrabold'>
            Rp {thousandSeparator(product.price)}
          </p>
        </div>
          <FiEdit
            className='text-2xl transition-all duration-200 hover:text-primary-50'
            onClick={(e) => {
              e.stopPropagation();
              setOpenEditProduct(true);
              setSelectedProduct(product);
            }}
          />
      </div>
    </div>
  );
}
