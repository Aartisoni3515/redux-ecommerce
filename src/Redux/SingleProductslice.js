// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  loading: false,
  error: null,
};

const SingleProductslice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    getProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductFailure } = SingleProductslice.actions;

export default SingleProductslice.reducer;
