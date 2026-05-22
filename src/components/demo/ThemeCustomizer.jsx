import { Palette, Type, Eye, EyeOff, ChevronLeft, Sparkles } from 'lucide-react'
import { useTheme, COLOR_PALETTES, FONT_OPTIONS } from '../../context/ThemeContext'

export default function ThemeCustomizer() {
  const {
    paletteId,
    setPaletteId,
    fontId,
    setFontId,
    showHints,
    setShowHints,
    customizerOpen,
    openCustomizer,
    closeCustomizer,
  } = useTheme()

  if (!customizerOpen) {
    return (
      <button
        type="button"
        onClick={openCustomizer}
        className="fixed z-[55] left-3 sm:left-4 bottom-[4.5rem] sm:bottom-24 flex items-center gap-2 bg-slate-900 text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-xl border border-slate-700 hover:bg-slate-800 transition-colors"
        aria-label="Abrir panel de diseño y ver zonas editables"
      >
        <Palette className="h-5 w-5 text-amber-400 shrink-0" />
        <span className="text-xs sm:text-sm font-semibold">Diseño</span>
      </button>
    )
  }

  return (
    <aside
      className="fixed z-[55] left-3 right-3 sm:left-4 sm:right-auto bottom-[4.5rem] sm:bottom-24 w-auto sm:w-[min(20rem,calc(100vw-2rem))] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[min(55vh,400px)] sm:max-h-[min(60vh,420px)] flex flex-col"
      aria-label="Personalización visual"
    >
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-3 flex items-start justify-between gap-2 shrink-0">
        <div className="min-w-0">
          <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="h-3 w-3 shrink-0" /> Demo editable
          </p>
          <p className="text-sm font-bold leading-tight mt-0.5">No es una página fija</p>
          <p className="text-[11px] text-slate-300 mt-1">Burbujas activas — zonas que puede cambiar</p>
        </div>
        <button
          type="button"
          onClick={closeCustomizer}
          className="p-1 hover:bg-white/10 rounded-lg shrink-0"
          aria-label="Cerrar panel y ocultar burbujas"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto flex-1">
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Palette className="h-3.5 w-3.5" /> Colores
          </p>
          <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
            {COLOR_PALETTES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPaletteId(p.id)}
                title={p.name}
                className={`flex flex-col items-center p-1 rounded-lg ${
                  paletteId === p.id ? 'ring-2 ring-offset-1 ring-slate-900' : ''
                }`}
              >
                <span
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow"
                  style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.accent})` }}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Type className="h-3.5 w-3.5" /> Fuentes
          </p>
          <div className="space-y-1">
            {FONT_OPTIONS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFontId(f.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm border ${
                  fontId === f.id
                    ? 'border-[var(--brand-primary)] bg-[var(--brand-muted)] font-semibold'
                    : 'border-slate-200'
                }`}
                style={{ fontFamily: f.family }}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowHints(!showHints)}
          className="w-full flex items-center justify-center gap-2 text-xs font-medium py-2 rounded-lg border border-slate-200"
        >
          {showHints ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showHints ? 'Ocultar burbujas editables' : 'Mostrar burbujas editables'}
        </button>
      </div>
    </aside>
  )
}
