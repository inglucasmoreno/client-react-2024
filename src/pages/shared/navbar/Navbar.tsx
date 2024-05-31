
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { GrConfigure } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";
import { BsEnvelopePaper } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div>
      <div className="w-[300px] border-r border-gray-300 h-screen bg-slate-100">
        <p className="px-2 py-10 bg-slate-700 text-white font-semibold text-center"> Equinoccio Technology </p>
        <div className="px-4 mt-10">
          <p className="text-sm mb-3 flex items-center cursor-pointer hover:opacity-80 font-semibold">
            <IoHomeOutline />
            <span className="ml-2 text-[15px]">
              Inicio
            </span>
          </p>
          <p className="text-sm mb-3 mt-6 flex items-center cursor-pointer hover:opacity-80 font-semibold">
            <BsEnvelopePaper />
            <span className="ml-2 text-[15px]">
              Mi bandeja
            </span>
          </p>
          <p className="text-sm mb-3 mt-6 flex items-center cursor-pointer hover:opacity-80 font-semibold">
            <HiOutlineDesktopComputer />
            <span className="ml-2 text-[15px]">
              Solicitar asistencia
            </span>
          </p>
          <p className="text-sm mb-3 mt-6 flex items-center cursor-pointer hover:opacity-80 font-semibold">
            <RiFileListLine />
            <span className="ml-2 text-[15px]">
              Listado de solicitudes
            </span>
          </p>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center">
                  <GrConfigure />
                  <span className="ml-2 text-[15px]">
                    Configuraciones
                  </span>
                </div>
              </AccordionTrigger>
              <div>
                <AccordionContent>
                  Dependencias
                </AccordionContent>
                <AccordionContent>
                  Tipos de solicitudes
                </AccordionContent>
                <AccordionContent className="cursor-pointer">
                  Usuarios
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

