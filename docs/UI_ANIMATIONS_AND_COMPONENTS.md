# Aniq Salon – UI Animations & Component Types

> **Share this with other projects** to reuse the same animations and UI patterns.

---

## 1. ANIMATIONS (Keyframes)

| Animation | Duration | Easing | Purpose |
|-----------|----------|--------|---------|
| `navGradientShift` | 8s | ease-in-out | Body/page background gradient shift |
| `glitterSweep` | 4s | ease-in-out | Subtle glitter overlay sweep |
| `glitterShimmer` | 6s | ease-in-out | Light shimmer overlay |
| `navDropdownOpen` | 0.25s | cubic-bezier(0.34, 1.56, 0.64, 1) | Nav dropdown open |
| `goldGlitterShine` | 3s | ease-in-out | Gold glitter on section titles |
| `glitterPulse` | 2s | ease-in-out | Pulsing glitter effect |
| `sectionTitleGradient` | 4s | ease-in-out | Section title gradient animation |
| `neonBorderRotate` | 5s | linear | Rotating neon gradient border |
| `neonGlowBreathe` | 5s | ease-in-out | Pulsing neon glow |
| `neonShineSweep` | 1.2s | ease-out | One-time shine sweep on CTA |
| `serviceCardShimmer` | 1.5s | ease-in-out | Service card shimmer |
| `serviceCardGlow` | 2.5s | ease-in-out | Service card glow |
| `serviceCardGlowRing` | 2s | ease-in-out | Service card ring glow |
| `serviceCardIconPulse` | 1.5s | ease-in-out | Service card icon pulse |
| `heroCardFloat` | 6s | ease-in-out | Hero card subtle float |
| `goldBorderShimmer` | 4s | linear | Gold border shimmer |
| `goldBorderOpacity` | 4s | ease-in-out | Gold border opacity pulse |
| `billingCardColorShift` | 3s | ease-in-out | Billing card hover gradient shift |
| `billingTotalPulse` | 0.5s | ease | Total amount pulse on change |
| `billingEmptyPulse` | 3s | ease-in-out | Empty cart subtle pulse |
| `fadeUp` | 0.6–0.9s | ease-out | Fade up on scroll/load |

---

## 2. TRANSITIONS (Common Values)

| Property | Value | Used For |
|----------|-------|----------|
| Transform + scale | `0.25s cubic-bezier(0.4, 0, 0.2, 1)` | Nav bar hover |
| Transform + bounce | `0.25–0.35s cubic-bezier(0.34, 1.56, 0.64, 1)` | Links, buttons, cards |
| Transform + lift | `0.35s cubic-bezier(0.34, 1.56, 0.64, 1)` | Cards, billing items |
| Color/opacity | `0.2–0.3s ease` | Text, backgrounds |
| Box-shadow | `0.25–0.4s ease` | Hover shadows |
| Background | `0.2–0.4s ease` | Cart items, inputs |

**Easing curves:**
- `cubic-bezier(0.34, 1.56, 0.64, 1)` – Bouncy/elastic
- `cubic-bezier(0.4, 0, 0.2, 1)` – Smooth ease
- `ease` / `ease-in-out` – Standard

---

## 3. UI COMPONENT TYPES

### 3.1 Navigation
| Class | Description |
|-------|--------------|
| `.nav-bar` | Main nav bar, scale + shadow on hover |
| `.nav-dock` | Flex container for nav links |
| `.nav-link-item` | Nav link, scale + translateY on hover |
| `.nav-dropdown` | Dropdown menu with open animation |
| `.float-dock` | Vertical floating action buttons |
| `.float-dock-item` | Individual float button, scale on hover |

### 3.2 Buttons
| Class | Description |
|-------|--------------|
| `.btn-primary` | Primary gold/amber button |
| `.btn-secondary` | Secondary outline button |
| `.btn-neon-cta` | Large neon CTA with rotating border |
| `.btn-neon-chip` | Compact neon pill button (Add Service) |
| `.hero-cta-primary` | Hero primary CTA |
| `.hero-cta-secondary` | Hero secondary CTA |

### 3.3 Cards
| Class | Description |
|-------|--------------|
| `.glass-card` | Glass-morphism card, lift on hover |
| `.hero-glass-card` | Hero section card with float animation |
| `.service-card-hover` | Service card with glow, shimmer, icon pulse |
| `.about-card-gold-border` | Card with animated gold gradient border |
| `.billing-service-card` | Billing service card, lift + color shift on hover |
| `.billing-cart-item` | Cart item row, background change on hover |
| `.pricing-card-hover` | Pricing card lift |

### 3.4 Panels & Containers
| Class | Description |
|-------|--------------|
| `.section-wrap` | Main content wrapper (92% width, max 80rem) |
| `.billing-panel` | Dark billing panel (rgba 15,23,42) |
| `.page-gradient-bg` | Full-page gradient background |

### 3.5 Typography & Labels
| Class | Description |
|-------|--------------|
| `.section-title` | Section heading |
| `.section-title-floater` | Section title with gradient + glitter |
| `.ui-label` | Small uppercase label |
| `.services-page-title` | Services page title with underline |

### 3.6 Form & Inputs
| Class | Description |
|-------|--------------|
| `.input-field` | Styled input with focus ring |

### 3.7 Hero
| Class | Description |
|-------|--------------|
| `.hero-trust-badge` | Trust badge (rating, etc.) |
| `.hero-slider-dot` | Slider dot indicator |

### 3.8 Floating / Misc
| Class | Description |
|-------|--------------|
| `.floating-call` | Floating call button |
| `.floating-whatsapp` | Floating WhatsApp button |
| `.fade-up` | Fade-up-on-scroll animation |
| `.footer-neon` | Footer neon styling |
| `.footer-neon-link` | Footer link with hover |
| `.footer-neon-badge` | Footer badge |
| `.gallery img` | Gallery image hover zoom |

### 3.9 Billing-Specific
| Class | Description |
|-------|--------------|
| `.billing-total-amount` | Total with pulse animation |
| `.billing-empty-state` | Empty cart pulse |

---

## 4. CSS VARIABLES (Theme)

```css
:root {
  --salon-bg: #5B6471;
  --salon-text: #222222;
  --salon-primary: #000000;
  --salon-primary-hover: #333333;
  --salon-hover-accent: #6b6b6b;
  --salon-hover-transparent: rgba(0, 0, 0, 0.78);
  --salon-card: #ffffff;
  --salon-nav: #1a1a1a;
}
```

---

## 5. COLOR PALETTE

| Use | Hex / Value |
|-----|-------------|
| Gold | `#d4af37` |
| Gold dark | `#b8860b`, `#c59d5f` |
| Amber | `#e8d4a8` |
| Billing panel | `rgba(15, 23, 42, 0.95)` |
| Neon cyan | `#00d4ff`, `#00a8ff` |
| Neon purple | `#a855f7`, `#b84dff` |
| Neon pink | `#ec4899`, `#ff6b9d` |
| Dark inner | `#0f172a` |

---

## 6. FONTS

```css
/* Google Fonts import */
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Montserrat:wght@500;600&family=Outfit:wght@400;500;600;700&display=swap");

/* Usage */
body { font-family: "Lora", Georgia, serif; }
h1, h2, h3, h4 { font-family: "Outfit", "Segoe UI", Arial, sans-serif; }
.nav-menu-font { font-family: "Montserrat", "Outfit", sans-serif; }
```

---

## 7. HOVER EFFECTS SUMMARY

| Element | Hover Effect |
|---------|--------------|
| Nav bar | `scale(1.005)`, stronger shadow |
| Nav link | `scale(1.18) translateY(-3px)` |
| Float dock item | `scale(1.35) translateY(-4px)` |
| Billing service card | `translateY(-6px)`, gold border, color-shift bg |
| Glass card | `translateY(-5px)`, gold border |
| Service card | Glow, shimmer, icon pulse |
| Hero card | Float animation, lift |
| Cart item | `background: rgba(255,255,255,0.08)` |
| Btn neon | `translateY(-2px) scale(1.02)`, faster border rotate |

---

## 8. ANIMATION TRIGGERS

| Trigger | Animation |
|---------|-----------|
| Page load | `fadeUp` on `.fade-up` elements |
| Hover | Most cards, buttons, links |
| Infinite loop | Background gradients, glitter, neon glow, hero float |
| State change | `billingTotalPulse` when total updates |
| Empty state | `billingEmptyPulse` when cart empty |

---

*Use this as a reference when building the billing app or any project that shares the Aniq Salon design system.*
