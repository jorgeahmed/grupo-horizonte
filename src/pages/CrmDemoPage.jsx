import { useState } from 'react'
import {
  Users,
  Phone,
  Mail,
  Calendar,
  Filter,
  Search,
  TrendingUp,
  Globe,
  AlertTriangle,
  Sparkles,
  FileText,
  UserCircle,
} from 'lucide-react'
import DemoLogin from '../components/auth/DemoLogin'
import PlatformShell from '../components/platform/PlatformShell'
import {
  CRM_NAV,
  CRM_PIPELINE,
  CRM_LEADS,
  CRM_ACTIVITIES,
  CRM_TEAM,
} from '../data/crmDemo'

function DemoAlert() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 mb-6">
      <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
      <p className="text-sm text-amber-900">
        <strong>Demo ilustrativa.</strong> Cotización con IA, WhatsApp API o integraciones requieren
        planeación, ejecución y pruebas adicionales fuera del paquete base (30 h/semana de referencia).
      </p>
    </div>
  )
}

function CrmDashboard() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {[
          { label: 'Prospectos activos', value: '28', icon: Users },
          { label: 'Por contactar hoy', value: '6', icon: Phone },
          { label: 'Cotizaciones abiertas', value: '5', icon: FileText },
          { label: 'Cierre estimado mes', value: 'USD 4.2M', icon: TrendingUp },
        ].map((k) => (
          <div key={k.label} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <k.icon className="h-5 w-5 text-brand mb-2" />
            <p className="text-xs text-slate-500">{k.label}</p>
            <p className="text-lg sm:text-2xl font-bold text-slate-900 mt-0.5">{k.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-4 sm:p-6 overflow-x-auto">
          <h2 className="font-bold text-slate-900 mb-4 text-sm sm:text-base">Resumen pipeline</h2>
          <div className="flex gap-2 min-w-[520px]">
            {CRM_PIPELINE.map((p) => (
              <div key={p.etapa} className={`flex-1 rounded-lg p-3 ${p.color}`}>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-700">{p.etapa}</p>
                <p className="text-xl font-bold text-slate-900">{p.count}</p>
                <p className="text-[10px] text-slate-600 mt-1">{p.valor}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
          <h2 className="font-bold text-slate-900 mb-4 text-sm sm:text-base flex items-center gap-2">
            <Globe className="h-5 w-5 text-brand" />
            Origen de leads
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              ['Formulario web', '42%', 'bg-brand'],
              ['Referidos', '28%', 'bg-brand/60'],
              ['Ferias / eventos', '18%', 'bg-slate-300'],
              ['Otros', '12%', 'bg-slate-200'],
            ].map(([label, pct, bar]) => (
              <li key={label}>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700">{label}</span>
                  <span className="font-semibold text-slate-900">{pct}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${bar} rounded-full`} style={{ width: pct }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-4 flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Sincronizado con /cotizar
          </p>
        </div>
      </div>
    </>
  )
}

function CrmPipelineView() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 overflow-x-auto">
      <h2 className="font-bold text-slate-900 mb-4">Vista Kanban (demo)</h2>
      <div className="flex gap-3 min-w-[800px] pb-2">
        {CRM_PIPELINE.map((col) => (
          <div key={col.etapa} className="flex-1 min-w-[140px] bg-slate-50 rounded-xl p-3 border border-slate-200">
            <p className="text-xs font-bold text-slate-700 mb-1">{col.etapa}</p>
            <p className="text-lg font-bold text-slate-900">{col.count}</p>
            <p className="text-[10px] text-slate-500 mb-3">{col.valor}</p>
            {CRM_LEADS.filter((l) => l.etapa === col.etapa || (col.etapa === 'Nuevos' && l.etapa === 'Nuevo'))
              .slice(0, 2)
              .map((l) => (
                <div key={l.id} className="bg-white rounded-lg p-2 mb-2 border border-slate-100 shadow-sm text-xs">
                  <p className="font-semibold text-slate-800 truncate">{l.proyecto}</p>
                  <p className="text-slate-500 truncate">{l.monto}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function CrmOportunidades() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <h2 className="font-bold text-slate-900">Oportunidades</h2>
        <div className="flex gap-2">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="search"
              placeholder="Buscar..."
              className="pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg w-full sm:w-48"
            />
          </div>
          <button type="button" className="p-2 border border-slate-200 rounded-lg text-slate-600">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs text-slate-500 uppercase">
              <th className="px-6 py-3">Proyecto</th>
              <th className="px-4 py-3">Contacto</th>
              <th className="px-4 py-3">Monto</th>
              <th className="px-4 py-3">Etapa</th>
              <th className="px-4 py-3">Asignado</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {CRM_LEADS.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <p className="font-semibold text-slate-900">{lead.proyecto}</p>
                  <p className="text-xs text-slate-500">{lead.fuente}</p>
                </td>
                <td className="px-4 py-4">
                  <p>{lead.contacto}</p>
                  <p className="text-xs text-slate-500">{lead.empresa}</p>
                </td>
                <td className="px-4 py-4 font-medium">{lead.monto}</td>
                <td className="px-4 py-4">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-brand-muted text-brand">
                    {lead.etapa}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-600">{lead.asignado}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-1">
                    <button type="button" className="p-1.5 rounded hover:bg-slate-100 text-brand">
                      <Phone className="h-4 w-4" />
                    </button>
                    <button type="button" className="p-1.5 rounded hover:bg-slate-100 text-brand">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y divide-slate-100">
        {CRM_LEADS.map((lead) => (
          <div key={lead.id} className="p-4 space-y-2">
            <p className="font-semibold text-slate-900">{lead.proyecto}</p>
            <p className="text-sm text-slate-500">{lead.contacto} · {lead.empresa}</p>
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <span className="text-sm font-medium text-brand">{lead.monto}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-brand-muted text-brand">{lead.etapa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CrmActividades() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
        <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-brand" />
          Actividad reciente
        </h2>
        <ul className="space-y-4">
          {CRM_ACTIVITIES.map((a, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-slate-100 text-slate-600 h-fit shrink-0">
                {a.tipo}
              </span>
              <div className="min-w-0">
                <p className="text-sm text-slate-800">{a.texto}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {a.hora} · {a.usuario}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
        <h2 className="font-bold text-slate-900 mb-4">Tareas de hoy</h2>
        <ul className="space-y-3">
          {[
            'Llamar a Ana Ruiz — cotización Polanco',
            'Enviar minuta reunión nave Qro',
            'Asignar lead Torre Santa Fe',
            'Revisar propuesta IA (pendiente autorización cliente)',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1 rounded border-slate-300" readOnly />
              <span className="text-slate-700">{t}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg p-3 mt-4">
          La tarea con IA solo se ejecuta tras aprobación del cliente en reporte trimestral.
        </p>
      </div>
    </div>
  )
}

function CrmEquipo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {CRM_TEAM.map((m) => (
        <div key={m.nombre} className="bg-white rounded-xl border border-slate-200 p-5">
          <UserCircle className="h-10 w-10 text-brand mb-3" />
          <p className="font-bold text-slate-900">{m.nombre}</p>
          <p className="text-sm text-slate-500">{m.rol}</p>
          <div className="mt-4 pt-4 border-t border-slate-100 text-sm space-y-1">
            <p>
              <span className="text-slate-500">Leads activos:</span>{' '}
              <strong>{m.leads}</strong>
            </p>
            <p>
              <span className="text-slate-500">Meta mes:</span>{' '}
              <strong className="text-brand">{m.meta}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const CRM_VIEWS = {
  dashboard: CrmDashboard,
  pipeline: CrmPipelineView,
  oportunidades: CrmOportunidades,
  actividades: CrmActividades,
  equipo: CrmEquipo,
}

export default function CrmDemoPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [tab, setTab] = useState('dashboard')

  if (!loggedIn) {
    return (
      <DemoLogin
        title="CRM — Gestión comercial"
        subtitle="Pipeline, oportunidades, actividades y equipo comercial en un solo lugar"
        icon={Users}
        onLogin={() => setLoggedIn(true)}
      />
    )
  }

  const View = CRM_VIEWS[tab] ?? CrmDashboard
  const navLabel = CRM_NAV.find((n) => n.id === tab)?.label ?? 'Dashboard'

  return (
    <PlatformShell
      title="CRM Demo"
      subtitle="Grupo Horizonte"
      otherLink={{ to: '/erp', label: 'Ver ERP →' }}
      navItems={CRM_NAV}
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
