
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import './Navbar.css';

import { GrConfigure } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
// import { HiOutlineDesktopComputer } from "react-icons/hi";
// import { RiFileListLine } from "react-icons/ri";
// import { BsEnvelopePaper } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const Navbar = () => {

  const navigate = useNavigate();
  const { usuario } = useAuth();

  const navegacion = (url: string) => {
    navigate(url);
  }

  return (
    <div className="h-screen hidden md:block">
      <div className="w-[300px] border-r border-gray-300 h-full bg-slate-100">
        <div className="p-[15px] bg-slate-200 border-b border-gray-300 text-white">
          <p className="px-2 text-lg text-slate-900 font-semibold text-center"> Equinoccio Technology </p>
          <p className="text-slate-800 text-center text-sm" > Template de sistema </p>
        </div>

        <div className="px-4 mt-5">

          <p onClick={() => navegacion('/home')} className="text-sm mb-3 flex items-center cursor-pointer hover:opacity-80 font-semibold">
            <IoHomeOutline />
            <span className="ml-2 text-[15px]">
              Inicio
            </span>
          </p>

          {/* Configuraciones */}

          {
            usuario?.role === 'ADMIN_ROLE' && (
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
                    <AccordionContent onClick={() => navegacion('/usuarios')} className="navItem">
                      Usuarios
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </Accordion>
            )
          }

        </div>
      </div>
    </div>
  )
}

