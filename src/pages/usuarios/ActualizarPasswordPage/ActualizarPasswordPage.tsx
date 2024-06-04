import { useEffect } from "react";
import { z } from "zod"
import { Layout } from "../../shared";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate, useParams } from "react-router-dom";
import { useUsuarios } from "@/hooks/useUsuarios";
import { IoReloadCircleOutline } from "react-icons/io5";
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { GoLock } from "react-icons/go";

const formSchemaPassword = z.object({
  password_nuevo: z.string()
    .min(4, "Debe contener como minimo 4 caracteres")
    .max(20, "Debe contener como maximo 20 caracteres"),
  password_repetir: z.string()
    .min(4, "Debe contener como minimo 4 caracteres")
    .max(20, "Debe contener como maximo 20 caracteres"),
})

export const ActualizarPasswordPage = () => {

  const form = useForm<z.infer<typeof formSchemaPassword>>({
    resolver: zodResolver(formSchemaPassword),
    defaultValues: {
      password_nuevo: "",
      password_repetir: "",
    },
  })

  const navigate = useNavigate();
  const { id } = useParams();

  const {
    usuario,
    isLoading,
    getUsuario,
    actualizarPassword
  } = useUsuarios();

  useEffect(() => { id && getUsuario(id); }, [])

  const onSubmit = async (values: z.infer<typeof formSchemaPassword>) => {

    const { password_nuevo, password_repetir } = values;

    // Verificacion de datos
    if (password_nuevo !== password_repetir) {
      form.reset();
      return toast.error("Las contraseñas deben coincidir");
    }

    id && actualizarPassword(id, values.password_nuevo)
    form.reset();
  }

  return (
    <Layout>
      {
        !usuario ? (
          <span> Cargando </span>
        ) : (
          <div className="flex items-center justify-center">
            <Card className="w-11/12 md:w-[450px] mt-5 md:mt-10">

              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl flex items-center"> <GoLock /> <span className="ml-2"> Actualizar contraseña </span> </CardTitle>
                <CardDescription> {usuario?.apellido} {usuario?.nombre} </CardDescription>
              </CardHeader>

              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="password_nuevo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel> <span className="text-red-500"> * </span> Nueva contraseña </FormLabel>
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              type="password"
                              autoComplete="false"
                              placeholder="Ingresar nueva contraseña" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password_repetir"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel> <span className="text-red-500"> * </span> Repetir nueva contraseña </FormLabel>
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              autoComplete="false"
                              type="password"
                              placeholder="Repetir contraseña" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        disabled={isLoading}
                        className="w-full"
                        type="submit"
                      >

                        {
                          isLoading ? (
                            <div className="flex items-center">
                              <IoReloadCircleOutline className="mr-2 h-4 w-4 animate-spin" />
                              <span> Cargando </span>
                            </div>
                          ) : (
                            <span> Actualizar </span>
                          )
                        }

                      </Button>
                      <Button
                        disabled={isLoading}
                        onClick={() => navigate('/usuarios')} variant="secondary">
                        Regresar
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>

            </Card>
          </div>
        )
      }



    </Layout>
  )
}

