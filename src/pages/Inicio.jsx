import { Link } from 'react-router'
import '../styles/Inicio.css'

export const Inicio = () => {
    return <div className="primera">
    <h1>Bienvenido a la Playlist de tu Gym </h1>
    <p>Disfruta de tus canciones favoritas mientras entrenas</p>
    <p>Accede a nuestra app gratuita con tu membresía</p>
    <p>Sin hacer uso de tu saldo o megas</p>
    <div>
        <Link to ='/usuarios' className='user'> Usuarios </Link>
        <Link to ='/registro' className='user'> Crear Usuario </Link>
        </div>
    </div>
}