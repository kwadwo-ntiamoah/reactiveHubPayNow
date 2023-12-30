import { inject, injectable } from "tsyringe";
import ApiResponse from "../model/api.model";
import { API_CONSTANTS, type IHttpClient } from "@/Core/network";
import { GetAllItemsEntity } from "@/Domain/entity";

export interface IMerchantRepo {
    getAllMerchants:(payload?: GetAllItemsEntity) => Promise<ApiResponse>
    getMerchant: (merchantId: string) => Promise<ApiResponse>
}

@injectable()
export class MerchantRepo implements IMerchantRepo {
    constructor(@inject("IHttpClient") private _client: IHttpClient) {}

    async getAllMerchants(payload?: GetAllItemsEntity): Promise<ApiResponse> {
        const res = await this._client.get(API_CONSTANTS.MERCHANTS, payload?.toJson());
        return res
    }

    async  getMerchant(merchantId: string): Promise<ApiResponse> {
        const res = await this._client.get(API_CONSTANTS.MERCHANTS + "/" + merchantId,);
        return res;
    }
}