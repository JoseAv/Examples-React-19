export interface User {
    id: string;
    name: string;
    avatar: string;
}

export interface TypesComment {
    id: string;
    user: User;
    text: string;
    timestamp: Date;
    replies: TypesComment[]; // ¡Recursividad en tipos!
}

export const commentData: TypesComment = {
    id: "1",
    user: {
        id: "user1",
        name: "Ana",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    text: "¡Este post es muy útil!",
    timestamp: new Date("2023-10-01"),
    replies: [
        {
            id: "2",
            user: {
                id: "user2",
                name: "Carlos",
                avatar: "https://i.pravatar.cc/150?img=2",
            },
            text: "Gracias, Ana. ¿Alguna sugerencia para mejorar?",
            timestamp: new Date("2023-10-02"),
            replies: [
                {
                    id: "3",
                    user: {
                        id: "user3",
                        name: "Luisa",
                        avatar: "https://i.pravatar.cc/150?img=3",
                    },
                    text: "Podrías añadir ejemplos de código.",
                    timestamp: new Date("2023-10-03"),
                    replies: [],
                },
            ],
        },
    ],
};