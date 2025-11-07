"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logout } from "@/lib/auth"
import { useEffect, useState } from "react"


export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }



    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-background/70 backdrop-blur-sm sticky top-0 z-50">
            <h1 className="text-xl font-semibold">OBRIA Dashboard</h1>
            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Alternar tema"
                >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>


                <Button variant="destructive" size="icon" onClick={logout} aria-label="Sair">
                    <LogOut className="h-5 w-5" />
                </Button>
            </div>
        </nav>
    )
}