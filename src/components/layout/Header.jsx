import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import EditableZone from '../demo/EditableZone'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <EditableZone label="Logo" inline className="pt-3">
            <Logo />
          </EditableZone>

          <EditableZone label="Menús" className="hidden md:block pt-3">
            <nav className="flex space-x-8 px-2 py-1" aria-label="Navegación principal">
              <NavLinks />
            </nav>
          </EditableZone>

          <EditableZone label="Botón CTA" className="hidden md:block pt-3" inline>
            <Link
              to="/cotizar"
              className="bg-brand hover:bg-brand-hover text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm"
            >
              Cotizar Proyecto
            </Link>
          </EditableZone>

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
        <EditableZone label="Menú móvil" className="md:hidden mx-4 mb-2">
          <nav
            className="bg-white border border-slate-100 px-4 pt-4 pb-6 shadow-lg rounded-xl flex flex-col space-y-4"
            aria-label="Navegación móvil"
          >
            <NavLinks onNavigate={closeMenu} />
            <Link
              to="/cotizar"
              onClick={closeMenu}
              className="bg-brand text-white px-5 py-2.5 rounded-md font-medium text-center"
            >
              Cotizar Proyecto
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <Link to="/crm" onClick={closeMenu} className="text-center text-sm py-2.5 border border-slate-200 rounded-md font-medium">
                CRM demo
              </Link>
              <Link to="/erp" onClick={closeMenu} className="text-center text-sm py-2.5 border border-slate-200 rounded-md font-medium">
                ERP demo
              </Link>
            </div>
          </nav>
        </EditableZone>
      )}
    </header>
  )
}
