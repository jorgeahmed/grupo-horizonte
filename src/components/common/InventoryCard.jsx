export default function InventoryCard({ item }) {
  const isMaquinaria = item.categoria === 'maquinaria'

  return (
    <article className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300">
      <img
        src={item.imagen}
        alt={item.titulo}
        loading="lazy"
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent flex flex-col justify-end p-6">
        <span
          className={`self-start px-3 py-1 rounded-md text-xs font-bold shadow-sm mb-2 text-white ${
            isMaquinaria ? 'bg-orange-500' : 'bg-brand'
          }`}
        >
          {item.etiqueta}
        </span>
        <h3 className="text-xl font-bold text-white mb-1">{item.titulo}</h3>
        <p className="text-sm text-slate-300 mb-1">{item.tipo} · {item.ubicacion}</p>
        <p className="text-lg font-medium text-brand-accent">{item.precio}</p>
      </div>
    </article>
  )
}
