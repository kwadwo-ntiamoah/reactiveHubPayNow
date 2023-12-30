import { GetAllItemsEntity } from "@/Domain/entity";
import { MerchantService } from "@/Domain/service/_merchant.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { container } from "tsyringe";

export const getAllMerchantsAsync = createAsyncThunk(
    "merchant/getAllMerchantsAsync",
    async(payload?: GetAllItemsEntity): Promise<string> => {
        const merchantService = container.resolve(MerchantService)
        const response = await merchantService.getAllMerchants(payload)

        if (response.statusCode == 200) {
            return response.data
        }

        throw response.data.messasge
    }
)

export const getMerchantAsync = createAsyncThunk(
    "merchant/getMerchantAsync",
    async(merchantId: string): Promise<string> => {
        const merchantService = container.resolve(MerchantService)
        const response = await merchantService.getMerchant(merchantId)

        if (response.statusCode == 200) return response.data

        throw response.data.message
    }
)