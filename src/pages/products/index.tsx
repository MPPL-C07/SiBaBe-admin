import { Modal } from '@mantine/core';
import { useRouter } from 'next/router';
import * as React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import Button from '@/components/buttons/Button';
import ConfirmRemove from '@/components/ConfirmRemove';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import Seo from '@/components/Seo';
import ProductDetail from '@/components/UpdateProduct';

import { getProducts } from '@/redux/actions/Products';

import { Product } from '@/types';

export default withAuth(ProductPage, 'all');
function ProductPage() {
  const { products, loading } = useAppSelector(({ products }) => products);
  const dispatch = useAppDispatch();
  const [openEditProduct, setOpenEditProduct] = React.useState(false);
  const [openConfirmRemove, setOpenConfirmRemove] = React.useState(false);
  const [selectedProduct, setSelectedProduct] =
    React.useState<Product | null>();

  const Router = useRouter();

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <Modal
        opened={openConfirmRemove}
        onClose={() => setOpenConfirmRemove(false)}
        centered
        withCloseButton={false}
        padding={0}
        radius={50}
        size={825}
      >
        {selectedProduct && (
          <ConfirmRemove
            product={selectedProduct}
            setOpened={setOpenConfirmRemove}
          />
        )}
      </Modal>
      <Modal
        opened={openEditProduct}
        onClose={() => setOpenEditProduct(false)}
        centered
        withCloseButton={false}
        padding={0}
        radius={50}
        size={982}
      >
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            setOpened={setOpenEditProduct}
          />
        )}
      </Modal>
      <main>
        <div className='layout flex max-w-none flex-row flex-wrap items-center justify-center gap-12 py-12 font-secondary'>
          {!loading &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setOpenEditProduct={setOpenEditProduct}
                setOpenConfirmRemove={setOpenConfirmRemove}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
        </div>
        <div className='flex items-center justify-center p-10'>
          <Button
            className='rounded-full bg-brown py-5 px-32 font-bold text-white hover:bg-yellow-700 '
            onClick={() => Router.push('/products/new-product')}
          >
            Tambah Produk
          </Button>
        </div>
      </main>
    </Layout>
  );
}
