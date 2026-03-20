# Aniq Salon Billing App – Build Specification

> **Purpose:** This document describes the billing/POS functionality built in the main Aniq Salon website. Use it to recreate the same app as a **separate standalone project** (e.g., `pos.aniqsalon.com`).

---

## 1. Tech Stack

| Item | Value |
|------|-------|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| Build | Vite |

**package.json dependencies:**
```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.2.1",
    "@vitejs/plugin-react": "^5.1.1",
    "tailwindcss": "^4.2.1",
    "vite": "^7.3.1"
  }
}
```

---

## 2. Data Structure

### 2.1 contactInfo (required)
```javascript
export const contactInfo = {
  phone: '9666833811',
  phoneLink: '+919666833811',
  phoneAlt: '040-24201515',
  address: 'Rama devi arcade, Shanti nagar X road, Bhagyalatha Colony, Hayathnagar, Hyderabad, Telangana 500070',
  mapLink: 'https://www.google.com/maps/place/ANIQ+-+Unisex+Salon+...',
}
```

### 2.2 workingHours (required)
```javascript
export const workingHours = [
  { day: 'Monday', time: '8:00 AM - 10:30 PM' },
  // ... all 7 days
]
```

### 2.3 menuPricing (required)
Object with category keys. Each category has array of `{ name, price }`:
```javascript
export const menuPricing = {
  grooming: [
    { name: 'Any Hair Cut', price: '₹149/-' },
    { name: 'Shaving / Trimming', price: '₹69/-' },
    // ...
  ],
  detan: [...],
  facials: [...],
  cleanUps: [...],
  colours: [...],
  manicure: [...],
  pedicure: [...],
  oilMassage: [...],
  hairSpa: [...],
  maleKids: [...],
  femaleKids: [...],
}
```

### 2.4 categoryLabels
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

### 2.5 categoryIcons
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

### 2.6 menuSection (maps category → filter)
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

### 2.7 allServices (derived from menuPricing)
```javascript
const allServices = Object.entries(menuPricing).flatMap(([key, items]) =>
  items.map((item) => ({
    id: `${key}-${item.name}`,
    name: item.name,
    price: parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0,
    category: categoryLabels[key] || key,
    icon: categoryIcons[key] || '✨',
    section: menuSection[key] || 'Female',
  })),
)
```

### 2.8 Constants
```javascript
const filterCategories = ['All', 'Male', 'Female', 'Kids']
const popularServiceNames = ['Any Hair Cut', 'Shaving / Trimming', 'Hair Wash', 'Only Face', 'Face Scrub', 'Basic Manicure']
const bestValueThreshold = 200  // services ≤ ₹200 get "Best value" badge
```

---

## 3. State (React useState)

| State | Type | Purpose |
|-------|------|---------|
| filter | string | 'All' \| 'Male' \| 'Female' \| 'Kids' |
| cart | array | `[{ id, name, price, quantity, ... }]` |
| taxPercent | string | e.g. '5' or '' |
| customerName | string | |
| customerPhone | string | |
| searchQuery | string | Search input |

---

## 4. Computed Values

```javascript
subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)
taxAmount = Math.round((subtotal * parseFloat(taxPercent || 0)) / 100)
total = subtotal + taxAmount
```

**Filtering logic:**
- filteredServices: filter by section (Male/Female/Kids)
- searchedServices: filter by searchQuery (name or category)
- servicesByCategory: group by category for display

---

## 5. Layout Structure

### 5.1 Two-column grid (desktop)
- `lg:grid-cols-[1fr_380px]`
- Left: Service list (lg:order-1)
- Right: Billing panel (lg:order-2, lg:sticky lg:top-20)
- On mobile: Billing appears first (above services)

### 5.2 Service list (left)
- Search input (full width)
- Filter pills: All, Male, Female, Kids
- Services grouped by category with headers
- Each category: grid of service cards (sm:grid-cols-2)

### 5.3 Billing panel (right)
- Dark panel: `bg: rgba(15, 23, 42, 0.95)`
- Cart items (no scroll on outer; cart items list can grow)
- Subtotal, Tax % input, Total
- Customer Name, Phone inputs
- Buttons: Generate Bill, Print Receipt, Send via WhatsApp, Book Appointment

---

## 6. Service Card UI

Each card shows:
- Badge (top-left): "Popular" (amber) or "Best value" (green, if price ≤ 200)
- Service name (bold)
- Icon, category, price (₹)
- "Add Service" button (btn-neon-chip style)

---

## 7. Cart Item UI

- Service name, price each
- Quantity controls: − [number] +
- Remove (✕) button

---

## 8. Key Functions

### 8.1 addToCart(service)
If exists: increment quantity. Else: add with quantity 1.

### 8.2 updateQuantity(id, delta)
Update quantity, remove if 0.

### 8.3 removeFromCart(id)
Filter out item.

### 8.4 generateBillText()
Returns plain text for WhatsApp/clipboard. Uses WhatsApp formatting:
- `*bold*` for salon name, receipt ID, TOTAL
- `_italic_` for section labels
- No emojis (compatibility)
- Receipt ID: `RCP-YYYYMMDD-XXXX`
- Includes: salon info, address, phone, hours, customer, items, totals, map link

### 8.5 handlePrintReceipt()
1. Build receipt HTML (logo, receipt ID, date, address, phone, hours, customer, items, totals, QR code)
2. Open `window.open('', '_blank')`
3. If blocked: alert user
4. Write HTML, close document
5. On load: focus, setTimeout 250ms, then `print()`
6. `onafterprint`: close window
7. QR code URL: `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(mapLink)}`
8. escapeHtml() for customerName, customerPhone (XSS safety)

### 8.6 handleSendWhatsApp()
1. Validate customerPhone (min 10 digits)
2. Normalize: 10 digits → prepend 91
3. `wa.me/${number}?text=${encodeURIComponent(generateBillText())}`
4. Opens in new tab
5. Button disabled if cart empty OR customerPhone empty

### 8.7 Generate Bill (clipboard)
Copies `generateBillText()` to clipboard, shows alert.

---

## 9. CSS Classes to Include

### 9.1 btn-neon-chip (Add Service button)
- Gradient border, dark inner, hover lift
- See index.css lines ~552–631

### 9.2 billing-service-card
- Hover: lift, gold border, color-shifting gradient background inside
- Animation: billingCardIn, billingCardColorShift

### 9.3 billing-cart-item
- Slide-in animation, hover background

### 9.4 billing-panel
- Dark background, scrollbar styling

### 9.5 billing-total-amount
- Pulse animation on change

### 9.6 billing-empty-state
- Subtle pulse when cart empty

### 9.7 about-card-gold-border
- Gold gradient border, shimmer animation
- about-card-gold-border-inner: white/dark inner

---

## 10. Print Receipt HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>Aniq Salon - Receipt</title>
  <style>
    /* Print-optimized styles */
    body { font-family: 'Segoe UI', system-ui; padding: 28px; max-width: 420px; margin: 0 auto; }
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    @media print { .no-print { display: none !important; } }
  </style>
</head>
<body>
  <div class="receipt">
    <header>Logo, ANIQ SALON, tagline, date, Receipt #</header>
    <div class="salon-info">Address, phone, hours</div>
    <div class="customer">Customer name, phone (if provided)</div>
    <div class="items">Cart rows</div>
    <div class="totals">Subtotal, Tax, TOTAL</div>
    <div class="qr-section">QR code image, "Scan for directions"</div>
    <p class="thanks">Thank you message</p>
    <p class="pdf-tip">Tip: Save as PDF</p>
    <button class="print-btn no-print" onclick="window.print()">Print Receipt</button>
  </div>
</body>
</html>
```

---

## 11. Suggested New Project Structure

```
aniq-pos/                    # or aniq-billing
├── public/
│   └── aniq-logo-badge.svg
├── src/
│   ├── data/
│   │   └── siteData.js      # contactInfo, workingHours, menuPricing, categoryLabels, categoryIcons
│   ├── components/          # optional: extract BillingPanel, ServiceList
│   ├── pages/
│   │   └── Billing.jsx      # main page (all logic)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Tailwind + billing-specific styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js       # if needed
```

---

## 12. Assets Needed

- `aniq-logo-badge.svg` in `/public` (for print receipt)
- Copy full `menuPricing` from siteData.js (all categories and items)

---

## 13. Deployment

- Build: `npm run build`
- Deploy to subdomain: e.g. `pos.aniqsalon.com` or `billing.aniqsalon.com`
- Optional: Add basic auth or password protection for staff-only access

---

## 14. Differences from Main Site

The standalone app should:
- Have **minimal or no navigation** (single-page billing)
- Use a **simple header** (e.g. "Aniq Salon – Billing")
- **No** Book Appointment link (or link to main site)
- **No** gallery, pricing, about, contact pages
- Can use a **lighter/different theme** if desired (e.g. POS-focused dark mode)

---

*Document generated from Aniq Salon main website billing implementation. Use this to recreate the billing app as a separate project.*
