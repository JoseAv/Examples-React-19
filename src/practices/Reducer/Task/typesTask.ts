export interface TaskState {
    tasks: Interfacetasks[] | []
    OriginalTasks: Interfacetasks[] | []
    ApplyFilter: TypeFilter
}

export interface Interfacetasks {
    id: string
    title: string
    completed: boolean
    edit: boolean
}

export type typeNewTask = Pick<Interfacetasks, 'title'>

export const acctionTasks = {
    AddTask: 'Add_Task',
    DeleteTask: 'Delete_Task',
    CompleteTask: 'Complete_Task',
    FilterTask: 'Filter_Tasks'
} as const




export const FilterTasksCompleted = {
    Completed: 'Completed',
    NotCompleted: 'Not_Completed',
    All: 'All'
} as const

export type TypeFilter = typeof FilterTasksCompleted[keyof typeof FilterTasksCompleted]

export const initialState: TaskState = {
    tasks: [],
    OriginalTasks: [],
    ApplyFilter: FilterTasksCompleted.All
};