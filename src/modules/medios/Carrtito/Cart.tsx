import type { FC, ReactElement } from "react"
import type { typesCar } from "./car"
import { useCar } from "./useCart"


interface typeCar {
    ObjectCar: typesCar
}

export const Car: FC<typeCar> = ({ ObjectCar }): ReactElement => {
    const { cart, sumProduct, resProduct, totalItem, PrecioFinal } = useCar({ ObjectCar })


    if (!cart) return <h1>No hay componenetes para renderizar</h1>

    return (
        <>
            <h1>Carrito de compra</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }} >
                <p>Items Totales: {totalItem}</p>
                <p>Precio Final:  {PrecioFinal}</p>
            </div>

            {Object.entries(cart).map(([key, value]) => {
                return <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }} key={key}>
                    <h2 >{value.name}</h2>
                    <strong>{value.price * value.quantity}</strong>
                    <strong>Cantidad : {value.quantity}</strong>
                    <button onClick={() => sumProduct(key)}>Sumar</button>
                    <button onClick={() => resProduct(key)}>Restar</button>
                </div>
            })}
        </>

    )
}