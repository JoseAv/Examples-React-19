import { useState } from "react"
import type { ObjectUser } from "../data/inicialObject"
import type { User } from "../interfaces/data"

export const usePersistentObject = ({ initialUser }: { initialUser: ObjectUser }) => {
    const [ManageUser, SetManageUser] = useState<null | ObjectUser>(() => {
        try {
            const stringObject = window.localStorage.getItem('user')
            if (!stringObject) return initialUser
            return JSON.parse(stringObject)
        } catch (error) {
            console.log(error)
            return initialUser
        }

    })

    const AddUser = ({ user }: { user: User }) => {

        const Users = { ...ManageUser, [crypto.randomUUID()]: user }
        SetManageUser(Users)
        RefreshUser('user', Users)
    }

    const RefreshUser = (key: string, Users: ObjectUser) => {
        window.localStorage.setItem(key, JSON.stringify(Users))
    }

    return { AddUser, ManageUser }
}