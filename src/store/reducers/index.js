import { combineReducers } from '@reduxjs/toolkit';
import userSlice from '../slice/user';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
});
