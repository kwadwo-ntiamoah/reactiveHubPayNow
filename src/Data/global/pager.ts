export interface IPager {
    page: number
    pageSize: number
}

export interface IPaginationState {
    hasNext: boolean
    hasPrev: boolean
}