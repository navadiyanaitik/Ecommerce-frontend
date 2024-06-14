import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state, action) => {
      let _id = action.payload;
      state.user = state.user.filter((item) => item._id !== _id);
    },
    updateUser: (state, action) => {
      let { id, role } = action.payload;
      state.user = state.user.map((item) =>
        item._id === id ? { ...item, role } : item
      );
    },
    resetUsers: () => initialState,
  },
});

export const { getUsers, deleteUser, updateUser, resetUsers } =
  userSlice.actions;
export default userSlice.reducer;
