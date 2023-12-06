import {
  CardWrapper,
  CardFlexCol,
  CardIcon,
  CardFlexColSm,
  Typography,
} from "@/Presentation/common/styled-components";
import { walletIcon } from "@/assets/icons";

export const AvailableBalance = () => {
  return (
    <CardWrapper $backgroundColor="bg-secondary-100">
      <CardFlexCol>
        <CardIcon $color="text-primary-100" src={walletIcon} />

        <CardFlexColSm>
          <Typography $color="white" $size="subtitle">
            GHS 0
          </Typography>
          <Typography $color="white">Total Available Balance</Typography>
        </CardFlexColSm>
      </CardFlexCol>
    </CardWrapper>
  );
};
