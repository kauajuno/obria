"use client"

import { useQuery } from "@tanstack/react-query"
import { getAllTeams } from "@/lib/api"
import Link from "next/link"

export default function TeamsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["teams"],
    queryFn: getAllTeams,
  })

  if (isLoading) return <p>Carregando equipes...</p>
  if (error) return <p>Erro ao carregar equipes 😢</p>

  const teams = data || []

  console.log(typeof teams)
  console.log(teams)

  return (
    <section className="px-4 py-4">
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl font-black">Equipes</h1>
        <Link
          href="/dashboard/teams/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Nova equipe
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {teams.map((team: any) => (
          <div
            key={team.id}
            className="border p-4 rounded-lg shadow hover:bg-gray-50"
          >
            <p className="text-xl font-bold">{team.name}</p>
            <p className="text-sm text-gray-500">
              Tutor: {team.tutor?.nickname}
            </p>
            <p className="text-sm">
              Membros: {team.members_count} / 3
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
