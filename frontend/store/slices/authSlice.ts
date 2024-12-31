import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchUserProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../actions/authActions";
import { toast } from "sonner";

interface User {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  token: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    }
  }
  return null;
};

const initialState: AuthState = {
  user: null,
  token: getTokenFromLocalStorage(),
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      toast.success("Logout successful");
    },
  },
  extraReducers: (builder) => {
    builder
      // register
      .addCase(registerUser.pending, (state) => {})
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      })

      // login
      .addCase(loginUser.pending, (state) => {})
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        toast.error("Login failed");
      })

      //   fetchUserProfile
      .addCase(fetchUserProfile.pending, (state) => {})
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isAuthenticated = true;
          state.user = action.payload;
          toast.success("Login successful");
        }
      )
      .addCase(
        fetchUserProfile.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          toast.error(action.payload);
        }
      )

      // update profile
      .addCase(updateProfile.pending, (state) => {})
      .addCase(
        updateProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user = action.payload;
          toast.success("Profile updated successfully");
        }
      )
      .addCase(updateProfile.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        toast.error("Failed to update profile. Try again later!");
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
