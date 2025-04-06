// src/components/IndexPage.tsx
import { useState } from 'react';
import Base from './Base';

export default function IndexPage() {
    const [clickCount, setClickCount] = useState(0);
    const [showWelcome, setShowWelcome] = useState(false);
    const [techStack] = useState([
        { name: 'React', icon: '⚛️', color: 'text-cyan-500' },
        { name: 'TypeScript', icon: '🧠', color: 'text-blue-500' },
        { name: 'Tailwind', icon: '💨', color: 'text-emerald-500' },
        { name: 'Deno', icon: '🦕', color: 'text-green-500' },
        { name: 'Vite', icon: '⚡', color: 'text-yellow-500' }
    ]);
    const [activeTech, setActiveTech] = useState<number | null>(null);

    const handleHelloClick = () => {
        setClickCount(prev => prev + 1);
        setShowWelcome(true);
        setTimeout(() => setShowWelcome(false), 2000);
    };

    const getHelloMessage = () => {
        const messages = [
            "Hello there! 👋",
            "Welcome back! 🎉",
            "Nice to see you! 😊",
            "You're awesome! 🌟",
            "Have a great day! ☀️"
        ];
        return messages[clickCount % messages.length];
    };

    return (
        <Base title="Home">
            <div className="space-y-8 text-center">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-6 shadow-lg">
                    <h1 className="text-4xl font-bold mb-2">
                        Modern Web Development Stack
                    </h1>
                    <p className="text-green-100 text-lg">
                        Everything you need to build amazing applications
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">Explore Our Tech Stack</h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {techStack.map((tech, index) => (
                            <button
                                key={tech.name}
                                onClick={() => setActiveTech(index === activeTech ? null : index)}
                                className={`px-4 py-2 rounded-lg transition-all ${activeTech === index ? 'bg-green-100 text-green-800 scale-105' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                <span className={`text-xl mr-2 ${tech.color}`}>{tech.icon}</span>
                                {tech.name}
                            </button>
                        ))}
                    </div>

                    {activeTech !== null && (
                        <div className="bg-green-50 p-4 rounded-lg text-left animate-fade-in">
                            <h3 className="font-bold text-lg flex items-center mb-2">
                                <span className={`text-2xl mr-2 ${techStack[activeTech].color}`}>
                                    {techStack[activeTech].icon}
                                </span>
                                {techStack[activeTech].name}
                            </h3>
                            <p className="text-gray-700">
                                {getTechDescription(techStack[activeTech].name)}
                            </p>
                        </div>
                    )}
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto">
                    <div className="space-y-4">
                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 duration-200 shadow-md"
                            onClick={handleHelloClick}
                        >
                            Say Hello 👋
                        </button>

                        {showWelcome && (
                            <div className="animate-bounce text-green-600 font-semibold text-lg">
                                {getHelloMessage()}
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
                    <p>Hot reload test — try editing <code className="bg-gray-100 px-1.5 py-0.5 rounded">src/components/IndexPage.tsx</code></p>
                    <p className="mt-1 text-xs">Click count: {clickCount}</p>
                </div>
            </div>
        </Base>
    );
}

function getTechDescription(techName: string): string {
    const descriptions: Record<string, string> = {
        'React': 'A JavaScript library for building user interfaces with reusable components and virtual DOM for efficient updates.',
        'TypeScript': 'A strongly typed superset of JavaScript that adds static types, improving code quality and developer experience.',
        'Tailwind': 'A utility-first CSS framework that lets you build designs directly in your markup with responsive modifiers.',
        'Deno': 'A secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust, with built-in TypeScript support.',
        'Vite': 'Next generation frontend tooling that provides extremely fast development server start and hot module replacement.'
    };
    return descriptions[techName] || 'No description available.';
}