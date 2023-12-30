import { GetAllItemsEntity } from "@/Domain/entity"
import { inject, injectable } from "tsyringe"
import { API_CONSTANTS, type IHttpClient } from "@/Core/network"
import ApiResponse from "../model/api.model"
import { CompleteTransactionEntity, CreateTransactionEntity } from "@/Domain/entity/_createTransaction.entity"

export interface ITransactionRepo {
    getAllTransactions: (payload: GetAllItemsEntity | null) => Promise<ApiResponse>
    createTransaction: (payload: CreateTransactionEntity) => Promise<ApiResponse>
    completeTransaction: (payload: CompleteTransactionEntity) => Promise<ApiResponse>
}

@injectable()
export class TransactionRepo implements ITransactionRepo {
    constructor(@inject("IHttpClient") private _client: IHttpClient) {}
    
    async createTransaction(payload: CreateTransactionEntity): Promise<ApiResponse> {
        return await this._client.post(API_CONSTANTS.ALL_TRANSACTIONS, payload.toJson());
    }
    
    async getAllTransactions(payload: GetAllItemsEntity | null): Promise<ApiResponse> {
        return await this._client.get(API_CONSTANTS.ALL_TRANSACTIONS, payload?.toJson());
    }

    async completeTransaction(payload: CompleteTransactionEntity): Promise<ApiResponse> {
        return await this._client.post(API_CONSTANTS.COMPLETE_TRANSACTION, payload.toJson())
    }

}

export default TransactionRepo