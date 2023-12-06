import { CardWrapper, CardFlexCol, CardIcon, CardFlexColSm, Typography } from "@/Presentation/common/styled-components"
import { pendingIcon, failedIcon } from "@/assets/icons"

export const PendingFailedTransactions = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-md">
      {/* Pending transactions */}
      <CardWrapper
        $backgroundColor="bg-white"
        className="border-b md:border-r border-dashed"
      >
        <CardFlexCol>
          <CardIcon $color="" src={pendingIcon} />

          <CardFlexColSm>
            <Typography $color="secondary" $size="subtitle">
              GHS 0
            </Typography>
            <Typography $color="secondary">Pending Transactions</Typography>
          </CardFlexColSm>
        </CardFlexCol>
      </CardWrapper>

      {/* failed transactions */}
      <CardWrapper $backgroundColor="bg-white">
        <CardFlexCol>
          <CardIcon src={failedIcon} />

          <CardFlexColSm>
            <Typography $color="secondary" $size="subtitle">
              GHS 0
            </Typography>
            <Typography $color="secondary">
              Total Failed Transactions
            </Typography>
          </CardFlexColSm>
        </CardFlexCol>
      </CardWrapper>
    </div>
    )
}