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
    `border-b-2 pb-1 text-sm transition-colors duration-300 nav-menu-font ${
      isActive
        ? 'border-[#C59D5F] text-[#C59D5F]'
        : 'border-transparent text-white/90 hover:text-[#C59D5F]'
    }`

  return (
    <nav className="sticky top-0 z-50 border-b border-[#C59D5F]/30 bg-[#1A1A1A] shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white">
        <Link to="/" aria-label="Aniq Salon Baghyalatha Home">
          <h1 className="text-lg font-semibold tracking-wide">
            Best Hair Salon in <span className="text-[#C59D5F]">Baghyalatha, Hyderabad</span>
          </h1>
        </Link>

        <button
          className="nav-menu-font rounded-md border border-[#C59D5F]/40 px-3 py-2 text-[#F8EAD5] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-4 md:hidden">
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
    </nav>
  )
}

export default Navbar
