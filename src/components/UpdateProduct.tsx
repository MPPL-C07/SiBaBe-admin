import * as React from 'react';
import { RiCloseFill } from 'react-icons/ri';

import { useAppDispatch } from '@/hooks/redux';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Separator from '@/components/Separator';

import { updateProduct } from '@/redux/actions/Products';

import { Product } from '@/types';

type ProductDetailProps = {
  product: Product;
  setOpened: (opened: boolean) => void;
};

export default function UpdateProduct({
  product,
  setOpened,
}: ProductDetailProps) {
  const dispatch = useAppDispatch();

  //usestate
  const [name, setName] = React.useState(product.name);
  const [price, setPrice] = React.useState(product.price);
  const [description, setDescription] = React.useState(product.description);
  const [stock, setStock] = React.useState(product.stock);

  const handleSubmit = () => {
    // add product
    // console.log(name, price, description, stock);
    dispatch(
      updateProduct(product.id, name, Number(price), description, Number(stock))
    );
    setOpened(false);
  };

  return (
    <div className='overflow-hidden rounded-[50px] bg-grey'>
      <div className='mb-8'>
        <RiCloseFill
          className='absolute top-7 right-7 z-10 cursor-pointer text-4xl'
          onClick={() => setOpened(false)}
        />
        <NextImage
          useSkeleton
          src={product.image}
          alt={product.name}
          width={1024}
          height={320}
          imgClassName='object-none'
        />
        <Separator height={1.5} width='50%' className='mx-auto' />
        <div className='mx-14 my-7 space-y-5 flex flex-col items-center'>
          <h3 className='text-center font-secondary'>Deskripsi Produk</h3>
          <form className='flex flex-col space-y-2 w-full'>
            <label className='ml-5'>Nama</label>
            <input
              className='rounded-full border-none px-6'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className='ml-5'>Harga</label>
            <input
              className='rounded-full border-none px-6'
              type='text'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <label className='ml-5'>Stock</label>
            <input
              className='rounded-full border-none px-6'
              type='text'
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
            />
            <label className='ml-5'>Deskripsi</label>
            <textarea
              className='border-none px-6 rounded-3xl'
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
          <Button
            className='rounded-full bg-brown py-4 px-24 font-secondary font-bold'
            onClick={handleSubmit} 
          >
            Simpan
          </Button>
        </div>
      </div>
    </div>
  );
}
