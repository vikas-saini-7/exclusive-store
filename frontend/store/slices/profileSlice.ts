import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserProfile } from "../actions/profileActions";

interface Profile {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  token: string;
}

interface ProfileState {
  user: Profile | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  user: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default profileSlice.reducer;
