import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/authActions";
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
  isAuthenticated: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const getUserFromLocalStorage = (): User | null => {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch (error) {
    console.error("Failed to parse user from localStorage", error);
    return null;
  }
};

const initialState: AuthState = {
  user: getUserFromLocalStorage(),
  isAuthenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      toast.success("Login successful");
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      toast.success("Logout successful");
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
        // toast.success("Login successful");
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error("Login failed");
      })

      //   register
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
