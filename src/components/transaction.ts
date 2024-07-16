export interface ITransaction {
    id: string
    date: string
    comments: string
}

export interface IResponse {
    data: ITransaction[]
}