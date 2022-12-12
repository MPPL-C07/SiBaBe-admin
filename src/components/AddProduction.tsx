import * as React from 'react';
import { RiCloseFill } from 'react-icons/ri';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // add product

    // console.log(name, price, description, stock);
    // dispatch(
    //   updateProduct(product.id, name, Number(price), description, Number(stock))
    // );
    // setOpened(false);
  };

  return (
    <div className='mb-8 gap-24 overflow-hidden rounded-[50px]'>
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
        <div className='ml-14 mt-7'>
          <p className='text-center font-secondary text-2xl'>
            Deskripsi Produk
          </p>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label>Nama</label>
            {/* <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> */}
            <label>Harga</label>
            {/* <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            /> */}
            <label>Deskripsi</label>
            {/* <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            /> */}
            <label>Stock</label>
            {/* <input
              className='my-5 max-w-4xl rounded-[50px]'
              type='text'
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
            /> */}
            <input
              className='my-5 max-w-xs rounded-[50px] bg-yellow-500 text-2xl'
              type='submit'
              value='Simpan'
            />
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
