import { useReducer } from "react";
import { TasksReduce } from "./ReduceTask";
import { acctionTasks, FilterTasksCompleted, initialState, type TypeFilter } from "./typesTask";
import { FormTasks } from "./FormTask";
import { ShowTask } from "./showTask";
import './style.css'

export const ListTask = () => {
    const [state, dispatch] = useReducer(TasksReduce, initialState)
    if (!state) return <h1>No hay Tareas</h1>

    const handlerFilter = (accion: TypeFilter) => {
        dispatch({ type: acctionTasks.FilterTask, filter: accion })
    }

    return (

        <>
            <button onClick={() => handlerFilter(FilterTasksCompleted.Completed)}>Completed</button>
            <button onClick={() => handlerFilter(FilterTasksCompleted.NotCompleted)}>No Completed</button>
            <button onClick={() => handlerFilter(FilterTasksCompleted.All)}>All</button>
            <div className="task-container-list" >
                <div className="border">
                    <h2>Form</h2>
                    <FormTasks dispatch={dispatch} />
                </div>

                <div className="border tasks">
                    {state.tasks ?
                        state.tasks.map((task) => {
                            return (
                                <div key={task.id} className="task" >
                                    <ShowTask task={task} dispatch={dispatch} />
                                </div>
                            );
                        })
                        :
                        <h1>No hay mas tareas</h1>}
                </div>

            </div>
        </>
    )




}