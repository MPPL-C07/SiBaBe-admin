import update from 'immutability-helper';
import { AnyAction } from 'redux';

import { ApiResponseType, Report } from '@/types';

type ReportState = {
  report?: Report[];
  loading: boolean;
  error?: ApiResponseType;
};

const initialState = {
  loading: false,
} as ReportState;

const ReportReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'GET_MONTHLY_REPORT':
      return update(state, {
        loading: { $set: true },
      });
    case 'GET_MONTHLY_REPORT_SUCCESS':
      return update(state, {
        report: { $set: action.payload.data },
        loading: { $set: false },
      });
    case 'GET_MONTHLY_REPORT_ERROR':
      return update(state, {
        error: { $set: action.error },
        loading: { $set: false },
      });
    default:
      return state;
  }
};

export default ReportReducer;
