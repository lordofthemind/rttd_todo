// src/components/GreetPage.tsx
import { useState } from 'react'
import Base from './Base'

export default function GreetPage() {
    const [greeting, setGreeting] = useState<string | null>(null)

    return (
        <Base title="Greet">
            <div className="space-y-6 text-center">
                <h1 className="text-3xl font-bold text-green-700">Greetings!</h1>

                <div className="flex justify-center">
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                        onClick={() => setGreeting("Hey there! Nice to see you 👋")}
                    >
                        Get Greeting 👋
                    </button>
                </div>

                {greeting && (
                    <div className="p-4 bg-green-50 rounded-lg text-green-800">
                        {greeting}
                    </div>
                )}
            </div>
        </Base>
    )
}