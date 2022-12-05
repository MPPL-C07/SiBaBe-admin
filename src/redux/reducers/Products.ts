import update from 'immutability-helper';
import { AnyAction } from 'redux';

import { Product } from '@/types';

type ProductState = {
  products: Product[];
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
};

const initialState = {
  products: [],
  loading: false,
} as ProductState;

const ProductReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'PRODUCTS_FETCH':
      return update(state, {
        loading: { $set: true },
      });
    case 'PRODUCTS_FETCH_SUCCESS':
      return update(state, {
        products: { $set: action.payload },
        loading: { $set: false },
      });
    case 'PRODUCTS_FETCH_ERROR':
      return update(state, {
        loading: { $set: false },
      });
    case 'PRODUCTS_REMOVE_ITEM':
      return update(state, {
        products: { $set: state.products.filter((product) => product.id !== action.payload.id) },
      });
    default:
      return state;
  }
};

export default ProductReducer;
