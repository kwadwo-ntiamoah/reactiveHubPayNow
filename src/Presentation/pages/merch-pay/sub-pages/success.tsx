import { Button, Typography } from "@/Presentation/common/styled-components";
import { Link } from "react-router-dom";
import success from "@/assets/images/success.png"

const MerchPaySuccess = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-hid">
      <div className="md:w-1/2 border rounded-md p-6 md:p-12 bg-white">
        <div className="flex flex-col items-center justify-center space-y-4">
            <img src={success} className="h-32" alt="" />
          <Typography $size="subtitle">Payment Request Initiated</Typography>
          <Typography className="text-center">
            A payment link and an OTP has been sent to customer to complete the
            transaction. Kindly ask the Customer to follow the link to complete
            the transaction with the OTP
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

export default MerchPaySuccess;
