import ApiResponse from "@/Data/model/api.model";
import type { IMerchantRepo } from "@/Data/repository";
import { inject, injectable } from "tsyringe";
import { GetAllItemsEntity } from "../entity";

@injectable()
export class MerchantService {
    constructor(@inject("IMerchantRepo") private _merchantRepo: IMerchantRepo){}

    async getMerchant(merchantId: string): Promise<ApiResponse> {
        return this._merchantRepo.getMerchant(merchantId)
    }

    async getAllMerchants(payload?: GetAllItemsEntity): Promise<ApiResponse> {
        return this._merchantRepo.getAllMerchants(payload)
    }
}