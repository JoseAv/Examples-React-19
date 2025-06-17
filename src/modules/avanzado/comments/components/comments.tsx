import { useState } from "react";
import { type TypeComments } from "../types/commentsTypes";
import { Replies } from "./replies";

export const Comments = ({ comments }: { comments: TypeComments }) => {

    const [AllComments] = useState<TypeComments>(comments)
    if (!comments) return <h1>No hay comentarios</h1>
    if (!AllComments) return <h1>Cargando</h1>

    const handleForm = (e: React.FormEvent<HTMLFormElement>, KeyComment: string) => {
        e.preventDefault()
        const { respuesta } = e.target as HTMLFormElement
        const newComments = { [crypto.randomUUID()]: { text: respuesta.value, replies: {} } }
        console.log(FindInsertComment(AllComments, newComments, KeyComment))
    }

    const FindInsertComment = (arr: TypeComments, respuesta: TypeComments, KeyComment: string) => {
        if (Object.entries(arr).length <= 0) return arr
        let newResponse = {}
        for (const [key, value] of Object.entries(arr)) {
            newResponse = key === KeyComment ? { text: value.text, replies: { ...respuesta, ...FindInsertComment({ ...value.replies }, respuesta, KeyComment) } } : { [key]: { text: value.text, replies: { ...FindInsertComment({ ...value.replies }, respuesta, KeyComment) } } }
        }
        return newResponse
    }



    return (
        <>
            <h1>Comentarios</h1>
            {Object.entries(AllComments).map(([key, value]) => {
                return <div key={key} style={{ height: '100%', border: '1px solid white', margin: '10px', padding: '5px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h4>Comento: {value.text}</h4>
                    <div style={{ height: '100%', border: '1px solid white' }}>
                        <div>
                            <h5>Respondio a {key}</h5>
                            <Replies replies={value.replies} />
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