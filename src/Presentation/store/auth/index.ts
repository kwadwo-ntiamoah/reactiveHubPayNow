import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./_actions";
import { AppStatus } from "@/Presentation/common/data";

interface AuthState {
  user: string | null;
  status: AppStatus;
  error?: string;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authResetState: (state) => {
      state.status = "idle"
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        loginAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
            state.status = "succeeded";
            state.user = action.payload
        }
      )
      .addCase(
        loginAsync.rejected,
        (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        }
      )
  },
});

export const { authResetState } = authSlice.actions;
export * from "./_actions";

export default authSlice.reducer;
