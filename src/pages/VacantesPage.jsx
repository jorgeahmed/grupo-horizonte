import { Briefcase } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import VacancyCard from '../components/common/VacancyCard'
import CvForm from '../components/forms/CvForm'
import EditableZone from '../components/demo/EditableZone'
import { vacantes } from '../data/vacantes'

export default function VacantesPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditableZone label="Título sección" className="pt-4">
          <SectionTitle
            title="Únete a Nuestro Equipo"
            subtitle="Buscamos talento apasionado por transformar ciudades. Construye tu carrera profesional en una de las empresas desarrolladoras líderes del país."
          />
        </EditableZone>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
          <EditableZone label="Vacantes" className="lg:col-span-3 pt-4 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 flex items-center mb-6 font-heading">
                <Briefcase className="mr-3 h-6 w-6 text-brand" />
                Vacantes Abiertas
              </h3>
              <div className="space-y-6">
                {vacantes.map((vacante) => (
                  <VacancyCard key={vacante.id} vacante={vacante} />
                ))}
              </div>
            </div>
          </EditableZone>

          <EditableZone label="Formulario CV" className="lg:col-span-2 pt-4">
            <aside>
              <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl sticky top-28">
                <h3 className="text-2xl font-bold mb-2 font-heading">Envía tu CV</h3>
                <p className="text-slate-400 text-sm mb-6">
                  ¿No encuentras una vacante para ti? Déjanos tus datos en nuestra base de talento
                  general.
                </p>
                <CvForm />
              </div>
            </aside>
          </EditableZone>
        </div>
      </div>
    </div>
  )
}
