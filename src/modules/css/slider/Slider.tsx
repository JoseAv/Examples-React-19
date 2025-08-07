import './slider.css'

import { Content } from "./Content";
const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



export const Slider = () => (
    <div className="body-main">
        <div className='container-carrouserl'>
            {elements.map((ele) => {
                return (
                    <Content ele={ele} />
                )
            })}
        </div>

    </div>


)

