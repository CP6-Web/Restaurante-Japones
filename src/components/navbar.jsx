
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/cardapio', label: 'Cardápio' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-ai text-washi">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3"
        aria-label="Principal"
      >
        <Link
          to="/"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-washi"
        >
          <span
            className="grid size-9 place-items-center bg-hanko font-display text-xl leading-none"
            aria-hidden="true"
          >
            月
          </span>

          <span className="font-display text-xl tracking-wide">
            Tsuki
          </span>
        </Link>

        <ul className="flex gap-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `border-b-2 pb-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-washi ${
                    isActive
                      ? 'border-washi'
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
