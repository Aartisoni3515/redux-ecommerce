// signupSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/users/signup",
        userData
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const UseauthSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default UseauthSlice.reducer;
