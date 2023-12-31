import { getIcon } from "@/Data/global/getIcons";
import { ITransactionProps } from "@/Presentation/common/data";
import {
  TableWrapper,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
  TableDataFlex,
  TableIcon,
  TableDataFlexCol,
  Typography,
  SvgButtonDiv,
  SvgButton,
  TableFooter,
  Input,
  Button,
} from "@/Presentation/common/styled-components";
import { chevronLeft, chevronRight } from "@/assets/svgs";
import { ChangeEvent } from "react";

interface MainTransactionProps extends ITransactionProps {
  pageSize: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  setNextPage: () => void;
  setPrevPage: () => void;
  setPageSize: (pageSize: number) => void;
  getTransactions: () => void;
}

export const TransactionsTable = (props: MainTransactionProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault
    props.setPageSize(parseInt(e.target.value));
  };

  const getTransactions = () => {
    props.getTransactions();
  };

  return (
    <TableWrapper>
      <Table>
        {/* Header */}
        <TableHead>
          <TableRow>
            <TableHeader scope="col">Processing ID</TableHeader>
            <TableHeader scope="col">Amount</TableHeader>
            <TableHeader scope="col">Customer Number</TableHeader>
            <TableHeader scope="col">Status</TableHeader>
            <TableHeader scope="col">Actions</TableHeader>
          </TableRow>
        </TableHead>

        {/* content */}
        <TableBody>
          {props.transactions &&
            props.transactions.map((transaction) => (
              <TableRow key={transaction.processingId}>
                {/* processing id */}
                <TableData>
                  <TableDataFlex>
                    <TableIcon src={getIcon(transaction.status)} alt="status" />
                    <TableDataFlexCol>
                      <Typography>{transaction.processingId}</Typography>
                      <Typography $size="extrasmall">
                        Thursday, 24th January, 2023
                      </Typography>
                    </TableDataFlexCol>
                  </TableDataFlex>
                </TableData>

                {/* Amount */}
                <TableData>
                  <TableDataFlexCol>
                    <Typography>{transaction.amount}</Typography>
                    <Typography $size="extrasmall">GHS</Typography>
                  </TableDataFlexCol>
                </TableData>

                {/* customer */}
                <TableData>
                  <TableDataFlexCol>
                    <Typography>{transaction.customerNumber}</Typography>
                    <Typography $size="extrasmall">
                      {transaction.network}
                    </Typography>
                  </TableDataFlexCol>
                </TableData>

                {/* Status */}
                <TableData>
                  <TableDataFlexCol>
                    <Typography $size="extrasmall" className="uppercase">
                      {transaction.status}
                    </Typography>
                  </TableDataFlexCol>
                </TableData>

                {/* actions */}
                <TableData>
                  <TableDataFlex>
                    <SvgButtonDiv $type="secondary">
                      <SvgButton
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </SvgButton>
                    </SvgButtonDiv>
                    <SvgButtonDiv $type="primary">
                      <SvgButton
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </SvgButton>
                    </SvgButtonDiv>
                  </TableDataFlex>
                </TableData>
              </TableRow>
            ))}
        </TableBody>

        {/* pagination */}
        <TableFooter>
          <TableRow>
            <TableData>
              <TableDataFlex>
                <Typography>Items Per Page:</Typography>
                <Input
                  className="w-16 text-center"
                  onChange={handleChange}
                  defaultValue={props.pageSize.toString()}
                />
                <div>
                  <Button $type="secondary" onClick={getTransactions}>
                    Apply
                  </Button>
                </div>
              </TableDataFlex>
            </TableData>
            <TableData colSpan={4}>
              <TableDataFlex className="justify-end">
                <Button
                  onClick={props.setPrevPage}
                  $type={props.hasPrevPage ? "secondary" : "default"}
                  className="w-12"
                >
                  <TableIcon src={chevronLeft} />
                </Button>
                <Input
                
                  className="w-12 text-center"
                  value={props.currentPage}
                  disabled
                />
                <Button
                  onClick={props.setNextPage}
                  $type={props.hasNextPage ? "secondary" : "default"}
                  className="w-12"
                >
                  <TableIcon src={chevronRight} />
                </Button>
              </TableDataFlex>
            </TableData>
          </TableRow>
        </TableFooter>
      </Table>
    </TableWrapper>
  );
};
