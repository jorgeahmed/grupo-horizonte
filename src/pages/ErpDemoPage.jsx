import { useState } from 'react'
import {
  Package,
  HardHat,
  Truck,
  Wallet,
  AlertTriangle,
  Bot,
  ClipboardList,
  BarChart3,
  Wrench,
} from 'lucide-react'
import DemoLogin from '../components/auth/DemoLogin'
import PlatformShell from '../components/platform/PlatformShell'
import {
  ERP_NAV,
  ERP_OBRAS,
  ERP_COMPRAS,
  ERP_INVENTARIO,
  ERP_FINANZAS,
} from '../data/erpDemo'

function DemoAlert() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 mb-6">
      <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
      <p className="text-sm text-amber-900">
        <strong>Alcance variable.</strong> Módulos a medida, cotización con IA o integración contable
        requieren más tiempo de planeación, ejecución y pruebas que las 40 h/semana de referencia del plan.
      </p>
    </div>
  )
}

function ErpDashboard() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {[
          { label: 'Obras activas', value: '4', icon: HardHat },
          { label: 'Órdenes compra', value: '12', icon: Truck },
          { label: 'Activos en renta', value: '28', icon: Package },
          { label: 'Flujo del mes', value: 'USD 1.1M', icon: Wallet },
        ].map((k) => (
          <div key={k.label} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <k.icon className="h-5 w-5 text-brand mb-2" />
            <p className="text-xs text-slate-500">{k.label}</p>
            <p className="text-lg sm:text-2xl font-bold text-slate-900">{k.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
          <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-brand" />
            Avance global de obra
          </h2>
          <div className="space-y-4">
            {ERP_OBRAS.map((o) => (
              <div key={o.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-800 truncate pr-2">{o.nombre}</span>
                  <span className="text-slate-600 shrink-0">{o.avance}%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand rounded-full transition-all"
                    style={{ width: `${o.avance}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
          <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Bot className="h-5 w-5 text-violet-600" />
            Solicitudes especiales (demo)
          </h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="p-3 rounded-lg bg-violet-50 border border-violet-100">
              <strong className="text-violet-900">Cotización IA</strong> — borrador automático; requiere validación humana y pruebas.
            </li>
            <li className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <strong>Portal proveedores</strong> — en evaluación; no incluido en plan base.
            </li>
            <li className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <strong>Reporte trimestral</strong> — propuesta sujeta a autorización del cliente.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

function ErpObras() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {ERP_OBRAS.map((o) => (
        <div key={o.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex justify-between items-start gap-2 mb-3">
            <h3 className="font-bold text-slate-900">{o.nombre}</h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-muted text-brand shrink-0">
              {o.estado}
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-4">{o.ciudad}</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Presupuesto</span>
              <span className="font-medium">{o.presupuesto}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Residente</span>
              <span>{o.residente}</span>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-500">Avance</span>
                <span className="font-bold">{o.avance}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand rounded-full" style={{ width: `${o.avance}%` }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ErpCompras() {
  const estadoStyle = {
    Pendiente: 'bg-amber-100 text-amber-800',
    Aprobada: 'bg-blue-100 text-blue-800',
    'En tránsito': 'bg-brand-muted text-brand',
    Recibida: 'bg-green-100 text-green-800',
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="font-bold text-slate-900 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-brand" />
          Órdenes de compra
        </h2>
        <button type="button" className="text-sm bg-brand text-white px-3 py-1.5 rounded-lg font-medium">
          + Nueva OC
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="bg-slate-50 text-left text-xs text-slate-500 uppercase">
              <th className="px-4 py-3">Folio</th>
              <th className="px-4 py-3">Proveedor</th>
              <th className="px-4 py-3">Concepto</th>
              <th className="px-4 py-3">Obra</th>
              <th className="px-4 py-3">Monto</th>
              <th className="px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {ERP_COMPRAS.map((c) => (
              <tr key={c.folio} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-mono text-xs font-semibold">{c.folio}</td>
                <td className="px-4 py-3">{c.proveedor}</td>
                <td className="px-4 py-3 text-slate-600">{c.concepto}</td>
                <td className="px-4 py-3 text-slate-600">{c.obra}</td>
                <td className="px-4 py-3 font-medium">{c.monto}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${estadoStyle[c.estado]}`}>
                    {c.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ErpInventario() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {ERP_INVENTARIO.map((item) => (
        <div key={item.item} className="bg-white rounded-xl border border-slate-200 p-5 flex gap-4">
          <div className="h-12 w-12 rounded-xl bg-brand-muted flex items-center justify-center shrink-0">
            <Wrench className="h-6 w-6 text-brand" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-slate-900">{item.item}</p>
            <p className="text-sm text-slate-500">{item.ubicacion}</p>
            <div className="flex flex-wrap gap-2 mt-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">{item.estado}</span>
              {item.horas !== '—' && <span className="text-slate-500">{item.horas}</span>}
              <span className="font-semibold text-brand ml-auto">{item.valor}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ErpFinanzas() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ERP_FINANZAS.map((f) => (
          <div key={f.concepto} className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">{f.concepto}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{f.valor}</p>
            <p className="text-xs text-green-600 font-medium mt-2">{f.trend} vs mes anterior</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
        <h2 className="font-bold text-slate-900 mb-4">Flujo de caja (últimos 6 meses — demo)</h2>
        <div className="flex items-end gap-2 h-40">
          {[65, 72, 58, 80, 75, 88].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1">
              <div className="w-full bg-brand/80 rounded-t-md" style={{ height: `${h}%` }} />
              <span className="text-[10px] text-slate-500">
                {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const ERP_VIEWS = {
  dashboard: ErpDashboard,
  obras: ErpObras,
  compras: ErpCompras,
  inventario: ErpInventario,
  finanzas: ErpFinanzas,
}

export default function ErpDemoPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [tab, setTab] = useState('dashboard')

  if (!loggedIn) {
    return (
      <DemoLogin
        title="ERP — Operación integral"
        subtitle="Obras, compras, inventario y finanzas conectados al CRM y la web"
        icon={Package}
        onLogin={() => setLoggedIn(true)}
      />
    )
  }

  const View = ERP_VIEWS[tab] ?? ErpDashboard
  const navLabel = ERP_NAV.find((n) => n.id === tab)?.label ?? 'Dashboard'

  return (
    <PlatformShell
      title="ERP Demo"
      subtitle="Grupo Horizonte"
      otherLink={{ to: '/crm', label: 'Ver CRM →' }}
      navItems={ERP_NAV}
      activeTab={tab}
      onTabChange={setTab}
      onLogout={() => setLoggedIn(false)}
    >
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{navLabel}</h1>
        <p className="text-sm text-slate-500 mt-1">Vista de demostración — datos de ejemplo</p>
      </div>
      <DemoAlert />
      <View />
    </PlatformShell>
  )
}
