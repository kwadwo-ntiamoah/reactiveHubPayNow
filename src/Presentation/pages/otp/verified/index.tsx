import { Button, Typography } from "@/Presentation/common/styled-components";
import success from "@/assets/images/success.png";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

const OtpVerified = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden px-5 py-16 space-y-12">
      <img src={logo} alt="" />
      <div className="md:w-1/2 border rounded-md px-6 py-12 md:p-12 bg-white">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Typography $size="title" className="pb-5">
            Complete Payment
          </Typography>
          <img src={success} className="h-32" alt="" />
          <Typography $size="subtitle">OTP Verified</Typography>
          <Typography className="text-center">
            A payment prompt has been sent to your number. Kindly complete the
            transaction
          </Typography>
          <Typography className="font-bold">
            Thank you for doing business with us
          </Typography>
          <Link to="/">
            <Button $type="primary">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtpVerified;
