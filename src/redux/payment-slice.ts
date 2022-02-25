import { paymentFormType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateType = {
  paymentMethod: null | string;
  country: null | string;
  paymentForm: null | paymentFormType;
  userAddress: any;
  isShippingFormCompleted: boolean;
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentMethod: null,
    country: null,
    userAddress: null,
    paymentForm: null,
    sendProductReview: null,
    submittedOrder: null,
    isShippingFormCompleted: false,
    stage: 1,
    proceedPayment: false,
  },
  reducers: {
    updatePaymentMethod(state: stateType, action: PayloadAction<string>) {
      state.paymentMethod = action.payload;
    },
    updateCountry(
      state: stateType,
      action: PayloadAction<{
        country: string;
      }>
    ) {
      state.country = action.payload.country;
    },
    updateUserAddress(state, action: PayloadAction<any>) {
      state.userAddress = action.payload;
    },
    updatePaymentForm(state: stateType, action) {
      state.paymentForm = action.payload.form;
      state.isShippingFormCompleted = action.payload.completed;
    },
    sendProductReview(state, action) {
      state.sendProductReview = action.payload;
    },
    updateSubmittedOrder(state, action) {
      state.submittedOrder = action.payload;
    },
    resetProductReview(state) {
      state.sendProductReview = null;
    },
    updateFormStage(state, action) {
      state.stage = action.payload;
    },
    updatePaymentStatus(state) {
      state.proceedPayment = !state.proceedPayment;
    },
  },
});

export const {
  updatePaymentMethod,
  updateCountry,
  updatePaymentForm,
  updateUserAddress,
  sendProductReview,
  updateSubmittedOrder,
  resetProductReview,
  updateFormStage,
  updatePaymentStatus,
} = paymentSlice.actions;
export default paymentSlice.reducer;
