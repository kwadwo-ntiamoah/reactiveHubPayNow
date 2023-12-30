import { Link, Outlet } from "react-router-dom";
import { Container, Typography } from "@/Presentation/common/styled-components";
import { ROUTE_CONSTANTS } from "@/Core/router/routes";
import logo from "@/assets/images/logo.png";
import diversity from "@/assets/images/diversity.png"
import useDashboardLayout from "./hooks/useDashboardLayout";

import { NavMenuItems } from "./components";

const DashboardLayout = () => {

  const { currentUser, activeNav, handleClick } = useDashboardLayout()

  return (
    <div className="relative h-screen w-screen flex flex-col">
      <div className="flex flex-col sticky inset-0">
        <div className="bg-secondary-100 w-screen h-20">
          <Container>
            <div className="flex h-full w-full items-center justify-between md:px-36">
              <div className="bg-white rounded-md flex items-center">
                <img src={logo} alt="" className="h-8 object-cover md:h-10" />
              </div>
              <div>
                <Link to={ROUTE_CONSTANTS.AUTH}>
                  <Typography $color="white">
                    Welcome {currentUser}
                  </Typography>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-white flex justify-start w-screen h-12 border-b md:px-36">
          <NavMenuItems activeNav={activeNav} handleClick={handleClick} />
        </div>
      </div>

      {/* content */}
      <Container $allowYPadding={true}>
        <div className="md:px-36 py-5">
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default DashboardLayout;
