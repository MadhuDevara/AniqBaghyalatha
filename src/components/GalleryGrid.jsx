import { useState } from 'react'

const categories = ['All', 'Haircuts', 'Makeup', 'Bridal Looks', 'Salon Interior']

function GalleryGrid({ items }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory)

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === category
                ? 'border-amber-500 bg-amber-500 text-white'
                : 'border-stone-300 bg-white text-stone-700 hover:border-amber-400 hover:text-amber-700'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={`${item.title}-${item.image}`}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover transition duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-semibold text-stone-900">{item.title}</h3>
              <p className="text-sm text-amber-700">{item.category}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid
