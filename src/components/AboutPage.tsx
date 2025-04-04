// src/components/AboutPage.tsx
import { useState } from 'react'
import Base from './Base'

export default function AboutPage() {
    const [fact, setFact] = useState<string | null>(null)

    return (
        <Base title="About">
            <div className="p-8 bg-white shadow rounded-xl space-y-4">
                <h1 className="text-3xl font-bold text-green-700">About This Project</h1>
                <p className="text-gray-700">
                    This is a lightweight starter kit using React, TypeScript, Tailwind CSS, and Deno.
                </p>

                <button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                    onClick={() => setFact("Did you know? Tailwind makes styling fun and fast with React! ⚡")}>
                    Show Fun Fact 🤓
                </button>

                <div id="fact" className="text-sm text-gray-500 italic pt-2">
                    {fact}
                </div>
            </div>
        </Base>
    )
}
