import { create } from "zustand"

interface Team {
  id: number
  name: string
  members_count: number
  is_complete: boolean
  created_at: string
  updated_at: string
  tutor: {
    id: number
    username: string
    nickname: string
    email: string
    user_type: string
  }
  members: any[]
}

interface TeamStore {
  selectedTeam: Team | null
  setSelectedTeam: (team: Team) => void
  clearSelectedTeam: () => void
}

export const useTeamStore = create<TeamStore>((set) => ({
  selectedTeam: null,
  setSelectedTeam: (team) => set({ selectedTeam: team }),
  clearSelectedTeam: () => set({ selectedTeam: null }),
}))
