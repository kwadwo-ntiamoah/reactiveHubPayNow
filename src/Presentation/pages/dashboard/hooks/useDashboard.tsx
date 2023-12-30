import TokenModel from "@/Data/model/token.model";
import { StorageService, StoreKeys } from "@/Domain/service";
import { AppDispatch, RootState } from "@/Presentation/store";
import { getMerchantAsync } from "@/Presentation/store/merchant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { container } from "tsyringe";

const useDashboard = () => {
    const storageService = container.resolve(StorageService)

    const dispatch = useDispatch<AppDispatch>();
    const merchStore = useSelector((state: RootState) => state.merchant)
    const { merchant, status } = merchStore

    useEffect(() => {
        getMerchant()
    }, [])

    useEffect(() => {
        if (status == "succeeded" || merchant != null) {
            storageService.setData(StoreKeys.MERCH, merchant)
        }
    }, [status, merchant])

    const getMerchant = async () => {
        const temp = storageService.getData(StoreKeys.TOKEN)
        const token = TokenModel.fromJson(temp)

        dispatch(getMerchantAsync(token.user?.merchantId!))
    }

    return null
}

export default useDashboard