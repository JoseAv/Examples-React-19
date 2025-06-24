import { acctionTasks, type Interfacetasks } from "./typesTask";
import type { typeAction } from "./ReduceTask";

export const ShowTask = ({ task, dispatch }: { task: Interfacetasks, dispatch: (action: typeAction) => void }) => {

    const handleComplete = ({ id }: { id: string }) => {
        dispatch({ type: acctionTasks.CompleteTask, id })
    }

    const Delete = ({ id }: { id: string }) => {
        dispatch({ type: acctionTasks.DeleteTask, id })
    }


    return (
        <>
            <h3>{task.id}</h3>
            <h4>Tars: {task.title}</h4>
            <button onClick={() => handleComplete({ id: task.id })} >Completed: {task.completed ? '✅' : '❌'}</button>
            <button onClick={() => Delete({ id: task.id })} >Delete</button>
        </>
    )

}