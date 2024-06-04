import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Layout } from "../shared"
import { Card } from "@/components/ui/card";
import { ActualizarPassword, DatosUsuario } from "./components";

export const PerfilPage = () => {

  return (
    <Layout>
      <Card className="w-11/12 md:w-[500px] mx-auto mt-10">
          <Tabs defaultValue="userData">
            <TabsList className="w-full rounded-t py-7 rounded-b-none">
              <TabsTrigger className="w-1/2 p-2" value="userData"> Datos de usuario </TabsTrigger>
              <TabsTrigger className="w-1/2 p-2" value="password"> Contraseña </TabsTrigger>
            </TabsList>
            <TabsContent value="userData">
              <DatosUsuario />
            </TabsContent>
            <TabsContent value="password">
              <ActualizarPassword />
            </TabsContent>
          </Tabs>
      </Card>
    </Layout>
  )
}

