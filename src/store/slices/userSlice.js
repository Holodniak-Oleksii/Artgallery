const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    setUser(state, action) {},
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
