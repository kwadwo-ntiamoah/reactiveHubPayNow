import { AppStatus } from "@/Presentation/common/data"
import { createSlice } from "@reduxjs/toolkit"
import { completeTransactionAsync, getAllTransactionsAsync } from "./_actions"

interface TransactionState {
    transactions: string | null
    transaction:string | null
    status: AppStatus,
    error?: string
}

const initialState: TransactionState = {
    transactions: null,
    transaction: null,
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

        builder
            .addCase(completeTransactionAsync.pending, (state) => {
                state.status = "loading"
            })
            .addCase(completeTransactionAsync.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.transaction = action.payload
            })
            .addCase(completeTransactionAsync.rejected, (state) => {
                state.status = "failed"
            })
    }
})

export const {} = transactionSlice.actions
export * from "./_actions"

export default transactionSlice.reducer