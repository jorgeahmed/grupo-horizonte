import SectionTitle from '../components/common/SectionTitle'
import InventoryCard from '../components/common/InventoryCard'
import EditableZone from '../components/demo/EditableZone'
import { inventario } from '../data/inventario'

export default function VentasPage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditableZone label="Título sección" className="pt-4 mb-12">
          <SectionTitle
            title="Ventas y Maquinaria"
            subtitle="Explora nuestra galería de propiedades exclusivas y maquinaria disponible."
          />
        </EditableZone>
        <EditableZone label="Catálogo" className="pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inventario.map((item) => (
              <InventoryCard key={item.id} item={item} />
            ))}
          </div>
        </EditableZone>
      </div>
    </div>
  )
}
