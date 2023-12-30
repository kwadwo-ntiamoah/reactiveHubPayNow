import { GetAllItemsEntity } from "@/Domain/entity";
import { CompleteTransactionEntity } from "@/Domain/entity/_createTransaction.entity";
import { TransactionService } from "@/Domain/service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { container } from "tsyringe";

export const getAllTransactionsAsync = createAsyncThunk(
    "transaction/getAllTransactionsAsync",
    async(payload: GetAllItemsEntity | null): Promise<string> => {
        const transactionService = container.resolve(TransactionService)
        const response = await transactionService.getAllTransactions(payload)

        if (response.statusCode == 200) {
            return response.data
        }

        throw response.data.message
    }
)

export const completeTransactionAsync = createAsyncThunk(
    "transaction/completeTransactionAsync",
    async(payload: CompleteTransactionEntity): Promise<string> => {
        const transactionService = container.resolve(TransactionService)
        const response = await transactionService.completeTransaction(payload)

        if (response.statusCode == 200) {
            return response.data
        }

        throw response.data.message
    }
)