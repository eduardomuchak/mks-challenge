import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './features/cart/cartSlice';
import { productsApi } from './services/apiSlice';

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});
