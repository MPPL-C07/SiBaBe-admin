import type { ChartOptions } from 'chart.js';
import * as React from 'react';
import { LineChart } from 'scylla-ui';

import { useAppDispatch } from '@/hooks/redux';

import Button from '@/components/buttons/Button';
import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Separator from '@/components/Separator';

import { getMonthlyReport } from '@/redux/actions/Report';
import thousandSeparator from '@/util/thousandSeparator';

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agust',
    'Sept',
    'Okto',
    'Nov',
    'Des',
  ],
  datasets: [
    {
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
      backgroundColor: '#D6AD60',
      borderColor: '#D6AD60',
    },
  ],
};

const options: ChartOptions<'line'> = {
  plugins: {
    tooltip: {
      formatLabel: (label) => `Bulan ${label}`,
      formatValue: (value) => `Rp ${thousandSeparator(value)}`,
    },
  },
};

export default withAuth(ReportPage, 'all');
function ReportPage() {
  // const { report } = useAppSelector(({ report }) => report);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getMonthlyReport());
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='layout min-h-main mb-12 flex flex-col space-y-5'>
          <h2 className='text-center font-secondary'>Classification By</h2>
          <Separator width='30%' height={2} className='mx-auto' />
          <div className='mx-auto w-24'>
            <p className='mb-3 text-center font-secondary'>Month</p>
            <Separator width='100%' height={2} className='mx-auto' />
          </div>

          <LineChart id='report' hideBrush data={data} options={options} />
          {/* <div className='mt-12 mb-8 flex'>
            <div className='w-1/2 pl-6'>Produk</div>
            <div className='w-1/4 text-center'>Kuantitas</div>
            <div className='w-1/4 text-center'>Jumlah</div>
          </div>
          <Separator width='100%' color='#D6AD60BF' />
          {cart &&
            Object.values(cart.items).map((product) => (
              <>
                <CartRow key={product.name} product={product} />
                <Separator width='100%' color='#D6AD60BF' />
              </>
            ))} */}
          <div className='mt-9 flex items-center justify-end gap-7'>
            {/* <div className='text-end'>
              <p className='font-secondary text-sm font-semibold'>
                Total Harga
              </p>
              <p className='font-secondary text-2xl font-bold'>
                Rp {thousandSeparator(cart.total)}
              </p>
            </div> */}
            <div>
              <Button
                className='rounded-3xl py-6 px-14 font-secondary'
                variant='outline'
              >
                Tambah Data Produksi
              </Button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

// import { useRouter } from 'next/router';
// import * as React from 'react';

// import { useAppDispatch, useAppSelector } from '@/hooks/redux';

// import Button from '@/components/buttons/Button';
// import CartRow from '@/components/CartRow';
// import withAuth from '@/components/hoc/withAuth';
// import Layout from '@/components/layout/Layout';
// import Seo from '@/components/Seo';
// import Separator from '@/components/Separator';

// import { fetchCart } from '@/redux/actions/Cart';
// import { clearCheckoutMessage } from '@/redux/actions/Checkout';
// import thousandSeparator from '@/util/thousandSeparator';

// export default withAuth(OrderPage, 'all');
// function OrderPage() {
//   const { cart } = useAppSelector(({ cart }) => cart);
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   React.useEffect(() => {
//     dispatch(fetchCart());
//   }, []);

//   return (
//     <Layout>
//       {/* <Seo templateTitle='Home' /> */}
//       <Seo />

//       <main>
//         <div className='layout min-h-main mb-12 flex flex-col'>
//           <p className='text-xl font-bold'>Keranjang</p>
//           <Separator
//             width='100%'
//             height={2}
//             color='#D6AD60BF'
//             className='mt-8'
//           />
//           <div className='mt-12 mb-8 flex'>
//             <div className='w-1/2 pl-6'>Produk</div>
//             <div className='w-1/4 text-center'>Kuantitas</div>
//             <div className='w-1/4 text-center'>Jumlah</div>
//           </div>
//           <Separator width='100%' color='#D6AD60BF' />
//           {cart &&
//             cart.product &&
//             cart.product.map((product) => (
//               <div key={product.productId}>
//                 <CartRow product={product} />
//                 <Separator width='100%' color='#D6AD60BF' />
//               </div>
//             ))}
//           <div className='mt-9 flex items-center justify-end gap-7'>
//             <div className='text-end'>
//               <p className='font-secondary text-sm font-semibold'>
//                 Total Harga
//               </p>
//               <p className='font-secondary text-2xl font-bold'>
//                 Rp {thousandSeparator(cart?.totalPrice || 0)}
//               </p>
//             </div>
//             <div>
//               <Button
//                 className='rounded-3xl bg-brown py-6 px-28 font-secondary'
//                 onClick={() => {
//                   router.push('/order');
//                   dispatch(clearCheckoutMessage());
//                 }}
//               >
//                 BELI
//               </Button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </Layout>
//   );
// }
