function ServiceCard({ icon, name, price, compact = false }) {
  const containerClass = compact
    ? 'rounded-lg border border-amber-200/30 bg-white p-2.5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md'
    : 'rounded-2xl border border-amber-200/30 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'

  const iconClass = compact ? 'text-xl' : 'text-3xl'
  const titleClass = compact
    ? 'mt-1.5 text-[0.95rem] font-semibold leading-tight text-stone-900'
    : 'mt-4 text-lg font-semibold text-stone-900'
  const priceClass = compact
    ? 'mt-1 text-xs text-amber-700'
    : 'mt-2 text-amber-700'

  return (
    <article className={`group ${containerClass}`}>
      <span className={iconClass}>{icon}</span>
      <h3 className={titleClass}>{name}</h3>
      <p className={priceClass}>Starts from ₹{price} onwards</p>
    </article>
  )
}

export default ServiceCard
