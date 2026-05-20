import { MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE } from '../../data/site'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo variant="dark" />
            <p className="text-sm text-slate-400 mt-4 mb-6">
              {SITE.tagline}. {SITE.description}
            </p>
            <p className="text-xs text-slate-500 italic">Proyecto demo / portafolio</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/obras" className="hover:text-blue-400 transition-colors">
                  Portafolio de Obras
                </Link>
              </li>
              <li>
                <Link to="/ventas" className="hover:text-blue-400 transition-colors">
                  Desarrollos en Venta
                </Link>
              </li>
              <li>
                <Link to="/vacantes" className="hover:text-blue-400 transition-colors">
                  Trabaja con Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {SITE.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                <span>{SITE.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                <span>{SITE.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {SITE.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Grupo Horizonte Desarrollos S.A. de C.V. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
