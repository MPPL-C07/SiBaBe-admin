import { Group, Image, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import axios from 'axios';
import * as React from 'react';
import { FiImage, FiUpload, FiXCircle } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

import { useAppDispatch } from '@/hooks/redux';

import Button from '@/components/buttons/Button';
import Separator from '@/components/Separator';

import { API_KEY } from '@/pages/api/products';
import { addProduction } from '@/redux/actions/Report';

type AddProductionProps = {
  // product: Product;
  setOpened: (opened: boolean) => void;
};

export default function AddProduction({
  // product,
  setOpened,
}: AddProductionProps) {
  //useRef
  const nameRef = React.useRef<HTMLInputElement>(null);
  const totalPriceRef = React.useRef<HTMLInputElement>(null);
  const dateRef = React.useRef<HTMLInputElement>(null);

  //usestate
  // const [name, setName] = React.useState(product.name);
  // const [price, setPrice] = React.useState(product.price);
  // const [description, setDescription] = React.useState(product.description);
  // const [stock, setStock] = React.useState(product.stock);

  const [files, setFiles] = React.useState<FileWithPath[]>([]);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error('Gambar harus diisi');
      return;
    }

    if (nameRef.current && totalPriceRef.current && dateRef.current) {
      const name = nameRef.current.value;
      const price = totalPriceRef.current.value;
      const date = dateRef.current.value;
      const image = await onUpload();

      dispatch(addProduction(date, name, Number(price), image));

      // clear
      nameRef.current.value = '';
      totalPriceRef.current.value = '';
      dateRef.current.value = '';
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
    <div className='overflow-hidden rounded-[50px] bg-grey'>
      <div className='gap-24 pb-8'>
        <div>
          <RiCloseFill
            className='absolute top-7 right-7 z-10 cursor-pointer text-4xl'
            onClick={() => setOpened(false)}
          />
          {/* <NextImage
          useSkeleton
          src={product.image}
          alt={product.name}
          width={1024}
          height={320}
        /> */}
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
          <div className='ml-14 mt-7'>
            <p className='text-center font-secondary text-2xl'>
              Data Produksi Tambahan
            </p>
            <form className='flex flex-col' id='form' onSubmit={handleSubmit}>
              <label>Tanggal</label>
              <input
                className='my-5 w-max  max-w-4xl rounded-[50px]'
                type='date'
                required
                ref={dateRef}
              />
              <Separator width='30%' height={2} className='mx-auto' />
              <div className='flex flex-row justify-between py-5 pr-10'>
                <div className='flex flex-col'>
                  <label>Nama</label>
                  <input
                    className='my-5 w-96 max-w-4xl rounded-[50px]'
                    type='text'
                    placeholder='Fill the name of additional Product'
                    required
                    ref={nameRef}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Harga</label>
                  <input
                    className='my-5 w-96 max-w-4xl rounded-[50px]'
                    type='text'
                    placeholder='Fill the price of it'
                    required
                    ref={totalPriceRef}
                  />
                </div>
              </div>
              <Button
                className='self-center rounded-full bg-brown py-4 px-24 font-secondary font-bold'
                type='submit'
                form='form'
              >
                Simpan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
