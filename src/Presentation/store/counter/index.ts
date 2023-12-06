import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { decrementAsync, incrementAsync } from "./_actions";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(incrementAsync.pending, () => {
            console.log("incrementAsync pending")
        })
        .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload
        })

    builder
        .addCase(decrementAsync.pending, () => {
            console.log("decrementAsync pending")
        })
        .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        })
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export * from "./_actions"

export default counterSlice.reducer;
