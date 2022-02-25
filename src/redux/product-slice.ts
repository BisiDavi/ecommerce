import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productSpec: "",
    product: null,
    productOption: [],
    isRequiredOptionsSelected: null,
  },
  reducers: {
    updateProduct(state, action: PayloadAction<any>) {
      state.productSpec = action.payload;
    },
    addProduct(state, action: PayloadAction<any>) {
      state.product = action.payload;
    },
    updateProductOption(state, action) {
      state.productOption = action.payload;
    },
    updateRequiredOption(state, action) {
      state.isRequiredOptionsSelected = action.payload;
    },
  },
});

export const {
  updateProduct,
  addProduct,
  updateProductOption,
  updateRequiredOption,
} = productSlice.actions;
export default productSlice.reducer;
