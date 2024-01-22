import { createSlice } from '@reduxjs/toolkit';
import items from '../items';
const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    itemsData: items.categories,
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const filteredItem = items.categories[0].products.filter(
        (item) => item.id === action.payload
      );
      state.cartItems.push(...filteredItem);
    },
    deleteItem: (state, action) => {
      // items.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { addToCart, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
