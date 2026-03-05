import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Book Appointment', to: '/book-appointment' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? 'text-amber-300' : 'text-stone-100 hover:text-amber-200'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-black/85 backdrop-blur-md">
      <nav className="mx-auto flex w-[92%] max-w-7xl items-center justify-between py-4">
        <Link to="/" className="text-xl font-semibold tracking-wide text-white">
          Aniq Salon <span className="text-amber-300">Baghyalatha</span>
        </Link>

        <button
          className="rounded-md border border-stone-700 px-3 py-2 text-stone-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-5 text-sm md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <ul className="mx-auto flex w-[92%] max-w-7xl flex-col gap-3 pb-4 text-sm md:hidden">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
