import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import PremiumIcon from './PremiumIcon'

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    dropdown: [
      { label: 'Male', to: '/services?filter=Male' },
      { label: 'Female', to: '/services?filter=Female' },
      { label: 'Kids', to: '/services?filter=Kids' },
    ],
  },
  { label: 'Book Appointment', to: '/book-appointment' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
]

function Navbar() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef(null)
  const location = useLocation()

  const handleServicesEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setServicesDropdownOpen(true)
  }
  const handleServicesLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setServicesDropdownOpen(false), 150)
  }

  useEffect(() => {
    setServicesDropdownOpen(false)
    return () => dropdownTimeoutRef.current && clearTimeout(dropdownTimeoutRef.current)
  }, [location.pathname])

  const linkClass = ({ isActive }) =>
    `nav-link-item whitespace-nowrap border-b-2 pb-1 text-base nav-menu-font ${
      isActive
        ? 'border-amber-400 text-amber-300'
        : 'border-transparent text-white/90 hover:text-amber-300'
    }`

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-1 pb-1 md:px-4 md:pt-1.5 md:pb-1.5">
      <nav
        className="nav-bar mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-white/30 px-4 py-2 shadow-2xl"
        style={{
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <Link to="/" aria-label="Aniq Salon Baghyalatha Home" className="nav-link-item block">
          <h1 className="shrink-0 text-base font-semibold tracking-wide text-white md:text-lg">
            Best Hair Salon in <span className="text-[#C59D5F]">Baghyalatha, Hyderabad</span>
          </h1>
          <p className="mt-0.5 text-sm text-white/70">
            I <PremiumIcon name="heart" size={16} /> Bhagyalatha Colony
          </p>
        </Link>

        <ul className="nav-dock flex flex-wrap items-center justify-end gap-2 sm:gap-4 lg:gap-6">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <li
                  key={item.to}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <NavLink
                    to={item.to}
                    className={linkClass}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <span className="flex items-center gap-1">
                      {item.label}
                      <span className="text-xs">▼</span>
                    </span>
                  </NavLink>
                  {servicesDropdownOpen && (
                    <div
                      className="nav-dropdown absolute left-0 top-full z-[60] mt-2 flex min-w-[160px] flex-col rounded-xl border-2 border-[#C59D5F]/50 py-2 shadow-2xl"
                      style={{
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className="nav-link-item block px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#C59D5F]/20 hover:text-[#C59D5F]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              )
            }
            return (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
