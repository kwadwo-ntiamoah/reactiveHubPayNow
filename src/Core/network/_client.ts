import ApiResponse from "@/Data/model/api.model";
import TokenModel from "@/Data/model/token.model";
import { StorageService, StoreKeys } from "@/Domain/service";
import axios, { AxiosError, AxiosResponse } from "axios";
import { container, injectable } from "tsyringe";

export interface IHttpClient {
    get: (url: string, params?: any) => Promise<ApiResponse>,
    post: (url: string, payload: any | null ) => Promise<ApiResponse>
}

@injectable()
export class AxiosClient implements IHttpClient {
    constructor() {
        const storageService = container.resolve(StorageService)

        axios.interceptors.request.use((config) => {
            const temp = storageService.getData(StoreKeys.TOKEN)
            
            if (temp) {
                const data = TokenModel.fromJson(temp)
                config.headers["Authorization"] = `Bearer ${data.token}`
            }
            return config
        }, (error) => {
            return Promise.reject(error)
        })
    }

    async get(url: string, params: any) {
        try {
            const response = await axios.get(url, { params: params });
            return this._parseResponse(response)
        } catch (err: AxiosError | any) {
            return this._parseResponse(err.response)
        }
    }

    async post(url: string, payload: any) {
        try {
            const response = await axios.post(url, payload);
            return this._parseResponse(response)
        } 
        catch (err: AxiosError | any) {
            return this._parseResponse(err.response)
        }
    }

    _parseResponse(response: AxiosResponse) {
        return ApiResponse.fromJson(JSON.stringify(response.data))
    }
    
}