"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"


export default function DashboardPage() {
    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
                <CardHeader>
                    <h2 className="text-lg font-semibold">Desafios</h2>
                </CardHeader>
                <CardContent>
                    <p>Explore desafios de IA publicados.</p>
                    <Link href="/dashboard/challenges" className="text-primary">Ver desafios →</Link>
                </CardContent>
            </Card>


            <Card>
                <CardHeader>
                    <h2 className="text-lg font-semibold">Equipes</h2>
                </CardHeader>
                <CardContent>
                    <p>Gerencie sua equipe e membros.</p>
                    <Link href="/dashboard/teams" className="text-primary">Minhas equipes →</Link>
                </CardContent>
            </Card>


            <Card>
                <CardHeader>
                    <h2 className="text-lg font-semibold">Leaderboard</h2>
                </CardHeader>
                <CardContent>
                    <p>Confira o ranking das equipes.</p>
                    <Link href="/dashboard/ranking" className="text-primary">Ver ranking →</Link>
                </CardContent>
            </Card>
        </div>
    )
}