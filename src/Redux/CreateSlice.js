import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  itemInCart: [],
  quantity: 0,
  totalAmount: 0,

  reducers: {
    // add(state, action) {
    //   state.push(action.payload);
    // },

    add: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        // state.push({ ...action.payload, quantity: 1 });
        state.push({ ...action.payload, quantity: 1 });
      }
      //  localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
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

    



    

    // getTotal(state) {
    //   let { total, quantity } = state.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, cartQuantity } = cartItem;
    //       const itemTotal = price * cartQuantity;
    //       cartTotal.total += itemTotal;
    //       cartTotal.quantity += cartQuantity;
    //       return cartTotal;
    //     },
    //     {
    //       total: 0,
    //       quantity: 0,
    //     }
    //   );
    //   state.quantity = quantity;
    //   state.totalAmount = total;
    // },
  },
});

export const { add, Remove, increase, decrease, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
