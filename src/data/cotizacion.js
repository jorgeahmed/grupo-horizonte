export const TIPOS_PROYECTO = [
  { value: 'residencial-vertical', label: 'Residencial vertical' },
  { value: 'residencial-horizontal', label: 'Residencial horizontal / fraccionamiento' },
  { value: 'comercial-oficinas', label: 'Comercial / oficinas' },
  { value: 'comercial-retail', label: 'Comercial / retail o plaza' },
  { value: 'industrial', label: 'Industrial / nave o bodega' },
  { value: 'infraestructura', label: 'Infraestructura pública' },
  { value: 'institucional', label: 'Institucional (salud, educación)' },
  { value: 'remodelacion', label: 'Remodelación o ampliación' },
  { value: 'otro', label: 'Otro (especificar en comentarios)' },
]

export const UNIDADES_MEDIDA = [
  { value: 'm2', label: 'm² (metros cuadrados)' },
  { value: 'm3', label: 'm³ (metros cúbicos)' },
  { value: 'ml', label: 'ml (metros lineales)' },
  { value: 'ha', label: 'Ha (hectáreas)' },
  { value: 'pza', label: 'Pza (piezas / unidades)' },
  { value: 'lote', label: 'Lote / módulo' },
  { value: 'nivel', label: 'Nivel / piso' },
]

export const PARTIDA_INICIAL = () => ({
  id: crypto.randomUUID(),
  concepto: '',
  unidad: 'm2',
  volumetria: '',
})
