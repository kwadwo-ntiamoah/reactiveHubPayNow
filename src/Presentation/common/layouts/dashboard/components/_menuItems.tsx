import { ROUTE_CONSTANTS } from "@/Core/router/routes";
import { Fragment } from "react";
import {
  menuIcon,
  transactionsIcon,
  payIcon,
  settingsIcon,
  merchantIcon,
  usersIcon,
} from "@/assets/icons";
import {
  Container,
  NavIcon,
  NavMenu,
  NavMenuWrapper,
  Typography,
} from "@/Presentation/common/styled-components";

interface INavMenuItemsProps {
  isAdmin: boolean;
  activeNav: string;
  handleClick: (route: ROUTE_CONSTANTS) => void;
}

export const NavMenuItems = (props: INavMenuItemsProps) => {
  const { activeNav, handleClick } = props;

  return (
    <Fragment>
      <Container>
        <div className="md:px-36 flex items-center justify-start space-x-10 flex-shrink-0 overflow-x-auto no-scrollbar">
          {/* dashboard */}
          <NavMenuWrapper
            $active={activeNav == ROUTE_CONSTANTS.DASHBOARD}
            onClick={() => handleClick(ROUTE_CONSTANTS.DASHBOARD)}
          >
            <NavMenu>
              <NavIcon src={menuIcon} />
              <Typography>Dashboard</Typography>
            </NavMenu>
          </NavMenuWrapper>

          {/* transactions */}
          <NavMenuWrapper
            $active={activeNav == ROUTE_CONSTANTS.TRANSACTIONS}
            onClick={() => handleClick(ROUTE_CONSTANTS.TRANSACTIONS)}
          >
            <NavMenu>
              <NavIcon src={transactionsIcon} />
              <Typography>Transactions</Typography>
            </NavMenu>
          </NavMenuWrapper>

          {/* payments */}
          {
            !props.isAdmin && (
              <NavMenuWrapper
            $active={activeNav == ROUTE_CONSTANTS.PAYMENTS}
            onClick={() => handleClick(ROUTE_CONSTANTS.PAYMENTS)}
          >
            <NavMenu>
              <NavIcon src={payIcon} />
              <Typography>Payments</Typography>
            </NavMenu>
          </NavMenuWrapper>
            )
          }

          {/* settings */}
          <NavMenuWrapper
            $active={activeNav == ROUTE_CONSTANTS.SETTINGS}
            onClick={() => handleClick(ROUTE_CONSTANTS.SETTINGS)}
          >
            <NavMenu>
              <NavIcon src={settingsIcon} />
              <Typography>Settings</Typography>
            </NavMenu>
          </NavMenuWrapper>

          {props.isAdmin && (
            <Fragment>
              {/* merchants */}
              <NavMenuWrapper
                $active={activeNav == ROUTE_CONSTANTS.MERCHANTS}
                onClick={() => handleClick(ROUTE_CONSTANTS.MERCHANTS)}
              >
                <NavMenu>
                  <NavIcon src={merchantIcon} />
                  <Typography>Merchants</Typography>
                </NavMenu>
              </NavMenuWrapper>

              {/* users */}
              <NavMenuWrapper
                $active={activeNav == ROUTE_CONSTANTS.USERS}
                onClick={() => handleClick(ROUTE_CONSTANTS.USERS)}
              >
                <NavMenu>
                  <NavIcon src={usersIcon} />
                  <Typography>Users</Typography>
                </NavMenu>
              </NavMenuWrapper>
            </Fragment>
          )}
        </div>
      </Container>
    </Fragment>
  );
};
