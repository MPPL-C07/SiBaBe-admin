import { Button, Group, Image, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiImage, FiUpload, FiXCircle } from 'react-icons/fi';

import { useAppDispatch } from '@/hooks/redux';

import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { API_KEY } from '@/pages/api/products';
import { addProduct } from '@/redux/actions/Products';

export default withAuth(NewProduct, 'all');
function NewProduct() {
  //useRef
  const nameRef = React.useRef<HTMLInputElement>(null);
  const priceRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLInputElement>(null);
  const stockRef = React.useRef<HTMLInputElement>(null);

  const [files, setFiles] = React.useState<FileWithPath[]>([]);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();
  const Router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <main>
        <div className='layout min-h-main mb-12 flex flex-col'>
          <p className='text-xl font-bold'>Tambah Produk Baru</p>
          <div className='mb-8 gap-24 overflow-hidden rounded-[50px] border-solid p-0'>
            <div>
              <div className='ml-14 mt-7'>
                <Dropzone
                  onDrop={setFiles}
                  // onReject={(files) => console.log('rejected files', files)}
                  maxSize={25 * 1024 * 1024}
                  accept={IMAGE_MIME_TYPE}
                  multiple={false}
                  styles={{
                    root: { backgroundColor: 'transparent' },
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
                <form className='flex flex-col' onSubmit={handleSubmit}>
                  <label>Nama</label>
                  <input
                    className='my-5 max-w-4xl rounded-[50px]'
                    type='text'
                    ref={nameRef}
                  />
                  <label>Harga</label>
                  <input
                    className='my-5 max-w-4xl rounded-[50px]'
                    type='number'
                    ref={priceRef}
                  />
                  <label>Deskripsi</label>
                  <input
                    className='my-5 max-w-4xl rounded-[50px]'
                    type='text'
                    ref={descriptionRef}
                  />
                  <label>Stock</label>
                  <input
                    className='my-5 max-w-4xl rounded-[50px]'
                    type='number'
                    ref={stockRef}
                  />
                  <Button
                    className='my-5 max-w-xs rounded-[50px] bg-brown text-2xl'
                    type='submit'
                    value='Simpan'
                  >
                    Simpan
                  </Button>
                  <Button
                    className='my-5 max-w-xs rounded-[50px] bg-brown text-2xl'
                    onClick={() => Router.back()}
                  >
                    Kembali
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
