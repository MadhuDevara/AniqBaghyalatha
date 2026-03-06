export const contactInfo = {
  phone: '7330033007',
  whatsapp: '+917330033007',
  instagram: 'https://www.instagram.com/',
  address:
    'Rama Devi Arcade, Shanti Nagar X Road, Bhagyalatha Colony, Hayathnagar, Hyderabad, Telangana 500070',
  mapLink:
    'https://www.google.com/maps/place/ANIQ+-+Unisex+Salon+%26+Tattoos+-+Shanti+nagar+X+road+(+Bhagyalatha+colony)/@17.3278416,78.5850334,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcba18e9c001801:0x6f7250c6da1e97ee!8m2!3d17.3278365!4d78.5876083!16s%2Fg%2F11w8yg8hvc?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D',
  mapEmbedUrl:
    'https://www.google.com/maps?q=ANIQ%20Unisex%20Salon%20%26%20Tattoos%20Shanti%20Nagar%20X%20Road%20Bhagyalatha%20Colony%20Hayathnagar%20Hyderabad&output=embed',
}

export const workingHours = [
  { day: 'Monday', time: '8:00 AM - 10:30 PM' },
  { day: 'Tuesday', time: '8:00 AM - 10:30 PM' },
  { day: 'Wednesday', time: '8:00 AM - 10:30 PM' },
  { day: 'Thursday', time: '8:00 AM - 10:30 PM' },
  { day: 'Friday', time: '8:00 AM - 10:30 PM' },
  { day: 'Saturday', time: '8:00 AM - 10:30 PM' },
  { day: 'Sunday', time: '8:00 AM - 10:30 PM' },
]

export const services = [
  {
    name: 'Haircut',
    icon: '✂️',
    price: 149,
    category: 'Haircuts',
    duration: '30-45 mins',
    description: 'Precision haircut tailored to your face shape and style preference.',
  },
  {
    name: 'Hair Styling',
    icon: '💇',
    price: 349,
    category: 'Haircuts',
    duration: '45-60 mins',
    description: 'Professional styling for daily elegance, parties, and special occasions.',
  },
  {
    name: 'Hair Coloring',
    icon: '🎨',
    price: 249,
    category: 'Haircuts',
    duration: '60-120 mins',
    description: 'Trendy color application with consultation based on hair type and length.',
  },
  {
    name: 'Hair Spa',
    icon: '🧖',
    price: 599,
    category: 'Haircuts',
    duration: '45-60 mins',
    description: 'Nourishing hair spa treatment for smoother, healthier, and softer hair.',
  },
  {
    name: 'Beard Trim / Shape',
    icon: '🧔',
    price: 69,
    category: 'Haircuts',
    duration: '20-30 mins',
    description: 'Clean and defined beard shaping to elevate your overall grooming look.',
  },
  {
    name: 'Facial',
    icon: '✨',
    price: 599,
    category: 'Makeup',
    duration: '45-75 mins',
    description: 'Deep cleansing and glow-enhancing facial based on your skin concerns.',
  },
  {
    name: 'Skin Care',
    icon: '🌸',
    price: 249,
    category: 'Makeup',
    duration: '30-45 mins',
    description: 'Targeted skin care session focused on hydration, tone, and refresh.',
  },
  {
    name: 'Bridal Makeup',
    icon: '👰',
    price: 12000,
    category: 'Bridal Looks',
    duration: '150-240 mins',
    description: 'Complete bridal makeover with premium products for long-lasting finish.',
  },
  {
    name: 'Threading (Eyebrows)',
    icon: '🪞',
    price: 49,
    category: 'Makeup',
    duration: '10-15 mins',
    description: 'Neat eyebrow shaping for a sharper and balanced facial look.',
  },
  {
    name: 'Waxing',
    icon: '🕯️',
    price: 300,
    category: 'Makeup',
    duration: '20-45 mins',
    description: 'Smooth and hygienic waxing service with skin-friendly care process.',
  },
  {
    name: 'Manicure',
    icon: '💅',
    price: 399,
    category: 'Salon Interior',
    duration: '30-45 mins',
    description: 'Nail and hand grooming for clean, polished, and healthy-looking hands.',
  },
  {
    name: 'Pedicure',
    icon: '🦶',
    price: 499,
    category: 'Salon Interior',
    duration: '40-55 mins',
    description: 'Relaxing foot care and nail treatment for refreshed and tidy feet.',
  },
]

export const pricingBySection = {
  male: [
    { name: 'Haircut', price: '₹149/-' },
    { name: 'Beard / Shape', price: '₹69/-' },
    { name: 'Hair Colour', price: '₹249/-' },
    { name: 'Facial', price: '₹599/-' },
    { name: 'D-Tan / Scrub', price: '₹249/-' },
    { name: 'Clean Up', price: '₹499/-' },
    { name: 'Hair Spa', price: '₹599/-' },
    { name: 'Head Massage', price: '₹99/-' },
    { name: 'Manicure', price: '₹399/-' },
    { name: 'Pedicure', price: '₹499/-' },
    { name: 'Hydra Clean Up', price: '₹1499/-' },
    { name: 'Tattoo (per inch)', price: '₹349/-*' },
  ],
  female: [
    { name: 'Haircut', price: '₹349/-*' },
    { name: 'Eye Brows', price: '₹49/-*' },
    { name: 'Hair Colour', price: 'Price based on length' },
    { name: 'Facial', price: '₹599/-*' },
    { name: 'D-Tan / Scrub', price: '₹249/-*' },
    { name: 'Clean Up', price: '₹499/-' },
    { name: 'Hair Spa', price: '₹699/-*' },
    { name: 'Waxing', price: '₹300/-*' },
    { name: 'Manicure', price: '₹399/-' },
    { name: 'Pedicure', price: '₹499/-' },
    { name: 'Hydra Facial', price: '₹1999/-*' },
    { name: 'Tattoo Removal (per inch)', price: '₹499/-*' },
  ],
}

export const premiumServices = [
  'Keratin',
  'Botox',
  'Nano Plastia',
  'Bio-Plastia',
  'Hair Smoothing',
  'Straightening',
  'Perming',
  'Hair Fall & Anti Dandruff Spa',
]

export const testimonials = [
  {
    name: 'Priya M.',
    review:
      'Amazing service and professional staff. My bridal look was exactly how I imagined it.',
  },
  {
    name: 'Rahul K.',
    review:
      'Great haircut and beard trim. Clean salon, friendly team, and premium experience.',
  },
  {
    name: 'Sneha R.',
    review:
      'Their facial and hair spa package is excellent. I always leave feeling refreshed.',
  },
]

export const featuredServices = services.slice(0, 6)

export const galleryItems = [
  {
    title: 'Classic Layer Cut',
    category: 'Haircuts',
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern Bob Styling',
    category: 'Haircuts',
    image:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Party Glam Makeup',
    category: 'Makeup',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Bridal Signature Look',
    category: 'Bridal Looks',
    image:
      'https://images.unsplash.com/photo-1596704017254-9f8f8d193f39?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Premium Bridal Styling',
    category: 'Bridal Looks',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Salon Interior 1',
    category: 'Salon Interior',
    image: '/gallery/salon-interior-1.png',
  },
  {
    title: 'Salon Interior 2',
    category: 'Salon Interior',
    image: '/gallery/salon-interior-2.png',
  },
  {
    title: 'Salon Interior 3',
    category: 'Salon Interior',
    image: '/gallery/salon-interior-3.png',
  },
  {
    title: 'Salon Interior 4',
    category: 'Salon Interior',
    image: '/gallery/salon-interior-4.png',
  },
  {
    title: 'Salon Interior 5',
    category: 'Salon Interior',
    image: '/gallery/salon-interior-5.png',
  },
  {
    title: 'Salon Interior 6',
    category: 'Salon Interior',
    image: '/gallery/salon-interior-6.png',
  },
  {
    title: 'Salon Interior 7',
    category: 'Salon Interior',
    image: '/gallery/salon-interior-7.png',
  },
]
