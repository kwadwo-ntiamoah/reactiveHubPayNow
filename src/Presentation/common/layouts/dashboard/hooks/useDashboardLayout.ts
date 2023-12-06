import { ROUTE_CONSTANTS } from "@/Core/router/routes";
import TokenModel from "@/Data/model/token.model";
import { StorageService, StoreKeys } from "@/Domain/service/_storage.service";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { container } from "tsyringe";

const useDashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeNav, setActiveNav] = useState(location.pathname);
  const [currentUser, setCurrentUser] = useState("")

  const storageService = container.resolve(StorageService)
  var storeToken = storageService.getData(StoreKeys.TOKEN)

  const handleClick = (route: ROUTE_CONSTANTS) => {
    navigate(route);
  };

  useEffect(() => {
    if (storeToken != null) {
      var user = TokenModel.fromJson(storeToken)
      setCurrentUser(user.user?.firstName!)
    }
  }, [])

  useEffect(() => {
    setActiveNav(location.pathname as ROUTE_CONSTANTS);
    storeToken == null && navigate(ROUTE_CONSTANTS.AUTH, { replace: true })
  }, [location.pathname]);

  return { currentUser, activeNav, handleClick };
};

export default useDashboardLayout;
