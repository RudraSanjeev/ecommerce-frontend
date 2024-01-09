import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      fullName: null,
      token: null,
    },
    // pending: false,
    // error: false,
  },

  reducers: {
    // loginStart: (state) => {
    //   state.pending = true;
    // },
    // loginSuccess: (state, action) => {
    //   state.pending = false;
    //   state.userInfo = action.payload;
    // },
    // loginFailure: (state) => {
    //   state.pending = false;
    //   state.error = true;
    // },
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
