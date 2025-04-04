// src/components/IndexPage.tsx
import Base from './Base'

export default function IndexPage() {
    return (
        <Base title="Home">
            <div className="bg-white rounded-2xl shadow-xl px-4 py-8 sm:px-6 md:px-10 max-w-xl w-full text-center space-y-6 mx-auto">
                <h1 className="text-4xl font-bold text-green-700 mb-4">
                    React ⚛️ TypeScript 🧠 Tailwind 💨 Deno 🦕
                </h1>

                <p className="text-green-900">
                    Welcome to your starter stack! 🎉
                </p>

                <div className="space-y-4">
                    <button
                        className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        onClick={() => alert("Hello 👋")}
                    >
                        Say Hello 👋
                    </button>
                    <div className="min-h-8 text-lg text-green-700 font-semibold"></div>
                </div>

                <div className="pt-4 border-t border-gray-200 text-sm text-gray-400">
                    Hot reload test — try editing <code className="bg-gray-100 px-1 rounded">./components/IndexPage.tsx</code>!
                </div>
            </div>
        </Base>
    )
}
