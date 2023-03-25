import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });
export const store = makeStore();
