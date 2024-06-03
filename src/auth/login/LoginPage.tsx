import { useForm } from "react-hook-form"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "@/hooks/useAuth"
import { z } from "zod"

const formSchema = z.object({
    username: z.string()
        .min(4, "Debe contener como minimo 4 caracteres")
        .max(20, "Debe contener como maximo 20 caracteres"),
    password: z.string()
        .min(4, "Debe contener como minimo 4 caracteres")
        .max(20, "Debe contener como maximo 20 caracteres"),
})

export const LoginPage = () => {

    const { login, isLoading } = useAuth();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        login(values);
        form.reset();
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
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Usuario </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
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
                                                disabled={isLoading}
                                                autoComplete="false"
                                                type="password"
                                                placeholder="Ingresar contraseña" {...field} />
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
