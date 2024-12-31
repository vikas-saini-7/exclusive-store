import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ACTION_SERVER_ACTION } from "next/dist/client/components/router-reducer/router-reducer-types";

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

interface updateUserPayload {
  name: string;
  email?: string;
  phone?: string;
}

// Example using fetch API to get Profile profile
export const fetchUserProfile = createAsyncThunk<User>(
  "auth/fetchUserProfile",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      // Assuming the user token is stored in localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("User token not found");
      }

      // Make a GET request to the profile endpoint
      const response = await axios.get("http://localhost:8000/api/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to fetch user profile");
      }

      const userProfile = response.data;
      return userProfile;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk<User, LoginUserPayload>(
  "auth/loginUser",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        userData
      );
      const data = response.data;
      console.log(data);
      localStorage.setItem("token", data.token);

      // Dispatch the fetchUserProfile action after login
      dispatch(fetchUserProfile());
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

// ###########################
// PROFILE ACTIONS
// ###########################

//update profile with token
export const updateProfile = createAsyncThunk<User, updateUserPayload>(
  "auth/updateProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User token not found");
      }
      const response = await axios.put(
        "http://localhost:8000/api/profile",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
