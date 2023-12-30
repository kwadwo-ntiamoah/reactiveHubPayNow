import {
  Typography,
  Button,
  Form,
} from "@/Presentation/common/styled-components";
import otpImg from "@/assets/images/authentication.png";
import logo from "@/assets/images/logo.png";
import OTPInput from "react-otp-input";
import useOtp from "../hooks/useOtp";
import { Loader } from "@/Presentation/common/shared";

const VerifyOtp = () => {
  const { otp, status, setOtp, completeTransaction } = useOtp();
  return (
    <Form
      onSubmit={completeTransaction}
      className="w-full flex flex-col items-center justify-center overflow-hidden p-10 space-y-8"
    >
      <img src={logo} alt="" />
      <div className="md:w-1/2 border rounded-md px-6 py-12 md:p-12 bg-white">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Typography $size="subtitle" className="pb-5 text-xl">
            Verification
          </Typography>
          <img src={otpImg} className="h-24 w-auto" alt="success.png" />
          <Typography className="text-lg">
            Provide otp for verification
          </Typography>
          <div>
            <OTPInput
              value={otp}
              onChange={setOtp}
              shouldAutoFocus={true}
              inputType="text"
              inputStyle="otp-input"
              numInputs={4}
              renderSeparator={<span className="mx-2 lg:mx-6">*</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="flex space-x-1">
            <Typography>You didn't receive an OTP?</Typography>
            <Typography className="underline">Resend</Typography>
          </div>

          <div className="pt-12">
            <Button
              disabled={status === "loading"}
              type="submit"
              $type="primary"
            >
              {status === "loading" ? <Loader /> : "Verify & Proceed"}
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default VerifyOtp;
