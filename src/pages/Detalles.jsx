import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router"
import '../styles/detalles.css'
import imagenPerfil from '../styles/imagenes/perfil.png'
import { BotonDeEliminar } from "../components/Botoneliminar"

export const UsuarioPorId = () => {
    const {id} = useParams ()
    
    const [Perfiles, setPerfiles] = useState ({})
    const [loading, setLoading] = useState (true)
    const [err, setErr] = useState (null)

    useEffect (() => {
        const ObtenerUsuarioPorID = async () => {
            try{
                const res = await fetch ('https://datum-q26q.onrender.com/api/usuarios/' + id)
                const data = await res.json ()
                setPerfiles (data.datos)
            } 
            catch (err){
                console.log ('Ha ocurrido un error')
            }
            finally{
                setLoading (false)
            }
        }
        ObtenerUsuarioPorID()    
    }, [])

    if (loading){
        return (<div> Cargando la página...</div>)
    }

    return (<div className="info"> 
        <h2>Información del Usuario: {Perfiles._id}</h2>
        <ul className="infor">
            <li>NOMBRE: {Perfiles.nombre}</li>
            <li>EMAIL: {Perfiles.email}</li>
            <li>ESTADO: {Perfiles.activo ? 'Activo' : 'Inactivo'}</li>
            <li>REGISTRO: {Perfiles.fechaCreacion}</li>
        </ul>
        <img src={imagenPerfil}></img>
        
            <Link to='/usuario/editar/:id' className="informa">Editar</Link>
            <BotonDeEliminar id= {id} className= "informa"></BotonDeEliminar>
        
        
    </div>)
}
