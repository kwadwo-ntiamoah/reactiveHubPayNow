import { Typography, Button } from "@/Presentation/common/styled-components";
import { Link } from "react-router-dom";
import failure from "@/assets/images/warning.png";

const MerchPayFailed = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-hid">
      <div className="md:w-1/2 border rounded-md p-6 md:p-12 bg-white">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img src={failure} className="h-32" alt="" />
          <Typography $size="subtitle">Payment Request Failed</Typography>
          <Typography className="text-center">
            An error occurred initiating payment for customer. Kindly try again
            or reach out to your adminstrator if the issue persists
          </Typography>
          <Typography>Thank you</Typography>
          <div className="grid md:grid-cols-2 gap-3 w-full pt-5">
            <Link to="/dashboard">
              <Button $type="secondary">Go Home</Button>
            </Link>
            <Link to="/dashboard/merch-pay">
              <Button $type="primary">New Transaction</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchPayFailed;
