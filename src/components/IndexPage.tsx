// src/components/IndexPage.tsx
import { useState } from 'react';
import Base from './Base';

export default function IndexPage() {
    const [clickCount, setClickCount] = useState(0);
    const [showWelcome, setShowWelcome] = useState(false);

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
                        React ⚛️ TypeScript 🧠 Tailwind 💨 Deno 🦕
                    </h1>
                    <p className="text-green-100 text-lg">
                        Your ultimate starter stack for modern web development
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon="⚡"
                        title="Blazing Fast"
                        description="Built with Vite for instant hot reloads"
                    />
                    <FeatureCard
                        icon="🎨"
                        title="Beautiful UI"
                        description="Tailwind CSS for rapid styling"
                    />
                    <FeatureCard
                        icon="🛡️"
                        title="Type Safe"
                        description="TypeScript for robust code"
                    />
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

// FeatureCard component for better organization
function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="font-bold text-green-700 text-lg mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}