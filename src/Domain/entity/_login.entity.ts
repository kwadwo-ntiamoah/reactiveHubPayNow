import { UserType } from "@/Data/model/user.model";

export class LoginEntity {
    constructor(
        public email: string,
        public password: string,
        public userType: UserType
    ) {}

    toJson() {
        return {
            "email": this.email,
            "password": this.password,
            "user_type": this.userType
        }
    }
}
