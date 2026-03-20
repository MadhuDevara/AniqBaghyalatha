import { Link } from 'react-router-dom'

/**
 * Futuristic CTA button with animated neon glow border.
 * Electric blue, purple, pink gradient flowing around the border.
 */
function NeonCTAButton({ to, href, onClick, children = 'Book Appointment', className = '' }) {
  const baseClass = 'btn-neon-cta'
  const combinedClass = className ? `${baseClass} ${className}` : baseClass

  const inner = (
    <span className="btn-neon-cta-inner">
      <span className="relative z-[1]">{children}</span>
    </span>
  )

  if (to) {
    return (
      <Link to={to} className={combinedClass} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={combinedClass} onClick={onClick}>
      {inner}
    </button>
  )
}

export default NeonCTAButton
