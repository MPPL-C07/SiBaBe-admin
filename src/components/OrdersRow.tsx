import { useRouter } from 'next/router';
import * as React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

import { useAppDispatch } from '@/hooks/redux';

import Button from '@/components/buttons/Button';
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

  return (
    <div onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
      <div className='flex cursor-pointer justify-between py-8  transition-all duration-200'>
        <div className=''>
          <p className='text-sm'>Order ID</p>
          <p className='font-secondary text-xl font-bold'>{orders.orderId}</p>
        </div>
        <div className=''>
          <p className='font-secondary font-bold'>{orders.status}</p>
          {orders.orderList.map((orders) => (
            <p key={orders.id}>{orders.name}</p>
          ))}
        </div>
        <div className='flex flex-row'>
          <Button
            className='m-2 h-10'
            onClick={() => {
              dispatch(confirmOrder(orders.orderId, 'Terima'));
              Router.push('/orders');
            }}
          >
            <FiCheck className='text-4xl'></FiCheck>
          </Button>
          <Button
            className='m-2 h-10'
            onClick={() => {
              dispatch(confirmOrder(orders.orderId, 'Tolak'));
              Router.push('/orders');
            }}
          >
            <FiX className='text-4xl'></FiX>
          </Button>
          {/* <FiMap className='text-4xl'></FiMap> */}
        </div>
        {/* <div className=''>
          <p className='text-sm'>Pembelian pada</p>
          <p className='font-secondary text-xl font-bold'>{orders.date}</p>
        </div>
        <p className='font-secondary font-bold'>
          Rp {thousandSeparator(orders.total)}
        </p> */}
      </div>
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
