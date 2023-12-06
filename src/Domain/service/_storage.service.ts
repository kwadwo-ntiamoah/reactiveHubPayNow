import { injectable } from "tsyringe";

@injectable()
export class StorageService {
    constructor() {}

    setData = (key: string, data: any) => {
        var jsonData = JSON.stringify(data)
        sessionStorage.setItem(key, jsonData)
    }

    getData = (key: string): string | null => {
        return sessionStorage.getItem(key)
    }

    removeData = (key: string) => {
        sessionStorage.removeItem(key)
    }

    clear = () => {
        sessionStorage.clear()
    }
}

export const StoreKeys = {
    TOKEN: "token"
}