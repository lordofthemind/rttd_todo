// src/components/FeaturesPage.tsx
import Base from './Base';

const features = [
    {
        icon: '⚡',
        title: 'Blazing Fast',
        description: 'Built with Vite for instant hot reloads',
        color: 'text-yellow-500'
    },
    {
        icon: '🎨',
        title: 'Beautiful UI',
        description: 'Tailwind CSS for rapid styling',
        color: 'text-pink-500'
    },
    {
        icon: '🛡️',
        title: 'Type Safe',
        description: 'TypeScript for robust code',
        color: 'text-blue-500'
    },
    {
        icon: '⚛️',
        title: 'React Powered',
        description: 'Modern component-based architecture',
        color: 'text-cyan-500'
    },
    {
        icon: '🦕',
        title: 'Deno Runtime',
        description: 'Secure JavaScript/TypeScript runtime',
        color: 'text-green-500'
    },
    {
        icon: '🚀',
        title: 'Production Ready',
        description: 'Optimized builds and best practices',
        color: 'text-red-500'
    }
];

export default function FeaturesPage() {
    return (
        <Base title="Features">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-green-700 mb-3">Starter Kit Features</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to build modern web applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className={`text-4xl mb-4 ${feature.color}`}>{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="mb-6 text-green-100">
                        Clone the repository and begin building your next great idea today!
                    </p>
                    <div className="bg-black bg-opacity-20 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <code>deno run -A https://deno.land/x/rttd-starter/setup.ts</code>
                    </div>
                </div>
            </div>
        </Base>
    );
}