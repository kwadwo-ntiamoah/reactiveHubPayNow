import { ROUTE_CONSTANTS } from "@/Core/router/routes";
import { TransactionModel } from "@/Data/model/transaction.model";
import { CompleteTransactionEntity } from "@/Domain/entity/_createTransaction.entity";
import { AppDispatch, RootState } from "@/Presentation/store";
import { completeTransactionAsync } from "@/Presentation/store/transaction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useOtp = () => {
  const { id } = useParams();
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { status, transaction } = useSelector(
    (state: RootState) => state.transaction
  );
  const navigate = useNavigate();

  useEffect(() => {
    status === "succeeded" && _onSuccess();
    status === "failed" && _onError();
  }, [status]);

  const _onSuccess = () => {
    var data: any = transaction
    var tempTransaction = TransactionModel.fromJson(data["transaction"]);
    
    console.log(tempTransaction)

    if (tempTransaction.redirectUrl != null) {
      window.location.href = tempTransaction.redirectUrl;

      return false;
    } else {
      navigate(ROUTE_CONSTANTS.OTP_VERIFIED, { replace: true });
    }
  };

  const _onError = () => {
    navigate(ROUTE_CONSTANTS.OTP_INVALID, { replace: true });
  };

  const completeTransaction = async (e: any) => {
    e.preventDefault();

    if (id != null && otp != "") {
      const payload = new CompleteTransactionEntity(id, otp);

      dispatch(completeTransactionAsync(payload));
    }
  };

  return { otp, status, setOtp, completeTransaction };
};

export default useOtp;
