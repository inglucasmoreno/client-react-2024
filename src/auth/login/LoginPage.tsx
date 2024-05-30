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

const formSchema = z.object({
    usuario: z.string()
              .min(5,"Debe contener como minimo 5 caracteres")
              .max(20,"Debe contener como maximo 20 caracteres"),
    password: z.string()
               .min(5,"Debe contener como minimo 5 caracteres")
               .max(20,"Debe contener como maximo 20 caracteres"),
})

export const LoginPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            usuario: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("llega")
        console.log(values)
    }

    return (
        <div className="flex items-center justify-center">
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
                                name="usuario"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Usuario </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nombre de usuario" {...field} />
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
                                            <Input type="password" placeholder="Ingresar contraseña" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button 
                                className="w-full" 
                                type="submit"
                            > Ingresar </Button>
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
