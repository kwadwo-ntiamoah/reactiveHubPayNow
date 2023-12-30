import { ROUTE_CONSTANTS } from "@/Core/router/routes";
import { MerchantModel } from "@/Data/model/merchant.model";
import { NetworkType, TransactionType } from "@/Data/model/transaction.model";
import { CreateTransactionEntity } from "@/Domain/entity";
import {
  StorageService,
  StoreKeys,
  TransactionService,
} from "@/Domain/service";
import { AppStatus } from "@/Presentation/common/data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { container } from "tsyringe";

const useMerchPay = () => {
  const storageService = container.resolve(StorageService);
  const transactionService = container.resolve(TransactionService);

  const navigate = useNavigate()

  const [network, setNetwork] = useState<NetworkType>();
  const [error, setError] = useState()
  const [paymentMethod, setPaymentMethod] =
    useState<TransactionType>("mobile_money");
  const [status, setStatus] = useState<AppStatus>("idle");

  useEffect(() => {
    if (status == "succeeded") {
      navigate(ROUTE_CONSTANTS.PAYMENTS_SUCCESS)
    }

    if (status == "failed") {
      navigate(ROUTE_CONSTANTS.PAYMENTS_FAILED)
    }

  }, [status])

  const initiatePayment = async (props: { phone: string; amount: string }) => {
    try {
      setStatus("loading")

      const temp: any = storageService.getData(StoreKeys.MERCH);
      const data: any = JSON.parse(temp);

      var merchant = MerchantModel.fromJson(data["merchant"]);

      const payload = new CreateTransactionEntity(
        props.phone,
        props.amount,
        paymentMethod,
        network!,
        merchant.hubPayId!
      );

      var response = await transactionService.createTransaction(payload);
      
      if (response.statusCode == 200) {
        setStatus("succeeded")
      } else throw response.data.message
    } catch (e: any) {
      setStatus("failed")
      setError(e.toString())
    }
  };

  return {
    network,
    paymentMethod,
    status,
    error,
    setPaymentMethod,
    setNetwork,
    initiatePayment,
  };
};

export default useMerchPay;
