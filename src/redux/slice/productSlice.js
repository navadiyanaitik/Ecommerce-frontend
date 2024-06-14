import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.products.push(action.payload);
    },
    resetProducts: () => initialState,
  },
});

export const { getProduct, resetProducts } = productSlice.actions;

export default productSlice.reducer;
