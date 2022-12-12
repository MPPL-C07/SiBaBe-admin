import { AxiosError } from 'axios';
import update from 'immutability-helper';
import { AnyAction } from 'redux';

import { Product } from '@/types';

type ProductState = {
  products: Product[];
  loading: boolean;
  error?: AxiosError;
};

const initialState = {
  products: [],
  loading: false,
} as ProductState;

const findIndex = (id: number, products: Product[]) => {
  const index = products.findIndex((product) => product.id === id);
  return index;
};

const ProductReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'PRODUCTS_FETCH':
      return update(state, {
        loading: { $set: true },
      });
    case 'PRODUCTS_FETCH_SUCCESS':
      return update(state, {
        products: { $set: action.payload.data },
        loading: { $set: false },
      });
    case 'PRODUCTS_FETCH_ERROR':
      return update(state, {
        loading: { $set: false },
        error: { $set: action.payload.error },
      });
    case 'ADD_PRODUCT':
      return update(state, {
        loading: { $set: true },
      });
    case 'ADD_PRODUCT_SUCCESS':
      return update(state, {
        products: { $push: [action.payload.data] },
        loading: { $set: false },
      });
    case 'ADD_PRODUCT_ERROR':
      return update(state, {
        loading: { $set: false },
        error: { $set: action.payload.error },
      });
    case 'DELETE_PRODUCT':
      return update(state, {
        loading: { $set: true },
      });
    case 'DELETE_PRODUCT_SUCCESS':
      return update(state, {
        products: { $set: state.products.filter((_, i) => i !== findIndex(action.meta.id, state.products)) },
        loading: { $set: false },
      });
    case 'DELETE_PRODUCT_ERROR':
      return update(state, {
        loading: { $set: false },
        error: { $set: action.payload.error },
      });
    case 'UPDATE_PRODUCT':
      return update(state, {
        loading: { $set: true },
      });
    case 'UPDATE_PRODUCT_SUCCESS':
      return update(state, {
        products: { [findIndex(action.meta.id, state.products)]: { $set: action.payload.data } },
        loading: { $set: false },
      });
    case 'UPDATE_PRODUCT_ERROR':
      return update(state, {
        loading: { $set: false },
        error: { $set: action.payload.error },
      });
    default:
      return state;
  }
};

export default ProductReducer;
