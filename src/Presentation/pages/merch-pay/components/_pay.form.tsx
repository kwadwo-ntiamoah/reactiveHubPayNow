import {
  Form,
  InputWrapper,
  Label,
  Input,
  Button,
  PaymentTab,
  Typography
} from "@/Presentation/common/styled-components";
import useMerchPay from "../hooks/useMerchPay";
import { CardNetworks, MomoNetworks } from "./_networks";
import { useForm } from "react-hook-form";
import { Loader } from "@/Presentation/common/shared";

export const MerchantPayForm = () => {
  const { paymentMethod, setPaymentMethod, initiatePayment, status, network, setNetwork } =
    useMerchPay();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      phone: "",
      amount: "",
    },
  });

  return (
    <div className="flex flex-col space-y-8">
      {/* main menu */}
      <div className="flex w-full items-center justify-center py-5 font-bold">
        <PaymentTab
          $isActive={paymentMethod == "mobile_money"}
          onClick={() => setPaymentMethod("mobile_money")}
        >
          Mobile Money
        </PaymentTab>
        <PaymentTab
          $isActive={paymentMethod == "card"}
          onClick={() => setPaymentMethod("card")}
        >
          Card
        </PaymentTab>
      </div>

      {/* networks */}
      {paymentMethod == "mobile_money" 
        ? <MomoNetworks network={network} setNetwork={setNetwork} /> 
        : <CardNetworks network={network} setNetwork={setNetwork} />
      }

      {/* customer number and amount */}
      <Form onSubmit={handleSubmit(initiatePayment)} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputWrapper>
            <Label className="text-sm">Customer Number</Label>
            <Input
              placeholder="0540000000"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is required",
                },
              })}
            />
            <Typography $color="danger">
              {formState.errors.phone?.message}
            </Typography>
          </InputWrapper>
          <InputWrapper>
            <Label className="text-sm">Amount</Label>
            <Input
              type="number"
              placeholder="5.00"
              {...register("amount", {
                required: {
                  value: true,
                  message: "Amount is required",
                },
              })}
            />
            <Typography $color="danger">
              {formState.errors.amount?.message}
            </Typography>
          </InputWrapper>
        </div>

        <div className="flex justify-end">
          <div>
            <Button 
            disabled={status === "loading"}
            type="submit" $type="primary">
              {status == "loading" ? <Loader /> : "Proceed"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};
