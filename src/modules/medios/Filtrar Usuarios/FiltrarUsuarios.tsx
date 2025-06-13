import { Filter, Roles, Status, type RecordUsers } from "./Filtrar"
import { useFilterUser } from "./useFilterUser"
import type { ReactElement } from "react"

export const FiltrarUsuarios = ({ users }: { users: RecordUsers }): ReactElement => {
    const { stateUser, ChangeFilters, ResetFilter } = useFilterUser({ users })

    return (
        <>
            <div>
                <button onClick={() => ChangeFilters(Filter.Status, Status.Active)}>Activos</button>
                <button onClick={() => ChangeFilters(Filter.Status, Status.Inactive)}>Inactivos</button>
                <button onClick={() => ChangeFilters(Filter.Role, Roles.Admin)}>Admins</button>
                <button onClick={() => ChangeFilters(Filter.Role, Roles.User)}>Users</button>
                <button onClick={() => ChangeFilters(Filter.Role, Roles.Editor)}>editor</button>
                <button onClick={() => ResetFilter()}>Reset</button>
            </div>
            {
                !stateUser
                ||
                Object.keys(stateUser).length === 0
                ||
                <table style={{ border: '1px solid', width: '100%' }}>
                    <caption>Esta es mi tabla de Usuarios</caption>
                    <thead>
                        <tr>
                            {Object.keys(Object.values(stateUser)[0]).map((value) => {
                                return <th key={value}>{value}</th>

                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {Object.values(stateUser).map((userNormal) => {
                            return <tr key={userNormal.name}>
                                {Object.entries(userNormal).map(([key, value]) => {
                                    return <td key={key}>{value}</td>
                                })}
                            </tr>
                        })}

                    </tbody>


                </table>
            }


        </>

    )


}