"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createTeam, getCurrentUser } from "@/lib/api"
import toast from "react-hot-toast"

export default function CreateTeamPage() {
  const [name, setName] = useState("")
  const [currentUser, setCurrentUser] = useState<any>(null)
  const router = useRouter()

  // Load user (to get tutor ID)
  useEffect(() => {
    getCurrentUser().then(setCurrentUser).catch(() => {
      toast.error("Erro ao obter usuário atual")
    })
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!currentUser) {
      toast.error("Usuário não carregado ainda.")
      return
    }

    // Validate tutor permission
    if (currentUser.user_type !== "tutor") {
      toast.error("Apenas tutores podem criar equipes.")
      return
    }

    try {
      await createTeam({
        name,
        tutor: currentUser.id, // 👈 SEND TUTOR ID HERE
      })

      toast.success("Equipe criada com sucesso!")
      router.push("/dashboard/teams")
    } catch (err: any) {
      toast.error(`Falha ao criar equipe: ${err.message}`)
      console.error(err)
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
