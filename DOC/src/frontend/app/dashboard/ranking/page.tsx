"use client"

import { useQuery } from "@tanstack/react-query"
import { getLeaderboard } from "@/lib/api"

export default function LeaderboardPage() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["leaderboard"],
        queryFn: getLeaderboard,
    })

    console.log(data)

    if (isLoading) return <p className="p-6">Carregando leaderboard...</p>
    if (error) return <p className="p-6 text-red-500">Erro ao carregar leaderboard 😢</p>

    const entries = data || []

    return (
        <section className="px-6 py-6">
            <h1 className="text-4xl font-black mb-8">Leaderboard de Equipes</h1>

            <div className="border rounded-lg shadow overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-800 border-b">
                        <tr>
                            <th className="p-3">Rank</th>
                            <th className="p-3">Equipe</th>
                            <th className="p-3">Tutor</th>
                            <th className="p-3">Acurácia</th>
                            <th className="p-3">Submissões</th>
                            <th className="p-3">Última Atualização</th>
                        </tr>
                    </thead>

                    <tbody>
                        {entries.map((entry: any, index: number) => (
                            <tr key={entry.id} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-bold">
                                    {index === 0 && "🥇"}
                                    {index === 1 && "🥈"}
                                    {index === 2 && "🥉"}
                                    {index > 2 && index + 1}
                                </td>


                                <td className="p-3">{entry.team.name}</td>

                                <td className="p-3">
                                    {entry.team.tutor?.nickname || "N/A"}
                                </td>

                                <td className="p-3">
                                    {(entry.best_accuracy * 100).toFixed(2)}%
                                </td>

                                <td className="p-3">{entry.total_submissions}</td>

                                <td className="p-3">
                                    {new Date(entry.updated_at).toLocaleString("pt-BR")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
