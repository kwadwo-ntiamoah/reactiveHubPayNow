import { RoundedWhiteDiv, Typography } from "@/Presentation/common/styled-components";
import { TransactionsTable } from "./components";
import useTransaction from "./hooks/useTransaction";

const Transactions = () => {
  const { status, transactionsData, pager, pageState, setNextPage, setPageSize, setPrevPage, getTransactions } = useTransaction();

  return (
    <RoundedWhiteDiv>
      <div className="flex flex-col space-y-2">
        <Typography $color="secondary" $size="subtitle">
          Transactions
        </Typography>

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
      </div>
    </RoundedWhiteDiv>
  )
}

export default Transactions