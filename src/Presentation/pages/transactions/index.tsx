import {
  RoundedWhiteDiv,
  Typography,
} from "@/Presentation/common/styled-components";
import { TransactionsTable } from "./components";
import useTransaction from "./hooks/useTransaction";
import { pageLoader } from "@/assets/svgs";

const Transactions = () => {
  const {
    status,
    transactionsData,
    pager,
    pageState,
    setNextPage,
    setPageSize,
    setPrevPage,
    getTransactions,
  } = useTransaction();

  return (
    <RoundedWhiteDiv>
      <div className="flex flex-col space-y-2">
        <Typography $color="secondary" $size="subtitle">
          Transactions
        </Typography>

        {transactionsData == null ? (
          <div className="flex flex-col items-center justify-center py-24">
            <img src={pageLoader} alt="pageLoader" className="h-24 w-auto" />
            <Typography>Please wait...</Typography>
          </div>
        ) : (
          <TransactionsTable
            isLoading={status == "loading"}
            transactions={transactionsData!}
            pageSize={pager.pageSize}
            currentPage={pager.page}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
            setPageSize={setPageSize}
            getTransactions={getTransactions}
            hasNextPage={pageState.hasNext}
            hasPrevPage={pageState.hasPrev}
          />
        )}
      </div>
    </RoundedWhiteDiv>
  );
};

export default Transactions;
