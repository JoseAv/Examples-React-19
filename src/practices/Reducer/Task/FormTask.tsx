
import type { typeAction } from "./ReduceTask";
import { acctionTasks } from "./typesTask"


interface FormTasksProps {
    dispatch: (action: typeAction) => void; // 👈 Tipo correcto para dispatch
}



export const FormTasks = ({ dispatch }: FormTasksProps) => {
    const FormTasks = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { titulo } = e.currentTarget
        dispatch({ type: acctionTasks.AddTask, newTask: { title: titulo.value } })

    }

    return (
        <form onSubmit={(e) => FormTasks(e)}>
            <label htmlFor="">Add Task</label>
            <input type="text" placeholder="Agregue una tarea" name="titulo" />
            <button>Enviar Tarea</button>
        </form>

    )



}