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
import { chevronLeft, chevronRight, successIcon } from "@/assets/svgs";

export const TransactionsTable = () => {
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
          <TableRow>
            {/* processing id */}
            <TableData>
              <TableDataFlex>
                <TableIcon src={successIcon} alt="status" />
                <TableDataFlexCol>
                  <Typography>PDY882906031251</Typography>
                  <Typography $size="extrasmall">
                    Thursday, 24th January, 2023
                  </Typography>
                </TableDataFlexCol>
              </TableDataFlex>
            </TableData>

            {/* Amount */}
            <TableData>
              <TableDataFlexCol>
                <Typography>20.00</Typography>
                <Typography $size="extrasmall">GHS</Typography>
              </TableDataFlexCol>
            </TableData>

            {/* customer */}
            <TableData>
              <TableDataFlexCol>
                <Typography>233540609437</Typography>
                <Typography $size="extrasmall">MOMO</Typography>
              </TableDataFlexCol>
            </TableData>

            {/* status */}
            <TableData>
              <Typography className="uppercase" $size="extrasmall">
                Passed
              </Typography>
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
        </TableBody>

        {/* pagination */}
        <TableFooter>
          <TableRow>
            <TableData>
              <TableDataFlex>
                <Typography>Items Per Page:</Typography>
                <Input className="w-16 text-center" min={5} value={25} />
              </TableDataFlex>
            </TableData>
            <TableData colSpan={4}>
              <TableDataFlex className="justify-end">
                <Button className="w-12">
                  <TableIcon src={chevronLeft} />
                </Button>
                <Input className="w-12 text-center" value={5} disabled />
                <Button $type="secondary" className="w-12">
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
