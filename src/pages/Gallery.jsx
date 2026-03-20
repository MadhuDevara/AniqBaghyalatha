import GalleryGrid from '../components/GalleryGrid'
import { galleryItems } from '../data/siteData'

function Gallery() {
  return (
    <div className="section-wrap py-6 md:py-8">
      <div className="flex flex-col items-start gap-3">
        <h1 className="section-title section-title-floater">
          <span className="relative z-10">Gallery</span>
        </h1>
        <p className="section-title-floater text-sm md:text-base">
          <span className="relative z-10">Explore our latest transformations in hair, makeup, bridal looks, and salon interiors.</span>
        </p>
      </div>
      <div className="mt-6">
        <GalleryGrid items={galleryItems} />
      </div>
    </div>
  )
}

export default Gallery
