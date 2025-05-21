{/*SE IMPORTAN RUTAS Y ESTILOS*/}

import { Link } from 'react-router'
import '../styles/usuarios.css'
import { useEffect, useState } from 'react'

{/*SE CREA LOGICA DE LA PAGINA*/}

export const Usuarios = () => {
    const [perfiles, setPerfiles] = useState ([])
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState (null)

{/*SE COPIA LA DIRECCION DE LA API*/}

    useEffect(() => {
        const obtenerPerfiles = async () =>{
            try{
                const res = await fetch('https://datum-q26q.onrender.com/api/usuarios')
                const data = await res.json ()
                setPerfiles (data.datos)
            }
            catch (err) {
                console.log (err)
                setError (err)
            }
            finally{
                setLoading (false)
            }
        }
        obtenerPerfiles()
    },[])

    if (error) {
        return <h1>Ocurrió un Error</h1>
    }

    if (loading) {
        return <h1>Cargando la Información</h1>
    }

    return <div className='perfiles'>
        {perfiles.map (user => (
            <div className='perfil'>
                <h3>{user.nombre}</h3>
                <h4>{user.email}</h4>
                <Link to ={'/usuario/' + user._id} className='per' >Ver detalles</Link>
            </div>
        ))}
    </div>
}