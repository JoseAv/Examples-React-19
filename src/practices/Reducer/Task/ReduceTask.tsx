import { acctionTasks, FilterTasksCompleted, type TaskState, type TypeFilter, type typeNewTask } from "./typesTask"

export interface typeAction {
    type: string
    id?: string
    filter?: TypeFilter
    newTask?: typeNewTask
}

export const TasksReduce = (state: TaskState, action: typeAction) => { // Reducido -> Bajar tama;o
    if (action.type === acctionTasks.AddTask) {
        if (!action.newTask) return state
        const newAdd = {
            id: crypto.randomUUID(),
            title: action.newTask.title,
            completed: false,
            edit: false
        }
        const OriginalArray = [...state.OriginalTasks, newAdd]
        console.log(state.ApplyFilter === FilterTasksCompleted.NotCompleted)
        console.log(state.ApplyFilter);
        console.log(FilterTasksCompleted.NotCompleted);


        if (state.ApplyFilter === FilterTasksCompleted.Completed) {
            return {
                ...state,
                OriginalTasks: OriginalArray
            }
        }

        const AddArray = [...state.tasks, newAdd]

        return {
            ...state,
            tasks: AddArray,
            OriginalTasks: OriginalArray
        }
    }

    if (action.type === acctionTasks.CompleteTask) {
        if (!action.id) return state

        const editTask = [...state.tasks].map((task) => {
            if (task.id === action.id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })

        const editTaskOriginal = [...state.OriginalTasks].map((task) => {
            if (task.id === action.id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })

        return {
            ...state,
            tasks: [...editTask],
            OriginalTasks: [...editTaskOriginal]
        }
    }

    if (action.type === acctionTasks.DeleteTask) {
        if (!action.id) return state
        const deleteTask = [...state.tasks].filter((task) => task.id !== action.id)
        const deleteTaskOriginal = [...state.OriginalTasks].filter((task) => task.id !== action.id)
        return {
            ...state,
            tasks: [...deleteTask],
            OriginalTasks: [...deleteTaskOriginal]
        }
    }

    if (action.type === acctionTasks.FilterTask) {
        if (!action.filter) return state // Siempe debemos de devolver el estado actual para no crear nuvos estados
        if (action.filter === FilterTasksCompleted.All) {
            return {
                ...state,
                tasks: state.OriginalTasks,
                ApplyFilter: FilterTasksCompleted.All
            }
        }

        const FilterTask = [...state.OriginalTasks].filter((task) => task.completed === (action.filter === FilterTasksCompleted.Completed ? true : false))
        return {
            ...state,
            tasks: [...FilterTask],
            ApplyFilter: action.filter
        }
    }
    return state

}