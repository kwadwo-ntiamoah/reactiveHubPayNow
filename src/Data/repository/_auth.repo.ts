import { LoginEntity } from "@/Domain/entity"
import { inject, injectable } from "tsyringe"
import { API_CONSTANTS, type IHttpClient } from "@/Core/network"
import ApiResponse from "../model/api.model"

export interface IAuthRepo {
    login: (payload: LoginEntity) => Promise<ApiResponse>
}

@injectable()
export class AuthRepo implements IAuthRepo {
    constructor(@inject("IHttpClient") private _client: IHttpClient) {}

    async login(payload: LoginEntity): Promise<ApiResponse> {
        const res = await this._client.post(API_CONSTANTS.AUTH, payload.toJson());
        return res;
    }

}

export default AuthRepo