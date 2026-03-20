import { useEffect, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import FullScreenGalleryLightbox from './FullScreenGalleryLightbox'

const categories = ['All', 'Haircuts', 'Makeup', 'Bridal Looks', 'Salon Interior']

function GalleryGrid({ items }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const returnFocusRef = useRef(null)

  const activeCategory = useMemo(() => {
    const c = searchParams.get('category')
    return c && categories.includes(c) ? c : 'All'
  }, [searchParams])

  const setActiveCategory = (category) => {
    setSearchParams(
      (p) => {
        const n = new URLSearchParams(p)
        n.delete('photo')
        if (category === 'All') n.delete('category')
        else n.set('category', category)
        return n
      },
      { replace: true },
    )
  }

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory)

  const photoId = searchParams.get('photo')

  const selectedIndex = useMemo(() => {
    if (!photoId) return null
    const idx = filteredItems.findIndex((item) => item.id === photoId)
    return idx >= 0 ? idx : null
  }, [photoId, filteredItems])

  useEffect(() => {
    if (photoId && selectedIndex === null) {
      setSearchParams(
        (p) => {
          const n = new URLSearchParams(p)
          n.delete('photo')
          return n
        },
        { replace: true },
      )
    }
  }, [photoId, selectedIndex, setSearchParams])

  const hasLightboxOpen = selectedIndex !== null
  const selectedItem = hasLightboxOpen ? filteredItems[selectedIndex] : null

  const setPhotoInUrl = (id) => {
    setSearchParams(
      (p) => {
        const n = new URLSearchParams(p)
        if (id) n.set('photo', id)
        else n.delete('photo')
        return n
      },
      { replace: true },
    )
  }

  const openLightbox = (index) => {
    returnFocusRef.current = document.activeElement
    const id = filteredItems[index]?.id
    if (id) setPhotoInUrl(id)
  }

  const closeLightbox = () => {
    setPhotoInUrl(null)
    requestAnimationFrame(() => {
      const el = returnFocusRef.current
      if (el && typeof el.focus === 'function') el.focus()
    })
  }

  const showPrevious = () => {
    if (selectedIndex === null || filteredItems.length === 0) return
    const next = (selectedIndex - 1 + filteredItems.length) % filteredItems.length
    const id = filteredItems[next]?.id
    if (id) setPhotoInUrl(id)
  }

  const showNext = () => {
    if (selectedIndex === null || filteredItems.length === 0) return
    const next = (selectedIndex + 1) % filteredItems.length
    const id = filteredItems[next]?.id
    if (id) setPhotoInUrl(id)
  }

  const goFirst = () => {
    if (filteredItems.length === 0) return
    const id = filteredItems[0]?.id
    if (id) setPhotoInUrl(id)
  }

  const goLast = () => {
    if (filteredItems.length === 0) return
    const id = filteredItems[filteredItems.length - 1]?.id
    if (id) setPhotoInUrl(id)
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === category
                ? 'border-black bg-black text-white'
                : 'border-stone-300 bg-white text-[#6B6B6B] hover:border-gray-500 hover:bg-black/70 hover:text-white'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <article
            key={item.id ?? `${item.title}-${item.image}`}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-100/70 hover:shadow-xl"
          >
            <button
              type="button"
              className="block w-full overflow-hidden"
              onClick={() => openLightbox(index)}
              aria-label={`Open ${item.title} in gallery viewer`}
            >
              <img
                src={item.image}
                alt=""
                className="h-56 w-full cursor-zoom-in object-cover transition duration-300 hover:scale-105"
                loading="lazy"
              />
            </button>
            <div className="p-4">
              <h3 className="font-semibold text-stone-900">{item.title}</h3>
              <p className="text-sm text-[#6B6B6B]">{item.category}</p>
            </div>
          </article>
        ))}
      </div>

      {hasLightboxOpen && selectedItem && selectedIndex !== null && (
        <FullScreenGalleryLightbox
          items={filteredItems}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
          onPrev={showPrevious}
          onNext={showNext}
          onFirst={goFirst}
          onLast={goLast}
          totalCount={filteredItems.length}
        />
      )}
    </div>
  )
}

export default GalleryGrid
