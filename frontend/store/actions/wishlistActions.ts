import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface GetWishlistPayload {
  userId: number;
}

interface AddItemPayload {
  userId: number;
  productId: number;
}

interface RemoveItemPayload {
  userId: number;
  productId: number;
}

export const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/wishlist/${userId}`
      );
      const productIds = response.data.items.map((item: any) => item.productId);
      return { productIds, items: response.data.items };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItemToWishlist",
  async (data: AddItemPayload, { rejectWithValue }) => {
    try {
      const { userId, productId } = data;
      const response = await axios.post(`http://localhost:8000/api/wishlist`, {
        userId,
        productId,
      });
      return response.data.product;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeItemFromWishlist = createAsyncThunk(
  "wishlist/removeItemFromWishlist",
  async (data: RemoveItemPayload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/wishlist/${data.userId}/${data.productId}`
      );
      return parseInt(response.data.productId);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
