export const product: product = { name: "Zapatos", price: 50, stock: 10 };
export const user: user = { name: "Ana", role: "Dev" };



export interface product {
    name: string
    price: number
    stock: number
}


export interface user {
    name: string
    role: string
}

