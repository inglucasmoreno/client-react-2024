
import { useState } from "react"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ReloadIcon } from "@radix-ui/react-icons"

const formSchema = z.object({
    username: z.string()
        .min(5, "Debe contener como minimo 5 caracteres")
        .max(20, "Debe contener como maximo 20 caracteres"),
    password: z.string()
        .min(5, "Debe contener como minimo 5 caracteres")
        .max(20, "Debe contener como maximo 20 caracteres"),
})

export const LoginPage = () => {

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

   const onSubmit = async (values: z.infer<typeof formSchema>) => {

        setLoading(true);

        // Conexion con el backend usando fetch
        try{
            const respuesta = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(values),
            })
            const data = await respuesta.json();
            form.reset();
            setLoading(false);
        }catch(error){
            console.log('llega');
            console.log(error);
            form.reset();
            setLoading(false);
        }

    }

    return (
        <div className="flex items-center justify-center">
             <Toaster />
            <Card className="w-11/12 md:w-[450px] mt-5 md:mt-10">

                <CardHeader className="text-center">
                    <CardTitle className="text-3xl">Ingreso al sistema</CardTitle>
                    <CardDescription> Equinoccio Template </CardDescription>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Usuario </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="Nombre de usuario" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Contraseña </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                type="password"
                                                placeholder="Ingresar contraseña" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                disabled={loading}
                                className="w-full"
                                type="submit"
                            >

                                {
                                    loading ? (
                                        <div className="flex items-center">
                                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                            <span> Cargando </span>
                                        </div>
                                    ) : (
                                        <span> Ingresar </span>
                                    )
                                }

                            </Button>
                        </form>
                    </Form>
                </CardContent>

                <CardFooter>
                    <p className="text-center w-full text-xs md:text-sm text-gray-500">@Sistema desarrollado por Equinoccio Technology</p>
                </CardFooter>

            </Card>
        </div>
    )
}
