function TestimonialCard({ name, review }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-stone-700">"{review}"</p>
      <p className="mt-4 font-semibold text-stone-900">{name}</p>
    </article>
  )
}

export default TestimonialCard
