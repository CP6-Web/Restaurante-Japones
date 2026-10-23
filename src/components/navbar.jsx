

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-ai text-washi">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3"
        aria-label="Principal"
      >
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <span
            className="grid size-9 place-items-center bg-hanko font-display text-xl leading-none"
            aria-hidden="true"
          >
            月
          </span>
          <span className="font-display text-xl tracking-wide">Tsuki</span>
        </Link>
      </nav>
    </header>
  )
}

