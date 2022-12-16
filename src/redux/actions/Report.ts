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
  (date: string, name: string, totalPrice: number, image: string) =>
  (dispatch: AppDispatch) => {
    dispatch({
      url: '/production',
      method: 'POST',
      meta: { date, name, totalPrice, image },
      actionStart: 'ADD_PRODUCTION',
      actionSuccess: 'ADD_PRODUCTION_SUCCESS',
      actionError: 'ADD_PRODUCTION_ERROR',
      type: 'API',
      data: {
        date,
        name,
        totalPrice,
        image,
      },
    });
  };
