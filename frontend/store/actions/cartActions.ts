import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AddToCartPayload {
  userId: number;
  productId: number;
}

interface RemoveFromCartPayload {
  userId: number;
  productId: number;
}

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (payloadData: AddToCartPayload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/cart",
        payloadData
      );
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (payloadData: RemoveFromCartPayload, { rejectWithValue }) => {
    try {
      const res = await axios.delete("http://localhost:8000/api/cart", {
        data: payloadData,
      });
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (userId: number, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/cart`, {
        data: { userId },
      });
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
