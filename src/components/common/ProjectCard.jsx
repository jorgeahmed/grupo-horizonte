import { MapPin } from 'lucide-react'

export default function ProjectCard({ obra }) {
  return (
    <article className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <span className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
          {obra.categoria}
        </span>
        <img
          src={obra.imagen}
          alt={obra.titulo}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{obra.titulo}</h3>
        <p className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1 shrink-0" />
          {obra.ubicacion}
        </p>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
          {obra.estado}
        </span>
      </div>
    </article>
  )
}
