"use client"
// @ts-ignore: side-effect CSS import (no types)
import "@/app/globals.css"


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-dvw h-dvh grid grid-cols-2">
            <div className="col-span-1 h-full flex flex-col p-8">
                <div className="bg-emerald-800 px-2 py-2 rounded-2xl h-full w-full"></div>
            </div>
            {children}
        </div>
    )
}