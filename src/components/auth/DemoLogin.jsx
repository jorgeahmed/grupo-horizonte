import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, LogIn, ArrowLeft } from 'lucide-react'
export default function DemoLogin({ title, subtitle, icon: Icon, onLogin, backTo = '/' }) {
  const [email, setEmail] = useState('demo@grupohorizonte.com')
  const [password, setPassword] = useState('demo123')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-10 bg-slate-50">
      <div className="w-full max-w-md">
        <Link
          to={backTo}
          className="inline-flex items-center text-sm text-slate-600 hover:text-brand mb-6 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver al sitio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 px-6 py-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-14 w-14 rounded-2xl bg-brand flex items-center justify-center">
                {Icon ? <Icon className="h-7 w-7 text-white" /> : <Building2 className="h-7 w-7 text-white" />}
              </div>
            </div>
            <p className="text-white/90 text-sm font-medium">Grupo Horizonte</p>
            <h1 className="text-xl font-bold text-white mt-3 font-heading">{title}</h1>
            <p className="text-slate-400 text-sm mt-2">{subtitle}</p>
            <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-amber-300 font-bold bg-amber-400/10 px-2 py-1 rounded">
              Demo · sin servidor real
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Correo
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-[var(--brand-primary)] outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-[var(--brand-primary)] outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand-hover text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <LogIn className="h-5 w-5" />
              Iniciar sesión (demo)
            </button>
            <p className="text-xs text-center text-slate-500">
              Cualquier dato funciona. Solo muestra cómo se vería el acceso real.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
