import { useShowCart } from '../features/cart/hook/cart'
import './index.css'

export const Index = () => {
    const [show, setShow] = useShowCart()

    console.log(show)
    return (
        <>

            <div className="main-container">
                <header>hola</header>
                <main>
                    <button onClick={() => setShow((prev: boolean) => !prev)}>ChangeCart</button>
                </main>
                <section className={`${show ? 'show' : 'noShow'}`}></section>
                <footer>hola</footer>
            </div>
        </>
    )
}