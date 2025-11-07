"use client"
import Editor from "@monaco-editor/react"

interface Props {
    value: string
    onChange: (value: string) => void
    language?: string
}

export default function CodeEditor({ value, onChange, language = "python" }: Props) {
    return (
        <div className="rounded-lg overflow-hidden border shadow-sm">
            <Editor
                height="60vh"
                theme="vs-dark"
                language={language}
                value={value}
                onChange={(val) => onChange(val || "")}
                options={{ fontSize: 14, minimap: { enabled: false }, automaticLayout: true }}
            />
        </div>
    )
}