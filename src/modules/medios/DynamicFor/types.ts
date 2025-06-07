export const formConfig: FormConfig = {
    fields: [
        {
            type: "text",
            name: "username",
            label: "Nombre de usuario",
            required: true
        },
        {
            type: "select",
            name: "role",
            label: "Rol",
            options: ["Admin", "User"],
            defaultValue: "User"
        }
    ]
}


export interface FormConfig {
    fields: UnionForm[]
}

interface Fields<Ttypes extends string, Tvalue = string> {
    type: Ttypes
    name: string
    label: string
    required?: boolean
    defaultValue?: Tvalue
}
interface TypeOptionsdInput extends Fields<'select'> {
    options: string[]
}

type UnionForm = TypeOptionsdInput | Fields<'text'>