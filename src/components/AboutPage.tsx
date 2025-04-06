// src/components/AboutPage.tsx
import { useState } from 'react'
import Base from './Base'

export default function AboutPage() {
    const [fact, setFact] = useState<string | null>(null)

    return (
        <Base title="About">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-green-700 text-center">About This Project</h1>
                <p className="text-gray-700 text-center">
                    This is a lightweight starter kit using React, TypeScript, Tailwind CSS, and Deno.
                </p>

                <div className="flex justify-center">
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                        onClick={() => setFact("Did you know? Tailwind makes styling fun and fast with React! ⚡")}
                    >
                        Show Fun Fact 🤓
                    </button>
                </div>

                {fact && (
                    <div className="p-4 bg-green-50 rounded-lg text-green-800 text-center">
                        {fact}
                    </div>
                )}
            </div>
        </Base>
    )
}