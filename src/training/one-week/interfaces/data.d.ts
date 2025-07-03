

export interface User {
    profile: profile,
    lastLogin: Date,
    permissions: string[]
}

export interface profile {
    name: string
}