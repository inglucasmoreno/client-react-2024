import { useAuth } from "@/hooks/useAuth"

export const DatosUsuario = () => {

  const { usuario } = useAuth();

  return (
    <div className="p-2">
      <div>
        <p className="grid grid-cols-2 p-2 border-t">
          <span className="font-semibold"> Apellido y nombre </span>
          <span>
            {`${usuario?.apellido} ${usuario?.nombre}`}
          </span>
        </p>
        <p className="grid grid-cols-2 p-2 border-b border-t">
          <span className="font-semibold"> Usuario </span>
          <span>
            {`${usuario?.usuario}`}
          </span>
        </p>
        <p className="grid grid-cols-2 p-2 border-b">
          <span className="font-semibold"> DNI </span>
          <span>
            {`${usuario?.dni}`}
          </span>
        </p>
        <p className="grid grid-cols-2 p-2">
          <span className="font-semibold"> Rol </span>
          <span>
            {`${usuario?.role === 'ADMIN_ROLE' ? 'Administrador' : 'Empleado'}`}
          </span>
        </p>
      </div>
    </div>
  )
}

