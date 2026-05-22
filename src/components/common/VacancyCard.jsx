import { MapPin, ChevronRight } from 'lucide-react'

export default function VacancyCard({ vacante }) {
  return (
    <article className="border border-slate-200 rounded-xl p-6 hover:border-brand/40 hover:shadow-md transition-all bg-slate-50 group">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">
            {vacante.puesto}
          </h4>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-200 text-slate-700">
              {vacante.depto}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-brand-muted text-brand border border-brand/20">
              <MapPin className="h-3 w-3 mr-1" />
              {vacante.ubicacion}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100">
              {vacante.tipo}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="text-brand font-medium text-sm hover:opacity-80 flex items-center whitespace-nowrap"
        >
          Ver detalles
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </article>
  )
}
