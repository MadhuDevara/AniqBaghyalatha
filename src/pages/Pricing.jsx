import { services } from '../data/siteData'

function Pricing() {
  return (
    <main className="section-wrap">
      <h1 className="section-title">Pricing</h1>
      <p className="mt-3 max-w-2xl text-stone-600">
        Transparent pricing with premium service quality.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-stone-900 text-stone-100">
            <tr>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.name} className="border-b border-stone-100">
                <td className="px-6 py-4 text-stone-800">{service.name}</td>
                <td className="px-6 py-4 font-medium text-amber-700">
                  ₹{service.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Pricing
