import { AppDispatch, RootState } from "@/Presentation/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPager } from "../../../../Data/global/pager";
import { GetAllTransactionsEntity } from "@/Domain/entity";
import { getAllTransactionsAsync } from "@/Presentation/store/transaction";
import TransactionReponseModel, { TransactionModel } from "@/Data/model/transaction.model";

const useTransaction = () => {
  const dispatch = useDispatch<AppDispatch>();

  const transactionStore = useSelector((state: RootState) => state.transaction);
  const { transactions, status, error } = transactionStore;

  const [pager, _] = useState<IPager>({ page: 1, pageSize: 5 });
  const [transactionsData, setTransactionsData] = useState<TransactionModel[]>()

  const getTransactions = async () => {
    const payload = new GetAllTransactionsEntity(
      pager.page.toString(),
      pager.pageSize.toString()
    );

    dispatch(getAllTransactionsAsync(payload))
  };

  const _onGetTransactionSucccess = () => {
    var transactionResponse = TransactionReponseModel.fromJson(transactions)
    setTransactionsData(transactionResponse.transactions)
  };

  const _onGetTransactionError = () => {
    console.log(error)
  };

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    status == "succeeded" && _onGetTransactionSucccess();
    status == "failed" && _onGetTransactionError();
  }, [status]);

  return { status, transactionsData };
};

export default useTransaction;
