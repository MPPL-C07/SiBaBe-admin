import * as React from 'react';

// type ProductionRowProps = {
//   orders: Orders;
// };

export default function ProductionRow() {
  return (
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
  );
}
