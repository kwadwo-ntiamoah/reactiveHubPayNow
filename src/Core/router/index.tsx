import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./routes";

// import MainLayout from "@/Presentation/common/layouts/main";
// import AuthLayout from "@/Presentation/common/layouts/auth";
// import DashboardLayout from "@/Presentation/common/layouts/dashboard";

// import LandingPage from "@/Presentation/pages/landing";
// import Login from "@/Presentation/pages/login";
// import Dashboard from "@/Presentation/pages/dashboard";
// import Transactions from "@/Presentation/pages/transactions";
// import MerchantPay from "@/Presentation/pages/merch-pay";
// import Settings from "@/Presentation/pages/settings";
// import Merchants from "@/Presentation/pages/merchants";
// import Users from "@/Presentation/pages/users";
// import Canvas from "@/Presentation/pages/canvas";

const MainLayout = lazy(() => import("@/Presentation/common/layouts/main"));
const AuthLayout = lazy(() => import("@/Presentation/common/layouts/auth"));
const DashboardLayout = lazy(
  () => import("@/Presentation/common/layouts/dashboard")
);

const LandingPage = lazy(() => import("@/Presentation/pages/landing"));
const Login = lazy(() => import("@/Presentation/pages/login"));
const Dashboard = lazy(() => import("@/Presentation/pages/dashboard"));
const Transactions = lazy(() => import("@/Presentation/pages/transactions"));

const MerchantPay = lazy(() => import("@/Presentation/pages/merch-pay"));
const MerchantPaySuccess = lazy(
  () => import("@/Presentation/pages/merch-pay/sub-pages/success")
);
const MerchantPayFailed = lazy(
  () => import("@/Presentation/pages/merch-pay/sub-pages/failed")
);

const Settings = lazy(() => import("@/Presentation/pages/settings"));
const Merchants = lazy(() => import("@/Presentation/pages/merchants"));
const Users = lazy(() => import("@/Presentation/pages/users"));
const Canvas = lazy(() => import("@/Presentation/pages/canvas"));

const VerifyOtp = lazy(() => import("@/Presentation/pages/otp/verify"))
const OtpVerified = lazy(() => import("@/Presentation/pages/otp/verified"))
const OtpFailed = lazy(() => import("@/Presentation/pages/otp/failed"))

const router = createBrowserRouter([
  {
    path: ROUTE_CONSTANTS.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: ROUTE_CONSTANTS.ROOT,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: ROUTE_CONSTANTS.AUTH,
    element: <AuthLayout />,
    children: [
      {
        path: ROUTE_CONSTANTS.AUTH,
        element: <Login />,
      },
    ],
  },

  // otp start
  {
    path: ROUTE_CONSTANTS.OTP_VERIFY,
    element: <VerifyOtp />
  },
  {
    path: ROUTE_CONSTANTS.OTP_VERIFIED,
    element: <OtpVerified />
  },
  {
    path: ROUTE_CONSTANTS.OTP_INVALID,
    element: <OtpFailed />
  },
  // otp end

  {
    path: ROUTE_CONSTANTS.DASHBOARD,
    element: <DashboardLayout />,
    children: [
      {
        path: ROUTE_CONSTANTS.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTE_CONSTANTS.TRANSACTIONS,
        element: <Transactions />,
      },
      {
        path: ROUTE_CONSTANTS.PAYMENTS,
        element: <MerchantPay />,
      },
      {
        path: ROUTE_CONSTANTS.PAYMENTS_SUCCESS,
        element: <MerchantPaySuccess />
      },
      {
        path: ROUTE_CONSTANTS.PAYMENTS_FAILED,
        element: <MerchantPayFailed />
      },
      {
        path: ROUTE_CONSTANTS.SETTINGS,
        element: <Settings />,
      },
      {
        path: ROUTE_CONSTANTS.MERCHANTS,
        element: <Merchants />,
      },
      {
        path: ROUTE_CONSTANTS.USERS,
        element: <Users />,
      },
    ],
  },
  {
    path: ROUTE_CONSTANTS.CANVAS,
    element: <Canvas />,
  },
]);

export default router;
