import { Link } from 'react-router-dom'
import NeonCTAButton from './NeonCTAButton'

const popularServiceNames = ['Any Hair Cut', 'Shaving / Trimming', 'Hair Cut']

function ServiceCard({
  icon,
  name,
  price,
  compact = false,
  showBookButton = false,
  onCardClick,
}) {
  const containerClass = compact
    ? 'relative glass-card service-card-hover rounded-xl p-3 focus-within:border-gray-400 focus-within:bg-gray-50'
    : 'relative glass-card service-card-hover rounded-2xl p-6 focus-within:border-gray-400 focus-within:bg-gray-50'

  const iconWrapperClass = compact
    ? 'service-card-icon flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xl shadow-sm'
    : 'service-card-icon flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xl shadow-sm'
  const titleClass = compact
    ? 'service-card-title mt-2 text-[0.95rem] font-semibold leading-tight text-[#222222] transition-all duration-300'
    : 'service-card-title mt-4 text-lg font-semibold text-[#222222] transition-all duration-300'
  const priceClass = compact
    ? 'mt-1 text-xs text-[#6B6B6B] transition-colors duration-300 group-hover:text-[#4F4F4F]'
    : 'mt-2 text-[#6B6B6B] transition-colors duration-300 group-hover:text-[#4F4F4F]'
  const isPopular = popularServiceNames.includes(name)

  return (
    <article
      className={`group ${containerClass} ${onCardClick ? 'cursor-pointer' : ''}`}
      onClick={onCardClick}
      role={onCardClick ? 'button' : undefined}
      tabIndex={onCardClick ? 0 : undefined}
      onKeyDown={
        onCardClick
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onCardClick()
              }
            }
          : undefined
      }
    >
      {isPopular && (
        <span className="absolute right-3 top-3 rounded-full bg-black px-2 py-1 text-xs text-white">
          Popular
        </span>
      )}
      <div className={iconWrapperClass}>{icon}</div>
      <h3 className={titleClass}>{name}</h3>
      <p className={priceClass}>Starts from ₹{price} onwards</p>
      {showBookButton && (
        <NeonCTAButton
          to={`/book-appointment?service=${encodeURIComponent(name)}`}
          className="mt-3 inline-block"
          onClick={(event) => event.stopPropagation()}
        >
          Book Appointment
        </NeonCTAButton>
      )}
    </article>
  )
}

export default ServiceCard
