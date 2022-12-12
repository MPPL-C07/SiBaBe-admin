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
