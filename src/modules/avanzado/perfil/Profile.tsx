import type { InterfaceProgile } from "./types"
import { useProfile } from "./useProfile"

export const Profile = ({ profile }: { profile: InterfaceProgile }) => {
    const { currentProfile, changeName } = useProfile({ profile })

    if (!currentProfile) return <h1>No hay datos</h1>
    return (

        <>
            <div style={{ display: 'flex' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <label htmlFor="name">Nombre</label>
                        <input name="name" onChange={(e) => changeName(e.target.value, 'name')} value={currentProfile.name} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <label htmlFor="">Biografia</label>
                        <textarea name="name" onChange={(e) => changeName(e.target.value, 'bio')} value={currentProfile.details.bio} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <label htmlFor="">github</label>
                        <input name="name" onChange={(e) => changeName(e.target.value, 'github')} value={currentProfile.details.links.github} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <label htmlFor="">Twitter</label>
                        <input name="name" onChange={(e) => changeName(e.target.value, 'twitter')} value={currentProfile.details.links.twitter} />
                    </div>

                </form>
                <div>

                    <h3>Nombre: {currentProfile.name}</h3>

                    <h4>Detalles: {currentProfile.details.age}</h4>
                    <h4>Detalles: {currentProfile.details.bio}</h4>
                    <h4>Detalles:Links: {currentProfile.details.links.github}</h4>
                    <h4>Detalles:Links: {currentProfile.details.links.twitter}</h4>

                </div>
            </div>

        </>

    )




}