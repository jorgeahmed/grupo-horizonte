import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, LogOut, Menu, X } from 'lucide-react'

export default function PlatformShell({
  title,
  subtitle,
  otherLink,
  navItems,
  activeTab,
  onTabChange,
  onLogout,
  children,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 lg:hidden">
        <div className="px-4 h-14 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-600"
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="font-bold text-slate-900 text-sm">{title}</span>
          <button type="button" onClick={onLogout} className="p-2 text-slate-600" aria-label="Salir">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 max-w-[1600px] w-full mx-auto">
        {sidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Cerrar menú"
          />
        )}

        <aside
          className={`fixed lg:sticky top-0 lg:top-0 left-0 z-50 lg:z-0 h-full lg:h-auto lg:min-h-[calc(100vh)] w-64 bg-slate-900 text-white flex flex-col shrink-0 transition-transform duration-200 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <Building2 className="h-7 w-7 text-brand-accent shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{title}</p>
                <p className="text-[10px] text-slate-400 truncate">{subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              className="lg:hidden p-1 text-slate-400"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onTabChange(item.id)
                  setSidebarOpen(false)
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-brand text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-3 border-t border-slate-800 space-y-2">
            {otherLink && (
              <Link
                to={otherLink.to}
                className="block text-center text-xs py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                {otherLink.label}
              </Link>
            )}
            <Link
              to="/"
              className="block text-center text-xs py-2 text-slate-400 hover:text-white"
            >
              ← Sitio web
            </Link>
            <button
              type="button"
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 text-xs py-2.5 text-slate-400 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              Cerrar sesión
            </button>
          </div>
        </aside>

        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-x-hidden">{children}</main>
      </div>
    </div>
  )
}
