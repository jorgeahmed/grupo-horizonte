import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ObrasPage from './pages/ObrasPage'
import VentasPage from './pages/VentasPage'
import VacantesPage from './pages/VacantesPage'
import CotizarPage from './pages/CotizarPage'
import CrmDemoPage from './pages/CrmDemoPage'
import ErpDemoPage from './pages/ErpDemoPage'
import FloatingOfferButton from './components/common/FloatingOfferButton'
import ThemeCustomizer from './components/demo/ThemeCustomizer'
import DemoBanner from './components/demo/DemoBanner'

function AppShell() {
  const { pathname } = useLocation()
  const isPlatformDemo = pathname === '/crm' || pathname === '/erp'

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col overflow-x-hidden">
      {!isPlatformDemo && <DemoBanner />}
      {!isPlatformDemo && <ThemeCustomizer />}
      {!isPlatformDemo && <FloatingOfferButton />}
      {!isPlatformDemo && <Header />}
      <main className={`flex-grow ${isPlatformDemo ? '' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/obras" element={<ObrasPage />} />
          <Route path="/ventas" element={<VentasPage />} />
          <Route path="/vacantes" element={<VacantesPage />} />
          <Route path="/cotizar" element={<CotizarPage />} />
          <Route path="/crm" element={<CrmDemoPage />} />
          <Route path="/erp" element={<ErpDemoPage />} />
        </Routes>
      </main>
      {!isPlatformDemo && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}
