// src/components/Nav.tsx
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="flex justify-center space-x-6 mb-8">
            <Link
                to="/"
                className="text-green-800 font-semibold hover:text-green-600 px-3 py-2 rounded-lg transition-colors"
            >
                Home
            </Link>
            <Link
                to="/about"
                className="text-green-800 font-semibold hover:text-green-600 px-3 py-2 rounded-lg transition-colors"
            >
                About
            </Link>
            <Link
                to="/greet"
                className="text-green-800 font-semibold hover:text-green-600 px-3 py-2 rounded-lg transition-colors"
            >
                Greet
            </Link>
            <Link
                to="/signup"
                className="text-green-800 font-semibold hover:text-green-600 px-3 py-2 rounded-lg transition-colors"
            >
                Signup
            </Link>
            <Link
                to="/todos"
                className="text-green-800 font-semibold hover:text-green-600 px-3 py-2 rounded-lg transition-colors"
            >
                Todos
            </Link>
        </nav>
    )
}