import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 45
const PARTICLE_COLORS = [
  'rgba(212, 175, 55, 0.6)',   // gold
  'rgba(232, 212, 168, 0.5)',  // warm white
  'rgba(255, 248, 220, 0.4)',   // cornsilk
]
const MOUSE_INFLUENCE_RADIUS = 120
const MOUSE_REPEL_STRENGTH = 0.8

function ParticleBackground({ className = '', mousePos = { x: -999, y: -999 }, showOverlay = false }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef(null)
  const mouseRef = useRef(mousePos)
  mouseRef.current = mousePos

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    let particles = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      const isMobile = width < 768
      const count = isMobile ? Math.floor(PARTICLE_COUNT * 0.6) : PARTICLE_COUNT

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: 1.5 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.5,
        opacityPhase: Math.random() * Math.PI * 2,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      }))
      particlesRef.current = particles
    }

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      const mouse = mouseRef.current
      const time = Date.now() * 0.001

      ctx.clearRect(0, 0, width, height)

      particlesRef.current.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        p.x = Math.max(0, Math.min(width, p.x))
        p.y = Math.max(0, Math.min(height, p.y))

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_INFLUENCE_RADIUS && mouse.x > -100) {
          const force = (1 - dist / MOUSE_INFLUENCE_RADIUS) * MOUSE_REPEL_STRENGTH
          p.vx -= (dx / dist) * force * 0.02
          p.vy -= (dy / dist) * force * 0.02
        }
        p.vx *= 0.99
        p.vy *= 0.99

        const fadeOpacity = 0.4 + Math.sin(time + p.opacityPhase) * 0.25
        const alpha = Math.max(0.15, Math.min(0.7, p.opacity * fadeOpacity))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${alpha})`)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2)
        const glowColor = p.color.replace(/[\d.]+\)$/, `${alpha * 0.2})`)
        ctx.fillStyle = glowColor
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div
      className={`pointer-events-none ${className || 'absolute inset-0'}`}
      aria-hidden="true"
    >
      {showOverlay && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(2, 2, 8, 0.85) 0%, rgba(5, 8, 18, 0.82) 50%, rgba(3, 5, 12, 0.9) 100%)',
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ mixBlendMode: 'lighter' }}
      />
    </div>
  )
}

export default ParticleBackground
