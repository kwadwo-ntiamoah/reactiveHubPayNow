import { Button, Typography } from "@/Presentation/common/styled-components";

export const GetOnBoardSection = () => {
  return (
    <div className="h-[450px] w-screen bg-secondary-100 flex flex-col space-y-10 items-center justify-center">
      <Typography $size="title" $color="white">
        <span className="flex items-center justify-center px-8 text-center">
            Get onboard and start engaging with your Customers
        </span>
      </Typography>
      <div>
        <Button $type="primary">
          <p>Start Accepting Payments</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
