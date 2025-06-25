// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/moviesSlice";
import profileReducer from "../features/profileSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    profile: profileReducer,
  },
});
