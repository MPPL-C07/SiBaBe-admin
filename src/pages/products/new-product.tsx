import { Group, Image, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import axios from 'axios';
import * as React from 'react';
import { FiImage, FiUpload, FiXCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useAppDispatch } from '@/hooks/redux';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Separator from '@/components/Separator';

import { API_KEY } from '@/pages/api/products';
import { addProduct } from '@/redux/actions/Products';

export default withAuth(NewProduct, 'all');
function NewProduct() {
  //useRef
  const nameRef = React.useRef<HTMLInputElement>(null);
  const priceRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const stockRef = React.useRef<HTMLInputElement>(null);

  const [files, setFiles] = React.useState<FileWithPath[]>([]);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error('Gambar harus diisi');
      return;
    }
    // add product
    if (
      nameRef.current &&
      priceRef.current &&
      descriptionRef.current &&
      stockRef.current
    ) {
      const name = nameRef.current.value;
      const price = priceRef.current.value;
      const description = descriptionRef.current.value;
      const stock = stockRef.current.value;
      const image = await onUpload();
      // console.log(name, price, description, stock, image);
      dispatch(
        addProduct(name, Number(price), description, image, Number(stock))
      );
      // clear
      nameRef.current.value = '';
      priceRef.current.value = '';
      descriptionRef.current.value = '';
      stockRef.current.value = '';
      setFiles([]);
    }
  };

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        alt={file.name}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  const onUpload = () => {
    setLoading(true);
    const instance = axios.create({
      baseURL: 'https://api.imgbb.com/1',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return instance
      .post('/upload', {
        key: API_KEY,
        image: files[0],
      })
      .then((res) => {
        setLoading(false);
        return res.data.data.url as string;
        // if (invoice) {
        // dispatch(confirmPayment(invoice, res.data.data.medium.url));
        // setOpened(false);
        // }
      });
    // .catch((err) => {
    //   setLoading(false);
    //   console.log(err);
    // });
  };

  return (
    <Layout>
      <Seo />
      <main className='bg-white pb-12'>
        <div className='layout min-h-main flex flex-col'>
          <p className='my-14 text-xl font-bold'>Tambah Produk Baru</p>
          <div className='mx-8 space-y-9 overflow-hidden rounded-3xl bg-grey'>
            <div>
              <Dropzone
                onDrop={setFiles}
                // onReject={(files) => console.log('rejected files', files)}
                maxSize={25 * 1024 * 1024}
                accept={IMAGE_MIME_TYPE}
                multiple={false}
                styles={{
                  root: {
                    backgroundColor: 'rgba(217, 217, 217, 0.5)',
                    border: 'none',
                  },
                }}
                loading={loading}
              >
                <div className=' w-40'>{previews}</div>
                <Group
                  position='center'
                  spacing='xl'
                  style={{ minHeight: 220, pointerEvents: 'none' }}
                >
                  <Dropzone.Accept>
                    <FiUpload size={50} className='text-blue-500' />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <FiXCircle size={50} className='text-red-500' />
                  </Dropzone.Reject>
                  <Dropzone.Idle>
                    <FiImage size={50} />
                  </Dropzone.Idle>
                  <div>
                    <Text size='xl' inline>
                      Geser file gambar ke sini atau klik untuk upload
                    </Text>
                    <Text size='sm' color='dimmed' inline mt={7}>
                      File tidak boleh lebih dari 25MB
                    </Text>
                  </div>
                </Group>
              </Dropzone>
              <Separator height={1.5} width='50%' className='mx-auto' />
            </div>
            <form
              className='flex w-full flex-col space-y-2 px-12 pb-12'
              id='form'
              onSubmit={handleSubmit}
            >
              <label className='ml-5'>Nama</label>
              <input
                className='rounded-full border-none px-6'
                type='text'
                ref={nameRef}
                required
                placeholder='Isi nama produk'
              />
              <label className='ml-5'>Harga</label>
              <input
                className='rounded-full border-none px-6'
                type='number'
                ref={priceRef}
                required
                placeholder='Isi harga produk'
              />
              <label className='ml-5'>Stock</label>
              <input
                className='rounded-full border-none px-6'
                type='number'
                ref={stockRef}
                required
                placeholder='Isi stock produk'
              />
              <label className='ml-5'>Deskripsi</label>
              <textarea
                className='rounded-3xl border-none px-6'
                rows={4}
                ref={descriptionRef}
                required
                placeholder='Isi deskripsi produk'
              ></textarea>
            </form>
          </div>
          <div className='mt-9 flex items-center justify-end gap-7'>
            <Button
              className='rounded-3xl py-6 px-10 font-secondary'
              variant='outline'
              type='submit'
              form='form'
            >
              Tambahkan Produk
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
