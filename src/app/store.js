
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlistSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer
  }
});

// Save wishlist whenever Redux state changes
store.subscribe(() => {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(store.getState().wishlist)
  );
});
