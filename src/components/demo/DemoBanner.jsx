import { Layers } from 'lucide-react'

export default function DemoBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-950 text-center py-2 px-3 sm:px-4 text-[11px] sm:text-sm z-40 relative">
      <p className="flex items-center justify-center gap-2 flex-wrap font-medium">
        <Layers className="h-4 w-4 shrink-0 text-amber-600" />
        <span>
          <strong>Web dinámica (demo):</strong> pulse <strong>Diseño</strong> (abajo a la izquierda) para
          ver qué es editable — logo, menús, catálogo, colores y fuentes.
        </span>
      </p>
    </div>
  )
}
