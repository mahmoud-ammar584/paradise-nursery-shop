import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Configure Redux store with cart reducer
export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  // Enable Redux DevTools in development
  devTools: process.env.NODE_ENV !== 'production'
});