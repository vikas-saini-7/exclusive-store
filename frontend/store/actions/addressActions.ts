import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface AddAddressPayload {
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

interface DeleteAddressPayload {
  userId: number;
  addressId: number;
}

export const fetchAddresses = createAsyncThunk(
  "address/fetchAddresses",
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/address/user/${userId}`
      );
      return response.data.addresses;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (data: AddAddressPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/address`,
        data
      );
      console.log(response.data.address);
      return response.data.address;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressId: number, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/address/${addressId}`
      );
      console.log(response.data.addressId);
      return response.data.addressId;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
