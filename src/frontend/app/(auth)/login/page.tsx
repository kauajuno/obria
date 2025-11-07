"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { loginUser } from "@/lib/api"
import { toast } from "sonner"


const schema = z.object({
    username: z.string().min(1, "Campo obrigatório"),
    password: z.string().min(1, "Campo obrigatório"),
})


type FormData = z.infer<typeof schema>


export default function LoginPage() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })


    const onSubmit = async (data: FormData) => {
        const result = await loginUser(data.username, data.password)
        console.log(data.username)
        console.log(data.password)

        if (result.ok) {
            toast.success(result.message)
            router.push("/dashboard")
        } else {
            if (result.status === 401) toast.error("Usuário ou senha inválidos")
            else toast.error(result.message)
        }
    }



    return (
        <div className="flex h-screen items-center justify-center col-span-1">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-card shadow-lg rounded-2xl p-8 w-[400px] space-y-4">
                <h1 className="text-2xl font-semibold text-center">Entrar no OBRIA</h1>
                <Input placeholder="Usuário" {...register("username")} />
                {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
                <Input type="password" placeholder="Senha" {...register("password")} />
                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                <Button type="submit" className="w-full">Entrar</Button>
                <p className="text-center text-sm text-muted-foreground">
                    Não tem uma conta?{" "}
                    <button
                        type="button"
                        onClick={() => router.push("/register")}
                        className="text-emerald-700 hover:underline"
                    >
                        Crie agora
                    </button>
                </p>
            </form>
        </div>
    )
}