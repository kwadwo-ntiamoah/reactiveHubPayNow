import { IPager, IPaginationState } from "@/Data/global/pager";
import MerchantReponseModel, {
  MerchantModel,
} from "@/Data/model/merchant.model";
import { GetAllItemsEntity } from "@/Domain/entity";
import { AppDispatch, RootState } from "@/Presentation/store";
import { getAllMerchantsAsync } from "@/Presentation/store/merchant";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useMerchant = () => {
  const dipsatch = useDispatch<AppDispatch>();

  const { merchants, merchant, status, error } = useSelector(
    (state: RootState) => state.merchant
  );
  const [pager, setPager] = useState<IPager>({ page: 1, pageSize: 5 });
  const [pageState, setPageState] = useState<IPaginationState>({
    hasNext: false,
    hasPrev: false,
  });
  const [merchantsData, setMerchantsData] = useState<MerchantModel[]>();

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

  const getAllMerchants = async () => {
    const payload = new GetAllItemsEntity(
      pager.page.toString(),
      pager.pageSize.toString()
    );

    dipsatch(getAllMerchantsAsync(payload));
  };

  const _onGetMerchantsSuccess = () => {
    var merchantResponse = MerchantReponseModel.fromJson(merchants);
    setMerchantsData(merchantResponse.merchants);

    setHasPrev();
    setHasNext(merchantResponse.totalRecords);
  };

  const _onGetMerchantError = () => {
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
    getAllMerchants();
  }, [pager.page]);

  useEffect(() => {
    status == "succeeded" && _onGetMerchantsSuccess();
    status == "failed" && _onGetMerchantError();
  }, [status]);

  return {
    status,
    merchant,
    merchantsData,
    pager,
    pageState,
    setPrevPage,
    setNextPage,
    setPageSize,
    getAllMerchants,
  };
};

export default useMerchant