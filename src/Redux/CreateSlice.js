import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  itemInCart: [],
  quantity: 0,
  total: 0,

  reducers: {
    // add(state, action) {
    //   state.push(action.payload);
    // },

    add: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    increase: (state, action) => {
      const itemInCart = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return itemInCart;
    },

    decrease: (state, action) => {
      const itemInCart = state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return itemInCart;
    },

    Remove(state, action) {
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    },

    // total(item , state) {
    //   const cart = () => state.cart;
    //   const total = state.reduce(
    //     (total, item) => total + item.price + item.quantity,
    //     0
    //   );
    //   return total;
    // },


  

  },
});

export const { add, Remove, increase, decrease, total } = cartSlice.actions;
export default cartSlice.reducer;
