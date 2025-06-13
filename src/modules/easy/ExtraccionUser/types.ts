
export interface dataUser {
    name: string
    age: number
    active: boolean
}


export const users: Record<string, dataUser> = {
    user1: { name: "María", age: 30, active: true },
    user2: { name: "Carlos", age: 25, active: false },
    user3: { name: "Luisa", age: 40, active: true }
};
