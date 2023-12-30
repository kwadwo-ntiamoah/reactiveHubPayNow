import UserModel from "./user.model";

class TokenModel {
  constructor(public token: string | null, public user: UserModel | null) {}

  static fromJson(data: any): TokenModel {
    const json = JSON.parse(data);

    return new TokenModel(json["token"], UserModel.fromJson(json["user"]));
  }
}

export default TokenModel;
