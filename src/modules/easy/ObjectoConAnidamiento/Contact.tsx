import type React from "react"
import type { typeContact } from "./types"
import { Social } from "./Social"

interface typesContactos {
    contact: typeContact
}


export const Contact: React.FC<typesContactos> = ({ contact }) => {

    return (
        <div>
            <h2>Contactos</h2>
            {Object.entries(contact).map(([key, value]) => {
                return key !== 'social' ?
                    <div key={key}>
                        {
                            key === 'email'
                                ?
                                <p>Email: {value}</p>
                                :
                                <strong>Phone: {value}</strong>
                        }
                    </div>
                    :
                    <div key={key}>
                        <Social social={value} />
                    </div>
            })}
        </div>
    )




}