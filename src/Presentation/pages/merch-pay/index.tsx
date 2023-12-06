import {
  CardWrapper,
  RoundedWhiteDiv,
  Typography,
} from "@/Presentation/common/styled-components";
import { MerchantPayForm } from "./components";

const MerchantPay = () => {
  return (
    <div className="grid md:grid-cols-3 gap-x-10">
      <div className="md:col-span-2">
        <RoundedWhiteDiv>
          <div className="flex flex-col space-y-2">
            <Typography $color="secondary" $size="subtitle">
              Initiate Customer Payment
            </Typography>

            <MerchantPayForm />
          </div>
        </RoundedWhiteDiv>
      </div>
      <CardWrapper className="hidden md:block">
        <img
          src="http://res.cloudinary.com/pilahtech/image/upload/v1690386601/HP9526.png"
          alt="qr"
          className="w-full h-auto rounded-md border-2 border-dashed"
        />
      </CardWrapper>
    </div>
  );
};

export default MerchantPay;
