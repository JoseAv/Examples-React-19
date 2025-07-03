import { initialUser } from "./data/inicialObject"
import { usePersistentObject } from "./hooks/usePersistentObject"

export const Persistent = () => {
    const { ManageUser } = usePersistentObject({ initialUser })

    if (!ManageUser || !Object.keys(ManageUser).length) return <h1>Cargando</h1>
    return (
        <div>
            <h1>Prueba</h1>
            <div>
                {Object.entries(ManageUser).map(([field, values]) => {
                    return <div key={field} >
                        <h2>ID: {field}</h2>
                        <h4>Nombre:{values.profile.name}</h4>
                        <p>LasLogin: {values.lastLogin.toString()}</p>
                        <strong>Roles: {values.permissions.join(',')}</strong>
                    </div >

                })}
            </div>
        </div>

    )


}