export const ERP_NAV = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'obras', label: 'Obras' },
  { id: 'compras', label: 'Compras' },
  { id: 'inventario', label: 'Inventario' },
  { id: 'finanzas', label: 'Finanzas' },
]

export const ERP_OBRAS = [
  {
    id: 1,
    nombre: 'Residencial Bosques del Valle',
    ciudad: 'Monterrey, NL',
    avance: 80,
    presupuesto: 'USD 42M',
    residente: 'Ing. Torres',
    estado: 'En obra',
  },
  {
    id: 2,
    nombre: 'Plaza Comercial Vía Sol',
    ciudad: 'Querétaro, Qro',
    avance: 25,
    presupuesto: 'USD 18M',
    residente: 'Ing. Morales',
    estado: 'Cimentación',
  },
  {
    id: 3,
    nombre: 'Corporativo Torre Andares',
    ciudad: 'Guadalajara, Jal',
    avance: 98,
    presupuesto: 'USD 65M',
    residente: 'Ing. Vega',
    estado: 'Entrega',
  },
  {
    id: 4,
    nombre: 'Centro Logístico Norte',
    ciudad: 'Tijuana, BC',
    avance: 55,
    presupuesto: 'USD 28M',
    residente: 'Ing. Castro',
    estado: 'Estructura',
  },
]

export const ERP_COMPRAS = [
  { folio: 'OC-2401', proveedor: 'Cementos del Centro', concepto: 'Concreto f\'c 250', monto: 'USD 84,200', obra: 'Bosques del Valle', estado: 'Pendiente' },
  { folio: 'OC-2402', proveedor: 'Aceros Industriales', concepto: 'Varilla #4 y #5', monto: 'USD 52,800', obra: 'Vía Sol', estado: 'Aprobada' },
  { folio: 'OC-2403', proveedor: 'Maquinaria Pesada SA', concepto: 'Renta grúa 15 días', monto: 'USD 31,500', obra: 'Torre Andares', estado: 'En tránsito' },
  { folio: 'OC-2404', proveedor: 'Instalaciones Pro', concepto: 'Herrería y cancelería', monto: 'USD 19,400', obra: 'Logístico Norte', estado: 'Recibida' },
]

export const ERP_INVENTARIO = [
  { item: 'Excavadora CAT 320', ubicacion: 'Bodega Qro', horas: '4,500h', estado: 'Operativa', valor: 'USD 1.85M' },
  { item: 'Retroexcavadora JD', ubicacion: 'Obra Monterrey', horas: '3,200h', estado: 'En obra', valor: 'USD 1.2M' },
  { item: 'Mezcladora 9 m³', ubicacion: 'Central CDMX', horas: '—', estado: 'Mantenimiento', valor: 'USD 45K' },
  { item: 'Andamios modulares (lote)', ubicacion: 'Almacén GDL', horas: '—', estado: 'Disponible', valor: 'USD 120K' },
]

export const ERP_FINANZAS = [
  { concepto: 'Cuentas por cobrar', valor: 'USD 6.8M', trend: '+12%' },
  { concepto: 'Cuentas por pagar', valor: 'USD 3.2M', trend: '-5%' },
  { concepto: 'Flujo del mes', valor: 'USD 1.1M', trend: '+8%' },
  { concepto: 'Margen obra promedio', valor: '18.4%', trend: 'estable' },
]
