import { Typography, Button } from "@/Presentation/common/styled-components";
import warning from "@/assets/images/warning.png";
import logo from "@/assets/images/logo.png";

const OtpFailed = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden px-5 py-16 space-y-12">
      <img src={logo} alt="" />
      <div className="md:w-1/2 border rounded-md px-6 py-12 md:p-12 bg-white">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Typography $size="title" className="pb-5">
            Complete Payment
          </Typography>
          <img src={warning} className="h-32" alt="" />
          <Typography $size="subtitle">Invalid OTP</Typography>
          <Typography className="text-center">
            The OTP you entered is invalid or has expired. Please try again
          </Typography>
          <Typography className="font-bold">
            Thank you for doing business with us
          </Typography>
          <div className="pt-6">
            <Button $type="primary">Resend Otp</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpFailed;
