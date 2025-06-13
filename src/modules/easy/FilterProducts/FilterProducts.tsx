import type { RecordTypes } from "./Filter";

export const FilterProductos = ({ products }: { products: RecordTypes }) => {
    if (!products) return <h1>No hay productos</h1>

    return (
        <>
            {Object.entries(products).map(([key, value]) => {
                return value.price < 100 ?
                    <div key={key}>
                        <h3>Nombre: {value.name}</h3>
                        <p>Precio: {value.price}</p>
                        <p>Stock: {value.stock}</p>
                    </div>
                    :
                    null

            })}
        </>


    )




}