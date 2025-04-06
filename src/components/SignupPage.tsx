// src/components/SignupPage.tsx
import { useState } from 'react'
import Base from './Base'

export default function SignupPage() {
    const [response, setResponse] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')?.toString().trim()
        const email = formData.get('email')?.toString().trim()

        if (!name || !email) return setResponse("Please provide name and email.")

        setResponse(`Thank you, ${name}! We'll notify you at ${email}.`)
    }

    return (
        <Base title="Signup">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-green-700 text-center">Sign up for Updates</h2>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                {response && (
                    <div className="p-4 bg-green-50 rounded-lg text-green-800 text-center">
                        {response}
                    </div>
                )}
            </div>
        </Base>
    )
}