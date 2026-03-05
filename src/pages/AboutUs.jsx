function AboutUs() {
  return (
    <main className="section-wrap">
      <h1 className="section-title">About Us</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">Our Story</h2>
          <p className="mt-3 text-stone-700">
            Aniq Salon Baghyalatha was founded to bring premium beauty services
            to the neighborhood with modern techniques and personalized care.
          </p>
        </article>

        <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">
            Owner Introduction
          </h2>
          <p className="mt-3 text-stone-700">
            Led by Baghyalatha, our salon focuses on giving every client a
            confident, elegant look suitable for both daily life and special
            occasions.
          </p>
        </article>

        <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">
            Years of Experience
          </h2>
          <p className="mt-3 text-stone-700">
            With 10+ years of hands-on experience in beauty and grooming, our
            team delivers trusted, high-quality results.
          </p>
        </article>

        <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">
            Mission & Vision
          </h2>
          <p className="mt-3 text-stone-700">
            Mission: Deliver a luxurious and hygienic beauty experience. Vision:
            Become the most loved destination for style, beauty, and confidence
            in the city.
          </p>
        </article>
      </div>
    </main>
  )
}

export default AboutUs
