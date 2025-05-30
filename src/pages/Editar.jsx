import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import '../styles/editar.css'

export const Editar = () => {
    const regresar = useNavigate ();
    const {id} = useParams ()
    const [usuario, setUsuario] = useState ({
        nombre: '',
        email: '',
        activo: true,
        contraseña: ''
    })

    const [Loading, setLoading] = useState (true)

    function manejarCambio (evento) {
        const {name, value} = evento.target
        setUsuario ((prev) =>({
            ...prev,
            [name]: value
        }))
    }
    
    async function manejarEnvio (evento) {
        evento.preventDefault ()
        try {
            await fetch ('https://datum-q26q.onrender.com/api/usuarios/' + id,
                {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(usuario)
                }
            )
        }

        catch (err){
            console.log (err)
        }
        
        finally{
            setUsuario ({
                nombre: '',
                email: '',
                activo: true,
                contrasena: ''
            })
            regresar ('/usuario/'+ id)
        }
    }
    
    useEffect (() => {
    const obtenerUsuarioPorID = async () => {
        try {
            const res = await fetch ('https://datum-q26q.onrender.com/api/usuarios/' + id)
            const data = await res.json ()
            setUsuario (data.datos)
        }

        catch (err){
            console.log ('Ha ocurrido un error en el código que está dentro del try' + err)
        }
        finally {
            setLoading (false)
        }
    } 
    
    obtenerUsuarioPorID()
    }, [])

    return (<div className="edit">
            <h2>Editar</h2>
            <form onSubmit={manejarEnvio}>
                <input type="text" placeholder="Nombre:" name='nombre'
                value={usuario.nombre}
                onChange={manejarCambio}
                />

                <input type="email" placeholder="Email:" name='email'
                value={usuario.email}
                onChange={manejarCambio}
                />

                
            
                <input type="password" placeholder="Contraseña:" name='contraseña'
                value={usuario.contraseña}
                onChange={manejarCambio}
                />

                <button type="submit">Ejecutar Cambios</button>{''}
            </form>
    </div>
    )
}



