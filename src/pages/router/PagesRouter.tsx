import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

// Listado de paginas
import { HomePage } from "../home/HomePage"
import { PerfilPage } from "../perfil/PerfilPage"
import { ActualizarPasswordPage, EditarUsuarioPage, NuevoUsuarioPage, UsuariosPage } from "../usuarios"
import { useAuth } from "@/hooks/useAuth"

export const PagesRouter = () => {

    const { usuario } = useAuth();

    return (
        <Routes>

            {/* Auth */}
            <Route path="/perfil" element={<PerfilPage />} />

            <Route path="/home" element={<HomePage />} />

            {/* Usuarios */}

            {
                usuario?.role === 'ADMIN_ROLE' && (
                    <>
                        <Route path="/usuarios" element={<UsuariosPage />} />
                        <Route path="/usuarios/nuevo" element={<NuevoUsuarioPage />} />
                        <Route path="/usuarios/editar/:id" element={<EditarUsuarioPage />} />
                        <Route path="/usuarios/password/:id" element={<ActualizarPasswordPage />} />
                    </>
                )
            }


            {/* <Route path="/*" element={ <Navigate to = "/" /> } /> */}
            <Route path="/*" element={<Navigate to="/home" />} />

        </Routes>
    )

}