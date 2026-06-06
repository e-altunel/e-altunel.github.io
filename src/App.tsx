import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CV from './pages/CV'
import Projects from './pages/Projects'
import Games from './pages/Games'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
