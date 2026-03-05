function ServiceCard({ icon, name, price }) {
  return (
    <article className="group rounded-2xl border border-amber-200/30 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="text-3xl">{icon}</span>
      <h3 className="mt-4 text-lg font-semibold text-stone-900">{name}</h3>
      <p className="mt-2 text-amber-700">Starting from ₹{price}</p>
    </article>
  )
}

export default ServiceCard
