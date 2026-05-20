import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ObrasPage from './pages/ObrasPage'
import VentasPage from './pages/VentasPage'
import VacantesPage from './pages/VacantesPage'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/obras" element={<ObrasPage />} />
          <Route path="/ventas" element={<VentasPage />} />
          <Route path="/vacantes" element={<VacantesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
