import { createAsyncThunk } from "@reduxjs/toolkit";

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (value: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return value;
    }
)

export const decrementAsync = createAsyncThunk(
    "counter/decrementAsync",
    async (value: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return value;
    }
)