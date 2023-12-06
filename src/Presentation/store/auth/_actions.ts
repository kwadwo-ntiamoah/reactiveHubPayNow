import { LoginEntity } from "@/Domain/entity";
import { AuthService } from "@/Domain/service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { container } from "tsyringe";

export const loginAsync = createAsyncThunk(
    "auth/loginAsync",
    async(payload: LoginEntity): Promise<string> => {
        const authService = container.resolve(AuthService)
        const response = await authService.login(payload)

        if (response.statusCode == 200) {
            return response.data
        }

        throw response.data.message
    }
)