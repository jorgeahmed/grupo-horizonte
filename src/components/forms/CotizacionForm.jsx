import { useState } from 'react'
import { CheckCircle2, Plus, Trash2, Calculator } from 'lucide-react'
import {
  TIPOS_PROYECTO,
  UNIDADES_MEDIDA,
  PARTIDA_INICIAL,
} from '../../data/cotizacion'
import { trackEvent } from '../../lib/analytics'

export default function CotizacionForm() {
  const [status, setStatus] = useState('idle')
  const [tipoProyecto, setTipoProyecto] = useState('')
  const [partidas, setPartidas] = useState([PARTIDA_INICIAL()])

  const addPartida = () => {
    setPartidas((prev) => [...prev, PARTIDA_INICIAL()])
  }

  const removePartida = (id) => {
    setPartidas((prev) => (prev.length > 1 ? prev.filter((p) => p.id !== id) : prev))
  }

  const updatePartida = (id, field, value) => {
    setPartidas((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      trackEvent('generate_lead', { form_name: 'cotizar_proyecto' })
    }, 1200)
  }

  const resetForm = () => {
    setStatus('idle')
    setTipoProyecto('')
    setPartidas([PARTIDA_INICIAL()])
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">¡Solicitud enviada!</h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          Gracias por tu interés. Un asesor revisará tu proyecto y te contactará pronto.
          (Demo: no se envía a servidor real.)
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="text-blue-700 font-medium hover:underline"
        >
          Enviar otra cotización
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <section className="space-y-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm">
              1
            </span>
            Datos de contacto
          </h3>
          <p className="text-sm text-slate-500 mt-1 ml-9">
            Solo para que podamos responderte. No es un contrato ni cotización formal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-0 sm:ml-9">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
              Nombre *
            </label>
            <input
              id="nombre"
              name="nombre"
              required
              type="text"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="empresa" className="block text-sm font-medium text-slate-700 mb-1">
              Empresa / desarrollador
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Opcional"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Correo *
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-1">
              Teléfono / WhatsApp *
            </label>
            <input
              id="telefono"
              name="telefono"
              required
              type="tel"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="+52 ..."
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="ubicacion" className="block text-sm font-medium text-slate-700 mb-1">
              Ubicación del proyecto *
            </label>
            <input
              id="ubicacion"
              name="ubicacion"
              required
              type="text"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Ciudad, estado o referencia"
            />
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm">
              2
            </span>
            Tipo de proyecto
          </h3>
        </div>

        <div className="ml-0 sm:ml-9">
          <label htmlFor="tipoProyecto" className="block text-sm font-medium text-slate-700 mb-1">
            Selecciona el tipo *
          </label>
          <select
            id="tipoProyecto"
            name="tipoProyecto"
            required
            value={tipoProyecto}
            onChange={(e) => setTipoProyecto(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="">— Elige una opción —</option>
            {TIPOS_PROYECTO.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-600" />
            Partidas y volumetría
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Agrega las partidas que quieras. Indica concepto, unidad de medida y cantidad
            aproximada (referencia, no cotización final).
          </p>
        </div>

        <div className="space-y-4">
          {partidas.map((partida, index) => (
            <div
              key={partida.id}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-slate-700">
                  Partida {index + 1}
                </span>
                {partidas.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePartida(partida.id)}
                    className="text-slate-400 hover:text-red-600 p-1"
                    aria-label={`Eliminar partida ${index + 1}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5">
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Concepto *
                  </label>
                  <input
                    required
                    type="text"
                    value={partida.concepto}
                    onChange={(e) =>
                      updatePartida(partida.id, 'concepto', e.target.value)
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Ej. Obra civil, acabados, estacionamiento..."
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Unidad de medida *
                  </label>
                  <select
                    required
                    value={partida.unidad}
                    onChange={(e) =>
                      updatePartida(partida.id, 'unidad', e.target.value)
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    {UNIDADES_MEDIDA.map((u) => (
                      <option key={u.value} value={u.value}>
                        {u.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-4">
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Volumetría / cantidad *
                  </label>
                  <input
                    required
                    type="text"
                    inputMode="decimal"
                    value={partida.volumetria}
                    onChange={(e) =>
                      updatePartida(partida.id, 'volumetria', e.target.value)
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Ej. 1,250 o 3 niveles"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addPartida}
          className="flex items-center gap-2 text-blue-700 font-medium text-sm hover:text-blue-800"
        >
          <Plus className="h-4 w-4" />
          Agregar otra partida
        </button>
      </section>

      <section className="ml-0 sm:ml-0">
        <label htmlFor="comentarios" className="block text-sm font-medium text-slate-700 mb-1">
          Comentarios adicionales
        </label>
        <textarea
          id="comentarios"
          name="comentarios"
          rows={3}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none resize-y"
          placeholder="Plazo estimado, fase del proyecto, necesidades especiales..."
        />
      </section>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-brand hover:bg-brand-hover disabled:opacity-60 text-white px-8 py-3.5 rounded-lg font-semibold shadow-sm transition-colors"
        >
          {status === 'submitting' ? 'Enviando...' : 'Solicitar contacto'}
        </button>
        <p className="text-xs text-slate-500 max-w-sm">
          Este formulario es un canal de contacto demo. No genera cotización automática ni
          compromiso contractual.
        </p>
      </div>
    </form>
  )
}
