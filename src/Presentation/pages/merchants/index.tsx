import {
  Button,
  RoundedWhiteDiv,
  Typography,
} from "@/Presentation/common/styled-components";
import useMerchant from "./hooks/useMerchant";
import { pageLoader } from "@/assets/svgs";
import { MerchantsTable } from "./components";

const Merchants = () => {
  const {
    status,
    merchantsData,
    pager,
    pageState,
    setNextPage,
    setPageSize,
    setPrevPage,
    getAllMerchants,
  } = useMerchant();

  return (
    <RoundedWhiteDiv>
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center pb-6">
          <Typography $color="secondary" $size="subtitle">
            Merchants
          </Typography>
          <div>
            <Button $type="primary">Add Merchant</Button>
          </div>
        </div>

        {merchantsData == null ? (
          <div className="flex flex-col items-center justify-center py-24">
            <img src={pageLoader} alt="pageLoader" className="h-24 w-auto" />
            <Typography>Please wait...</Typography>
          </div>
        ) : (
          <MerchantsTable
            isLoading={status == "loading"}
            merchants={merchantsData}
            pageSize={pager.pageSize}
            currentPage={pager.page}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
            setPageSize={setPageSize}
            getAllMerchants={getAllMerchants}
            hasNextPage={pageState.hasNext}
            hasPrevPage={pageState.hasPrev}
          />
        )}
      </div>
    </RoundedWhiteDiv>
  );
};

export default Merchants;
