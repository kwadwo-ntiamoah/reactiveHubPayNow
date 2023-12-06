import {
  RoundedWhiteDiv,
  Typography,
} from "@/Presentation/common/styled-components";

export const PersonalInfo = () => {
  return (
    <div className="order-first md:order-last">
      <RoundedWhiteDiv>
        <div className="flex flex-col space-y-4">
          <Typography $size="subtitle" $color="secondary">
            Personal Info
          </Typography>

          <div className="flex flex-col space-y-2">
            <div className="flex flex-col">
              <Typography $bold={true}>HP9526</Typography>
              <Typography $size="extrasmall">ID</Typography>
            </div>
            <div className="flex flex-col">
              <Typography $bold={true}>Heels Lounge</Typography>
              <Typography $size="extrasmall">MERCHANT</Typography>
            </div>
            <div className="flex flex-col">
              <Typography $bold={true}>etntiamoah@st.ug.edu.gh</Typography>
              <Typography $size="extrasmall">EMAIL</Typography>
            </div>
          </div>
        </div>
      </RoundedWhiteDiv>
    </div>
  );
};
