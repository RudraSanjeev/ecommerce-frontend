// addressSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import { AddressEntity } from "../features/Accounts/components/singleAddress/SingleAddress";
const addressSlice = createSlice({
  name: "address",
  initialState: {
    currentAddress: null,
    updateAddress: null,
  },
  reducers: {
    setCurrentAddress: (state, action) => {
      state.currentAddress = action.payload;
    },
    setUpdateAddress: (state, action) => {
      state.updateAddress = action.payload;
    },
    resetAddresses: (state) => {
      state.currentAddress = null;
      state.updateAddress = null;
    },
  },
});

export const { setCurrentAddress, setUpdateAddress, resetAddresses } =
  addressSlice.actions;

export default addressSlice.reducer;
