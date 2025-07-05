import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { ConfigureStoreOptions, combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { appName } from '@/config';
import { api } from '@/services/core/api';

import { errorMiddleware } from './errorMiddleware';
import errorReducer from './errorSlice';
import initialReducer from './initialSlice';

const rootPersistConfig = {
  key: appName,
  storage,
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  select: persistReducer(rootPersistConfig, initialReducer),
  apiError: errorReducer,
});

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(api.middleware)
        .concat(errorMiddleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
