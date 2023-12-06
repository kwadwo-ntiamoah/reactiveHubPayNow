import { GetAllTransactionsEntity } from "@/Domain/entity"
import { inject, injectable } from "tsyringe"
import { API_CONSTANTS, type IHttpClient } from "@/Core/network"
import ApiResponse from "../model/api.model"

export interface ITransactionRepo {
    getAllTransactions: (payload: GetAllTransactionsEntity | null) => Promise<ApiResponse>
}

@injectable()
export class TransactionRepo implements ITransactionRepo {
    constructor(@inject("IHttpClient") private _client: IHttpClient) {}
    
    async getAllTransactions(payload: GetAllTransactionsEntity | null): Promise<ApiResponse> {
        const res = await this._client.get(API_CONSTANTS.ALL_TRANSACTIONS, payload?.toJson());
        return res;
    }

}

export default TransactionRepo