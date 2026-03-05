import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Services from './pages/Services'
import BookAppointment from './pages/BookAppointment'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
