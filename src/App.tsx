// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './components/IndexPage'
import AboutPage from './components/AboutPage'
import GreetPage from './components/GreetPage'
import SignupPage from './components/SignupPage'
import ToDoPage from './components/TodoPage'
import ContactPage from './components/ContactPage'
import FeaturesPage from './components/FeaturesPage'
import SettingsPage from './components/SettingsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/greet" element={<GreetPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todos" element={<ToDoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App