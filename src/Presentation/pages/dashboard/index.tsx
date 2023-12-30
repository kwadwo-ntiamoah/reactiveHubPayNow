import {
  AvailableBalance,
  PendingFailedTransactions,
  RecentTransactions,
} from "./components";
import useDashboard from "./hooks/useDashboard";
import useTransaction from "./hooks/useTransaction";

const Dashboard = () => {
  const { status, transactionsData } = useTransaction();
  useDashboard();

  return (
    <div className="flex flex-col space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-10">
        {/* available Balance */}
        <div className="col-span-1">
          <AvailableBalance />
        </div>

        {/* pending failed transactions */}
        <div className="md:col-span-2">
          <PendingFailedTransactions />
        </div>
      </div>

      {/* recent transactions */}
      {transactionsData != null && (
        <div className="bg-white p-10 rounded-md">
          <RecentTransactions
            isLoading={status === "loading"}
            transactions={transactionsData!}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
