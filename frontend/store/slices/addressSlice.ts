import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addAddress,
  deleteAddress,
  fetchAddresses,
} from "../actions/addressActions";
import { toast } from "sonner";

export interface Address {
  id: number;
  userId: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
  phone: string;
  email: string;
}

interface AddressState {
  addresses: Address[];
  defaultAddress: Address | null;
  loading: boolean;
  error: string | null;
}

const initialState: AddressState = {
  addresses: [],
  defaultAddress: null,
  loading: false,
  error: null,
};

// Slice
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Addresses
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAddresses.fulfilled,
        (state, action: PayloadAction<Address[]>) => {
          state.addresses = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch addresses";
      })

      // Add Address
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addAddress.fulfilled,
        (state, action: PayloadAction<Address>) => {
          state.addresses.unshift(action.payload);
          state.loading = false;
          toast.success("Address saved successfully");
        }
      )
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        toast.error("Failed to save address");
      })

      //   // update address
      //   .addCase(
      //     updateAddress.fulfilled,
      //     (state, action: PayloadAction<Address>) => {
      //       const index = state.addresses.findIndex(
      //         (addr) => addr.id === action.payload.id
      //       );
      //       if (index !== -1) {
      //         state.addresses[index] = action.payload;
      //       }
      //     }
      //   )
      // delete addess
      .addCase(
        deleteAddress.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.addresses = state.addresses.filter(
            (addr) => addr.id !== Number(action.payload)
          );
          toast.success("Address deleted successfully");
        }
      )
      .addCase(deleteAddress.rejected, (state) => {
        toast.error("Failed to delete address");
      });
  },
});

export default addressSlice.reducer;
