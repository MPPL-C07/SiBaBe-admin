import { AxiosError } from 'axios';
import update from 'immutability-helper';
import { AnyAction } from 'redux';

import { Orders } from '@/types';

type OrderState = {
  orders?: Orders[];
  loading: boolean;
  error?: AxiosError;
};

const initialState = {
  loading: false,
} as OrderState;

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
}

export default OrderReducer;