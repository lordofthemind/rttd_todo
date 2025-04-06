// src/components/Nav.tsx
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
                to="/"
                className="px-4 py-2 text-green-800 font-medium hover:bg-green-100 rounded-lg transition-colors"
            >
                Home
            </Link>
            <Link
                to="/features"
                className="px-4 py-2 text-green-800 font-medium hover:bg-green-100 rounded-lg transition-colors"
            >
                Features
            </Link>
            <Link
                to="/greet"
                className="px-4 py-2 text-green-800 font-medium hover:bg-green-100 rounded-lg transition-colors"
            >
                Greet
            </Link>
            <Link
                to="/todos"
                className="px-4 py-2 text-green-800 font-medium hover:bg-green-100 rounded-lg transition-colors"
            >
                Todos
            </Link>
            <Link
                to="/contact"
                className="px-4 py-2 text-green-800 font-medium hover:bg-green-100 rounded-lg transition-colors"
            >
                Contact
            </Link>
            <Link
                to="/settings"
                className="px-4 py-2 text-green-800 font-medium hover:bg-green-100 rounded-lg transition-colors"
            >
                Settings
            </Link>
            <Link
                to="/about"
                className="px-4 py-2 text-green-800 font-medium hover:bg-green-100 rounded-lg transition-colors"
            >
                About
            </Link>
            <Link
                to="/signup"
                className="px-4 py-2 text-green-800 font-medium hover:bg-green-100 rounded-lg transition-colors"
            >
                Signup
            </Link>
        </nav>
    )
}