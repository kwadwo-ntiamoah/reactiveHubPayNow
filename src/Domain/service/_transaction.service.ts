import ApiResponse from "@/Data/model/api.model";
import type { ITransactionRepo } from "@/Data/repository";
import { inject, injectable } from "tsyringe";
import { GetAllItemsEntity, CreateTransactionEntity } from "../entity";
import { CompleteTransactionEntity } from "../entity/_createTransaction.entity";

@injectable()
export class TransactionService {
    constructor(@inject("ITransactionRepo") private _transactionRepo: ITransactionRepo){}

    async createTransaction(payload: CreateTransactionEntity): Promise<ApiResponse> {
        return this._transactionRepo.createTransaction(payload)
    }

    async getAllTransactions(payload: GetAllItemsEntity | null): Promise<ApiResponse> {
        return this._transactionRepo.getAllTransactions(payload)
    }

    async completeTransaction(payload: CompleteTransactionEntity): Promise<ApiResponse> {
        return this._transactionRepo.completeTransaction(payload)
    }
}