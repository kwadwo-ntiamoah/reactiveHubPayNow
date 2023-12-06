import { TransactionModel } from "@/Data/model/transaction.model";

export interface ITransactionProps {
    transactions: TransactionModel[],
    isLoading?: boolean
}