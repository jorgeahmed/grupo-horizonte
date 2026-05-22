import { Presentation } from 'lucide-react'

const PRESENTATION_URL = `${import.meta.env.BASE_URL}docs/presentacion-cliente.html`

export default function FloatingOfferButton() {
  return (
    <a
      href={PRESENTATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[60] group flex items-center gap-2 sm:gap-3
        bottom-4 right-3 sm:bottom-6 sm:right-6
        max-w-[calc(100vw-1.5rem)] sm:max-w-[22rem]
        bg-slate-900 hover:bg-brand text-white
        pl-3 pr-4 py-2.5 sm:pl-4 sm:pr-5 sm:py-3.5
        rounded-full shadow-xl border border-slate-700
        transition-all duration-300 hover:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      aria-label="Ver propuesta comercial"
    >
      <span className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-brand group-hover:opacity-90 transition-colors">
        <Presentation className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>
      <span className="text-left leading-snug min-w-0">
        <span className="block text-[10px] sm:text-xs text-blue-200 font-medium truncate">
          ¿Ya viste la página web?
        </span>
        <span className="block text-xs sm:text-sm font-semibold truncate">
          Esto es lo que te ofrezco
        </span>
      </span>
    </a>
  )
}
