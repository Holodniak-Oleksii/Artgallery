import { createSlice } from '@reduxjs/toolkit';

const stageName = 'ART_GALLERY_ACCESS_TOKEN';

const initialState = {
  token:
    typeof window !== 'undefined' && localStorage.getItem(stageName)
      ? localStorage.getItem(stageName)
      : null,
  isAuth: false,
  userID: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      localStorage.setItem(stageName, action.payload.token);
      state.token = action.payload?.token || null;
      state.userID = action.payload?.userID || null;
      state.isAuth = action.payload?.isAuth || false;
      state.isLoading = false;
    },
    logoutUser: (state) => {
      state.token = null;
      state.userID = null;
      state.isAuth = false;
      localStorage.removeItem(stageName);
    },
  },
});

export default userSlice;
