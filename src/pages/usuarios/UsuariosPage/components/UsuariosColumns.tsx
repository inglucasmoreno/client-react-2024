"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { IUsuarios } from "@/interface"
import { ColumnDef, FilterFn, Row } from "@tanstack/react-table"
import { FiMoreHorizontal } from "react-icons/fi"
import { GoLock } from "react-icons/go"
import { GrEdit } from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import { ArrowUpDown } from "lucide-react"

const myCustomFilterFn: FilterFn<IUsuarios> = 
(
  row: Row<IUsuarios>, 
  columnId: string, 
  filterValue: string,
   addMeta: (meta: any) => void
) => {
  console.log(addMeta);
  console.log(columnId);
  if(row.original.apellido.includes(filterValue.toUpperCase())) return true;
  if(row.original.nombre.includes(filterValue.toUpperCase())) return true;
  if(row.original.usuario.includes(filterValue)) return true;
  return false;
}

export const UsuariosColumns: ColumnDef<IUsuarios>[] = [
  {
    accessorKey: "apellido",
    filterFn: myCustomFilterFn,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apellido
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "nombre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "usuario",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Usuario
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rol
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: (({ row }) => {
      return (
        <p> {row.original.role === 'ADMIN_ROLE' ? 'Administrador' : 'Empleado'} </p>
      )
    })
  },
  {
    accessorKey: "activo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Activo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: (({ row }) => {
      return (
        <p>
          {row.original.activo ? 'Activo' : 'Inactivo'}
        </p>
      )
    })
  },
  {
    id: "actions",
    header: "Acciones",
    cell: (({ row }) => {
      const navigate = useNavigate();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <FiMoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="bg-gray-100 rounded">  Acciones </DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigate(`/usuarios/editar/${row.original.id}`)}> <GrEdit /> <span className="ml-1"> Editar </span> </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate(`/usuarios/password/${row.original.id}`)}> <GoLock /> <span className="ml-1"> Actualizar contraseña </span> </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    })
  }
]
