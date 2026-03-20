import { Link } from 'react-router-dom'
 
const samples = [
  {
    id: 'luxury-system',
    name: 'Outfit + Lora',
    style: 'Premium headings (serif) + classic body typography using the salon theme.',
  },
]

function FontSampleCard({ sample }) {
  return (
    <article
      className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
    >
      <h3
        className="text-xl font-semibold text-stone-900"
      >
        {sample.name}
      </h3>
      <p className="mt-2 text-sm text-stone-500">{sample.style}</p>

      <div className="mt-6 space-y-4 border-t border-stone-100 pt-6">
        <p className="text-2xl font-semibold text-stone-900">
          Why Choose Us
        </p>
        <p className="text-base text-stone-600">
          Strict hygiene standards for a safe and comfortable salon visit.
        </p>
        <p className="text-lg font-medium text-stone-800">
          Best Hair Salon in Baghyalatha, Hyderabad
        </p>
      </div>
    </article>
  )
}

function FontSamples() {
  return (
    <main className="section-wrap py-6 md:py-8">
      <div className="flex flex-col items-start gap-3">
        <h1 className="section-title section-title-floater">
          <span className="relative z-10">Font Style Samples</span>
        </h1>
        <p className="section-title section-title-floater text-base md:text-lg">
          <span className="relative z-10">Choose a premium typography feel. Current: Outfit + Lora.</span>
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {samples.map((sample) => (
          <FontSampleCard key={sample.id} sample={sample} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
        <h2 className="text-lg font-semibold text-stone-900">Current (for comparison)</h2>
        <p className="mt-2 font-semibold text-stone-800">Why Choose Us — Salon theme (Outfit + Lora)</p>
        <p className="mt-2 text-stone-600">Headings: Outfit • Body: Lora</p>
      </div>

      <div className="mt-8">
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default FontSamples
