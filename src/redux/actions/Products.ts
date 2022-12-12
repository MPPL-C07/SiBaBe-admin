import { AppDispatch } from '@/redux';

export const getProducts = () => (dispatch: AppDispatch) => {
  dispatch({
    url: '/products',
    method: 'GET',
    actionStart: 'PRODUCTS_FETCH',
    actionSuccess: 'PRODUCTS_FETCH_SUCCESS',
    actionError: 'PRODUCTS_FETCH_ERROR',
    type: 'API',
  });
};

//add product
export const addProduct =
  (
    name: string,
    price: number,
    description: string,
    image: string,
    stock: number
  ) =>
  (dispatch: AppDispatch) => {
    dispatch({
      url: '/products',
      method: 'POST',
      meta: { name, price, description, image, stock },
      actionStart: 'ADD_PRODUCT',
      actionSuccess: 'ADD_PRODUCT_SUCCESS',
      actionError: 'ADD_PRODUCT_ERROR',
      type: 'API',
      data: {
        name,
        price,
        description,
        image,
        stock,
      },
    });
  };

//delete product
export const deleteProduct = (id: number) => (dispatch: AppDispatch) => {
  dispatch({
    url: `/products/${id}`,
    method: 'DELETE',
    meta: { id },
    actionStart: 'DELETE_PRODUCT',
    actionSuccess: 'DELETE_PRODUCT_SUCCESS',
    actionError: 'DELETE_PRODUCT_ERROR',
    type: 'API',
  });
};

//update product
export const updateProduct =
  (
    id: number,
    name: string,
    price: number,
    description: string,
    stock: number
  ) =>
  (dispatch: AppDispatch) => {
    dispatch({
      url: `/products/${id}`,
      method: 'PUT',
      meta: { id, name, price, description, stock },
      actionStart: 'UPDATE_PRODUCT',
      actionSuccess: 'UPDATE_PRODUCT_SUCCESS',
      actionError: 'UPDATE_PRODUCT_ERROR',
      type: 'API',
      data: {
        name,
        price,
        description,
        stock,
      },
    });
  };
