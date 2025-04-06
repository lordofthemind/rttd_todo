import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './components/IndexPage'
import AboutPage from './components/AboutPage'
import GreetPage from './components/GreetPage'
import SignupPage from './components/SignupPage'
import ToDo from './components/Todo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/greet" element={<GreetPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todos" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
