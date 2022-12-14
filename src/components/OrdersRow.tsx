import { Tooltip } from '@mantine/core';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiCheck, FiMap, FiX, FiXSquare } from 'react-icons/fi';

import { useAppDispatch } from '@/hooks/redux';

import Separator from '@/components/Separator';

import { confirmOrder } from '@/redux/actions/Orders';

import { Orders } from '@/types';

type OrdersRowProps = {
  orders: Orders;
};

export default function OrdersRow({ orders }: OrdersRowProps) {
  const dispatch = useAppDispatch();

  const [isHover, setIsHover] = React.useState(false);

  const onMouseOverHandler = () => {
    setIsHover(true);
  };

  const onMouseOutHandler = () => {
    setIsHover(false);
  };

  const Router = useRouter();

  // confirm
  // const confirmOrderHandler = () => {
  //   dispatch(confirmOrder(orders.orderId, 'Terima'));
  //   Router.push('/orders');
  // };

  // tooltip label
  let total = 0;

  const tooltipLabel = () => {
    {
      orders.orderList.map((orders) => (total += orders.totalPrice));
    }
    return (
      <div>
        <p>Total Harga: {total}</p>
        {orders.orderList.map((orders) => (
          <p key={orders.productId}>
            Harga {orders.quantity} {orders.product.name}: Rp{' '}
            {orders.totalPrice}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
      <Tooltip label={tooltipLabel()} color='yellow'>
        <div className='flex cursor-pointer justify-between py-8  transition-all duration-200'>
          <div className=' w-1/5'>
            <p className='text-sm'>Invoice</p>
            <p className='font-secondary text-xl font-bold'>{orders.invoice}</p>
          </div>
          <div className=' w-3/5 text-center'>
            <p className='font-secondary font-bold'>{orders.status}</p>
            {orders.orderList.map((orders) => (
              <p key={orders.product.id}>
                {orders.quantity} {orders.product.name}
              </p>
            ))}
          </div>
          <div className='flex w-1/5 flex-row justify-end'>
            {orders.status === 'Menunggu Validasi' ? (
              <>
                <FiCheck
                  className='m-2 h-10 text-4xl'
                  onClick={() => {
                    dispatch(confirmOrder(orders.orderId, 'Terima'));
                    Router.push('/orders');
                  }}
                ></FiCheck>
                <div
                  style={{
                    height: '60px',
                    border: '1px solid #D6AD60BF',
                  }}
                />
                <FiX
                  className='m-2 h-10 text-4xl'
                  onClick={() => {
                    dispatch(confirmOrder(orders.orderId, 'Tolak'));
                    Router.push('/orders');
                  }}
                ></FiX>
              </>
            ) : orders.status === 'Terima' ? (
              <FiMap className='m-2 text-4xl'></FiMap>
            ) : orders.status === 'Tolak' ? (
              <FiXSquare className='m-2 text-4xl'></FiXSquare>
            ) : null}
          </div>
          {/* <div className=''>
          <p className='text-sm'>Pembelian pada</p>
          <p className='font-secondary text-xl font-bold'>{orders.date}</p>
        </div>
        <p className='font-secondary font-bold'>
          Rp {thousandSeparator(orders.total)}
        </p> */}
        </div>
      </Tooltip>
      <Separator
        height={2}
        color='#D9D9D9BF'
        className={`mx-auto ${
          isHover ? 'w-full' : 'w-[90%]'
        } transition-all duration-300`}
      />
    </div>
  );
}
