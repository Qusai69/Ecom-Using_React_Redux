// features/basketSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import fetchProducts from "../Data"; // Adjust the path as per your project structure

const initialState = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [], // Array of products in the cart
  amount: 0, // Total number of items in the cart
  total: 0, // Total cost of items in the cart
};

const basketSlice = createSlice({
  name: "basket", 
  initialState,
  reducers: {
    increaseAmount: (state, action) => {
        const { name } = action.payload;
        const item = state.products.find((p) => p.title === name);
        if (item) {
          item.amount++;
          state.amount++;
          state.total += item.price;
        } 
        localStorage.setItem("products", JSON.stringify(state.products));
      },
      
      decreaseAmount: (state, action) => {
        const { name } = action.payload;
        const item = state.products.find((p) => p.title === name);
        if (item && item.amount > 1) {
          item.amount--;
          state.amount--;
          state.total -= item.price;
        } else if (item && item.amount === 1) {
          state.products = state.products.filter((p) => p.title !== name);
          state.amount--;
          state.total -= item.price;
        }
        localStorage.setItem("products", JSON.stringify(state.products));
      },
      
    removeItem: (state, action) => {
      const { name } = action.payload;
      const item = state.products.find((p) => p.title === name);
      if (item) {
        state.amount -= item.amount;
        state.total -= item.amount * item.price;
        state.products = state.products.filter((p) => p.title !== name);
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    UpdateTotal: (state) => {
      let { total, amount } = state.products.reduce(
        (acc, product) => {
          const { price, amount } = product;
          acc.total += price * amount;
          acc.amount += amount;
          return acc;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      state.total = total.toFixed(2);
      state.amount = amount;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    clearCart(state) {
      state.products = [];
      localStorage.setItem("products", JSON.stringify(state.products));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const {
  increaseAmount,
  decreaseAmount,
  removeItem,
  UpdateTotal,
  clearCart,
} = basketSlice.actions;

export default basketSlice.reducer;
