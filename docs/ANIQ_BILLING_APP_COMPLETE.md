# Aniq Salon Billing App – Complete Reference

> **Use this document when creating the separate billing app in Cursor.** Copy-paste the data and follow the UI specs.

---

## 1. SALON INFORMATION (Copy-Paste Ready)

### contactInfo
```javascript
export const contactInfo = {
  phone: '9666833811',
  phoneLink: '+919666833811',
  phoneAlt: '040-24201515',
  contactLine: '📞 9666833811 / ☎️040-24201515',
  whatsapp: '+919666833811',
  instagram: 'https://www.instagram.com/aniq_salon_bhagyalathacolony/',
  facebook: 'https://www.facebook.com/ANIQ_STUDIO',
  franchisePhone: '8143266223',
  address: 'Rama devi arcade, Shanti nagar X road, Bhagyalatha Colony, Hayathnagar, Hyderabad, Telangana 500070',
  mapLink: 'https://www.google.com/maps/place/ANIQ+-+Unisex+Salon+%26+Tattoos+-+Shanti+nagar+X+road+(+Bhagyalatha+colony)/@17.3278416,78.5850334,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcba18e9c001801:0x6f7250c6da1e97ee!8m2!3d17.3278365!4d78.5876083!16s%2Fg%2F11w8yg8hvc?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D',
  mapEmbedUrl: 'https://www.google.com/maps?q=ANIQ%20Unisex%20Salon%20%26%20Tattoos%20Shanti%20Nagar%20X%20Road%20Bhagyalatha%20Colony%20Hayathnagar%20Hyderabad&output=embed',
}
```

### workingHours
```javascript
export const workingHours = [
  { day: 'Monday', time: '8:00 AM - 10:30 PM' },
  { day: 'Tuesday', time: '8:00 AM - 10:30 PM' },
  { day: 'Wednesday', time: '8:00 AM - 10:30 PM' },
  { day: 'Thursday', time: '8:00 AM - 10:30 PM' },
  { day: 'Friday', time: '8:00 AM - 10:30 PM' },
  { day: 'Saturday', time: '8:00 AM - 10:30 PM' },
  { day: 'Sunday', time: '8:00 AM - 10:30 PM' },
]
```

### menuPricing (Full)
```javascript
export const menuPricing = {
  grooming: [
    { name: 'Any Hair Cut', price: '₹149/-' },
    { name: 'Shaving / Trimming', price: '₹69/-' },
    { name: 'Hair Wash', price: '₹49/-' },
    { name: 'Hair Straightening', price: '₹999/-' },
    { name: 'Hair Keratin', price: '₹1999/-' },
  ],
  detan: [
    { name: 'Only Face', price: '₹249/-' },
    { name: 'Only Neck', price: '₹99/-' },
    { name: 'O3 (Face)', price: '₹399/-' },
    { name: 'Saga (Face)', price: '₹299/-' },
    { name: 'Face & Neck', price: '₹299/-' },
    { name: 'Half Hands', price: '₹399/-' },
    { name: 'Full Hands', price: '₹599/-' },
    { name: 'Full Body', price: '₹1999/-' },
    { name: 'Feet', price: '₹299/-' },
    { name: 'Legs', price: '₹999/-' },
  ],
  facials: [
    { name: 'Face Scrub', price: '₹249/-' },
    { name: 'Face Scrub With Steam', price: '₹349/-' },
    { name: 'Fruit', price: '₹799/-' },
    { name: 'Vitamin', price: '₹799/-' },
    { name: 'Silver', price: '₹1399/-' },
    { name: 'Gold', price: '₹1499/-' },
    { name: 'Diamond', price: '₹1599/-' },
    { name: 'Pearl', price: '₹1299/-' },
    { name: 'Lotus', price: '₹1499/-' },
    { name: 'Jovees Gold', price: '₹1799/-' },
    { name: 'Whitening', price: '₹899/-' },
    { name: 'Shahnaz Gold', price: '₹2199/-' },
    { name: 'Shahnaz Diamond', price: '₹2499/-' },
    { name: 'Bridal Special (O3)', price: '₹3499/-' },
    { name: 'Special Hydra', price: '₹2499/-' },
  ],
  cleanUps: [
    { name: 'Fruit', price: '₹499/-' },
    { name: 'Pearl', price: '₹499/-' },
    { name: 'Papaya', price: '₹599/-' },
    { name: 'Gold', price: '₹699/-' },
    { name: 'Diamond', price: '₹799/-' },
    { name: 'Luxury', price: '₹999/-' },
    { name: 'O3', price: '₹1199/-' },
  ],
  colours: [
    { name: 'Natural Black (Gel)', price: '₹249/-' },
    { name: 'Streax Natural Black', price: '₹299/-' },
    { name: 'Streax Burgundy', price: '₹299/-' },
    { name: 'Matrix Natural Black', price: '₹399/-' },
    { name: 'Revlon Natural Black', price: '₹399/-' },
    { name: 'Loreal Natural Black', price: '₹499/-' },
    { name: 'Loreal Inoa Natural Black', price: '₹599/-' },
  ],
  manicure: [
    { name: 'Basic', price: '₹299/-' },
    { name: 'Advanced', price: '₹399/-' },
    { name: 'Crystal', price: '₹599/-' },
    { name: 'Luxury', price: '₹699/-' },
  ],
  pedicure: [
    { name: 'Basic', price: '₹399/-' },
    { name: 'Advanced', price: '₹599/-' },
    { name: 'Crystal', price: '₹799/-' },
    { name: 'Luxury', price: '₹999/-' },
  ],
  oilMassage: [
    { name: 'Coconut', price: '₹99/-' },
    { name: 'Cool', price: '₹99/-' },
    { name: 'Almond', price: '₹99/-' },
    { name: 'Warm Oil Massage', price: '₹149/-' },
    { name: 'Warm Oil Massage & Steam', price: '₹249/-' },
    { name: 'Head Wash', price: '₹49/-' },
  ],
  hairSpa: [
    { name: 'Basic', price: '₹599/-' },
    { name: 'Matrix', price: '₹699/-' },
    { name: 'Loreal', price: '₹799/-' },
    { name: 'Schozcoff', price: '₹899/-' },
    { name: 'Loreal Anti Dandruff', price: '₹899/-' },
  ],
  maleKids: [
    { name: 'Hair Cut', price: '₹99/-' },
    { name: 'Hair Wash', price: '₹49/-' },
    { name: 'Shaving / Trimming', price: '₹69/-' },
  ],
  femaleKids: [
    { name: 'Hair Cut', price: '₹99/-' },
    { name: 'Hair Wash', price: '₹49/-' },
    { name: 'Basic Manicure', price: '₹249/-' },
    { name: 'Basic Pedicure', price: '₹349/-' },
  ],
}
```

### categoryLabels
```javascript
export const categoryLabels = {
  grooming: 'Grooming',
  detan: 'Detan',
  facials: 'Facials',
  cleanUps: 'Clean Ups',
  colours: "Colour's",
  manicure: 'Manicure',
  pedicure: 'Pedicure',
  oilMassage: 'Oil Massage (Head)',
  hairSpa: 'Hair Spa',
  maleKids: 'Male Kids',
  femaleKids: 'Female Kids',
}
```

### categoryIcons
```javascript
export const categoryIcons = {
  grooming: '✂️',
  detan: '✨',
  facials: '🍎',
  cleanUps: '🍋',
  colours: '🎨',
  manicure: '💅',
  pedicure: '🦶',
  oilMassage: '💆',
  hairSpa: '🧖',
  maleKids: '👦',
  femaleKids: '👧',
}
```

### menuSection (filter mapping)
```javascript
const menuSection = {
  grooming: 'Male',
  detan: 'Female',
  facials: 'Female',
  cleanUps: 'Female',
  colours: 'Female',
  manicure: 'Female',
  pedicure: 'Female',
  oilMassage: 'Male',
  hairSpa: 'Female',
  maleKids: 'Kids',
  femaleKids: 'Kids',
}
```

### Constants
```javascript
export const filterCategories = ['All', 'Male', 'Female', 'Kids']
const popularServiceNames = ['Any Hair Cut', 'Shaving / Trimming', 'Hair Wash', 'Only Face', 'Face Scrub', 'Basic Manicure']
const bestValueThreshold = 200
```

---

## 2. UI SPECIFICATIONS

### 2.1 Color Palette
| Use | Color / Value |
|-----|---------------|
| Gold accent | `#d4af37` |
| Gold dark | `#b8860b`, `#c59d5f` |
| Billing panel bg | `rgba(15, 23, 42, 0.95)` |
| Amber text | `text-amber-400`, `text-amber-700` |
| Stone text (light) | `text-stone-200`, `text-stone-400` |
| White on dark | `text-white` |
| Card bg | `bg-white` |
| Border | `border-stone-200`, `border-amber-300` |

### 2.2 Layout
- **Grid:** `lg:grid-cols-[1fr_380px]` (service list | billing panel)
- **Billing panel:** `lg:sticky lg:top-20 lg:self-start`
- **Mobile:** Billing first (above services), single column

### 2.3 Service List (Left)
- **Container:** `rounded-2xl border border-stone-200 bg-white p-4 shadow-sm md:p-5`
- **Search:** Full width, `rounded-xl`, placeholder "Search services..."
- **Filter pills:** `rounded-full`, active: `border-amber-500 bg-amber-500/20 text-amber-800`
- **Category header:** `border-b border-stone-200 pb-2 text-sm font-semibold uppercase tracking-wider text-stone-600`
- **Service grid:** `grid gap-3 sm:grid-cols-2`

### 2.4 Service Card
- **Classes:** `billing-service-card relative flex flex-col rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between`
- **Badges:** "Popular" (amber), "Best value" (green, price ≤ 200)
- **Add button:** `btn-neon-chip` with inner `btn-neon-chip-inner`

### 2.5 Billing Panel (Right)
- **Wrapper:** `about-card-gold-border` > `about-card-gold-border-inner billing-panel`
- **Title:** "Billing", subtitle "Selected services"
- **Cart items:** `billing-cart-item`, `bg-white/5`, quantity − / + / ✕
- **Totals:** Subtotal, Tax % input, Total (bold amber)
- **Inputs:** Customer Name, Phone
- **Buttons:** Send via WhatsApp (green), Clear, Book Appointment (amber)

### 2.6 Typography
- **Fonts:** Lora (body), Outfit (headings), Montserrat (nav/buttons)
- **Headings:** `font-semibold`, `text-base` or `text-lg`

---

## 3. CSS TO INCLUDE (Billing-Specific)

```css
/* Gold border card */
.about-card-gold-border {
  position: relative;
  padding: 2px;
  border-radius: 1.5rem;
  overflow: hidden;
}
.about-card-gold-border::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #d4af37, #c59d5f, #d4af37, #c59d5f);
  background-size: 200% 100%;
  animation: goldBorderShimmer 4s linear infinite;
}
.about-card-gold-border-inner {
  position: relative;
  z-index: 1;
  background: white;
  border-radius: calc(1.5rem - 2px);
}

/* Billing panel */
.billing-panel {
  background: rgba(15, 23, 42, 0.95) !important;
}

/* Service card hover */
.billing-service-card {
  transition: transform 0.35s, box-shadow 0.35s, border-color 0.3s;
}
.billing-service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px -8px rgba(0,0,0,0.15), 0 0 0 1px rgba(212,175,55,0.3);
  border-color: rgba(212,175,55,0.4);
}

/* Cart item */
.billing-cart-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

/* Add Service button - neon chip */
.btn-neon-chip {
  position: relative;
  padding: 2px;
  border-radius: 9999px;
  overflow: hidden;
  border: none;
  cursor: pointer;
  background: transparent;
}
.btn-neon-chip-inner {
  position: relative;
  z-index: 1;
  padding: 6px 14px;
  background: #0f172a;
  border-radius: 9999px;
  color: #e2e8f0;
  font-size: 0.875rem;
}
```

---

## 4. BILLING APP FEATURES (Staff-Facing)

| Feature | Description |
|---------|-------------|
| **Generate Bill** | Copy bill text to clipboard |
| **Print Receipt** | Open print window with formatted receipt (logo, QR code, etc.) |
| **Send via WhatsApp** | Send receipt to **customer's phone** (entered in form) |
| **Book Appointment** | Link to main site booking page |

**WhatsApp flow:** Staff enters customer phone → clicks Send → Opens `wa.me/{customerPhone}?text={bill}` (bill goes TO customer).

---

## 5. ASSETS

- **Logo:** `public/aniq-logo-badge.svg` (for print receipt)
- **QR code API:** `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data={mapLink}`

---

## 6. QUICK START FOR CURSOR

1. Create new Vite + React project
2. Add Tailwind CSS 4
3. Create `src/data/siteData.js` – copy all exports above
4. Create main Billing page with: service list (left) + billing panel (right)
5. Implement: addToCart, updateQuantity, removeFromCart, subtotal, tax, total
6. Implement: generateBillText, handlePrintReceipt, handleSendWhatsApp
7. Add CSS from Section 3
8. Copy `aniq-logo-badge.svg` to `public/`

---

*Salon: ANIQ – Hair | Beauty | Tattoos · Bhagyalatha Colony, Hyderabad*
