interface TypeUser {
    name: string
    role: string
    skills: string[]
}
const user: TypeUser = {
    name: "Ana",
    role: "Frontend Developer",
    skills: ["JavaScript", "React", "CSS"],
};


export const UserCard = () => {
    return (
        <>
            {Object.entries(user).map(([key, value]) => {
                return key !== 'skills' ?
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                        key={key}>
                        <strong>{key}: </strong>
                        <p>{value}</p>
                    </div>
                    : <div key={key}>
                        <h3>Skills</h3>
                        <ul >
                            {value.map((data: string) => {
                                return <li key={data}>{data}</li>
                            })}
                        </ul>
                    </div>
            })}
        </>
    )
}