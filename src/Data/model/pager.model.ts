class PagerModel {
    constructor(public totalRecords: string) {}

    static fromJson(data: any): PagerModel {
        var jsonData = JSON.stringify(data)
        const json = JSON.parse(jsonData)

        return new PagerModel(
            json["total_records"] ?? json["totalRecords"],
        )
    }
}