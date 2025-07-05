import { AnyAction, Middleware, isAction, isRejectedWithValue } from '@reduxjs/toolkit';

import { error } from './errorSlice';

export const errorMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action) && isAction(action)) {
      dispatch(error((action as AnyAction).payload.data.title));
    }
    return next(action);
  };
