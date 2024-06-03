import { useEffect } from "react"
import { useUsuarios } from "@/hooks/useUsuarios"
import { Layout } from "../../shared"

import { UsuariosColumns } from "./components/UsuariosColumns"
import { UsuariosDataTable } from "./components/UsuariosDataTable"

export const UsuariosPage = () => {

  const { getAllUsuarios, usuarios } = useUsuarios();

  useEffect(() => {
    getAllUsuarios();
  }, []);

  return (
    <Layout>
      <div className="w-11/12 mx-auto mt-2">
        <UsuariosDataTable columns={ UsuariosColumns } data={usuarios} />
      </div>
    </Layout>
  )
}
