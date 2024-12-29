import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  token: string;
}

interface LoginUserPayload {
  email?: string;
  phone?: string;
  password: string;
}

interface RegisterUserPayload {
  name: string;
  email?: string;
  phone?: string;
  password: string;
}

export const loginUser = createAsyncThunk<User, LoginUserPayload>(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        userData
      );
      const data = response.data;
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk<User, RegisterUserPayload>(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        userData
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
