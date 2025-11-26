'use client'
import api from './proxy'

export const loginUser = async (username: string, password: string) => {
  try {
    const res = await api.post('users/auth/login/', { username, password })

    localStorage.setItem('access', res.data.access)
    localStorage.setItem('refresh', res.data.refresh)

    return {
      ok: true,
      status: res.status,
      message: 'Login successful',
      data: res.data
    }
  } catch (error: any) {
    const status = error.response?.status || 500
    const message =
      status === 401
        ? 'Usuário ou senha inválidos.'
        : error.response?.data?.detail || 'Erro ao fazer login.'

    return {
      ok: false,
      status,
      message
    }
  }
}


// ✅ Register
export const registerUser = async (
  username: string,
  email: string,
  password: string,
  nickname?: string
) => {
  try {
    const res = await api.post('/users/users/register/', {
      username,
      email,
      password,
      password2: password,
      user_type: 'participant',
      nickname: nickname || username,
    })
    console.log('User registered:', res.data)
    return true
  } catch (error: any) {
    console.error('Registration failed:', error.response?.data || error.message)
    return false
  }
}

// ✅ Get current user info
export const getCurrentUser = async () => {
  try {
    const res = await api.get('users/users/me/')
    return res.data
  } catch (error) {
    console.error('Failed to fetch user info:', error)
    throw error
  }
}

// ✅ Logout helper
export const logout = () => {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')
  window.location.href = '/login'
}

export const getChallenges = async () => {
  const res = await api.get("challenges/challenges/")
  console.log(res)
  return res.data
}

export const getChallengeById = async (id: string | number) => {
  const res = await api.get(`challenges/challenges/${id}/`)
  return res.data
}

// Create a team (only tutors)
export const createTeam = async (teamData: any) => {
  try {
    const res = await api.post("users/teams/", teamData)
    return res.data
  } catch (err: any) {

    const backendMessage =
      err.response?.data?.detail ||
      err.response?.data?.error ||
      JSON.stringify(err.response?.data) ||
      "Erro desconhecido"

    throw new Error(backendMessage)
  }
}


// Get all teams
export const getAllTeams = async () => {
  const res = await api.get("users/teams/")
  return res.data.results
}

// Get my teams (for tutor OR participant)
export const getMyTeams = async () => {
  const res = await api.get("users/teams/my_teams/")
  return res.data
}

// Add member
export const addTeamMember = async (teamId: number, participantId: number) => {
  const res = await api.post(`users/teams/${teamId}/add_member/`, {
    participant_id: participantId,
  })
  return res.data
}

// Remove member
export const removeTeamMember = async (teamId: number, participantId: number) => {
  const res = await api.delete(`users/teams/${teamId}/remove_member/`, {
    data: { participant_id: participantId },
  })
  return res.data
}

export const getTeamById = async (id: number) => {
  const res = await api.get(`users/teams/${id}/`)
  return res.data
}

export const getAllUsers = async () => {
  const res = await api.get("users/users/")
  return res.data
}

export const getLeaderboard = async () => {
  const res = await api.get("leaderboard/leaderboard/");
  return res.data.results || res.data; 
};
