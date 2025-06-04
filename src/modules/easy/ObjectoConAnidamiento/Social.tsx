import type React from "react"
import type { typeSocial } from "./types"

interface typesComponenteSocial {
    social: typeSocial
}


export const Social: React.FC<typesComponenteSocial> = ({ social }) => {

    return (
        <div>
            <h2>Redes Sociales</h2>
            {Object.entries(social).map(([key, value]) => {
                return <p key={key}>{key}: {value}</p>
            })}

        </div>
    )




}