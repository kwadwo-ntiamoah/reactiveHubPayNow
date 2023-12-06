export type UserType = "admin" | "merchant"

class UserModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public type: UserType,
        public phone?: string,
        public merchantId?: string,
        public adminId?: string,
    ) {}

    static fromJson(data: any): UserModel {
        var jsonData = JSON.stringify(data)
        const json = JSON.parse(jsonData)

        return new UserModel(
            json["first_name"] ?? json["firstName"],
            json["last_name"] ?? json["lastName"],
            json["email"] ?? json["email"],
            json["type"] ?? json["type"],
            json["phone_number"] ?? json["phoneNumber"],
            json["merchant_id"] ?? json["merchantId"],
            json["admin_id"] ?? json["adminId"]
        )
    }
}

export default UserModel