"use client"

import { useParams } from "next/navigation"
import { useChallengeStore } from "@/store/challengeStore"
import { useQuery } from "@tanstack/react-query"
import { getChallengeById } from "@/lib/api"
import { CalendarIcon } from "lucide-react"
import CodeEditor from "@/components/common/Editor"
import { useState } from "react"

export default function ChallengeDetailsPage() {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const { selectedChallenge } = useChallengeStore()
  const [code, setCode] = useState("# Escreva seu código aqui...")

  const { data: challenge, isLoading } = useQuery({
    queryKey: ["challenge", id],
    queryFn: () => getChallengeById(id!),
    initialData: selectedChallenge?.id === Number(id) ? selectedChallenge : undefined,
  })

  if (isLoading || !challenge) return <p>Carregando desafio...</p>

  return (
    <section className="grid grid-cols-2 gap-4 px-4 py-2">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-4 bg-card text-card-foreground px-8 py-4 rounded-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold">{challenge.title}</h1>
          <div className="flex items-center gap-2 text-gray-400">
            <CalendarIcon />
            <p>
              Criado em{" "}
              {new Date(challenge.created_at).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>

        <p className="text-base">{challenge.description}</p>

        <div>
          <h2 className="font-semibold text-lg mb-2">Instruções</h2>
          <p>{challenge.instructions}</p>
        </div>
      </div>

      {/* RIGHT COLUMN (MONACO EDITOR) */}
      <div className="bg-card text-card-foreground rounded-2xl">
        <CodeEditor
          value={code}
          onChange={(val) => setCode(val ?? "")}
          language="python"
        />
      </div>
    </section>
  )
}

export async function generateStaticParams() {
  return [];
}