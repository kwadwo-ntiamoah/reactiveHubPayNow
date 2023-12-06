export type TransactionType = "mobile_money" | "card";
export type NetworkType = "VIS" | "MAS" | "VOD" | "MTN" | "AIR";
export type StatusType = "pending" | "unapproved" | "failed" | "success";

class TransactionReponseModel {
    constructor(
        public transactions: TransactionModel[],
        public totalRecords: string
    ) {}

    static fromJson(json: any): TransactionReponseModel {
        return new TransactionReponseModel(
            TransactionModel.fromJsonArr(json["transactions"]),
            json["total_records"]
        )
    }
}

export class TransactionModel {
  constructor(
    public id: string,
    public amount: string,
    public charge: string,
    public customerNumber: string,
    public paymentType: TransactionType,
    public network: NetworkType,
    public serviceProviderId: string | null,
    public processingId: string,
    public status: StatusType,
    public createdAt: string,
    public smsSent: string | null,
    public redirectUrl: string | null,
    public merchantHubPayId: string
  ) {}

  static fromJson(json: any): TransactionModel {
    return new TransactionModel(
      json["id"],
      json["amount"],
      json["charge"],
      json["customer_number"],
      json["payment_type"],
      json["network"],
      json["service_provider_id"],
      json["processing_id"],
      json["status"],
      json["created_at"],
      json["sms_sent"],
      json["redirect_url"],
      json["merchant_hub_pay_id"]
    );
  }

  static fromJsonArr(arr: []): TransactionModel[] {
    return arr.map((json) => this.fromJson(json));
  }
}

export default TransactionReponseModel