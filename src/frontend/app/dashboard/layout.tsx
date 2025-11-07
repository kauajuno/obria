"use client"
import Navbar from "@/components/common/Navbar"


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 p-6">{children}</main>
        </div>
    )
}