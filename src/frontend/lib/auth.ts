import api from "./proxy"

export async function refreshToken() {
    const refresh = localStorage.getItem("refresh")
    if (!refresh) return false
    try {
        const res = await api.post("/users/auth/refresh/", { refresh })
        localStorage.setItem("access", res.data.access)
        return true
    } catch (err) {
        console.error("Erro ao atualizar token:", err)
        logout()
        return false
    }
}

export function logout() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    window.location.href = "/login"
}

