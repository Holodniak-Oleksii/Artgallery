import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

const cookieName = 'ART_GALLERY_ACCESS_TOKEN';

const initialState = {
  token: getCookie(cookieName, {}),
  userName: null,
  userID: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      setCookie(cookieName, action.payload?.token, {
        maxAge: 25200,
      });
      state.token = action.payload?.token || null;
      state.userName = action.payload?.userName || null;
      state.userID = action.payload?.userID || null;
    },
    logoutUser: (state) => {
      state.token = null;
      state.userID = null;
      state.userName = null;
      deleteCookie(cookieName);
    },
  },
});

export default userSlice;
