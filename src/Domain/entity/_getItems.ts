export class GetAllItemsEntity {
    constructor(
        public page: string,
        public perPage: string,
    ) {}

    toJson() {
        return {
            "page": this.page,
            "per_page": this.perPage,
        }
    }
}
