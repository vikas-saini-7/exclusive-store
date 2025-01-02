import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";
import adminProductReducer from "./slices/adminProductSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducer,
    // profile: profileReducer,
    adminProducts: adminProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
