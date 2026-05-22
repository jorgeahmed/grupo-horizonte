import SectionTitle from '../components/common/SectionTitle'
import ProjectCard from '../components/common/ProjectCard'
import EditableZone from '../components/demo/EditableZone'
import { obras } from '../data/obras'

export default function ObrasPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EditableZone label="Título sección" className="pt-4">
          <SectionTitle
            title="Portafolio de Obras"
            subtitle="Explora algunos de nuestros proyectos más representativos. Demostramos nuestra capacidad técnica y de ejecución en diversas escalas y sectores."
          />
        </EditableZone>
        <EditableZone label="Galería obras" className="pt-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obras.map((obra) => (
              <ProjectCard key={obra.id} obra={obra} />
            ))}
          </div>
        </EditableZone>
      </div>
    </div>
  )
}
