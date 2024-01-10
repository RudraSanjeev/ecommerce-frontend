import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      fullName: null,
      token: null,
    },
  },

  reducers: {
    updateLogin: (state: any, action) => {
      state.userInfo.fullName = action.payload.fullName;
      state.userInfo.token = action.payload.token;
    },
    removeLogin: (state: any) => {
      state = null;
    },
  },
});

export const { updateLogin, removeLogin } = userSlice.actions;

export default userSlice.reducer;
