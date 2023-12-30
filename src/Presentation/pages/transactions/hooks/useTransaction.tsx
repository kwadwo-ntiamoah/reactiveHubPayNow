import { AppDispatch, RootState } from "@/Presentation/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllItemsEntity } from "@/Domain/entity";
import { getAllTransactionsAsync } from "@/Presentation/store/transaction";
import TransactionReponseModel, {
  TransactionModel,
} from "@/Data/model/transaction.model";
import { IPager, IPaginationState } from "@/Data/global/pager";

const useTransaction = () => {
  const dispatch = useDispatch<AppDispatch>();

  const transactionStore = useSelector((state: RootState) => state.transaction);
  const { transactions, status, error } = transactionStore;

  const [pager, setPager] = useState<IPager>({ page: 1, pageSize: 5 });
  const [pageState, setPageState] = useState<IPaginationState>({
    hasNext: false,
    hasPrev: false,
  });

  const [transactionsData, setTransactionsData] =
    useState<TransactionModel[]>();

  const getTransactions = async () => {
    const payload = new GetAllItemsEntity(
      pager.page.toString(),
      pager.pageSize.toString()
    );

    dispatch(getAllTransactionsAsync(payload));
  };

  const _onGetTransactionSucccess = () => {
    var transactionResponse = TransactionReponseModel.fromJson(transactions);
    setTransactionsData(transactionResponse.transactions);

    setHasPrev();
    setHasNext(transactionResponse.totalRecords);
  };

  const setHasNext = (totalRecords: string) => {
    var temp = pager.pageSize * pager.page;

    if (temp < parseInt(totalRecords)) {
      setPageState({ ...pageState, hasNext: true });
    } else {
      setPageState({ ...pageState, hasNext: false });
    }
  };

  const setHasPrev = () => {
    if (pager.page > 1) {
      setPageState({ ...pageState, hasPrev: true });
    } else {
      setPageState({ ...pageState, hasPrev: false });
    }
  };

  const _onGetTransactionError = () => {
    alert(error);
  };

  const setNextPage = () => {
    if (pageState.hasNext && status != "loading") {
      setPager({ ...pager, page: pager.page + 1 });
    }
  };

  const setPrevPage = () => {
    if (pageState.hasPrev && status != "loading") {
      setPager({ ...pager, page: pager.page - 1 });
    }
  };

  const setPageSize = (pageSize: number) => {
    setPager({ ...pager, pageSize });
  };

  useEffect(() => {
    getTransactions();
  }, [pager.page]);

  useEffect(() => {
    status == "succeeded" && _onGetTransactionSucccess();
    status == "failed" && _onGetTransactionError();
  }, [status]);

  return {
    status,
    transactionsData,
    pager,
    pageState,
    setPrevPage,
    setNextPage,
    setPageSize,
    getTransactions,
  };
};

export default useTransaction;
