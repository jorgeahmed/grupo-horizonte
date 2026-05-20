import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import NavLinks from './NavLinks'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <nav className="hidden md:flex space-x-8" aria-label="Navegación principal">
            <NavLinks />
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/ventas"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm"
            >
              Cotizar Proyecto
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-slate-600 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="md:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 shadow-lg flex flex-col space-y-4"
          aria-label="Navegación móvil"
        >
          <NavLinks onNavigate={closeMenu} />
          <Link
            to="/ventas"
            onClick={closeMenu}
            className="bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium text-center"
          >
            Cotizar Proyecto
          </Link>
        </nav>
      )}
    </header>
  )
}
