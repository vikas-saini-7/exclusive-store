import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../actions/adminProductActions";
import { toast } from "sonner";

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

interface AdminProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: AdminProductState = {
  products: [],
  loading: false,
  error: null,
};

const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all products
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.loading = false;
        }
      )
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = false;
      })

      // create new poduct
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.unshift(action.payload.product);
        state.loading = false;
        toast.success("Product created successfully.");
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = false;
        toast.error("Error creating product.");
      })

      //   update product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const productId = action.payload.product.id;
        state.products = state.products.map((product) =>
          product.id === productId ? action.payload.product : product
        );
        state.loading = false;
        toast.success("Product updated successfully.");
      })

      // delete product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const productId = action.payload.product.id;
        state.products = state.products.filter(
          (product) => product.id !== productId
        );
        state.loading = false;
        toast.success("Product deleted successfully.");
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = false;
        toast.error("Error deleting product.");
      });
  },
});

export default adminProductSlice.reducer;
