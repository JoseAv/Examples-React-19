
export interface Interfaceusers {
    name: string
    role: typeRol
    status: typeStatus
}

export const Roles = {
    Admin: 'admin',
    User: 'user',
    Editor: 'editor',
} as const

export const Status = {
    Active: 'active',
    Inactive: 'inactive'
} as const

export type typeStatus = typeof Status[keyof typeof Status]

export type typeRol = typeof Roles[keyof typeof Roles]

export type RecordUsers = Record<string, Interfaceusers>

export const users: RecordUsers = {
    user1: { name: "María", role: "admin", status: "active" },
    user2: { name: "Carlos", role: "user", status: "inactive" },
    user3: { name: "Luisa", role: "editor", status: "active" }
};

