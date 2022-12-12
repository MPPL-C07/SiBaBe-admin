import { AppDispatch } from '@/redux';

// fetch orders
export const fetchOrders = () => (dispatch: AppDispatch) => {
  dispatch({
    url: '/orders',
    method: 'GET',
    actionStart: 'FETCH_ORDER',
    actionSuccess: 'FETCH_ORDER_SUCCESS',
    actionError: 'FETCH_ORDER_ERROR',
    type: 'API',
  });
};

// confirm order by id
export const confirmOrder =
  (id: number, status: string) => (dispatch: AppDispatch) => {
    dispatch({
      url: `/orders/${id}`,
      method: 'POST',
      meta: { id, status },
      actionStart: 'CONFIRM_ORDER',
      actionSuccess: 'CONFIRM_ORDER_SUCCESS',
      actionError: 'CONFIRM_ORDER_ERROR',
      type: 'API',
      data: {
        status,
      },
    });
  };
