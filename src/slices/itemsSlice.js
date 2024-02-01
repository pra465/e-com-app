import { createSlice } from '@reduxjs/toolkit';
import items from '../items';
const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    itemsData: items.categories,
    cartItems: [],
    searchedItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productArray = items.categories;
      console.log(productArray);
      const allProducts = productArray.reduce((accumulator, category) => {
        return accumulator.concat(category.products);
      }, []);
      const filteredItem = allProducts.find(
        (item) => item.id === action.payload
      );
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      console.log(existingItem);
      if (existingItem === undefined) {
        state.cartItems.push({ ...filteredItem, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
    },
    deleteItem: (state, action) => {
      // items.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    searchItem: (state, action) => {
      state.searchedItem = action.payload;
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      console.log('clicked');
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity -= 1;
      }
    },
  },
});
export const {
  addToCart,
  deleteItem,
  searchItem,
  increaseQuantity,
  decreaseQuantity,
} = itemsSlice.actions;
export default itemsSlice.reducer;
