import { ROUTE_CONSTANTS } from "@/Core/router/routes";
import TokenModel from "@/Data/model/token.model";
import { LoginEntity } from "@/Domain/entity";
import { StorageService, StoreKeys } from "@/Domain/service/_storage.service";
import { AppDispatch, RootState } from "@/Presentation/store";
import { loginAsync, authResetState } from "@/Presentation/store/auth";
import { getMerchantAsync } from "@/Presentation/store/merchant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { container } from "tsyringe";

const useLogin = () => {
  const storageService = container.resolve(StorageService)

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const authStore = useSelector((state: RootState) => state.auth);
  const location = useLocation()
  const currentRoute = location.pathname

  const { user, status, error } = authStore;

  useEffect(() => {
    status === "succeeded" && _onSuccess()
    status === "failed" && storageService.clear()
  }, [status])

  const _onSuccess = () => {
    if (user != null) {
      var token = TokenModel.fromJson(JSON.stringify(user!))
      storageService.setData(StoreKeys.TOKEN, token)

      // get merchant details
      dispatch(getMerchantAsync(token.user?.merchantId!))

      // navigate to dashboard
      navigate(ROUTE_CONSTANTS.DASHBOARD, { replace: true })

      // reset to idle
      dispatch(authResetState())
    }
  }

  const merchantLoginAsync = (formUser: {
    email: string;
    password: string;
  }) => {
    const payload = new LoginEntity(
      formUser.email,
      formUser.password,
      currentRoute.includes("/admin") ? "admin" : "merchant"
    );

    dispatch(loginAsync(payload));
  };

  const adminLoginAsync = () => {};

  return { status, error, merchantLoginAsync, adminLoginAsync };
};

export default useLogin;
