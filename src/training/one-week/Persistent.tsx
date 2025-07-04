import type { FormEvent } from "react"
import { initialUser } from "./data/inicialObject"
import { usePersistentObject } from "./hooks/usePersistentObject"

export const Persistent = () => {
    const { addItem, state } = usePersistentObject({ initialValue: initialUser })

    if (!state || !Object.keys(state).length) return <h1>Cargando</h1>

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name') as string;
        const permissions = formData.get('permissions') as string;

        const NewUser = {
            profile: { name: name },
            lastLogin: new Date(),
            permissions: [permissions.toString()]
        };
        addItem(NewUser);
        form.reset();
    };


    return (
        <div>
            <h1>Prueba</h1>
            <div>
                {Object.entries(state).map(([field, values]) => {
                    return <div key={field} >
                        <h2>ID: {field}</h2>
                        <h4>Nombre:{values.profile.name}</h4>
                        <p>LasLogin: {values.lastLogin.toString()}</p>
                        <strong>Roles: {values.permissions.join(',')}</strong>
                    </div >

                })}
            </div>

            <form onSubmit={handleForm}>
                <input type="text" placeholder="Name" name="name" />
                <input type="text" placeholder="Permissions" name="permissions" />
                <button>Enviar Data</button>
            </form>
        </div>

    )


}