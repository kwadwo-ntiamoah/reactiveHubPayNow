import type { IAuthRepo } from "@/Data/repository";
import { inject, injectable } from "tsyringe";
import { LoginEntity } from "../entity";
import ApiResponse from "@/Data/model/api.model";

@injectable()
export class AuthService {
    constructor(@inject("IAuthRepo") private _authRepo: IAuthRepo) {}
    
    async login(payload?: LoginEntity): Promise<ApiResponse> {
        return await this._authRepo.login(payload!)
    }
}

