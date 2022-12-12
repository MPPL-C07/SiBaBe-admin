import * as React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import withAuth from '@/components/hoc/withAuth';
import Layout from '@/components/layout/Layout';
import OrdersRow from '@/components/OrdersRow';
import Seo from '@/components/Seo';
import Separator from '@/components/Separator';

import { fetchOrders } from '@/redux/actions/Orders';

export default withAuth(OrdersPage, 'all');
function OrdersPage() {
  const { orders } = useAppSelector(({ orders }) => orders);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='layout min-h-main mb-12 flex flex-col'>
          <p className='text-xl font-bold'>Daftar Pemesanan</p>
          <Separator
            width='100%'
            height={2}
            color='#D6AD60BF'
            className='mt-8'
          />
          {orders &&
            orders.map((orders) => (
              <OrdersRow key={orders.orderId} orders={orders} />
            ))}
        </div>
      </main>
    </Layout>
  );
}
