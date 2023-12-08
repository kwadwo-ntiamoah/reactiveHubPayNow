import { GetAllTransactionsEntity } from "@/Domain/entity";
import { TransactionService } from "@/Domain/service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { container } from "tsyringe";

export const getAllTransactionsAsync = createAsyncThunk(
    "transaction/getAllTransactionsAsync",
    async(payload: GetAllTransactionsEntity | null): Promise<string> => {
        const transactionService = container.resolve(TransactionService)
        const response = await transactionService.getAllTransactions(payload)

        if (response.statusCode == 200) {
            return response.data
        }

        console.log("sorry")
        throw response.data.message
    }
)