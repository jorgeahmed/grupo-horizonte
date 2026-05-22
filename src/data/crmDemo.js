export const CRM_PIPELINE = [
  { etapa: 'Nuevos', count: 12, valor: 'USD 8.1M', color: 'bg-slate-200' },
  { etapa: 'Contactados', count: 8, valor: 'USD 6.4M', color: 'bg-brand-muted' },
  { etapa: 'Cotización', count: 5, valor: 'USD 4.2M', color: 'bg-brand/25' },
  { etapa: 'Negociación', count: 3, valor: 'USD 2.8M', color: 'bg-amber-100' },
  { etapa: 'Ganados', count: 2, valor: 'USD 1.5M', color: 'bg-green-100' },
]

export const CRM_LEADS = [
  {
    id: 1,
    proyecto: 'Desarrollo Polanco',
    contacto: 'Ana Ruiz',
    empresa: 'Inversiones AR',
    fuente: 'Web / Cotizar',
    etapa: 'Cotización',
    monto: 'USD 12.5M',
    dias: 2,
    asignado: 'M. López',
  },
  {
    id: 2,
    proyecto: 'Nave industrial Qro',
    contacto: 'Carlos Méndez',
    empresa: 'Logística del Norte',
    fuente: 'Referido',
    etapa: 'Negociación',
    monto: 'USD 8.2M',
    dias: 5,
    asignado: 'J. Herrera',
  },
  {
    id: 3,
    proyecto: 'Torre oficinas Santa Fe',
    contacto: 'Laura Vega',
    empresa: 'Grupo Vega',
    fuente: 'Formulario web',
    etapa: 'Nuevo',
    monto: 'USD 18M',
    dias: 0,
    asignado: 'Sin asignar',
  },
  {
    id: 4,
    proyecto: 'Fraccionamiento Mérida',
    contacto: 'Roberto Sánchez',
    empresa: 'Desarrollos Península',
    fuente: 'Feria PRODEXPO',
    etapa: 'Contactado',
    monto: 'USD 22M',
    dias: 1,
    asignado: 'M. López',
  },
  {
    id: 5,
    proyecto: 'Remodelación Roma Norte',
    contacto: 'Patricia Gómez',
    empresa: 'Particular',
    fuente: 'WhatsApp',
    etapa: 'Cotización',
    monto: 'USD 1.8M',
    dias: 3,
    asignado: 'J. Herrera',
  },
]

export const CRM_ACTIVITIES = [
  { tipo: 'Llamada', texto: 'Seguimiento cotización Polanco — enviar planos actualizados', hora: '10:30', usuario: 'M. López' },
  { tipo: 'Correo', texto: 'Propuesta nave Querétaro enviada al cliente', hora: '09:15', usuario: 'J. Herrera' },
  { tipo: 'Reunión', texto: 'Visita a obra Bosques del Valle con prospecto', hora: 'Ayer', usuario: 'M. López' },
  { tipo: 'Web', texto: 'Nuevo lead desde formulario /cotizar — Torre Santa Fe', hora: 'Ayer', usuario: 'Sistema' },
]

export const CRM_TEAM = [
  { nombre: 'María López', rol: 'Gerente comercial', leads: 14, meta: 'USD 15M' },
  { nombre: 'Jorge Herrera', rol: 'Ejecutivo senior', leads: 11, meta: 'USD 12M' },
  { nombre: 'Sofía Ramírez', rol: 'SDR / Prospección', leads: 8, meta: 'USD 8M' },
]

export const CRM_NAV = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'oportunidades', label: 'Oportunidades' },
  { id: 'actividades', label: 'Actividades' },
  { id: 'equipo', label: 'Equipo' },
]
