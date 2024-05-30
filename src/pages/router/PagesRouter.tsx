import { Navigate, Route, Routes } from "react-router-dom"

// Listado de paginas
import { HomePage } from "../home/HomePage"
import { UsuariosPage } from "../usuarios/UsuariosPage"

export const PagesRouter = () => {
 
    return(
        <Routes>
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/usuarios" element={ <UsuariosPage /> } />
            {/* <Route path="/*" element={ <Navigate to = "/" /> } /> */}
            <Route path="/*" element={ <Navigate to = "/home" /> } />
        </Routes>
    )

}