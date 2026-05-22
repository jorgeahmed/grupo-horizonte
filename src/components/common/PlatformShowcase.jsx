import { Link } from 'react-router-dom'
import { Users, Package, LogIn } from 'lucide-react'
import EditableZone from '../demo/EditableZone'

const PLATFORMS = [
  {
    path: '/crm',
    icon: Users,
    title: 'CRM',
    price: 'USD 1,500 / mes',
    hours: 'Hasta 30 h por semana',
    desc: 'Pipeline de ventas, seguimiento a prospectos y comunicación con clientes.',
  },
  {
    path: '/erp',
    icon: Package,
    title: 'ERP',
    price: 'USD 2,500 / mes',
    hours: 'Hasta 40 h por semana',
    desc: 'Obras, compras, inventario, finanzas y operación en un solo sistema.',
  },
]

export default function PlatformShowcase() {
  return (
    <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditableZone label="Sistemas CRM / ERP" className="pt-4">
          <div>
            <p className="text-brand text-sm font-semibold uppercase tracking-wider text-center mb-2">
              Siguiente nivel
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3 font-heading">
              Pruebe cómo se ven el CRM y el ERP
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 text-sm sm:text-base px-2">
              Mismo estilo de marca. Entre con el botón de login (demo) y explore pantallas de ejemplo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {PLATFORMS.map((p) => (
                <div
                  key={p.path}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-brand flex items-center justify-center shrink-0">
                      <p.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                      <p className="text-sm text-brand font-semibold">{p.price}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{p.hours}</p>
                  <p className="text-sm text-slate-600 mb-6 flex-grow">{p.desc}</p>
                  <Link
                    to={p.path}
                    className="w-full bg-brand hover:bg-brand-hover text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
                  >
                    <LogIn className="h-5 w-5" />
                    Login demo · {p.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </EditableZone>
      </div>
    </section>
  )
}
