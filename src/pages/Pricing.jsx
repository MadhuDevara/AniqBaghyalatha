import { premiumServices, pricingBySection } from '../data/siteData'

function Pricing() {
  const renderTable = (title, items) => (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="bg-stone-900 px-6 py-4 text-lg font-semibold text-amber-300">
        {title}
      </div>
      <table className="w-full text-left">
        <thead className="bg-stone-100 text-stone-700">
          <tr>
            <th className="px-6 py-3">Service</th>
            <th className="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`${title}-${item.name}`} className="border-b border-stone-100">
              <td className="px-6 py-3 text-stone-800">{item.name}</td>
              <td className="px-6 py-3 font-medium text-amber-700">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <main className="section-wrap">
      <h1 className="section-title">Pricing</h1>
      <p className="mt-3 max-w-2xl text-stone-600">
        Updated rate card as per Aniq Unisex Salon and Tattoos pricing details.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {renderTable('Male', pricingBySection.male)}
        {renderTable('Female', pricingBySection.female)}
      </div>

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-stone-900">Premium Services</h2>
        <p className="mt-3 text-stone-700">
          {premiumServices.join(', ')}
        </p>
        <p className="mt-2 text-sm text-stone-600">
          * Conditions apply.
        </p>
      </div>
    </main>
  )
}

export default Pricing
