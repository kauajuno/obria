"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createTeam } from "@/lib/api"
import { toast } from "sonner"

export default function CreateTeamPage() {
    const [name, setName] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            await createTeam({ name })
            toast.success("Equipe criada com sucesso!")
            router.push("/dashboard/teams")
        } catch (err: any) {
            const message = err.message || "Erro ao criar equipe"
            toast("Não autorizado: usuário não é um tutor!")
            console.error("Create team error:", err)
        }
    }

    return (
        <section className="px-4 py-4">
            <h1 className="text-4xl font-black mb-8">Criar Equipe</h1>

            <form onSubmit={handleSubmit} className="space-y-4 w-80">
                <div>
                    <label className="text-sm text-gray-400">Nome da equipe</label>
                    <input
                        type="text"
                        className="border px-3 py-2 rounded w-full"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 w-full rounded-lg font-semibold"
                >
                    Criar equipe
                </button>
            </form>
        </section>
    )
}
