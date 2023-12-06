import logo from "@/assets/images/logo.png"
import { Button } from "../styled-components";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "@/Core/router/routes";

export const Navbar = () => {
  return (
    <div className="sticky inset-0 h-20 bg-white/90 border-b md:border-0 w-screen flex px-5 md:px-24 z-10">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center">
          <img src={logo} className="h-12 w-auto" alt="logo.png" />
        </div>

        <div className="hidden md:flex">
          <div>
            <Button $type="link" className="font-normal">Products</Button>
          </div>
          <div>
            <Button $type="link" className="font-normal">Pricing</Button>
          </div>
          <div>
            <Button $type="link" className="font-normal">Developer</Button>
          </div>
          <div>
            <Button $type="link" className="font-normal">Sales</Button>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <div>
            <Link to={ROUTE_CONSTANTS.AUTH}> 
              <Button $type="link">Login</Button>
            </Link>
          </div>
          <div>
            <Button $type="primary">Create Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};