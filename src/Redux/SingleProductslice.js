import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  status: "running",
};
const SingleProductslice = createSlice({
  name: "product",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "running";
      })
      .addCase(getProduct.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { fetchProducts } = SingleProductslice.actions;
export default SingleProductslice.reducer;

export const getProduct = createAsyncThunk(
  "products/get",
  async (productId) => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const result = data.json();
    console.log(result);
    return result;
  }
);
