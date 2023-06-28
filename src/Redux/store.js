import { configureStore } from "@reduxjs/toolkit";
import CreateSlice from "./CreateSlice";
import ProductSlice from "./ProductSlice";
import SingleProductslice from "./SingleProductslice";
import UseauthSlice from "./UseauthSlice";

const store = configureStore({
  reducer: {
    cart: CreateSlice,
    products: ProductSlice,
    product: SingleProductslice,
    signup : UseauthSlice
  },
});

export default store;


