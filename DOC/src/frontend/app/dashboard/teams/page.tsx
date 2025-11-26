"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllTeams, getMyTeams } from "@/lib/api"
import Link from "next/link"
import { useTeamStore } from "@/store/teamStore"
import { useRouter } from "next/navigation"



export default function TeamsPage() {

    const [search, setSearch] = useState("")

    // Fetch all teams
    const { data: allTeams, isLoading, error } = useQuery({
        queryKey: ["teams"],
        queryFn: getAllTeams,
    })

    // Fetch my teams
    const { data: myTeams } = useQuery({
        queryKey: ["myTeams"],
        queryFn: getMyTeams,
    })

    if (isLoading) return <p>Carregando equipes...</p>
    if (error) return <p>Erro ao carregar equipes 😢</p>

    const teams = allTeams || []
    const mine = myTeams || []

    // Deduplicate (remove my teams from the "all teams" list)
    const nonMine = teams.filter(
        (team: any) => !mine.some((my: any) => my.id === team.id)
    )

    // Combined list: my teams first
    const sortedTeams = [...mine, ...nonMine]

    // Search filter
    const filteredTeams = sortedTeams.filter((team: any) =>
        team.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="px-4 py-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-black">Equipes</h1>

                <div className="flex gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Buscar equipe..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border px-3 py-2 rounded-lg w-64"
                    />

                    <Link
                        href="/dashboard/teams/create"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        Nova equipe
                    </Link>
                </div>
            </div>

            {/* Section: My Teams */}
            {mine.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">Minhas equipes</h2>
                    <div className="grid grid-cols-4 gap-4 mb-12">
                        {filteredTeams
                            .filter((team) => mine.some((t: any) => t.id === team.id))
                            .map((team: any) => (
                                <TeamCard key={team.id} team={team} />
                            ))}
                    </div>
                </>
            )}

            {/* Section: All Other Teams */}
            <h2 className="text-2xl font-bold mb-4">Todas as equipes</h2>
            <div className="grid grid-cols-4 gap-4">
                {filteredTeams
                    .filter((team) => !mine.some((t: any) => t.id === team.id))
                    .map((team: any) => (
                        <TeamCard key={team.id} team={team} />
                    ))}
            </div>

            {filteredTeams.length === 0 && (
                <p className="text-gray-500 mt-6">Nenhuma equipe encontrada.</p>
            )}
        </section>
    )
}

function TeamCard({ team }: any) {
    
    const router = useRouter()
    const { setSelectedTeam } = useTeamStore()

    return (
        <div
            key={team.id}
            className="border p-4 rounded-lg shadow hover:bg-gray-50 transition cursor-pointer"
            onClick={() => {
                setSelectedTeam(team)
                router.push(`/dashboard/teams/${team.id}`)
            }}
        >
            <p className="text-xl font-bold">{team.name}</p>
            <p className="text-sm text-gray-500">
                Tutor: {team.tutor?.nickname}
            </p>
            <p className="text-sm">
                Membros: {team.members_count} / 3
            </p>
        </div>
    )
}
