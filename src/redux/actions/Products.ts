import { AppDispatch } from '@/redux';
import { Product } from '@/types';

export const getProducts = () => (dispatch: AppDispatch) => {
  dispatch({
    url: '/products',
    method: 'GET',
    actionStart: 'PRODUCTS_FETCH',
    actionSuccess: 'PRODUCTS_FETCH_SUCCESS',
    actionError: 'PRODUCTS_FETCH_ERROR',
    type: 'API',
    dataChecker: () => true,
  });
};

export const removeProduct = (product: Product) => (dispatch: AppDispatch) => {
  dispatch({
    type: 'PRODUCTS_REMOVE_ITEM',
    payload: product,
  });
};