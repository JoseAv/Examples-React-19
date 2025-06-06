
interface typeCard<T> {
    data: T;
}


// <T,> Asi es como le decimos que no es JSX si no un generico, ya que el componente no sabe que queremos escribir

export const Card = <T,>({ data }: typeCard<T>): React.ReactElement => {
    console.log(data)
    if (typeof data !== 'object' || data === null || Array.isArray(data)) return <h1>No Hay Usuario</h1>
    return (
        <>
            {Object.entries(data).map(([key, value]) => {
                if (key === 'nombre') {
                    return <h2>{key}: {value}</h2>
                }
                return <div key={key}>
                    <h3>Datos</h3>
                    <p>{key}: {value}</p>
                </div>
            })}

        </>
    )
}


///Version Mejorara

import React from 'react';

// interface typeCard<T extends object> {
//     data: T;
// }

// export const Card = <T extends object>({ data }: typeCard<T>): React.ReactElement => {
//     if (typeof data !== 'object' || data === null || Array.isArray(data)) {
//         return <h1>Datos no válidos</h1>;
//     }

//     return (
//         <div className="card">
//             {Object.entries(data).map(([key, value]) => {
//                 if (typeof value === 'object' && value !== null) {
//                     return (
//                         <div key={key}>
//                             <h3>{key}:</h3>
//                             <Card data={value} /> {/* ¡Recursividad para objetos anidados! */}
//                         </div>
//                     );
//                 }
//                 return (
//                     <div key={key}>
//                         <strong>{key}:</strong> {String(value)}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };



