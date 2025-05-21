{/*Se cambio la sintaxis por tener una version diferente del react*/}

{/*SE CREA LA PAGINA DE ERROR*/}
import { Link } from 'react-router'
import '../styles/error.css'

export const Error404 = () => {
    return  <div className='errores'> 
        <h1>Error 404</h1>
        <p>La página solicitada no puede ser encontrada</p>
        <Link to ='/' className='error'> Volver al inicio </Link>
    </div>
}