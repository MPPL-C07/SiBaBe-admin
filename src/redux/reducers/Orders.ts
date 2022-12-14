import { AxiosError } from 'axios';
import update from 'immutability-helper';
import { AnyAction } from 'redux';

import { Orders } from '@/types';

type OrderState = {
  orders: Orders[];
  loading: boolean;
  error?: AxiosError;
};

const initialState = {
  loading: false,
} as OrderState;

const findIndex = (id: number, orders: Orders[]) => {
  const index = orders.findIndex((order) => order.orderId === id);
  return index;
};

const OrderReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'FETCH_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'FETCH_ORDER_SUCCESS':
      return update(state, {
        orders: { $set: action.payload.data },
        loading: { $set: false },
      });
    case 'FETCH_ORDER_ERROR':
      return update(state, {
        error: { $set: action.payload.error },
        loading: { $set: false },
      });
    case 'CONFIRM_ORDER':
      return update(state, {
        loading: { $set: true },
      });
    case 'CONFIRM_ORDER_SUCCESS':
      return update(state, {
        orders: {
          [findIndex(action.meta.id, state.orders)]: {
            status: { $set: action.payload.data.status},
          },
        },
        loading: { $set: false },
      });
    case 'CONFIRM_ORDER_ERROR':
      return update(state, {
        error: { $set: action.payload.error },
        loading: { $set: false },
      });
    default:
      return state;
  }
};

export default OrderReducer;
