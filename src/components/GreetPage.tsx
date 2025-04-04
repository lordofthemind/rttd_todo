// src/components/GreetPage.tsx
import { useState } from 'react'
import Base from './Base'

export default function GreetPage() {
    const [greeting, setGreeting] = useState<string | null>(null)

    return (
        <Base title="Greet">
            <div className="bg-white rounded-2xl shadow-xl px-4 py-8 sm:px-6 md:px-10 max-w-xl w-full text-center space-y-6 mx-auto">
                <h1 className="text-4xl font-bold text-green-700 mb-4">Greetings!</h1>

                <div className="space-y-4">
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                        onClick={() => setGreeting("Hey there! Nice to see you 👋")}
                    >
                        Get Greeting 👋
                    </button>

                    <div id="greeting-response" className="text-lg text-green-700 font-semibold">
                        {greeting}
                    </div>
                </div>
            </div>
        </Base>
    )
}
