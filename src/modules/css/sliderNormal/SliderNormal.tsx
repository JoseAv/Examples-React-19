import { useLayoutEffect, useRef } from "react"
import { Cart } from "./Cart"
import './slider.css'
export const SliderNormal = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const ElementRef = useRef<HTMLDivElement>(null)


    useLayoutEffect(() => {
        const abort = new AbortController()
        const calculate = () => {
            if (ElementRef.current) {
                let container = ElementRef.current.parentElement?.clientWidth;
                let element = ElementRef.current.firstElementChild?.clientWidth
                console.log(element)
                console.log(container)

            }


        }


        calculate()


    }, [])





    return (
        <div className="main-container">
            <button>Siguiente</button>
            <div ref={ElementRef} className="container-cart">
                {array.map((number) => {
                    return <div className="cart" key={number} >
                        <Cart number={number} />
                    </div>
                })}
            </div>

        </div>


    )



}