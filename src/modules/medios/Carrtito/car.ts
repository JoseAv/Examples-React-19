export const cart: typesCar = {
    item1: { name: "Zapatos", price: 50, quantity: 2 },
    item2: { name: "Camisa", price: 20, quantity: 3 },
    item3: { name: "Pantalón", price: 30, quantity: 1 }
};

export type typesCar = Record<string, car>

interface car {
    name: string
    price: number
    quantity: number
}