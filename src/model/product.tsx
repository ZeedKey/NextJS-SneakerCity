interface IRating {
    count: number;
    rate: number;
}
export interface IProduct {
    id: number
    title: string
    description: string
    price: number
    rating: IRating
    image: string
    category: string
}