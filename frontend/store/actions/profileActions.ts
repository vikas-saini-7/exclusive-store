import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../slices/authSlice";

interface Profile {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  token: string;
}

// Example using fetch API to get Profile profile
export const fetchUserProfile = createAsyncThunk<Profile>(
  "auth/fetchUserProfile",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      // Assuming the user token is stored in localStorage
      const user = localStorage.getItem("user");
      const token = user ? JSON.parse(user).token : null;

      if (!token) {
        throw new Error("User token not found");
      }

      // Make a GET request to the profile endpoint
      const response = await fetch("http://localhost:8000/api/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }

      dispatch(login());

      const userProfile = await response.json();
      return userProfile;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
