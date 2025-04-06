// src/components/Base.tsx
import Nav from './Nav'
import Footer from './Footer'

type BaseProps = {
    title: string
    children: React.ReactNode
}

export default function Base({ title, children }: BaseProps) {
    document.title = title

    return (
        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 min-h-screen">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Nav />
                <main className="w-full">
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-4xl mx-auto">
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}