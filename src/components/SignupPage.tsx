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

        // Simulate a success message
        setResponse(`Thank you, ${name}! We'll notify you at ${email}.`)
    }

    return (
        <Base title="Signup">
            <div className="p-8 bg-white shadow-xl rounded-xl space-y-6 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-green-700">Sign up for Updates</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <div id="signup-response" className="text-green-600 font-semibold">
                    {response}
                </div>
            </div>
        </Base>
    )
}
