// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice"; // We'll create this next

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
