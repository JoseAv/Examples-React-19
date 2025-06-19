import { useState } from "react";
import type { InterfaceProgile } from "./types";

export const useProfile = ({ profile }: { profile: InterfaceProgile }) => {
    const [currentProfile, SetProfile] = useState(profile)

    const changeName = (value: string, campo: string) => {
        SetProfile(SearchChange(currentProfile, campo, value))
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SearchChange = (profileSearch: any, key: string, newValue: string): any => {
        if (typeof profileSearch !== "object") return profileSearch

        return Object.entries(profileSearch).reduce((acc, [campo, value]) => {
            console.log(campo)
            console.log(key)

            console.log(campo === key)
            if (campo === key) {
                return { ...acc, [key]: newValue }
            }
            return { ...acc, [campo]: typeof value === 'object' ? SearchChange(value, key, newValue) : value }
        }, {})
    }


    return { currentProfile, changeName }

}