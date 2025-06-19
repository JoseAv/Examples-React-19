export const profile: InterfaceProgile = {
    name: "Ana",
    details: {
        age: 28,
        bio: "Desarrolladora frontend",
        links: {
            twitter: "@ana_dev",
            github: "anadev"
        }
    }
};


export interface InterfaceProgile {
    name: string,
    details: InterfaceDetails

}

interface InterfaceDetails {
    age: number,
    bio: string,
    links: InterfaceLinks
}

interface InterfaceLinks {
    twitter: string
    github: string
}