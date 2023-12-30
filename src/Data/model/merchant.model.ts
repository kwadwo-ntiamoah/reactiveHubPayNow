class MerchantReponseModel {
    constructor(
        public merchants: MerchantModel[],
        public totalRecords: string
    ) {}

    static fromJson(json: any): MerchantReponseModel {
        return new MerchantReponseModel(
            MerchantModel.fromJsonArr(json["merchants"]),
            json["total_records"]
        )
    }
}

export class MerchantModel {
  constructor(
    public id: string,
    public businessName: string,
    public businessType: string | null,
    public hubPayId: string | null,
    public qrCodeUrl: string | null,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string
  ) {}

  static fromJson(json: any): MerchantModel {

    return new MerchantModel(
      json["id"],
      json["business_name"],
      json["business_type"],
      json["hub_pay_id"],
      json["qr_code_url"],
      json["first_name"],
      json["last_name"],
      json["email"],
      json["phone"]
    );
  }

  static fromJsonArr(arr: []): MerchantModel[] {
    return arr.map((json) => this.fromJson(json));
  }
}

export default MerchantReponseModel