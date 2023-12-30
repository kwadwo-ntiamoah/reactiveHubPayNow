import { Icon, IconSmall, RoundedWhiteDiv, Typography } from "@/Presentation/common/styled-components";
import { chevronRight, passwordIcon } from "@/assets/icons";

export const Menu = () => {
  return (
    <div className="md:col-span-2">
      <RoundedWhiteDiv>
      <div className="flex flex-col space-y-5">
          <Typography $size="subtitle" $color="secondary">
            Account Settings
          </Typography>

          <div className="flex flex-col space-y-2">
            <_MenuCard label="Change Password"/>
            <_MenuCard label="Request Info Change"/>
          </div>
        </div>
        </RoundedWhiteDiv>
    </div>
  );
};

const _MenuCard = (props: { label: string }) => {
  return (
    <div className="flex items-center justify-between py-4 md:px-5 rounded-md cursor-pointer hover:bg-gray-100">
      <div className="flex space-x-4">
        <Icon src={passwordIcon} />

        <Typography>{props.label}</Typography>
      </div>
      <IconSmall src={chevronRight} />
    </div>
  );
};
