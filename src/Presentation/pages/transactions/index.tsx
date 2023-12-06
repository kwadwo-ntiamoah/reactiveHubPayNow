import { RoundedWhiteDiv, Typography } from "@/Presentation/common/styled-components";
import { TransactionsTable } from "./components";

const Transactions = () => {
  return (
    <RoundedWhiteDiv>
      <div className="flex flex-col space-y-2">
        <Typography $color="secondary" $size="subtitle">
          Transactions
        </Typography>

        <TransactionsTable />
      </div>
    </RoundedWhiteDiv>
  )
}

export default Transactions