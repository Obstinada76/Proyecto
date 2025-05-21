import { useState } from 'react'
import '../styles/registro.css'

export const Registro = () => {
    const [usuario, setUsuarios] = useState({
        nombre: '',
        email: '',
        activo: true, 
        contraseña: ''
    })
    const [Exito, setExito] = useState('')

    function manejarCambio (evento){
        const  {name, value} = evento.target
        setUsuarios ((prev) => ({
            ...prev, 
            [name]: value
        })
    )
    }
    
    async function manejarEnvio (evento){
        evento.preventDefault ()
        try{
            await fetch('https://datum-q26q.onrender.com/api/usuarios/crear', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(usuario)
        })
        }
        catch (err){
            console.log (err)
        }
        finally{
            setExito(true)
            setUsuarios ({
                nombre:'',
                email: '',
                activo: 'true',
                contrasena: '',
            })
        }
    }
    
    return (
        <div className="registro">
            <h2>Registre sus datos</h2>
        {Exito?(
            <span>Ha creado el usuario con éxito :)</span>
        ):(
            <form onSubmit={manejarEnvio}> 
                    
                    <input className="regis" type="text" placeholder = 'Nombre:' name='nombre' value = {usuario.nombre} onChange={manejarCambio} />
                    <input className="regis" type="email" placeholder = 'Email:' name= 'email' value = {usuario.email} onChange={manejarCambio} />
                    <input className="regis" type="contrasena" placeholder = 'Contraseña:' name='contrasena' value = {usuario.contrasena} onChange={manejarCambio}/>
                    <button className="regis" type='submit'>Enviar</button>
                    
            </form>
            )}
        </div>
    )
}
