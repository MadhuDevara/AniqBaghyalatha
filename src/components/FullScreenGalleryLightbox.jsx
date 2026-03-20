import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const categoryLabel = (category) => {
  if (!category) return ''
  if (category === 'Haircuts') return 'Haircut'
  if (category === 'Salon Interior') return 'Interior'
  return category
}

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

function getFocusableElements(root) {
  if (!root) return []
  return Array.from(root.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el) => {
    if (!(el instanceof HTMLElement)) return false
    if (el.closest('[aria-hidden="true"]')) return false
    const r = el.getBoundingClientRect()
    return r.width > 0 && r.height > 0
  })
}

const SWIPE_MIN_PX = 44
const SWIPE_MAX_VERTICAL_RATIO = 1.15

function FullScreenGalleryLightbox({
  items,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
  onFirst,
  onLast,
  totalCount,
}) {
  const titleId = useId()
  const descId = useId()
  const liveId = useId()
  const closeButtonRef = useRef(null)

  const selectedItem = useMemo(() => items?.[selectedIndex] ?? null, [items, selectedIndex])
  const [slideDir, setSlideDir] = useState('left')
  const touchStartXRef = useRef(null)
  const touchStartYRef = useRef(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const zoomLevelRef = useRef(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const isDraggingRef = useRef(false)
  const overlayRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const isFullscreenRef = useRef(false)
  const didEnterBrowserFullscreenRef = useRef(false)

  const panRef = useRef(pan)
  useEffect(() => {
    panRef.current = pan
  }, [pan])

  useEffect(() => {
    isFullscreenRef.current = isFullscreen
  }, [isFullscreen])

  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) didEnterBrowserFullscreenRef.current = false
    }
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  const dragStartRef = useRef(null)
  const touchPanStartRef = useRef(null)

  const clampZoom = (z) => Math.max(1, Math.min(3, z))

  const resetZoomAndPan = () => {
    setZoomLevel(1)
    setPan({ x: 0, y: 0 })
    setIsDragging(false)
    isDraggingRef.current = false
    dragStartRef.current = null
    touchPanStartRef.current = null
  }

  useEffect(() => {
    resetZoomAndPan()
  }, [selectedIndex])

  useEffect(() => {
    if (zoomLevel <= 1) {
      setPan({ x: 0, y: 0 })
      setIsDragging(false)
      isDraggingRef.current = false
      dragStartRef.current = null
    }
  }, [zoomLevel])

  useEffect(() => {
    zoomLevelRef.current = zoomLevel
  }, [zoomLevel])

  useEffect(() => {
    if (!Array.isArray(items) || items.length < 2) return undefined
    const len = items.length
    const prevIndex = (selectedIndex - 1 + len) % len
    const nextIndex = (selectedIndex + 1) % len
    if (items[prevIndex]?.image) {
      const img = new Image()
      img.src = items[prevIndex].image
    }
    if (items[nextIndex]?.image) {
      const img = new Image()
      img.src = items[nextIndex].image
    }
    return undefined
  }, [items, selectedIndex])

  useEffect(() => {
    if (!selectedItem) return undefined

    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow

    const headerEls = Array.from(document.querySelectorAll('header'))
    const prevHeaderDisplays = headerEls.map((el) => el.style.display)

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    headerEls.forEach((el) => el.style.setProperty('display', 'none', 'important'))

    const handleKeyDown = (event) => {
      const overlay = overlayRef.current
      const focusInside = overlay?.contains(document.activeElement)

      if (event.key === 'Tab' && overlay && focusInside) {
        const list = getFocusableElements(overlay)
        if (list.length === 0) return
        const first = list[0]
        const last = list[list.length - 1]
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault()
            last.focus()
          }
        } else if (document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
        return
      }

      if (event.key === 'Escape') {
        if (isFullscreenRef.current || document.fullscreenElement) {
          setIsFullscreen(false)
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {})
          }
          return
        }
        onClose()
        return
      }

      if (event.key === 'f' || event.key === 'F') {
        event.preventDefault()
        const next = !isFullscreenRef.current
        setIsFullscreen(next)
        if (next) {
          overlayRef.current
            ?.requestFullscreen?.()
            .then(() => {
              didEnterBrowserFullscreenRef.current = true
            })
            .catch(() => {
              didEnterBrowserFullscreenRef.current = false
            })
        } else if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {})
        }
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setSlideDir('left')
        onPrev()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setSlideDir('right')
        onNext()
      }
      if (event.key === 'Home' && onFirst) {
        event.preventDefault()
        setSlideDir('left')
        onFirst()
      }
      if (event.key === 'End' && onLast) {
        event.preventDefault()
        setSlideDir('right')
        onLast()
      }
    }

    const focusClose = () => {
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus()
      })
    }
    focusClose()

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevBodyOverflow || 'auto'
      document.documentElement.style.overflow = prevHtmlOverflow
      headerEls.forEach((el, idx) => {
        el.style.setProperty('display', prevHeaderDisplays[idx] || '')
      })
    }
  }, [onClose, onFirst, onLast, onNext, onPrev, selectedItem])

  if (!selectedItem) return null

  const goPrev = () => {
    setSlideDir('left')
    onPrev()
  }

  const goNext = () => {
    setSlideDir('right')
    onNext()
  }

  const zoomBy = (delta) => {
    setZoomLevel((z) => {
      const next = clampZoom(z + delta)
      return next
    })
  }

  const handleWheelZoom = (event) => {
    if (event.target instanceof Element && event.target.closest('button')) return
    event.preventDefault()
    const delta = event.deltaY > 0 ? -0.25 : 0.25
    zoomBy(delta)
  }

  const toggleDoubleClickZoom = () => {
    const next = zoomLevelRef.current <= 1 ? 2 : 1
    setZoomLevel(next)
    setPan({ x: 0, y: 0 })
    setIsDragging(false)
    isDraggingRef.current = false
    dragStartRef.current = null
    touchPanStartRef.current = null
  }

  const panEnabled = zoomLevel > 1

  const defaultCopy =
    'Use arrow keys to move between photos, Home and End for first and last, F for fullscreen. Swipe left or right when not zoomed.'

  const descriptionText =
    typeof selectedItem.caption === 'string' && selectedItem.caption.trim()
      ? selectedItem.caption
      : defaultCopy

  const positionLabel =
    totalCount > 0 ? `Image ${selectedIndex + 1} of ${totalCount}` : `Image ${selectedIndex + 1}`

  const overlay = (
    <div
      ref={overlayRef}
      className={`lightbox ${isFullscreen ? 'fullscreen' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      onClick={onClose}
    >
      <div
        id={liveId}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {selectedItem.title}. {positionLabel}.
      </div>

      <div className={`viewer ${isFullscreen ? 'fullscreen' : ''}`}>
        <div className="nav-left">
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M14.5 6.5L9 12l5.5 5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          aria-label="Previous image"
          className="nav-left-btn"
          onClick={(e) => {
            e.stopPropagation()
            goPrev()
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M14.5 6.5L9 12l5.5 5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="image-center"
          onClick={(e) => e.stopPropagation()}
          onWheel={handleWheelZoom}
          onPointerDown={(e) => {
            e.stopPropagation()
            if (!panEnabled) return
            if (e.target instanceof Element && e.target.closest('button')) return

            isDraggingRef.current = true
            setIsDragging(true)
            const start = {
              clientX: e.clientX,
              clientY: e.clientY,
              panX: panRef.current.x,
              panY: panRef.current.y,
            }
            dragStartRef.current = start
          }}
          onPointerMove={(e) => {
            if (!panEnabled) return
            if (!isDraggingRef.current) return
            if (!dragStartRef.current) return

            const dx = e.clientX - dragStartRef.current.clientX
            const dy = e.clientY - dragStartRef.current.clientY
            setPan({ x: dragStartRef.current.panX + dx, y: dragStartRef.current.panY + dy })
          }}
          onPointerUp={(e) => {
            e.stopPropagation()
            if (!panEnabled) return
            isDraggingRef.current = false
            setIsDragging(false)
            dragStartRef.current = null
          }}
          onPointerCancel={() => {
            if (!panEnabled) return
            isDraggingRef.current = false
            setIsDragging(false)
            dragStartRef.current = null
          }}
          onTouchStart={(e) => {
            if (panEnabled) {
              const t = e.touches[0]
              touchPanStartRef.current = t
                ? {
                    clientX: t.clientX,
                    clientY: t.clientY,
                    panX: panRef.current.x,
                    panY: panRef.current.y,
                  }
                : null
              return
            }
            const t0 = e.touches[0]
            touchStartXRef.current = t0?.clientX ?? null
            touchStartYRef.current = t0?.clientY ?? null
          }}
          onTouchMove={(e) => {
            if (!panEnabled) return
            if (!touchPanStartRef.current) return
            const t = e.touches[0]
            if (!t) return
            const dx = t.clientX - touchPanStartRef.current.clientX
            const dy = t.clientY - touchPanStartRef.current.clientY
            setPan({ x: touchPanStartRef.current.panX + dx, y: touchPanStartRef.current.panY + dy })
          }}
          onTouchEnd={(e) => {
            if (panEnabled) {
              touchPanStartRef.current = null
              return
            }

            const startX = touchStartXRef.current
            const startY = touchStartYRef.current
            const endX = e.changedTouches[0]?.clientX ?? null
            const endY = e.changedTouches[0]?.clientY ?? null
            touchStartXRef.current = null
            touchStartYRef.current = null
            if (startX === null || endX === null || startY === null || endY === null) return
            const dx = endX - startX
            const dy = endY - startY
            if (Math.abs(dx) < SWIPE_MIN_PX) return
            if (Math.abs(dy) * SWIPE_MAX_VERTICAL_RATIO > Math.abs(dx)) return
            if (dx > 0) goPrev()
            else goNext()
          }}
        >
          <div
            className={`lightbox-slide-wrapper ${
              slideDir === 'left' ? 'lightbox-slide-left' : 'lightbox-slide-right'
            }`}
          >
            <img
              key={`${selectedItem.title}-${selectedIndex}`}
              src={selectedItem.image}
              alt={selectedItem.title}
              draggable={false}
              loading="eager"
              className="lightbox-image"
              onDoubleClick={(ev) => {
                ev.stopPropagation()
                ev.preventDefault()
                toggleDoubleClickZoom()
              }}
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
                transition: isDragging ? 'none' : 'transform 0.25s ease',
                transformOrigin: 'center center',
                cursor: panEnabled ? (isDragging ? 'grabbing' : 'grab') : 'default',
              }}
            />
          </div>
        </div>

        <div className="right-panel">
          <p className="lightbox-position" aria-hidden="true">
            {positionLabel}
          </p>
          <h3 id={titleId} className="lightbox-title">
            {selectedItem.title}
          </h3>
          <p className="lightbox-category">{categoryLabel(selectedItem.category)}</p>
          <p id={descId} className="lightbox-description">
            {descriptionText}
          </p>
        </div>

        <div className="nav-right">
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M9.5 6.5L15 12l-5.5 5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="close-left">
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close gallery"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M18 6L6 18M6 6l12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className="top-controls"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button
          type="button"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          onClick={(e) => {
            e.stopPropagation()
            const next = !isFullscreenRef.current
            didEnterBrowserFullscreenRef.current = false
            setIsFullscreen(next)
            if (next) {
              overlayRef.current
                ?.requestFullscreen?.()
                .then(() => {
                  didEnterBrowserFullscreenRef.current = true
                })
                .catch(() => {
                  didEnterBrowserFullscreenRef.current = false
                })
            } else if (document.fullscreenElement) {
              didEnterBrowserFullscreenRef.current = false
              document.exitFullscreen().catch(() => {})
            }
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Zoom out"
          onClick={(e) => {
            e.stopPropagation()
            zoomBy(-0.25)
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M6 12h12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Zoom in"
          onClick={(e) => {
            e.stopPropagation()
            zoomBy(0.25)
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M12 6v12M6 12h12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}

export default FullScreenGalleryLightbox
