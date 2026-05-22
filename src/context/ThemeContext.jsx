import { createContext, useContext, useEffect, useState } from 'react'

export const COLOR_PALETTES = [
  { id: 'azul', name: 'Azul corporativo', primary: '#1d4ed8', hover: '#1e40af', accent: '#3b82f6', muted: '#dbeafe' },
  { id: 'verde', name: 'Verde construcción', primary: '#047857', hover: '#065f46', accent: '#10b981', muted: '#d1fae5' },
  { id: 'pizarra', name: 'Pizarra moderna', primary: '#334155', hover: '#1e293b', accent: '#64748b', muted: '#f1f5f9' },
  { id: 'terracota', name: 'Terracota desarrollo', primary: '#c2410c', hover: '#9a3412', accent: '#f97316', muted: '#ffedd5' },
  { id: 'violeta', name: 'Violeta premium', primary: '#6d28d9', hover: '#5b21b6', accent: '#8b5cf6', muted: '#ede9fe' },
]

export const FONT_OPTIONS = [
  { id: 'dm-sans', name: 'DM Sans', family: "'DM Sans', system-ui, sans-serif", google: 'DM+Sans:wght@400;500;600;700' },
  { id: 'inter', name: 'Inter', family: "'Inter', system-ui, sans-serif", google: 'Inter:wght@400;500;600;700' },
  { id: 'montserrat', name: 'Montserrat', family: "'Montserrat', system-ui, sans-serif", google: 'Montserrat:wght@400;500;600;700' },
  { id: 'playfair', name: 'Playfair + Sans', family: "'DM Sans', system-ui, sans-serif", heading: "'Playfair Display', Georgia, serif", google: 'Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600' },
  { id: 'roboto', name: 'Roboto', family: "'Roboto', system-ui, sans-serif", google: 'Roboto:wght@400;500;700' },
]

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [paletteId, setPaletteId] = useState('azul')
  const [fontId, setFontId] = useState('dm-sans')
  const [showHints, setShowHints] = useState(false)
  const [customizerOpen, setCustomizerOpen] = useState(false)

  const openCustomizer = () => {
    setCustomizerOpen(true)
    setShowHints(true)
  }

  const closeCustomizer = () => {
    setCustomizerOpen(false)
    setShowHints(false)
  }

  const palette = COLOR_PALETTES.find((p) => p.id === paletteId) ?? COLOR_PALETTES[0]
  const font = FONT_OPTIONS.find((f) => f.id === fontId) ?? FONT_OPTIONS[0]

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--brand-primary', palette.primary)
    root.style.setProperty('--brand-primary-hover', palette.hover)
    root.style.setProperty('--brand-accent', palette.accent)
    root.style.setProperty('--brand-muted', palette.muted)
    root.style.setProperty('--font-sans', font.family)
    root.style.setProperty('--font-heading', font.heading ?? font.family)
    document.body.style.fontFamily = font.family
  }, [palette, font])

  useEffect(() => {
    const linkId = 'demo-google-fonts'
    let link = document.getElementById(linkId)
    if (!link) {
      link = document.createElement('link')
      link.id = linkId
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
    link.href = `https://fonts.googleapis.com/css2?family=${font.google}&display=swap`
  }, [font])

  return (
    <ThemeContext.Provider
      value={{
        palette,
        paletteId,
        setPaletteId,
        font,
        fontId,
        setFontId,
        showHints,
        setShowHints,
        customizerOpen,
        setCustomizerOpen,
        openCustomizer,
        closeCustomizer,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider')
  return ctx
}
