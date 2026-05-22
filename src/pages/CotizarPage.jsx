import { FileText } from 'lucide-react'
import CotizacionForm from '../components/forms/CotizacionForm'
import EditableZone from '../components/demo/EditableZone'

export default function CotizarPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditableZone label="Encabezado" className="text-center mb-12 pt-4">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-muted text-brand mb-4">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Cotizar proyecto
            </h1>
            <p className="text-lg text-slate-600">
              Cuéntanos de forma rápida qué necesitas construir. Un asesor te contactará para
              dar seguimiento — sin trámites complicados.
            </p>
          </div>
        </EditableZone>

        <EditableZone label="Formulario" className="pt-4">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10">
            <CotizacionForm />
          </div>
        </EditableZone>
      </div>
    </div>
  )
}
