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

interface RemoveCartItemPayload {
  userId: number;
  cartItemId: number;
}

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (data: AddToCartPayload, { rejectWithValue }) => {
    try {
      const { userId, productId } = data;
      const res = await axios.post(`http://localhost:8000/api/cart`, {
        userId,
        productId,
      });
      console.log(res.data.item);
      return res.data.item;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (data: RemoveFromCartPayload, { rejectWithValue }) => {
    try {
      const res = await axios.delete("http://localhost:8000/api/cart", {
        data: data,
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (data: RemoveCartItemPayload, { rejectWithValue }) => {
    try {
      const { userId, cartItemId } = data;
      const res = await axios.delete(
        `http://localhost:8000/api/cart/item/${userId}/${cartItemId}`
      );
      return res.data.cartItemId;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (userId: number, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/cart/${userId}`
      );
      return;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (userId: number, { rejectWithValue }) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/cart/${userId}`);
      return res.data.cart.items;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
