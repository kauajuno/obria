'use client'
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

// ✅ Create base Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// --- Token helpers ---
const getAccessToken = () => localStorage.getItem('access')
const getRefreshToken = () => localStorage.getItem('refresh')

const setAccessToken = (token: string) => localStorage.setItem('access', token)
const clearTokens = () => {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')
}

// --- Add Authorization header automatically ---
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken()
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// --- Handle token expiration (401) automatically ---
let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: AxiosError | null, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) prom.reject(error)
    else prom.resolve(token)
  })
  failedQueue = []
}

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: any = error.config

    // If Unauthorized and not retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`
            return api(originalRequest)
          })
          .catch((err) => Promise.reject(err))
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const refresh = getRefreshToken()
        if (!refresh) throw new Error('No refresh token')

        // Request new access token
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/auth/refresh/`,
          { refresh }
        )

        const newAccess = response.data.access
        setAccessToken(newAccess)

        processQueue(null, newAccess)
        isRefreshing = false

        originalRequest.headers.Authorization = `Bearer ${newAccess}`
        return api(originalRequest)
      } catch (err) {
        processQueue(err as AxiosError, null)
        isRefreshing = false
        clearTokens()
        window.location.href = '/login'
        return Promise.reject(err)
      }
    }

    return Promise.reject(error)
  }
)

export default api
