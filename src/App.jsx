import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import WhatsAppFloat from './components/WhatsAppFloat'
import MobileStickyCTA from './components/MobileStickyCTA'
import Home from './pages/Home'
import Services from './pages/Services'
import BookAppointment from './pages/BookAppointment'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import FontSamples from './pages/FontSamples'

function App() {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 })

  return (
    <div
      className="relative min-h-screen text-[#222222]"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setMousePos({ x: -999, y: -999 })}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <ParticleBackground className="absolute inset-0" mousePos={mousePos} />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-black/20 pt-10 backdrop-blur-md border-x border-white/15 shadow-inner md:pt-12">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/font-samples" element={<FontSamples />} />
        </Routes>
      </main>
      <Footer />
      <MobileStickyCTA />
      <WhatsAppFloat />
      </div>
    </div>
  )
}

export default App
