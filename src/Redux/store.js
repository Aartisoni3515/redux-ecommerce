import { configureStore } from "@reduxjs/toolkit";
import CreateSlice from "./CreateSlice"
import ProductSlice from "./ProductSlice";
import SingleProductslice from "./SingleProductslice";

const store = configureStore({
  reducer: {
    cart: CreateSlice,
    products : ProductSlice,
    product : SingleProductslice

  },
});

export default store;


// src/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { reducer as productReducer } from './productSlice';

// const store = configureStore({
//   reducer: {
//     product: productReducer,
//   },
// });

// export default store;
