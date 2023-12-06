import {
  InputWrapper,
  Label,
  Input,
  Select,
  Button,
} from "@/Presentation/common/styled-components";
import { Form } from "react-router-dom";

export const MerchantPayForm = () => {
  return (
    <Form autoComplete="false" autoSave="false" autoCapitalize="false">
      <div className="flex flex-col space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <InputWrapper>
          <Label className="text-sm">Customer Number</Label>
          <Input placeholder="0540000000" required />
        </InputWrapper>
        <InputWrapper>
          <Label className="text-sm">Amount</Label>
          <Input placeholder="john@doe.com" required />
        </InputWrapper>
        <InputWrapper>
          <Label className="text-sm">Payment Type</Label>
          <Select>
            <option value="" selected disabled>
              --Payment Type--
            </option>
          </Select>
        </InputWrapper>
        <InputWrapper>
          <Label className="text-sm">Network</Label>
          <Select>
            <option value="" selected disabled>
              --Network--
            </option>
          </Select>
        </InputWrapper>
      </div>
      <div className="md:w-1/4">
        <Button $type="primary">Proceed</Button>
      </div>
      </div>
    </Form>
  );
};
