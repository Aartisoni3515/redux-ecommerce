import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  status: "running",
};
const ProductSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "running";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

 export const {fetchProducts} = ProductSlice.actions;
// export const { fetchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = data.json();
  return result;
});
