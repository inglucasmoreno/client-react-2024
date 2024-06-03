import { backendApi } from "@/api"
import { Button } from "@/components/ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { useAuth } from '../../../hooks/useAuth';

const formSchemaPassword = z.object({
  password_actual: z.string()
    .min(4, "Debe contener como minimo 4 caracteres")
    .max(20, "Debe contener como maximo 20 caracteres"),
  password_nuevo: z.string()
    .min(4, "Debe contener como minimo 4 caracteres")
    .max(20, "Debe contener como maximo 20 caracteres"),
  password_nuevo_repetir: z.string()
    .min(4, "Debe contener como minimo 4 caracteres")
    .max(20, "Debe contener como maximo 20 caracteres"),
})

export const ActualizarPassword = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { usuario } = useAuth();

  const form = useForm<z.infer<typeof formSchemaPassword>>({
    resolver: zodResolver(formSchemaPassword),
    defaultValues: {
      password_actual: "",
      password_nuevo: "",
      password_nuevo_repetir: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchemaPassword>) => {
  
    const { 
      password_nuevo: passwordNuevo,
      password_nuevo_repetir: passwordNuevoRepetir,
    } = values;
    
    if(passwordNuevo !== passwordNuevoRepetir){
      toast('Las contraseñas deben coincidir');
      return;
    }

    setIsLoading(true);

    // Conexion con el backend
    try{
      await backendApi.patch(`/usuarios/password/${usuario?.userId}`, values);
      toast.success('Contraseña actualizada correctamente');
      form.reset();
      setIsLoading(false);

    }catch (error: any) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password_actual"
            render={({ field }) => (
              <FormItem>
                <FormLabel> <span className="text-red-500"> * </span> Contraseña actual </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="password"
                    autoComplete="false"
                    placeholder="Ingresar contraseña actual" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="password_nuevo_repetir"
            render={({ field }) => (
              <FormItem>
                <FormLabel> <span className="text-red-500"> * </span> Repetir nueva contraseña </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    autoComplete="false"
                    type="password"
                    placeholder="Repetir nueva contraseña" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            className="w-full"
            type="submit"
          >

            {
              isLoading ? (
                <div className="flex items-center">
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  <span> Cargando </span>
                </div>
              ) : (
                <span> Actualizar </span>
              )
            }
          </Button>
        </form>
      </Form>
    </div>
  )
}

