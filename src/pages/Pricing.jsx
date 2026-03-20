import { categoryLabels, menuPricing, premiumServices } from '../data/siteData'
import NeonCTAButton from '../components/NeonCTAButton'

function Pricing() {
  const renderTable = (title, items) => (
    <div className="about-card-gold-border about-card-gold-border-sm pricing-card-hover">
      <div className="about-card-gold-border-inner overflow-hidden bg-white shadow-sm">
        <div className="pricing-card-header px-6 py-4 text-lg font-semibold text-white">
          {title}
        </div>
        <div className="pricing-table-scroll max-h-[400px] overflow-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-100 text-stone-700">
              <tr>
                <th className="sticky top-0 z-10 bg-stone-100 px-6 py-3">Service</th>
                <th className="sticky top-0 z-10 bg-stone-100 px-6 py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={`${title}-${item.name}`} className="border-b border-stone-100">
                  <td className="px-6 py-3 text-stone-800">{item.name}</td>
                  <td className="px-6 py-3 font-semibold text-amber-800/90">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  return (
    <main className="section-wrap py-6 md:py-8">
      <div className="flex flex-col items-start gap-3 fade-up">
        <h1 className="section-title section-title-floater">
          <span className="relative z-10">Pricing</span>
        </h1>
        <p className="max-w-2xl text-sm text-stone-200 md:text-base">
          Service prices as per our menu. Prices are indicative.
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(menuPricing).map(([key, items]) => (
          <div key={key} className="fade-up">
            {renderTable(categoryLabels[key] || key, items)}
          </div>
        ))}
      </div>

      <div className="about-card-gold-border mt-8 fade-up">
        <div className="about-card-gold-border-inner bg-white p-6 shadow-sm pricing-card-hover">
          <h2 className="text-xl font-semibold text-stone-900">Premium Services</h2>
          <p className="mt-3 text-stone-700">{premiumServices.join(', ')}</p>
          <p className="mt-2 text-sm text-stone-600">* Conditions apply.</p>
          <div className="mt-6">
            <NeonCTAButton to="/book-appointment">Book Appointment</NeonCTAButton>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Pricing
