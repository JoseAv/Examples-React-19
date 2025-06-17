// interface typesCommets {
//     replies: Comment
// }

import type { TypesComment } from "./types"


export const CommentsNoUsado = ({ replies }: { replies: TypesComment }) => {

    return (
        <div>
            <h1>Comentarios</h1>
            {Object.entries(replies).map(([key, value]) => {
                if (key === 'user') {
                    return (
                        <div key={value.id}>
                            <div>
                                <img src={value.avatar} alt="Este es un avatar" />
                            </div>

                            <div>
                                <h2>Nombre: {value.name}</h2>
                                <p>Id:{value.id} </p>
                            </div>
                        </div>
                    )
                }

                if (key === 'text') {
                    return (
                        <div key={value}>
                            <h3>{value}</h3>
                        </div>
                    )
                }

                if (key === 'replies') {
                    return value.map((ele: TypesComment, index: number) => (
                        <CommentsNoUsado key={index} replies={ele} />
                    ))
                }
            })}

        </div>


    )


}