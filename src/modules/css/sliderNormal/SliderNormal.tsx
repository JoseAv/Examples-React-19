import { useLayoutEffect, useRef, useState } from "react"
import { Cart } from "./Cart"
import './slider.css'
export const SliderNormal = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const ElementRef = useRef<HTMLDivElement>(null)
    const [traslate, setTraslate] = useState(0);
    // const [medidas, setMedidas] = useState({
    //     fatherWith: 0,
    //     elementosVisibles: 0,
    //     anchoElemento: 0,
    //     gap: 0
    // });

    const [medidas, setMedidas] = useState({

    });


    // useLayoutEffect(() => {
    //     const abort = new AbortController()
    //     const calculate = () => {
    //         if (ElementRef.current) {
    //             const container = ElementRef.current.parentElement?.clientWidth || 0;
    //             const element = ElementRef.current.firstElementChild?.clientWidth || 1;
    //             const gap = parseFloat(getComputedStyle(ElementRef.current).gap) || 0;
    //             const visible = Math.floor((container / (element + gap)))
    //             setMedidas({ fatherWith: container, elementosVisibles: visible, anchoElemento: element, gap: +gap })
    //         }
    //     }
    //     calculate()
    //     // aqui estamos poniendo un evento al resize si la venta cambia de tama;o entonces se vuelve a poner calculate
    //     window.addEventListener('resize', calculate, { signal: abort.signal })
    //     return () => { abort.abort() }
    // }, [])


    useLayoutEffect(() => {
        const abort = new AbortController()
        const calculate = () => {
            if (ElementRef.current) {
                const container = ElementRef.current.parentElement?.clientWidth || 0;
                const element = ElementRef.current.firstElementChild?.clientWidth || 1;
                const gap = parseFloat(getComputedStyle(ElementRef.current).gap) || 0;
                const visible = Math.floor((container / (element + gap)))
                setMedidas({ fatherWith: container, elementosVisibles: visible, anchoElemento: element, gap: +gap })
            }
        }
        calculate()
        // aqui estamos poniendo un evento al resize si la venta cambia de tama;o entonces se vuelve a poner calculate
        window.addEventListener('resize', calculate, { signal: abort.signal })
        return () => { abort.abort() }
    }, [])


    // const siguiente = () => {
    //     const nuevaPosicion = traslate - (medidas.elementosVisibles * medidas.anchoElemento)
    //     setTraslate(nuevaPosicion)
    // }




    return (
        <>
            <div className="main-container">
                {/* <button onClick={siguiente}>Siguiente</button> */}
                <div className=" container-principal-cart">
                    <div ref={ElementRef} className="container-cart" style={{ transform: `translateX(${traslate}px)` }}>
                        {array.map((number) => {
                            return <div className="cart" key={number} >
                                <Cart number={number} />
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </>


    )



}