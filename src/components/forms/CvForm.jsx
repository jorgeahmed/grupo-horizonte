import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function CvForm() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => setFormStatus('success'), 1500)
  }

  if (formStatus === 'success') {
    return (
      <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-6 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
        <h4 className="text-lg font-bold text-white mb-2">¡Información recibida!</h4>
        <p className="text-sm text-slate-300 mb-4">
          Hemos guardado tu perfil en nuestra base de datos (simulación demo).
        </p>
        <button
          type="button"
          onClick={() => setFormStatus('idle')}
          className="text-sm text-blue-400 hover:text-blue-300 underline"
        >
          Enviar otro perfil
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-1">
          Nombre Completo
        </label>
        <input
          id="nombre"
          required
          type="text"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ej. Juan Pérez"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
          Correo Electrónico
        </label>
        <input
          id="email"
          required
          type="email"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="juan@correo.com"
        />
      </div>
      <div>
        <label htmlFor="area" className="block text-sm font-medium text-slate-300 mb-1">
          Área de Interés
        </label>
        <select
          id="area"
          required
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecciona un área...</option>
          <option value="construccion">Construcción / Obra</option>
          <option value="arquitectura">Arquitectura y Diseño</option>
          <option value="ventas">Ventas Inmobiliarias</option>
          <option value="administrativo">Administración / Finanzas</option>
        </select>
      </div>
      <div>
        <label htmlFor="cv" className="block text-sm font-medium text-slate-300 mb-1">
          Enlace a CV / Portafolio
        </label>
        <input
          id="cv"
          required
          type="url"
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://..."
        />
      </div>
      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className={`w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-bold transition-all ${
          formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {formStatus === 'submitting' ? 'Enviando...' : 'Postularme Ahora'}
      </button>
    </form>
  )
}
