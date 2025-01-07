import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addToCart,
  clearCart,
  getCart,
  removeCartItem,
  removeFromCart,
} from "../actions/cartActions";
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
  createdAt: string;
  updatedAt: string;
}

interface CartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  createdAt: string;
  product: Product;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // add to cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndex >= 0) {
          // Item exists, increment quantity
          state.items[itemIndex].quantity += 1;
        } else {
          // New item, add to cart
          state.items.unshift(action.payload);
        }
        toast.success("Added to cart successfully");
      })
      .addCase(addToCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // remove from cart
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        removeFromCart.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.items = state.items.filter(
            (product) => product.id !== action.payload.productId
          );
        }
      )
      .addCase(removeFromCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get cart
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        removeCartItem.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.items = state.items.filter(
            (item) => item.id !== Number(action.payload)
          );
        }
      )
      .addCase(removeCartItem.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // clear cart
      .addCase(clearCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.items = [];
        toast.success("Cart cleared successfully");
      })
      .addCase(clearCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get cart
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
