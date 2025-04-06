// src/components/AddTodoForm.tsx
import React, { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!input.trim()) return;
        onSubmit(input);
        setInput("")
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
                className="rounded-s-lg grow border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
            />
            <button
                type="submit"
                className="w-16 rounded-e-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
                Add
            </button>
        </form>
    )
}