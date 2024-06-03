import { useState } from "react";
import { backendApi } from "@/api"

import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const InitPage = () => {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);

  const inicialization = async () => {
    setIsLoading(true);
    try {
      await backendApi.get('/inicializacion');
      toast.success("Sistema inicializado correctamente");
      setIsLoading(false);
      navigate('/auth/login');
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }

  }

  return (
    <div className="p-2 md:p-10 mt-10">
      <Card className="w-full md:w-[500px] mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-4xl"> Inicializacion de sistema </CardTitle>
          <CardDescription> Inicializar para comenzar </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full"
            disabled={isLoading}
            onClick={() => inicialization()}
          >
            {
              isLoading ? (
                <div className="flex items-center">
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  <span> Cargando </span>
                </div>
              ) : "Inicializar sistema"
            }
          </Button>
        </CardContent>
        <CardFooter className="text-xs text-gray-500">
          <p className="text-center w-full">@Sistema desarrollado por Equinoccio Technology </p>
        </CardFooter>
      </Card>
    </div>
  )

}
