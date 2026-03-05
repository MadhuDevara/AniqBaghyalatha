import GalleryGrid from '../components/GalleryGrid'
import { galleryItems } from '../data/siteData'

function Gallery() {
  return (
    <main className="section-wrap">
      <h1 className="section-title">Gallery</h1>
      <p className="mt-3 max-w-2xl text-stone-600">
        Explore our latest transformations in hair, makeup, bridal looks, and
        salon interiors.
      </p>
      <div className="mt-8">
        <GalleryGrid items={galleryItems} />
      </div>
    </main>
  )
}

export default Gallery
