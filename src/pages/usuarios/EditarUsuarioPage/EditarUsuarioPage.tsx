import { z } from "zod"
import { Layout } from "../../shared"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { backendApi } from "@/api";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoReloadCircleOutline } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const formSchemaUsuario = z.object({
  usuario: z.string()
    .min(4, "Debe contener como minimo 4 caracteres")
    .max(30, "Debe contener como maximo 20 caracteres"),
  email: z.string().email("Debe ser un correo electrónico válido"),
  apellido: z.string().min(1, "Debe colocar un apellido"),
  nombre: z.string().min(1, "Debe colocar un nombre"),
  dni: z.string().min(1, "Debe colocar un DNI"),
  role: z.string().min(1, "Debe seleccionar un rol"),
  activo: z.boolean()
})


export const EditarUsuarioPage = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUsuario = async () => {
      setIsLoading(true);
      try {
        const { data } = await backendApi.get(`/usuarios/${id}`);
        setIsLoading(false);

        // Asiganar valores al formulario
        form.setValue("usuario", data.usuario.usuario);
        form.setValue("email", data.usuario.email);
        form.setValue("apellido", data.usuario.apellido);
        form.setValue("nombre", data.usuario.nombre);
        form.setValue("dni", data.usuario.dni);
        form.setValue("role", data.usuario.role);
        form.setValue("activo", data.usuario.activo);

      } catch (error: any) {
        toast.error(error.response.data.message);
        setIsLoading(false);
        navigate("/usuarios");
      }
    }
    getUsuario();
  }, [])

  const form = useForm<z.infer<typeof formSchemaUsuario>>({
    resolver: zodResolver(formSchemaUsuario),
    defaultValues: {
      usuario: "",
      email: "",
      apellido: "",
      nombre: "",
      dni: "",
      role: "USER_ROLE",
      activo: false
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchemaUsuario>) => {
    setIsLoading(true);
    try {
      await backendApi.patch(`/usuarios/${id}`, values);
      setIsLoading(false);
      toast.success("Usuario actualizado correctamente");
      navigate("/usuarios");
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  }


  return (
    <Layout>
      <div className="flex items-center justify-center">
        <Card className="w-11/12 md:w-[600px] mt-5 md:mt-5 mb-20">

          <CardHeader>
            <CardTitle className="text-xl md:text-3xl flex items-center"> <LiaUserEditSolid className="w-9 h-9" />
              <span className="ml-2">
                Editando usuario
              </span>
            </CardTitle>
            <CardDescription> Actualizando datos de usuario </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="md:grid md:grid-cols-2 md:gap-4">
                  <FormField
                    control={form.control}
                    name="usuario"
                    render={({ field }) => (
                      <FormItem className="mt-4 md:mt-0">
                        <FormLabel> <span className="text-red-500"> * </span> Nombre de usuario </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="Ej. lmoreno" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="apellido"
                    render={({ field }) => (
                      <FormItem className="mt-4 md:mt-0">
                        <FormLabel> <span className="text-red-500"> * </span> Apellido </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="Ej. Moreno" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-4">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> <span className="text-red-500"> * </span> Nombre </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="Ej. Lucas Omar" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dni"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> <span className="text-red-500"> * </span> DNI </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="Ej. 34060398" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> <span className="text-red-500"> * </span> Email </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="Ej. ing.lucasmoreno@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem className="mt-4 md:mt-0">
                        <FormLabel> <span className="text-red-500"> * </span> Roles </FormLabel>
                        <FormControl>
                          <Select
                            // disabled={isLoading}
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Seleccionar un rol" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel> Roles </SelectLabel>
                                <SelectItem value="ADMIN_ROLE"> Administrador </SelectItem>
                                <SelectItem value="USER_ROLE"> Empleado </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="activo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> <span className="text-red-500"> * </span> Estado </FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-2 pt-2 rounded">
                          <Switch
                            id="airplane-mode"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <Label htmlFor="airplane-mode"> {field.value ? 'Usuario activo' : 'Usuario inactivo'} </Label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-3 pt-4">
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
    </Layout>
  )
}

