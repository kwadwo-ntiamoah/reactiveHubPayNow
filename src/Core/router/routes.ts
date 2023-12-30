export enum ROUTE_CONSTANTS {
  ROOT = "/",
  CANVAS = "/canvas",

  // auth
  AUTH = "/auth",
  ADMIN_AUTH = "/auth/admin",

  // otp
  OTP_VERIFY = "/otp/verify/:id",
  OTP_VERIFIED = "/otp/verified",
  OTP_INVALID = "/otp/invalid",

  // dashboard
  DASHBOARD = "/dashboard",
  PAYMENTS = "/dashboard/merch-pay",
  PAYMENTS_SUCCESS = "/dashboard/merch-pay/success",
  PAYMENTS_FAILED = "/dashboard/merch-pay/failed",
  SETTINGS = "/dashboard/settings",
  TRANSACTIONS = "/dashboard/transactions",
  MERCHANTS = "/dashboard/merchants",
  USERS = "/dashboard/users"
}
