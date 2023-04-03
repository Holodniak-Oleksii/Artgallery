import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
export const store = makeStore();
