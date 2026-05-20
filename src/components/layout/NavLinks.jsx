import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../data/site'

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-blue-600 ${
    isActive ? 'text-blue-700 font-bold' : 'text-slate-600'
  }`

export default function NavLinks({ onNavigate }) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className={linkClass}
          onClick={onNavigate}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  )
}
