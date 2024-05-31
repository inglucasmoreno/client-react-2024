
import { useNavigate } from "react-router-dom"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";

export const Header = () => {

  const navigate = useNavigate();

  const cerrarSesion = () => {
    // TODO: Eliminar elementos del localStorage
    navigate("/auth/login");
  }

  return (
    <div className="w-full">
      <div className="py-5 px-10 bg-slate-100 border-b border-gray-300 shadow-b shadow-md">
        <div className="container flex items-center justify-between">
          {/* <span className="font-semibold text-xl"> Equinoccio Technology </span> */}
          <div></div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar className="cursor-pointer hover:opacity-80 w-14 h-14 ml-36">
                  <AvatarImage src="https://www.gravatar.com/avatar/${randomHash}?d=retro&f=y&s=128" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="ml-20">
                <DropdownMenuLabel> Moreno Lucas Omar </DropdownMenuLabel>
                <p className="px-2 text-xs mb-2"> Administrador </p>
                <DropdownMenuSeparator />
                <DropdownMenuItem> Mi perfil </DropdownMenuItem>
                <DropdownMenuItem onClick={() => cerrarSesion()}> Cerrar sesion </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

