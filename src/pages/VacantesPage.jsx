import { Briefcase } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import VacancyCard from '../components/common/VacancyCard'
import CvForm from '../components/forms/CvForm'
import { vacantes } from '../data/vacantes'

export default function VacantesPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Únete a Nuestro Equipo"
          subtitle="Buscamos talento apasionado por transformar ciudades. Construye tu carrera profesional en una de las empresas desarrolladoras líderes del país."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center mb-6">
              <Briefcase className="mr-3 h-6 w-6 text-blue-600" />
              Vacantes Abiertas
            </h3>
            {vacantes.map((vacante) => (
              <VacancyCard key={vacante.id} vacante={vacante} />
            ))}
          </div>

          <aside className="lg:col-span-2">
            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl sticky top-28">
              <h3 className="text-2xl font-bold mb-2">Envía tu CV</h3>
              <p className="text-slate-400 text-sm mb-6">
                ¿No encuentras una vacante para ti? Déjanos tus datos en nuestra base de talento
                general.
              </p>
              <CvForm />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
