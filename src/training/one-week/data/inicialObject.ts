import type { User } from "../interfaces/data";

export const initialUser: ObjectUser = {
    ['1']: {
        profile: { name: 'John' },
        lastLogin: new Date(),
        permissions: ['admin', 'editor']
    },
    ['3']: {
        profile: { name: 'Men' },
        lastLogin: new Date(),
        permissions: ['admin']
    },
    ['2']: {
        profile: { name: 'Nivea' },
        lastLogin: new Date(),
        permissions: ['editor']
    }
}

export type ObjectUser = Record<string, User>
