"use client"

import { useEffect, useMemo, useState } from "react"
import { Calendar, CoinsIcon } from "lucide-react"

interface ChallengeCardProps {
  title: string
  coinsReward: number
  createdAt: Date
}

const COLORS = [
  "#22d3ee", // cyan
  "#a855f7", // purple
  "#f97316", // orange
  "#10b981", // emerald
  "#3b82f6", // blue
  "#e11d48", // rose
  "#facc15", // yellow
]

function getRandomGradient() {
  const shuffled = COLORS.sort(() => 0.5 - Math.random())
  const [color1, color2] = shuffled.slice(0, 2)
  return `linear-gradient(135deg, ${color1}, ${color2})`
}

function ChallengeCard({ title, coinsReward, createdAt }: ChallengeCardProps) {
  // Memoize gradient so it doesn’t change on every re-render
  const gradient = useMemo(() => getRandomGradient(), [])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className="
        flex flex-col 
        rounded-2xl 
        w-full 
        h-[40dvh] 
        overflow-hidden 
        transition-transform 
        duration-300 
        hover:-translate-y-2
      "
      style={{
        boxShadow: `0 0 0 transparent`, // initial state
      }}
    >
      <div
        className="h-[30%] w-full rounded-t-2xl"
        style={{
          backgroundImage: gradient,
        }}
      ></div>

      <div
        className="
          content 
          h-[70%] 
          w-full
          min-h-min
          max-h-40
          bg-card 
          text-card-foreground 
          px-4 
          py-3
          transition-shadow 
          duration-300
          hover:shadow-[0_0_25px_var(--hover-color)]
          rounded-b-2xl
        "
        style={{
          // Use the same gradient colors to build a glow-like shadow
          // Trick: extract a color from the gradient for hover
          // We pick the first color for simplicity
          // and define a CSS variable for it
          // so hover can reference it easily
          ['--hover-color' as any]: gradient.split(",")[1]?.replace(")", "").trim(),
        }}
      >
        <h2 className="font-bold text-2xl">{title}</h2>

        <div className="coins flex gap-2 text-gray-400 text-sm mt-2">
          <CoinsIcon size={16} />
          <span>{coinsReward} OBRIA coins</span>
        </div>

        <div className="createdAt flex gap-2 text-gray-400 text-sm mt-1">
          <Calendar size={16} />
          <span>
            Criado em{" "}
            {createdAt.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ChallengeCard
