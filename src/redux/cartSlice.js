import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalCost: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.id === plant.id);

      if (!existingItem) {
        state.items.push({ 
          ...plant, 
          quantity: 1 
        });
        state.totalQuantity += 1;
        state.totalCost += plant.price;
      }
    },

    // Increase quantity of existing item
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalCost += item.price;
      }
    },

    // Decrease quantity of existing item
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalCost -= item.price;
      }
    },

    // Remove item completely from cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalCost -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    }
  }
});

export const { 
  addToCart, 
  increaseQuantity, 
  decreaseQuantity, 
  removeFromCart 
} = cartSlice.actions;

export default cartSlice.reducer;