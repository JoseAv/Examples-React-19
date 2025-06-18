import type { TypeComments } from "../types/commentsTypes"


export const Replies = ({ replies, handleForm }: { replies: TypeComments | null, handleForm: (e: React.FormEvent<HTMLFormElement>, KeyComment: string) => void }) => {
    if (!replies) return null
    return (<>
        <>
            {Object.entries(replies).map(([key, value]) => {
                return <div key={key} style={{ height: '100%', border: '1px solid white', margin: '10px', padding: '5px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h4>Comento: {value.text}</h4>
                    <strong>Respuesta de: {key}</strong>
                    <form onSubmit={(e) => handleForm(e, key)}>
                        <input name="respuesta" type="text" />
                        <button>Responder a {key}</button>
                    </form>

                    {Object.keys(value.replies).length > 0 ?
                        <div style={{ height: '100%', border: '1px solid white' }}>
                            <div>
                                <Replies replies={value.replies} handleForm={handleForm} />
                            </div>
                        </div>
                        : null}
                </div>
            })}
        </>


    </>)


}