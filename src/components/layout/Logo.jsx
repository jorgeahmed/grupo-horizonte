import { Link } from 'react-router-dom'
import { Building2 } from 'lucide-react'

export default function Logo({ variant = 'light' }) {
  const isDark = variant === 'dark'

  return (
    <Link
      to="/"
      className="flex items-center"
      aria-label="Grupo Horizonte — Ir al inicio"
    >
      <Building2
        className={`h-8 w-8 ${isDark ? 'text-brand-accent' : 'text-brand'}`}
      />
      <span
        className={`ml-2 text-2xl font-bold tracking-tight font-heading ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        Grupo
        <span className={isDark ? 'text-brand-accent' : 'text-brand'}>Horizonte</span>
      </span>
    </Link>
  )
}
