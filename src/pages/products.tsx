import { Modal } from '@mantine/core';
import * as React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import ConfirmRemove from '@/components/ConfirmRemove';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import ProductDetail from '@/components/ProductDetail';
import Seo from '@/components/Seo';

import { getProducts } from '@/redux/actions/Products';

import { Product } from '@/types';

export default function ProductPage() {
  const { products, loading } = useAppSelector(({ products }) => products);
  const dispatch = useAppDispatch();
  const [opened, setOpened] = React.useState(false);
  const [selectedProduct, setSelectedProduct] =
    React.useState<Product | null>();

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      {/* <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
        padding={0}
        radius={50}
        size={982}
      >
        {selectedProduct && (
          <ConfirmRemove product={selectedProduct} setOpened={setOpened} />
        )}
      </Modal> */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
        padding={0}
        radius={50}
        size={982}
      >
        {selectedProduct && (
          <ProductDetail product={selectedProduct} setOpened={setOpened} />
        )}
      </Modal>
      <main>
        <div className='layout flex max-w-none flex-row flex-wrap items-center justify-center gap-12 py-12 font-secondary'>
          {!loading &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setOpened={setOpened}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
            <div className='p-10'>
              <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full'>Tambah Produk</button>
            </div>
        </div>
      </main>
    </Layout>
  );
}
