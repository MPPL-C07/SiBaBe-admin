import * as React from 'react';
import { RiCloseFill } from 'react-icons/ri';

import { useAppDispatch } from '@/hooks/redux';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // add product
    // console.log(name, price, description, stock);
    dispatch(
      updateProduct(product.id, name, Number(price), description, Number(stock))
    );
    setOpened(false);
  };

  return (
    <div className='mb-8 gap-24 overflow-hidden rounded-[50px]'>
      <div>
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
        />
        <div className='ml-14 mt-7'>
          <p className='text-center font-secondary text-2xl'>
            Deskripsi Produk
          </p>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label>Nama</label>
            <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Harga</label>
            <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <label>Deskripsi</label>
            <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Stock</label>
            <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
            />
            <Button
              className='my-5 max-w-xs rounded-[50px] bg-yellow-500 text-2xl'
              type='submit'
              value='Simpan'
            >
              Simpan
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
