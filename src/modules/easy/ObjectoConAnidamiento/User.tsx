import { Contact } from "./Contact"
import { userProfile } from "./types"


export const User = () => {

    return (
        <>
            <h2>Hola Soy User</h2>
            {Object.entries(userProfile).map(([key, value]) => {
                return key !== 'contact' ?
                    <div key={key}>
                        <p>{value}</p>
                    </div>
                    :
                    <div key={key}>
                        <Contact contact={value} />
                    </div>



            })}
        </>
    )

}