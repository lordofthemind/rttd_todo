// src/components/Nav.tsx
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="flex justify-center space-x-6 mb-6">
            <Link to="/" className="text-green-800 font-semibold hover:underline">Home</Link>
            <Link to="/about" className="text-green-800 font-semibold hover:underline">About</Link>
            <Link to="/greet" className="text-green-800 font-semibold hover:underline">Greet</Link>
            <Link to="/signup" className="text-green-800 font-semibold hover:underline">Signup</Link>
        </nav>
    )
}
