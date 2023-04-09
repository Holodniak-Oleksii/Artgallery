import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

const cookieName = 'ART_GALLERY_ACCESS_TOKEN';

const initialState = {
  token:
    getCookie(cookieName, {}) ||
    (typeof window !== 'undefined' && localStorage.getItem(cookieName))
      ? localStorage.getItem(cookieName)
      : null,
  userName: null,
  userID: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(cookieName, action.payload?.token);
      }
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
      localStorage.removeItem(cookieName);
    },
  },
});

export default userSlice;
