import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './components/IndexPage'
import AboutPage from './components/AboutPage'
import GreetPage from './components/GreetPage'
import SignupPage from './components/SignupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/greet" element={<GreetPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
