import { useState } from "react";
import { type TypeComments } from "../types/commentsTypes";
import { Replies } from "./replies";

export const Comments = ({ comments }: { comments: TypeComments }) => {

    const [AllComments, setComments] = useState<TypeComments>(comments)
    if (!comments) return <h1>No hay comentarios</h1>
    if (!AllComments) return <h1>Cargando</h1>

    const handleForm = (e: React.FormEvent<HTMLFormElement>, KeyComment: string) => {
        e.preventDefault()
        const { respuesta } = e.target as HTMLFormElement
        const newComments = { [crypto.randomUUID()]: { text: respuesta.value, replies: {} } }
        setComments(FindInsertComment(AllComments, newComments, KeyComment))
    }

    // const FindInsertComment = (commmentsClone: TypeComments, respuesta: TypeComments, KeyComment: string) => {
    //     if (Object.entries(commmentsClone).length <= 0) return commmentsClone

    //     for (const [key, value] of Object.entries(commmentsClone)) {
    //         if (key === KeyComment) {
    //             value.replies = { ...value.replies, ...respuesta }
    //             return commmentsClone
    //         }
    //         FindInsertComment(value.replies, respuesta, KeyComment)
    //     }
    //     return commmentsClone
    // }

    const FindInsertComment = (
        commmentsClone: TypeComments,
        respuesta: TypeComments,
        KeyComment: string
    ): TypeComments => {
        // Versión más funcional (sin mutaciones):
        return Object.entries(commmentsClone).reduce((acc, [key, value]) => {
            if (key === KeyComment) {
                return {
                    ...acc,
                    [key]: {
                        ...value,
                        replies: { ...value.replies, ...respuesta }
                    }
                };
            }
            return {
                ...acc,
                [key]: {
                    ...value,
                    replies: FindInsertComment(value.replies, respuesta, KeyComment)
                }
            };
        }, {} as TypeComments);
    };



    return (
        <>
            <h1>Comentarios</h1>
            {Object.entries(AllComments).map(([key, value]) => {
                return <div key={key} style={{ height: '100%', border: '1px solid white', margin: '10px', padding: '5px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h4>Comento: {value.text}</h4>
                    <div style={{ height: '100%', border: '1px solid white' }}>
                        <div>
                            <h5>Respondio a {key}</h5>
                            <Replies replies={value.replies} handleForm={handleForm} />
                        </div>
                    </div>
                    <form onSubmit={(e) => handleForm(e, key)}>
                        <input name="respuesta" type="text" />
                        <button>Responder a {key}</button>
                    </form>
                </div>
            })}
        </>

    )



}