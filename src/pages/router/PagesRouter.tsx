import { Navigate, Route, Routes } from "react-router-dom"

// Listado de paginas
import { HomePage } from "../home/HomePage"
import { PerfilPage } from "../perfil/PerfilPage"
import { ActualizarPasswordPage, EditarUsuarioPage, NuevoUsuarioPage, UsuariosPage } from "../usuarios"

export const PagesRouter = () => {

    return (
        <Routes>

            {/* Auth */}
            <Route path="/perfil" element={<PerfilPage />} />

            <Route path="/home" element={<HomePage />} />

            {/* Usuarios */}
            <Route path="/usuarios" element={<UsuariosPage />} />
            <Route path="/usuarios/nuevo" element={<NuevoUsuarioPage />} />
            <Route path="/usuarios/editar/:id" element={<EditarUsuarioPage />} />
            <Route path="/usuarios/password/:id" element={<ActualizarPasswordPage />} />

            {/* <Route path="/*" element={ <Navigate to = "/" /> } /> */}
            <Route path="/*" element={<Navigate to="/home" />} />

        </Routes>
    )

}