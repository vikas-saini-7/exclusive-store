// wishlistSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
//   addItemToWishlist,
//   getWishlist,
//   removeItemFromWishlist,
// } from "./wishlistActions";
import { toast } from "sonner";
import {
  addItemToWishlist,
  getWishlist,
  removeItemFromWishlist,
} from "../actions/wishlistActions";

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
interface WishlistItem {
  id: number;
  productId: number;
  product: Product;
}

interface WishlistState {
  productIds: number[];
  items: WishlistItem[];
  loading: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  productIds: [],
  items: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get wishlist
      .addCase(getWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getWishlist.fulfilled,
        (
          state,
          action: PayloadAction<{ items: WishlistItem[]; productIds: number[] }>
        ) => {
          const { items, productIds } = action.payload;
          state.items = items;
          state.productIds = productIds;
          state.loading = false;
        }
      )
      .addCase(getWishlist.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch wishlist";
        state.loading = false;
        toast.error(state.error);
      })

      // Add item to wishlist
      .addCase(addItemToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addItemToWishlist.fulfilled,
        (state, action: PayloadAction<WishlistItem>) => {
          if (!state.productIds.includes(action.payload.id)) {
            state.items.push(action.payload);
            state.productIds.push(action.payload.id);
          }
          state.loading = false;
          toast.success("Item added to wishlist");
        }
      )
      .addCase(addItemToWishlist.rejected, (state, action) => {
        state.error = action.error.message || "Failed to add item to wishlist";
        state.loading = false;
        toast.error(state.error);
      })

      // Remove item from wishlist
      .addCase(removeItemFromWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removeItemFromWishlist.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.productIds = state.productIds.filter(
            (id) => id !== action.payload
          );

          console.log("before: ", state.items);
          state.items = state.items.filter(
            (item) => item.productId != Number(action.payload)
          );
          console.log("after: ", state.items);
          state.loading = false;
          toast.success("Item removed from wishlist");
        }
      )
      .addCase(removeItemFromWishlist.rejected, (state, action) => {
        state.error =
          action.error.message || "Failed to remove item from wishlist";
        state.loading = false;
        toast.error(state.error);
      });
  },
});

export default wishlistSlice.reducer;
