import { useMemo, useState } from "react"
import type { typesCar } from "./car"


export const useCar = ({ ObjectCar }: { ObjectCar: typesCar }) => {
    const [cart, setCart] = useState<typesCar>(ObjectCar)


    const sumProduct = (itemName: string) => {
        console.log(itemName)
        if (!cart[itemName]) {
            return
        }
        const newProducts = { ...cart }
        newProducts[itemName].quantity += 1
        setCart(newProducts)
    }


    const resProduct = (itemName: string) => {
        if (!cart[itemName]) return
        const newProducts = { ...cart }

        if (newProducts[itemName].quantity > 1) {
            newProducts[itemName].quantity -= 1
            setCart(newProducts)
            return
        }

        setCart(
            Object.entries(newProducts).reduce((acc, [key, value]) => {
                return key === itemName ? acc : { ...acc, [key]: value }
            }, {})
        )
    }

    const TotalItem = () => {
        return Object.entries({ ...cart }).reduce((acc, [, value]) => {
            return acc + value.quantity
        }, 0)
    }

    const PrecioTotal = () => {
        return Object.entries({ ...cart }).reduce((acc, [, value]) => {
            return acc + (value.quantity * value.price)
        }, 0)
    }


    const summary = useMemo(() => ({
        totalItem: TotalItem(),
        PrecioFinal: PrecioTotal()
    }), [cart])



    return { cart, sumProduct, resProduct, TotalItem, PrecioTotal, totalItem: summary.totalItem, PrecioFinal: summary.PrecioFinal }
}