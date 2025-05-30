import '../styles/detalles.css'

export const BotonDeEliminar = ({id}) => {
    
    function eliminar() {
    fetch ('https://datum-q26q.onrender.com/api/usuarios/' + id, {
        method: 'DELETE'

    })
    alert('El usuario ha sido eliminado :(')
    window.location.replace ('/')
}
    
    return(
        <button onClick= {eliminar} className="informa" >Eliminar</button>
        

    )
}