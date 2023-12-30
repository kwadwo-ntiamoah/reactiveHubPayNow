import { MerchantModel } from "@/Data/model/merchant.model";

export interface IMerchantProps {
    merchants: MerchantModel[],
    isLoading?: boolean
}