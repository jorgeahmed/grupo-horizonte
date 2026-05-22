import { Link } from 'react-router-dom'
import { ChevronRight, HardHat, Users, Ruler, CheckCircle2 } from 'lucide-react'
import StatCard from '../components/common/StatCard'
import PlatformShowcase from '../components/common/PlatformShowcase'
import EditableZone from '../components/demo/EditableZone'
import { SITE } from '../data/site'

const STAT_ICONS = { hardhat: HardHat, users: Users, ruler: Ruler }

export default function HomePage() {
  return (
    <div>
      <section className="relative bg-slate-900 h-[min(600px,85vh)] flex items-center">
        <EditableZone label="Imagen portada" className="absolute inset-0 z-0 pt-4">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
              alt="Construcción moderna"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
          </div>
        </EditableZone>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <EditableZone label="Textos portada" className="max-w-2xl pt-4">
            <div>
              <p className="text-brand-accent text-sm font-semibold uppercase tracking-wider mb-4">
                Demo · Desarrollo inmobiliario
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-heading">
                Edificamos <span className="text-brand-accent">soluciones</span> para un mundo en
                crecimiento.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Más de 25 años de experiencia transformando el paisaje urbano con desarrollos
                inmobiliarios sustentables, innovadores y de la más alta calidad.
              </p>
              <EditableZone label="Botones" className="pt-3">
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <Link
                    to="/obras"
                    className="bg-brand hover:bg-brand-hover text-white px-8 py-3.5 rounded-md font-semibold transition-colors flex items-center justify-center shadow-lg"
                  >
                    Ver Portafolio
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/cotizar"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold transition-colors flex items-center justify-center"
                  >
                    Cotizar Proyecto
                  </Link>
                  <Link
                    to="/ventas"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold transition-colors flex items-center justify-center"
                  >
                    Propiedades en Venta
                  </Link>
                </div>
              </EditableZone>
            </div>
          </EditableZone>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditableZone label="Estadísticas" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {SITE.stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  icon={STAT_ICONS[stat.icon]}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </EditableZone>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <EditableZone label="Imágenes" className="lg:w-1/2 pt-4 w-full">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000"
                alt="Arquitectura moderna"
                className="rounded-2xl shadow-xl w-full"
                loading="lazy"
              />
            </EditableZone>
            <EditableZone label="Contenido" className="lg:w-1/2 pt-4 w-full">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                  Nuestra Filosofía de Desarrollo
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  En Grupo Horizonte, no solo levantamos muros; creamos espacios vitales que inspiran
                  y perduran. Nuestro enfoque integral abarca desde la adquisición del terreno y el
                  diseño arquitectónico, hasta la construcción y comercialización final.
                </p>
                <ul className="space-y-4">
                  {[
                    ['Calidad Estructural', 'Materiales de primera y tecnologías antisísmicas.'],
                    ['Diseño Sustentable', 'Certificaciones LEED y eficiencia energética.'],
                    ['Plusvalía Garantizada', 'Ubicaciones estratégicas con retorno de inversión.'],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-brand mr-3 shrink-0" />
                      <span className="text-slate-700">
                        <strong>{title}:</strong> {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </EditableZone>
          </div>
        </div>
      </section>

      <PlatformShowcase />
    </div>
  )
}
