import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{
        productId: string;
        quantity: number;
        totalPrice: number;
      }>
    ) => {
      const { productId, quantity, totalPrice } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({
          productId,
          quantity,
        });
      }

      state.totalPrice = totalPrice;
    },

    removeItemFromCart: (
      state,
      action: PayloadAction<{
        productId: string;
        quantity: number;
        totalPrice: number;
      }>
    ) => {
      const { productId, quantity, totalPrice } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity -= quantity;

        if (existingItem.quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.productId !== productId
          );
        }
      }

      state.totalPrice = totalPrice;
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },

    updateCart: (
      state,
      action: PayloadAction<{ cartItems: CartItem[]; totalPrice: number }>
    ) => {
      state.cartItems = action.payload.cartItems;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
