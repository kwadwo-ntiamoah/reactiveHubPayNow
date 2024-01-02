import { IMerchantProps } from "@/Presentation/common/data";
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
  TableFooter,
  Input,
  Button,
} from "@/Presentation/common/styled-components";
import { chevronLeft, chevronRight } from "@/assets/svgs";
import { ChangeEvent } from "react";

interface MainTransactionProps extends IMerchantProps {
  pageSize: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  setNextPage: () => void;
  setPrevPage: () => void;
  setPageSize: (pageSize: number) => void;
  getAllMerchants: () => void;
}

export const MerchantsTable = (props: MainTransactionProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    props.setPageSize(parseInt(e.target.value));
  };

  const getAllMerchants = () => {
    props.getAllMerchants();
  };

  return (
    <TableWrapper>
      <Table>
        {/* Header */}
        <TableHead>
          <TableRow>
            <TableHeader scope="col">Business</TableHeader>
            <TableHeader scope="col">ID</TableHeader>
            <TableHeader scope="col">Merchant</TableHeader>
            <TableHeader scope="col">Contact Info</TableHeader>
            <TableHeader scope="col">Actions</TableHeader>
          </TableRow>
        </TableHead>

        {/* content */}
        <TableBody>
          {props.merchants &&
            props.merchants.map((merchant) => (
              <TableRow key={merchant.id}>
                {/* processing id */}
                <TableData>
                  <TableDataFlex>
                    <TableDataFlexCol>
                      <Typography $size="extrasmall" className="uppercase">
                        {merchant.businessName}
                      </Typography>
                      {/* <Typography $size="extrasmall">
                        {merchant.businessType ?? "N/A"}
                      </Typography> */}
                    </TableDataFlexCol>
                  </TableDataFlex>
                </TableData>

                {/* Amount */}
                <TableData>
                  <TableDataFlexCol>
                    <Typography $size="extrasmall" className="uppercase">
                      {merchant.hubPayId}
                    </Typography>
                    {/* <Typography $size="extrasmall">
                        <a href={merchant.qrCodeUrl!} className="text-primary-100 underline" target="_blank">qr_code</a>
                    </Typography> */}
                  </TableDataFlexCol>
                </TableData>

                {/* customer */}
                <TableData>
                  <TableDataFlexCol className="uppercase">
                    <Typography className="text-sm">
                      {merchant.firstName}
                    </Typography>
                    <Typography $size="extrasmall">
                      {merchant.lastName}
                    </Typography>
                  </TableDataFlexCol>
                </TableData>

                {/* Status */}
                <TableData>
                  <TableDataFlexCol>
                    {/* <Typography>{merchant.phone}</Typography> */}
                    <Typography $size="extrasmall" className="uppercase">
                      {merchant.email}
                    </Typography>
                  </TableDataFlexCol>
                </TableData>

                {/* actions */}
                <TableData>
                  <TableDataFlex>
                    <div>
                      <Button $type="secondary" className="py-2">
                        <Typography className="text-white uppercase text-xs">
                          Update
                        </Typography>
                      </Button>
                    </div>
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
                  <Button $type="secondary" onClick={getAllMerchants}>
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
