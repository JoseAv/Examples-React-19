import type { ReactElement } from "react";
import { user } from "../ComponentsReutilizaables/objectos";
import type { dataUser } from "./types";

export const ExtraerUser = ({ users }: { users: Record<string, dataUser> }): ReactElement => {
    if (!user) return <h1>No hay usuario</h1>
    return (
        <>
            {Object.entries(users).map(([key, value]) => {
                return value.active ?
                    <div key={key}>
                        <div>
                            <h3>{value.name}</h3>
                            <p>{value.age}</p>
                        </div>
                    </div>
                    :
                    null
            })}

        </>

    )



}