import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const profileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
    resetUserProfile: () => initialState,
  },
});

export const { setUserProfile, resetUserProfile } = profileSlice.actions;
export default profileSlice.reducer;
