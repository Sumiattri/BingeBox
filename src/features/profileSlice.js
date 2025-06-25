import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeProfile: [],
  allProfiles: [], // or fetch this from server if needed
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setActiveProfile: (state, action) => {
      state.activeProfile = action.payload;
    },
    clearActiveProfile: (state) => {
      state.activeProfile = null;
    },
    setAllProfiles: (state, action) => {
      state.allProfiles = action.payload;
    },
  },
});

export const { setActiveProfile, clearActiveProfile, setAllProfiles } =
  profileSlice.actions;

export default profileSlice.reducer;
