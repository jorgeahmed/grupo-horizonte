import { Pencil } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function EditableZone({ label, children, className = '', inline = false }) {
  const { showHints } = useTheme()

  if (!showHints) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      className={`relative ${inline ? 'inline-flex' : 'block'} ${className}`}
      data-editable={label}
    >
      <span
        className="absolute z-30 flex items-center gap-0.5 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wide max-w-[90vw] sm:max-w-none truncate sm:whitespace-nowrap shadow-md border border-amber-200/80 bg-amber-400 text-amber-950 pointer-events-none
          -top-1 right-0 sm:-top-2 sm:left-1/2 sm:right-auto sm:-translate-x-1/2"
        title={`Editable: ${label}`}
      >
        <Pencil className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0" />
        <span className="truncate">{label}</span>
      </span>
      <div className="ring-1 sm:ring-2 ring-amber-400/40 ring-offset-1 sm:ring-offset-2 ring-offset-transparent rounded-lg transition-shadow hover:ring-amber-400/70">
        {children}
      </div>
    </div>
  )
}
