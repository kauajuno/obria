"use client"

import { useEffect } from "react"
import { useTeamStore } from "@/store/teamStore"
import { useRouter, useParams } from "next/navigation"
import { getTeamById } from "@/lib/api"  // optional, see below
import { useQuery } from "@tanstack/react-query"

export default function TeamPage() {
  const { selectedTeam } = useTeamStore()
  const router = useRouter()
  const params = useParams()
  const teamId = Number(params.id)

  // Fallback if user refreshes the page → fetch team from API
  const { data: fetchedTeam } = useQuery({
    queryKey: ["team", teamId],
    queryFn: () => getTeamById(teamId),
    enabled: !selectedTeam, // only fetch if Zustand doesn’t have it
  })

  const team = selectedTeam || fetchedTeam

  useEffect(() => {
    if (!team) return
  }, [team])

  if (!team) return <p className="p-6">Carregando equipe...</p>

  return (
    <section className="px-6 py-6">
      <h1 className="text-4xl font-black mb-6">{team.name}</h1>

      <div className="grid grid-cols-2 gap-6">
        
        {/* INFO CARD */}
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Informações</h2>

          <p><strong>ID:</strong> {team.id}</p>
          <p><strong>Completa?</strong> {team.is_complete ? "Sim" : "Não"}</p>
          <p><strong>Membros:</strong> {team.members_count} / 3</p>
          <p>
            <strong>Tutor:</strong> {team.tutor?.nickname} 
            ({team.tutor?.username})
          </p>
          <p><strong>Criado em:</strong> {new Date(team.created_at).toLocaleString()}</p>
          <p><strong>Atualizado em:</strong> {new Date(team.updated_at).toLocaleString()}</p>
        </div>

        {/* MEMBERS */}
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Membros</h2>

          {team.members.length === 0 && (
            <p className="text-gray-500">Nenhum membro.</p>
          )}

          <ul className="space-y-2">
            {team.members.map((member: any) => (
              <li key={member.id} className="p-2 border rounded">
                {member.participant.nickname}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
