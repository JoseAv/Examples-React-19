interface typesProducts {
    name: string
    price: number
    stock: number
}
export type RecordTypes = Record<string, typesProducts>

export const products: RecordTypes = {
    prod1: { name: "Laptop", price: 1000, stock: 5 },
    prod2: { name: "Mouse", price: 20, stock: 100 },
    prod3: { name: "Teclado", price: 50, stock: 30 }
};