import { createSlice } from '@reduxjs/toolkit';

interface CartStateValue {
  isOpen: boolean;
}

interface CartState {
  value: CartStateValue;
}

const initialState = { value: { isOpen: false } } as CartState;
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.value.isOpen = true;
    },

    closeCart: (state: CartState) => {
      state.value = initialState.value;
    },
  },
});

export const cartState = (state: any) => state.cart.value;
export const { openCart, closeCart } = cartSlice.actions;
