import PremiumIcon from './PremiumIcon'

function TestimonialCard({ name, review, rating = 5 }) {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={`${name}-star-${index}`} aria-hidden="true" className="inline-flex">
      <PremiumIcon name="star" size={14} />
    </span>
  ))

  return (
    <article className="glass-card rounded-2xl p-6">
      <p className="text-sm tracking-wide text-[#6B6B6B]">{stars}</p>
      <p className="text-stone-700">"{review}"</p>
      <p className="mt-4 font-semibold text-stone-900">{name}</p>
    </article>
  )
}

export default TestimonialCard
