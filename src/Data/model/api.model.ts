class ApiResponse {
    constructor(public statusCode: number, public data: any) {}

    static fromJson(jsonString: string): ApiResponse {
        const json = JSON.parse(jsonString)

        return new ApiResponse(
            json["status_code"], json["data"]
        );
    }
}

export default ApiResponse