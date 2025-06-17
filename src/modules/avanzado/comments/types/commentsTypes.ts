export const comments: TypeComments = {
    comment1: {
        text: "¡Me encanta esto!",
        replies: {
            reply1: { text: "¡Yo también!", replies: { reply14: { text: "¿Es cierto?", replies: {} } } },
            reply2: { text: "Gracias por compartir", replies: {} }
        }
    },
    comment2: {
        text: "¿Alguien más lo ha probado?",
        replies: {
            reply3: {
                text: "Sí, funciona bien",
                replies: {
                    reply4: { text: "¿En serio?", replies: {} }
                }
            }
        }
    }
};



export interface InterfacesComments {
    text: string
    replies: TypeComments
}

export type TypeComments = Record<string, InterfacesComments>

