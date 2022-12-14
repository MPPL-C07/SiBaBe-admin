import { useRouter } from 'next/router';
import * as React from 'react';
import { RiCloseFill } from 'react-icons/ri';

import { useAppDispatch } from '@/hooks/redux';

import Button from '@/components/buttons/Button';

import { deleteProduct } from '@/redux/actions/Products';

import { Product } from '@/types';

type ConfirmRemoveProps = {
  product: Product;
  setOpened: (opened: boolean) => void;
};

export default function ConfirmRemove({
  product,
  setOpened,
}: ConfirmRemoveProps) {
  const dispatch = useAppDispatch();

  const Router = useRouter();

  const handleDelete = () => {
    setOpened(false);
    // console.log('delete' + product.id)
    dispatch(deleteProduct(product.id));
    Router.push('/products');
  };

  return (
    <div className='relative flex flex-row items-center justify-center gap-24 overflow-hidden rounded-[50px] bg-grey pb-8'>
      <div className='flex px-32 pt-24'>
        <RiCloseFill
          className='absolute top-7 right-7 cursor-pointer text-2xl'
          onClick={() => setOpened(false)}
        />
        <div className=''>
          <h3 className='mb-32 text-center'>
            Apakah Anda ingin menghapus produk {product.name} ?
          </h3>
          <Button
            className='absolute bottom-0 left-0 flex h-20 w-1/2 justify-center rounded-none bg-green-500 hover:bg-green-600'
            onClick={() => setOpened(false)}
          >
            NO
          </Button>
          <Button className='absolute bottom-0 right-0 flex h-20 w-1/2 justify-center rounded-none bg-red-500 hover:bg-red-600'
          onClick={handleDelete}>
            YES
          </Button>
        </div>
      </div>
    </div>
  );
}
