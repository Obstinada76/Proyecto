
import { Link } from 'react-router'
import '../styles/nav.css'

export const Nav = () => {

    return <div className='navegacion'>
        <Link to= '/'className='nave'> Inicio</Link>
        <Link to= '/Registro' className='nave'> Registro</Link>
        <Link to= '/Usuarios'className='nave'> Usuarios</Link>
    </div>
}