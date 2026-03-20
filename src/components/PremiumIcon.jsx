import React from 'react'

function SvgWrapper({ children, size, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

function PremiumIcon({ name, size = 18, className = '' }) {
  const common = {
    width: '100%',
    height: '100%',
    viewBox: '0 0 24 24',
  }

  const icons = {
    // UI / ratings
    star: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradStar" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="55%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <filter id="soft3d" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(212,175,55,0.45)" />
            </filter>
          </defs>
          <path
            d="M12 2.4l2.7 6.2 6.7.6-5.1 4.3 1.6 6.5L12 16.8 6.1 20l1.6-6.5L2.6 9.2l6.7-.6L12 2.4z"
            fill="url(#gradStar)"
            filter="url(#soft3d)"
          />
          <path
            d="M12 2.4l2.7 6.2 6.7.6-5.1 4.3 1.6 6.5L12 16.8 6.1 20l1.6-6.5L2.6 9.2l6.7-.6L12 2.4z"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.6"
          />
        </svg>
      </SvgWrapper>
    ),
    heart: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradHeart" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="60%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <filter id="softHeart" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(225,29,72,0.35)" />
            </filter>
          </defs>
          <path
            d="M12.1 20.2s-7.2-4.4-9.1-8.3C1.5 8.6 3.4 6 6.2 6c1.7 0 3.2 1 3.9 2.3C10.8 7 12.3 6 14 6c2.8 0 4.7 2.6 3.2 5.9-1.9 3.9-9.1 8.3-9.1 8.3z"
            fill="url(#gradHeart)"
            filter="url(#softHeart)"
          />
          <path
            d="M12.1 20.2s-7.2-4.4-9.1-8.3C1.5 8.6 3.4 6 6.2 6c1.7 0 3.2 1 3.9 2.3C10.8 7 12.3 6 14 6c2.8 0 4.7 2.6 3.2 5.9-1.9 3.9-9.1 8.3-9.1 8.3z"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.6"
          />
        </svg>
      </SvgWrapper>
    ),

    // Location / badges
    locationPin: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradPin" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softPin" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(245,158,11,0.35)" />
            </filter>
          </defs>
          <path
            d="M12 22s7-4.9 7-12a7 7 0 10-14 0c0 7.1 7 12 7 12z"
            fill="url(#gradPin)"
            filter="url(#softPin)"
          />
          <circle cx="12" cy="10" r="2.6" fill="rgba(0,0,0,0.22)" />
          <circle cx="12" cy="10" r="2.2" fill="rgba(255,255,255,0.25)" />
        </svg>
      </SvgWrapper>
    ),
    users: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradUsers" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softUsers" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(212,175,55,0.35)" />
            </filter>
          </defs>
          <g fill="url(#gradUsers)" filter="url(#softUsers)">
            <circle cx="9" cy="9" r="3" opacity="0.95" />
            <circle cx="16.5" cy="10.2" r="2.4" opacity="0.9" />
            <path
              d="M3.7 20c.7-3.9 3.4-6 5.3-6s4.6 2.1 5.3 6H3.7z"
              opacity="0.95"
            />
            <path
              d="M12.9 20c.5-2.7 2.2-4.3 3.6-4.3 1.6 0 3.1 1.6 3.6 4.3h-7.2z"
              opacity="0.9"
            />
          </g>
        </svg>
      </SvgWrapper>
    ),

    // Home: Why choose us
    hygiene: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradHygiene" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softHygiene" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(34,197,94,0.25)" />
            </filter>
          </defs>
          <g fill="none" stroke="url(#gradHygiene)" strokeWidth="1.8" filter="url(#softHygiene)">
            <path d="M7 11c0-3 2.2-5.4 5-5.4S17 8 17 11c0 5-3 8.6-5 10-2-1.4-5-5-5-10z" />
            <circle cx="9.7" cy="10" r="1.2" fill="url(#gradHygiene)" stroke="none" />
            <path d="M6.4 19.3c1.6-1.1 3.2-1.7 4.6-1.7s3 .6 4.6 1.7" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    stylists: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradStylists" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="60%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softStylists" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(96,165,250,0.25)" />
            </filter>
          </defs>
          <g fill="none" filter="url(#softStylists)" stroke="url(#gradStylists)" strokeWidth="1.8">
            <path d="M12 4l4.2 2.3-4.2 2.3-4.2-2.3L12 4z" />
            <path d="M7.8 6.3V11c0 3-1.5 4.6-3 6" />
            <path d="M16.2 6.3V11c0 3 1.5 4.6 3 6" />
            <path d="M9 13.2c1.2 1 2.2 1.3 3 1.3s1.8-.3 3-1.3" />
            <path d="M9.2 20.2h5.6" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    premium: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradPremium" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softPremium" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(168,85,247,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softPremium)" fill="url(#gradPremium)">
            <path d="M12 2l8 6-8 14L4 8l8-6z" opacity="0.95" />
            <path d="M12 2l4.6 8L12 12 7.4 10 12 2z" opacity="0.75" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    booking: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradBooking" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="60%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softBooking" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(52,211,153,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softBooking)" fill="none" stroke="url(#gradBooking)" strokeWidth="1.8">
            <path d="M7 3v3M17 3v3" />
            <rect x="4.5" y="6.2" width="15" height="15" rx="3" />
            <path d="M4.5 10h15" />
            <path d="M8 14h3" />
            <path d="M8 17h6" />
          </g>
        </svg>
      </SvgWrapper>
    ),

    // About / Services (categories)
    scissors: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradScissors" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="55%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
            <filter id="softScissors" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(212,175,55,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softScissors)" stroke="url(#gradScissors)" strokeWidth="1.8" fill="none" strokeLinecap="round">
            <path d="M9 9l12-7" />
            <path d="M9 15l12 7" />
            <path d="M7.2 8.2l2 2" />
            <path d="M7.2 15.8l2-2" />
            <circle cx="6" cy="7" r="2" fill="url(#gradScissors)" stroke="none" />
            <circle cx="6" cy="17" r="2" fill="url(#gradScissors)" stroke="none" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    sparkles: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradSparkles" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="60%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <filter id="softSparkles" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(168,85,247,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softSparkles)" fill="url(#gradSparkles)">
            <path d="M12 2l1.4 6.1L20 12l-6.6 3.9L12 22l-1.4-6.1L4 12l6.6-3.9L12 2z" opacity="0.95" />
            <path d="M4 4l.8 2.7L8 7.5 5 8.6 4.2 11 3.4 8.6 0.4 7.5 3.2 6.7 4 4z" opacity="0.6" transform="translate(5 2)" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    facial: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradFacial" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="60%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softFacial" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(251,113,133,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softFacial)" fill="none" stroke="url(#gradFacial)" strokeWidth="1.8" strokeLinejoin="round">
            <path d="M15.5 7c-1.1-1.4-2.8-2.3-4.5-2.3S7.6 5.6 6.5 7" />
            <path d="M7 7c-1.7 1.3-2.5 3.3-2.1 5.6.7 3.9 3.6 7.4 7.1 7.4s6.4-3.5 7.1-7.4c.4-2.3-.4-4.3-2.1-5.6" />
            <path d="M13.2 12.3c-.7.7-1.3 1-2.2 1s-1.5-.3-2.2-1" strokeLinecap="round" />
            <path d="M18 4l1 2" strokeLinecap="round" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    palette: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradPalette" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softPalette" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(168,85,247,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softPalette)" fill="url(#gradPalette)">
            <path d="M12 3c5.1 0 9 3.5 9 8 0 3-2 3.5-3.5 3.5H16c-1.1 0-2 .9-2 2 0 1.8-1.4 4-3.9 4C5 20.5 3 16.5 3 12c0-4.5 4-9 9-9z" opacity="0.95" />
            <circle cx="8.3" cy="10.3" r="1.1" fill="rgba(255,255,255,0.35)" />
            <circle cx="12" cy="8.9" r="1.1" fill="rgba(255,255,255,0.35)" />
            <circle cx="15.7" cy="10.3" r="1.1" fill="rgba(255,255,255,0.35)" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    nail: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradNail" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="55%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softNail" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(168,85,247,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softNail)" fill="none" stroke="url(#gradNail)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M14 3c1 1 2 2 2 3l-1 1-3-3 1-1c0-1 1-1 1 0z" />
            <rect x="7" y="7" width="10" height="14" rx="3" fill="rgba(255,255,255,0.08)" stroke="url(#gradNail)" />
            <path d="M9 11h6" />
            <path d="M10 15h4" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    foot: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradFoot" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="55%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softFoot" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(52,211,153,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softFoot)" fill="none" stroke="url(#gradFoot)" strokeWidth="1.8" strokeLinejoin="round">
            <path d="M9 6c0 2-1.2 2.7-1.2 4.5 0 1.5.7 2.4 1.7 3.3 1.2 1.1 2.5 2.2 4.7 1.9 2-.3 3.1-2.1 3.1-4.1 0-2.5-1.8-3.6-3-4.9-1.2-1.3-1.3-1.7-1.3-3.2H9z" />
            <path d="M6 19c1.4-1 2.7-1.3 4-1.3 1.6 0 3.2.4 5 1.3" strokeLinecap="round" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    headMassage: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradHeadMassage" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softHeadMassage" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(245,158,11,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softHeadMassage)" fill="none" stroke="url(#gradHeadMassage)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 3c4.2 0 7 3 7 7 0 3.5-2 5.6-2 5.6V21H7v-5.4S5 14.5 5 10c0-4 2.8-7 7-7z" />
            <path d="M9 11h.01" />
            <path d="M15 11h.01" />
            <path d="M10 15c1.4 1 2.6 1 4 0" />
            <path d="M5.2 8.2c-1.2-.4-2-1.3-2.2-2.6" />
            <path d="M18.8 8.2c1.2-.4 2-1.3 2.2-2.6" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    steam: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradSteam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softSteam" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(96,165,250,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softSteam)" fill="none" stroke="url(#gradSteam)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M8.5 6c-1.7 2 0 3.2 0 4.8S6.8 13.6 8.5 15.6" />
            <path d="M12 6c-1.7 2 0 3.2 0 4.8s-1.7 2.8 0 4.8" />
            <path d="M15.5 6c-1.7 2 0 3.2 0 4.8s-1.7 2.8 0 4.8" />
            <path d="M7 20h10" />
            <path d="M9 16h6" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    boy: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradBoy" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="55%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softBoy" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(96,165,250,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softBoy)" fill="url(#gradBoy)">
            <circle cx="12" cy="9" r="4" opacity="0.95" />
            <path d="M4.6 21c.8-4.3 3.9-6.4 7.4-6.4s6.6 2.1 7.4 6.4H4.6z" opacity="0.9" />
          </g>
        </svg>
      </SvgWrapper>
    ),
    girl: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradGirl" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softGirl" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(251,113,133,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softGirl)" fill="url(#gradGirl)">
            <circle cx="12" cy="9" r="4" opacity="0.95" />
            <path d="M4.6 21c.8-4.3 3.9-6.4 7.4-6.4s6.6 2.1 7.4 6.4H4.6z" opacity="0.9" />
            <path d="M9.6 6.8c.6-1.2 1.4-2.1 2.4-2.1s1.8.9 2.4 2.1" opacity="0.6" />
          </g>
        </svg>
      </SvgWrapper>
    ),

    // Misc
    search: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradSearch" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="60%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <circle cx="11" cy="11" r="6.2" fill="none" stroke="url(#gradSearch)" strokeWidth="2" />
          <path d="M16.1 16.1L21 21" fill="none" stroke="url(#gradSearch)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </SvgWrapper>
    ),
    tattoo: (
      <SvgWrapper size={size} className={className}>
        <svg {...common}>
          <defs>
            <linearGradient id="gradTattoo" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="softTattoo" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(168,85,247,0.25)" />
            </filter>
          </defs>
          <g filter="url(#softTattoo)" fill="none" stroke="url(#gradTattoo)" strokeWidth="1.8" strokeLinecap="round">
            <path d="M9 4l11 11-3 3L6 7l3-3z" />
            <path d="M6 7l-2 2 2 2 2-2-2-2z" />
            <path d="M14.5 9.5l-7 7" />
            <path d="M7.5 16.5c-.8.8-1.2 1.7-1.2 2.7" />
          </g>
        </svg>
      </SvgWrapper>
    ),
  }

  return icons[name] || icons.star
}

export default PremiumIcon

