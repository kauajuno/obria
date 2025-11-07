"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { registerUser } from "@/lib/api" // <-- you'll need to implement this API function


// ✅ Validation schema
const schema = z.object({
    username: z.string().min(1, "Campo obrigatório"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(1, "Campo obrigatório"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
})


type FormData = z.infer<typeof schema>


export default function RegisterPage() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })


    const onSubmit = async (data: FormData) => {
        const success = await registerUser(
            data.username,
            data.email,
            data.password
        )
        if (success) router.push("/dashboard") // redirect after registration
    }


    return (
        <div className="flex h-screen items-center justify-center col-span-1">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-card shadow-lg rounded-2xl p-8 w-[400px] space-y-4"
            >
                <h1 className="text-2xl font-semibold text-center">Criar Conta</h1>

                {/* Username */}
                <Input placeholder="Usuário" {...register("username")} />
                {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}

                {/* Email */}
                <Input type="email" placeholder="E-mail" {...register("email")} />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

                {/* Password */}
                <Input type="password" placeholder="Senha" {...register("password")} />
                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}

                {/* Confirm Password */}
                <Input type="password" placeholder="Confirmar senha" {...register("confirmPassword")} />
                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}

                {/* Submit */}
                <Button type="submit" className="w-full">Cadastrar</Button>

                {/* Optional link */}
                <p className="text-center text-sm text-muted-foreground">
                    Já tem uma conta?{" "}
                    <button
                        type="button"
                        onClick={() => router.push("/login")}
                        className="text-emerald-700 hover:underline"
                    >
                        Entrar
                    </button>
                </p>
            </form>
        </div>
    )
}
