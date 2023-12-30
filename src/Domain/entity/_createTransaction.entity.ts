import { NetworkType, TransactionType } from "@/Data/model/transaction.model";

export class CreateTransactionEntity {
    constructor(
        public phone: string,
        public amount: string,
        public paymentType: TransactionType,
        public network: NetworkType,
        public hubPayId: string
    ) {}

    toJson() {
        return {
            "customer_number": this.phone,
            "amount": this.amount,
            "payment_type": this.paymentType,
            "network": this.network,
            "hub_pay_id": this.hubPayId
        }
    }
}

export class CompleteTransactionEntity {
    constructor(
        public id: string,
        public otp: string
    ) {}

    toJson() {
        return {
            "id": this.id,
            "otp": this.otp
        }
    }
}