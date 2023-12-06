import { Link, Outlet } from "react-router-dom";
import loginImage from "@/assets/images/login.jpg";
import logo from "@/assets/images/logo.png";
import { ROUTE_CONSTANTS } from "@/Core/router/routes";
import useAuth from "./hooks/useAuth";

const AuthLayout = () => {
  useAuth()

  return (
    <div className="relative h-screen w-screen">
      <div className="grid grid-cols-5 h-full">
        <div className=" hidden md:block col-span-3 h-screen w-auto bg-secondary-100">
          <img
            src={loginImage}
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative col-span-5 md:col-span-2">
          <Outlet />
        </div>
      </div>

      <Link to={ROUTE_CONSTANTS.ROOT}>
      <div className="absolute top-5 left-5">
        <img src={logo} alt="" />
      </div>
      </Link>
    </div>
  );
};

export default AuthLayout;
