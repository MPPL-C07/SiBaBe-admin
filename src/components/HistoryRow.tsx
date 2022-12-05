import * as React from 'react';

import Separator from '@/components/Separator';

import thousandSeparator from '@/util/thousandSeparator';

import { History } from '@/types';
import { FiCheck, FiMap, FiX } from 'react-icons/fi';

type HistoryRowProps = {
  history: History;
};

export default function HistoryRow({ history }: HistoryRowProps) {
  const [isHover, setIsHover] = React.useState(false);

  const onMouseOverHandler = () => {
    setIsHover(true);
  };

  const onMouseOutHandler = () => {
    setIsHover(false);
  };

  return (
    <div onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
      <div className='flex cursor-pointer justify-between py-8  transition-all duration-200'>
        <div className=''>
          <p className='text-sm'>User ID</p>
          <p className='font-secondary text-xl font-bold'>{history.id}</p>
        </div>
          <div className=''>
          <p className='font-secondary font-bold'>
            Menunggu Verifikasi
          </p>
          <p>
            2 Original Bima Bread, dll
          </p>
        </div>
        <div className='flex flex-row'>
          <FiCheck className='text-4xl'></FiCheck>
          <FiX className='text-4xl'></FiX>
          <FiMap className='text-4xl'></FiMap>
        </div>
        {/* <div className=''>
          <p className='text-sm'>Pembelian pada</p>
          <p className='font-secondary text-xl font-bold'>{history.date}</p>
        </div>
        <p className='font-secondary font-bold'>
          Rp {thousandSeparator(history.total)}
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
