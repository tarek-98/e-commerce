import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice.js";
import cartSlice from "./slices/cart-slice.js";
import categorySlice from "./slices/category-slice.js";
import menSlice from "./slices/men-slice.js";
import womenSlice from "./slices/women-slice.js";
import elecrtoSlice from "./slices/electronics-slice.js";
import jewelerySlice from "./slices/jewelery-slice.js";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    category: categorySlice,
    mens: menSlice,
    womens: womenSlice,
    jewelery: jewelerySlice,
    electronics: elecrtoSlice,
  },
});
