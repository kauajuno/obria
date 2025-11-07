"use client"

import ChallengeCard from "@/components/ChallengeCard"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"


export default function DashboardPage() {
    return (
        <section className="px-4 py-4">
            <h1>Desafios</h1>
            <div className="challenges-container grid grid-cols-4 gap-4">
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
                <ChallengeCard
                    title="Desafio um"
                    coinsReward={200}
                    createdAt={new Date()}
                />
            </div>
        </section>
    )
}