"use client"

import { useState, useEffect } from "react"
import { useTeamStore } from "@/store/teamStore"
import { useQuery } from "@tanstack/react-query"
import { useParams, useRouter } from "next/navigation"
import { getTeamById, addTeamMember, removeTeamMember, getCurrentUser } from "@/lib/api"
import toast from "react-hot-toast"
import { getAllUsers } from "@/lib/api"


export default function TeamPage() {
  const { selectedTeam } = useTeamStore()
  const params = useParams()
  const router = useRouter()
  const teamId = Number(params.id)

  const [currentUser, setCurrentUser] = useState<any>(null)
  const [participantId, setParticipantId] = useState("")

  // Fetch fallback team data if Zustand didn't have it
  const { data: fetchedTeam, refetch } = useQuery({
    queryKey: ["team", teamId],
    queryFn: () => getTeamById(teamId),
    enabled: !selectedTeam, // only fetch if Zustand doesn't have data
  })

  const { data: allUsers } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  })

  const team = selectedTeam || fetchedTeam

  const userList = allUsers?.results || [] // ← SAFE ARRAY

  const availableParticipants = userList
    .filter((u: any) => u.user_type === "participant")
    .filter((u: any) => !team.members.some((m: any) => m.participant.id === u.id))

  useEffect(() => {
    getCurrentUser().then(setCurrentUser)
  }, [])

  if (!team) return <p className="p-6">Carregando equipe...</p>

  const isTutor = currentUser?.id === team.tutor?.id

  const handleAddMember = async () => {
    try {
      await addTeamMember(team.id, Number(participantId))
      toast.success("Membro adicionado!")
      setParticipantId("")
      refetch() // refresh page data
    } catch (err: any) {
      toast.error(err.message || "Erro ao adicionar membro")
    }
  }

  const handleRemoveMember = async (memberId: number) => {
    try {
      await removeTeamMember(team.id, memberId)
      toast.success("Membro removido!")
      refetch()
    } catch (err: any) {
      toast.error(err.message || "Erro ao remover membro")
    }
  }

  return (
    <section className="px-6 py-6">
      <h1 className="text-4xl font-black mb-6">{team.name}</h1>

      <div className="grid grid-cols-2 gap-6">

        {/* INFO CARD */}
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Informações</h2>

          <p><strong>ID:</strong> {team.id}</p>
          <p><strong>Membros:</strong> {team.members_count} / 3</p>
          <p><strong>Completa?</strong> {team.is_complete ? "Sim" : "Não"}</p>

          <p className="mt-4">
            <strong>Tutor:</strong> {team.tutor.nickname} ({team.tutor.username})
          </p>

          <p className="mt-4">
            <strong>Criado em:</strong> {new Date(team.created_at).toLocaleString()}
          </p>
        </div>

        {/* MEMBERS CARD */}
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-4">Membros</h2>

          {team.members.length === 0 && (
            <p className="text-gray-500">Nenhum membro ainda.</p>
          )}

          {/* List of Members */}
          <ul className="space-y-2">
            {team.members.map((member: any) => (
              <li
                key={member.participant.id}
                className="p-2 border rounded flex justify-between items-center"
              >
                <span>{member.participant.nickname}</span>

                {isTutor && (
                  <button
                    onClick={() => handleRemoveMember(member.participant.id)}
                    className="text-red-600"
                  >
                    Remover
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Add Member - ONLY for tutor */}
          {isTutor && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Adicionar participante</h3>

              <div className="flex gap-2">
                <select
                  value={participantId}
                  onChange={(e) => setParticipantId(e.target.value)}
                  className="border px-3 py-2 rounded w-full bg-black text-white"
                >
                  <option value="">Selecione um participante...</option>

                  {availableParticipants.map((p: any) => (
                    <option key={p.id} value={p.id}>
                      {p.nickname} ({p.username})
                    </option>
                  ))}
                </select>


                <button
                  onClick={handleAddMember}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Adicionar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
