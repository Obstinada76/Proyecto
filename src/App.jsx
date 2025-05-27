{/*SE LLAMA A LAS LIBRERIAS DE REACT*/}

import { BrowserRouter, Route, Routes} from "react-router"
import { Error404 } from "./pages/error404"
import { Inicio } from "./pages/Inicio"
import { Nav } from "./components/Nav"
import { Usuarios } from "./pages/Usuarios"
import { UsuarioPorId } from "./pages/Detalles"
import { Registro } from "./pages/Registro"
import {Editar} from "./pages/Editar"


{/*SE CREAN LAS RUTAS DE LAS PAGINAS*/}

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path='/' element = {<Inicio></Inicio>}></Route>
        <Route path='/registro' element = {<Registro></Registro>} ></Route>
        <Route path='/usuarios' element = {<Usuarios></Usuarios>}></Route>
        <Route path='/usuario/:id' element = {<UsuarioPorId></UsuarioPorId>}></Route>
        <Route path='/usuario/editar/:id'element = {<Editar></Editar>} ></Route>
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
