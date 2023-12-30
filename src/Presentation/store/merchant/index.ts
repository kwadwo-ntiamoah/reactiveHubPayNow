import { AppStatus } from "@/Presentation/common/data";
import { createSlice } from "@reduxjs/toolkit";
import { getAllMerchantsAsync, getMerchantAsync } from "./_actions";

interface MerchantState {
  merchants: string | null;
  merchant: string | null;
  status: AppStatus;
  error?: string;
}

const initialState: MerchantState = {
  merchants: null,
  merchant: null,
  status: "idle",
  error: undefined,
};

const merchantSlice = createSlice({
  name: "merchants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMerchantsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMerchantsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.merchants = action.payload;
      })
      .addCase(getAllMerchantsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(getMerchantAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMerchantAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.merchant = action.payload;
      })
      .addCase(getMerchantAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = merchantSlice.actions
export * from "./_actions"

export default merchantSlice.reducer