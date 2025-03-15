import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import addressReducer from "./slices/addressSlice";

//admin
import adminProductReducer from "./slices/adminProductSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,

    // auth
    auth: authReducer,

    // user
    wishlist: wishlistReducer,
    cart: cartReducer,
    address: addressReducer,

    // admin slices
    adminProducts: adminProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
