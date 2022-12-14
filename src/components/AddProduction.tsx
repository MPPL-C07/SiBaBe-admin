import { Group, Image, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
// import axios from 'axios';
import * as React from 'react';
import { FiImage, FiUpload, FiXCircle } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';

import Button from '@/components/buttons/Button';
import Separator from '@/components/Separator';

// import { API_KEY } from '@/pages/api/products';

type ProductDetailProps = {
  // product: Product;
  setOpened: (opened: boolean) => void;
};

export default function AddProduction({
  // product,
  setOpened,
}: ProductDetailProps) {
  //usestate
  // const [name, setName] = React.useState(product.name);
  // const [price, setPrice] = React.useState(product.price);
  // const [description, setDescription] = React.useState(product.description);
  // const [stock, setStock] = React.useState(product.stock);

  const [files, setFiles] = React.useState<FileWithPath[]>([]);
  const [loading, _setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // add product

    // console.log(name, price, description, stock);
    // dispatch(
    //   updateProduct(product.id, name, Number(price), description, Number(stock))
    // );
    // setOpened(false);
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

  // const onUpload = () => {
  //   setLoading(true);
  //   const instance = axios.create({
  //     baseURL: 'https://api.imgbb.com/1',
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  //   return instance
  //     .post('/upload', {
  //       key: API_KEY,
  //       image: files[0],
  //     })
  //     .then((res) => {
  //       setLoading(false);
  //       return res.data.data.url as string;
  //       // if (invoice) {
  //       // dispatch(confirmPayment(invoice, res.data.data.medium.url));
  //       // setOpened(false);
  //       // }
  //     });
  //   // .catch((err) => {
  //   //   setLoading(false);
  //   //   console.log(err);
  //   // });
  // };

  // add production row
  // const [productionRows, setProductionRows] = React.useState<ProductionRow[]>([
  //   {
  //     id: 1,
  //     name: 'Produksi 1',
  //     price: 10000,
  //     stock: 10,
  //   },
  //   {
  //     id: 2,
  //     name: 'Produksi 2',
  //     price: 10000,
  //     stock: 10,
  //   },

  // add production row component
  // const addProductionRow = () => {
  //   const newProductionRow = {
  //     id: productionRows.length + 1,
  //     name: '',
  //     price: 0,
  //     stock: 0,
  //   };

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
            <Separator height={1.5} width='50%' className='mx-auto' />
          </div>
          <div className='ml-14 mt-7'>
            <p className='text-center font-secondary text-2xl'>
              Data Produksi Tambahan
            </p>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <label>Tanggal</label>
              <input
                className='my-5 w-full  max-w-4xl rounded-[50px]'
                type='date'
              />
              <Separator width='30%' height={2} className='mx-auto' />
              <div className='flex flex-row justify-between py-5 pr-10'>
                <div className='flex flex-col'>
                  <label>Nama</label>
                  <input
                    className='my-5 w-80 max-w-4xl rounded-[50px]'
                    type='text'
                    placeholder='Fill the name of additional Product'
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Kuantitas</label>
                  <input
                    className='my-5 w-52 max-w-4xl rounded-[50px]'
                    type='text'
                    placeholder='Fill the quantity of it'
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Harga</label>
                  <input
                    className='my-5 w-80 max-w-4xl rounded-[50px]'
                    type='text'
                    placeholder='Fill the price of it'
                  />
                </div>
              </div>
              {/* <ProductionRow></ProductionRow> */}
              {/* <label>Harga</label> */}
              {/* <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            /> */}
              {/* <label>Deskripsi</label> */}
              {/* <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            /> */}
              {/* <label>Stock</label> */}
              {/* <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
            /> */}

              <Button
                className='self-center rounded-full bg-brown py-4 px-24 font-secondary font-bold'
                type='submit'
              >
                Simpan
              </Button>
            </form>
            {/* <p className='font-secondary text-4xl font-bold'>
            Rp {thousandSeparator(product.price)}
          </p>
          <Separator width={400} color='#D6AD60' className='my-8' />
          <p className='font-secondary'>{product.description}</p> */}
          </div>
        </div>
        {/* <div className='mr-14 mt-16 w-full'>
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
    </div>
  );
}

// import * as React from 'react';
// import {
//   RiCloseFill,
//   RiStarSFill,
//   RiStarSLine,
//   RiUser3Line,
// } from 'react-icons/ri';

// import NextImage from '@/components/NextImage';
// import Separator from '@/components/Separator';

// import thousandSeparator from '@/util/thousandSeparator';

// import { Product } from '@/types';

// type ProductDetailProps = {
//   product: Product;
//   setOpened: (opened: boolean) => void;
// };

// export default function ProductDetail({
//   product,
//   setOpened,
// }: ProductDetailProps) {
//   return (
//     <div className='overflow-hidden rounded-[50px] bg-grey'>
//       <div className='flex flex-row gap-24 pb-8 '>
//         <div className='flex-1'>
//           <NextImage
//             useSkeleton
//             src={product.image}
//             alt={product.name}
//             width={482}
//             height={320}
//           />
//           <div className='ml-14 mt-7'>
//             <p className='font-secondary text-2xl'>{product.name}</p>
//             <p className='font-secondary text-4xl font-bold'>
//               Rp {thousandSeparator(product.price)}
//             </p>
//             <Separator width={400} color='#D6AD60' className='my-8' />
//             <p className='font-secondary'>{product.description}</p>
//           </div>
//         </div>
//         <div className='mr-14 mt-16 w-full'>
//           <RiCloseFill
//             className='absolute top-7 right-7 cursor-pointer text-4xl'
//             onClick={() => setOpened(false)}
//           />
//           <p className='font-secondary'>Rating dan Ulasan</p>
//           <Separator width={136} color='#D6AD60' />
//           {product.reviews &&
//             product.reviews.map((review, i) => (
//               <div key={i} className='my-7'>
//                 <div className='mb-4 flex justify-between'>
//                   <div className='flex items-center gap-3'>
//                     <RiUser3Line className='text-2xl' />
//                     <p className='ml-2 font-secondary text-sm'>
//                       {review.username}
//                     </p>
//                   </div>
//                   <div className='flex items-center'>
//                     {[...Array(review.rating)].map((_, i) => (
//                       <RiStarSFill key={i} className='' />
//                     ))}
//                     {[...Array(5 - review.rating)].map((_, i) => (
//                       <RiStarSLine key={i} className='' />
//                     ))}
//                   </div>
//                 </div>
//                 <p className='font-secondary text-xs'>{review.feedback}</p>
//                 {i !== product.reviews.length - 1 && (
//                   <Separator width='100%' color='#B3B3B3' className='my-6' />
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }
