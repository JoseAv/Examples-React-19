import { useState } from "react";
import type { FormConfig } from "./types";

export const DynamicForm = ({ form }: { form: FormConfig }) => {
    const [FormValues, SetForm] = useState<Record<string, string | number>>({})

    const handleChange = (name: string, value: string | number) => {
        SetForm({ ...FormValues, [name]: value })
    }

    console.log(FormValues);



    return (
        <div className="Formularios">
            {form.fields.map((ele) => {
                if (ele.type !== 'select') {
                    return (
                        <div key={ele.name}>
                            <label htmlFor={ele.label}>{ele.label}</label>
                            <input onChange={(e) => handleChange(ele.name, e.target.value)} type={ele.type} required={ele.required} />
                        </div>
                    )
                }

                if (ele.type === 'select') {
                    return (
                        <div key={ele.name}>
                            <label htmlFor={ele.label}>{ele.label}</label>
                            <select
                                name={ele.name}
                                onChange={(e) => handleChange(ele.name, e.target.value)}
                            >
                                {ele.options.map((opt) => {
                                    return (
                                        <option key={opt} value={opt}>{opt}</option>
                                    )
                                })}
                            </select>
                        </div>
                    )
                }

            })}

        </div>


    )



}