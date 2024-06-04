
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const { logout, usuario } = useAuth();
  const navigate = useNavigate();

  const cerrarSesion = () => logout();

  return (
    <div>
      <div className="py-2 bg-slate-100 border-b border-gray-300">
        <div className="container flex items-center justify-between">
          {/* <span className="font-semibold text-xl"> Equinoccio Technology </span> */}
          <div></div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar className="cursor-pointer hover:opacity-80 w-14 h-14 ml-36">
                  <AvatarImage src="https://www.gravatar.com/avatar/${randomHash}?d=retro&f=y&s=128" alt="Avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="ml-20">
                <DropdownMenuLabel> { usuario?.apellido } { usuario?.nombre } </DropdownMenuLabel>
                <p className="px-2 text-xs mb-2"> { usuario?.role === 'ADMIN_ROLE' ? 'Administrador' : 'Empleado' } </p>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/perfil')}> Mi perfil </DropdownMenuItem>
                <DropdownMenuItem onClick={() => cerrarSesion()}> Cerrar sesion </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

