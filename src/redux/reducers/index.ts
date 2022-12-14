import { AnyAction, combineReducers } from 'redux';

import OrderReducer from '@/redux/reducers/Orders';
import ProductReducer from '@/redux/reducers/Products';
import ReportReducer from '@/redux/reducers/Report';
import UserReducer from '@/redux/reducers/User';

const appReducer = combineReducers({
  products: ProductReducer,
  user: UserReducer,
  orders: OrderReducer,
  report: ReportReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const createRootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default createRootReducer;
