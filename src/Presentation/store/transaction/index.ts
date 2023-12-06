import { AppStatus } from "@/Presentation/common/data"
import { createSlice } from "@reduxjs/toolkit"
import { getAllTransactionsAsync } from "./_actions"

interface TransactionState {
    transactions: string | null
    status: AppStatus,
    error?: string
}

const initialState: TransactionState = {
    transactions: null,
    status: "idle",
    error: undefined
}

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTransactionsAsync.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getAllTransactionsAsync.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.transactions = action.payload
            })
            .addCase(getAllTransactionsAsync.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const {} = transactionSlice.actions
export * from "./_actions"

export default transactionSlice.reducer