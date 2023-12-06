import ApiResponse from "@/Data/model/api.model";
import type { ITransactionRepo } from "@/Data/repository";
import { inject, injectable } from "tsyringe";
import { GetAllTransactionsEntity } from "../entity";

@injectable()
export class TransactionService {
    constructor(@inject("ITransactionRepo") private _transactionRepo: ITransactionRepo){}

    async getAllTransactions(payload: GetAllTransactionsEntity | null): Promise<ApiResponse> {
        return this._transactionRepo.getAllTransactions(payload)
    }
}