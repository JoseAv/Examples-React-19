export interface typeProfile {
    name: string
    contact: typeContact
}

export interface typeContact {
    email: string
    phone: string
    social: typeSocial
}

export interface typeSocial {
    twitter: string
    github: string
}


export const userProfile: typeProfile = {
    name: "Carlos",
    contact: {
        email: "carlos@example.com",
        phone: "+123456789",
        social: {
            twitter: "@carlosdev",
            github: "carlosgithub"
        }
    }
};