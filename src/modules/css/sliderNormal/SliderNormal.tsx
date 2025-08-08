import { Cart } from "./Cart"
import './slider.css'
export const SliderNormal = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    return (
        <div className="main-container">
            <button>Siguiente</button>
            <div className="container-cart">
                {array.map((number) => {
                    return <>
                        <Cart number={number} />
                    </>
                })}
            </div>

        </div>


    )



}