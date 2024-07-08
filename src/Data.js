import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Data = createAsyncThunk(
  'basket/fetchProducts',
  async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await axios.get(url);
    return response.data.map(product => ({ ...product, amount: 1 }));
  }
);

export default Data;
