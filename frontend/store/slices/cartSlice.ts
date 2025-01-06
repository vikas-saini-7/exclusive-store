import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addToCart, getCart, removeFromCart } from "../actions/cartActions";
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

// interface CartItem {
//   id: number;
//   cartId: number;
//   productId: number;
//   quantity: number;
//   createdAt: string;
//   product: Product;
// }

// interface CartItems {
//   [key: string]: CartItem;
// }

interface CartState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  products: [],
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
        state.products.unshift(action.payload.product);
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
          state.products = state.products.filter(
            (product) => product.id !== action.payload.productId
          );
        }
      )
      .addCase(removeFromCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get cart
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.products = action.payload.items;
      })
      .addCase(getCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
