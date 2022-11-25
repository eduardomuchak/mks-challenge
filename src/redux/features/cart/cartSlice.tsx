import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApiProduct, CartItem, CartState } from '../../../interfaces';

const initialState = {
  value: {
    isOpen: false,
    cartItems: [] as CartItem[],
  },
} as CartState;
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state: CartState) => {
      state.value.isOpen = true;
    },

    closeCart: (state: CartState) => {
      state.value.isOpen = false;
    },
    addToCart: (state: CartState, action: PayloadAction<ApiProduct>) => {
      const product = action.payload;
      const productAlreadyInCart = state.value.cartItems.find((item) => item.id === product.id);

      if (productAlreadyInCart) {
        productAlreadyInCart.count += 1;
      } else {
        state.value.cartItems.push({ ...product, count: 1 });
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const productAlreadyInCart = state.value.cartItems.find((item) => item.id === product.id);

      if (productAlreadyInCart) {
        productAlreadyInCart.count -= 1;
      } else {
        state.value.cartItems = state.value.cartItems.filter((item) => item.id !== product.id);
      }
    },
    increment: (state: CartState, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const productAlreadyInCart = state.value.cartItems.find((item) => item.id === product.id);

      if (productAlreadyInCart) {
        productAlreadyInCart.count += 1;
      }
    },
    decrement: (state: CartState, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const productAlreadyInCart = state.value.cartItems.find((item) => item.id === product.id);

      if (productAlreadyInCart) {
        if (productAlreadyInCart.count > 1) {
          productAlreadyInCart.count -= 1;
        } else {
          state.value.cartItems = state.value.cartItems.filter((item) => item.id !== product.id);
        }
      }
    },
  },
});

export const cartState = (state: any) => state.cart.value;
export const { openCart, closeCart, addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
