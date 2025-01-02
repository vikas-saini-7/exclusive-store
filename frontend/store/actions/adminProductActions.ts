import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  sku: string;
  imageUrl: string;
  isActive: boolean;
  categoryId: number;
}

interface CreateProductPayload {
  name: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  sku: string;
  imageUrl: string;
  isActive: boolean;
  categoryId: number;
}

export const getAllProducts = createAsyncThunk(
  "adminProduct/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "adminProduct/createProduct",
  async (product: CreateProductPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/products",
        product
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// update product
export const updateProduct = createAsyncThunk(
  "adminProduct/updateProduct",
  async (product: Product, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/products/${product.id}`,
        product
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// delete product
export const deleteProduct = createAsyncThunk(
  "adminProduct/deleteProduct",
  async (productId: number, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/products/${productId}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
