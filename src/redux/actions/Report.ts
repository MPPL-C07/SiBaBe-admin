import { AppDispatch } from '@/redux';

export const getMonthlyReport = () => (dispatch: AppDispatch) => {
  dispatch({
    url: '/report/monthly',
    method: 'GET',
    actionStart: 'GET_MONTHLY_REPORT',
    actionSuccess: 'GET_MONTHLY_REPORT_SUCCESS',
    actionError: 'GET_MONTHLY_REPORT_ERROR',
    type: 'API',
  });
};

// add production
export const addProduction =
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
