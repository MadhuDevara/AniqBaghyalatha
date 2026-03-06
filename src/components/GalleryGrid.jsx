import { useEffect, useState } from 'react'

const categories = ['All', 'Haircuts', 'Makeup', 'Bridal Looks', 'Salon Interior']

function GalleryGrid({ items }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory)

  const hasLightboxOpen = selectedIndex !== null
  const selectedItem = hasLightboxOpen ? filteredItems[selectedIndex] : null

  const openLightbox = (index) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const showPrevious = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length,
    )
  }

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length,
    )
  }

  useEffect(() => {
    if (!hasLightboxOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length,
        )
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hasLightboxOpen, filteredItems.length])

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
            onClick={() => {
              setActiveCategory(category)
              setSelectedIndex(null)
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <article
            key={`${item.title}-${item.image}`}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
          >
            <button
              className="block w-full overflow-hidden"
              onClick={() => openLightbox(index)}
              aria-label={`Open ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full cursor-zoom-in object-cover transition duration-300 hover:scale-105"
                loading="lazy"
              />
            </button>
            <div className="p-4">
              <h3 className="font-semibold text-stone-900">{item.title}</h3>
              <p className="text-sm text-amber-700">{item.category}</p>
            </div>
          </article>
        ))}
      </div>

      {hasLightboxOpen && selectedItem && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-2 text-2xl text-white hover:bg-white/25"
            onClick={closeLightbox}
            aria-label="Close preview"
          >
            ×
          </button>

          <button
            className="absolute left-3 rounded-full bg-white/15 px-3 py-2 text-2xl text-white hover:bg-white/25 md:left-8"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="max-h-[90vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-stone-200">
              {selectedItem.title}
            </p>
          </div>

          <button
            className="absolute right-3 rounded-full bg-white/15 px-3 py-2 text-2xl text-white hover:bg-white/25 md:right-8"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default GalleryGrid
