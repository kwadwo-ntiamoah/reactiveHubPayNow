import { Container, Typography } from "@/Presentation/common/styled-components";
import happyWoman from "@/assets/images/happy-woman.jpg";

export const WelcomeSection = () => {
  return (
    <Container $allowYPadding={true}>
      <div className="grid md:grid-cols-5 gap-5 md:gap-32 items-center ">
        <div className="md:col-span-2 flex flex-col space-y-10">
          <div className="flex flex-col space-y-2">
            <Typography $size="title">Fast, Easy & Reliable Payment Solutions for your Business</Typography>
          </div>

          {/* content */}
          <Typography>
            At it's core, HubPayNow helps businesses, companies, owners,
            consumers and users better manage their financial operations and
            processes. With cutting edge technology, we promise to deliver
            excellent service that will drive your business and increase profit
            and growth. Sign Up with us and experience the next gen Fintech
          </Typography>
        </div>

        <div className="flex justify-end md:col-span-3">
          <img
            src={happyWoman}
            alt=""
            className="md:h-[500px] w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </Container>
  );
};
