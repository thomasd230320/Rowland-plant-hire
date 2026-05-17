'use client'
import { useEffect, useRef, useCallback } from 'react'

const TOTAL_FRAMES = 145

export default function ScrollVideoAnimation() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const framesRef = useRef([])
  const loadedRef = useRef(0)
  const currentFrameRef = useRef(-1)
  const rafRef = useRef(null)
  const dprRef = useRef(1)

  // Set up canvas at full device pixel resolution so it stays sharp
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    dprRef.current = dpr
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
    // Redraw current frame after resize
    if (framesRef.current[currentFrameRef.current]) {
      drawFrameAt(currentFrameRef.current, w, h)
    }
  }, []) // eslint-disable-line

  const drawFrameAt = useCallback((index, w, h) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const img = framesRef.current[index]
    if (!img || !img.complete || !img.naturalWidth) return
    const ctx = canvas.getContext('2d')
    const displayW = w || canvas.offsetWidth
    const displayH = h || canvas.offsetHeight
    // Cover: fill viewport keeping aspect, centred
    const scale = Math.max(displayW / img.naturalWidth, displayH / img.naturalHeight)
    const sw = img.naturalWidth * scale
    const sh = img.naturalHeight * scale
    const sx = (displayW - sw) / 2
    const sy = (displayH - sh) / 2
    ctx.clearRect(0, 0, displayW, displayH)
    ctx.drawImage(img, sx, sy, sw, sh)
  }, [])

  const onScroll = useCallback(() => {
    const container = containerRef.current
    if (!container || loadedRef.current < 1) return
    const { top, height } = container.getBoundingClientRect()
    const scrollable = height - window.innerHeight
    const progress = Math.min(1, Math.max(0, -top / scrollable))
    const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES))
    if (frameIndex === currentFrameRef.current) return
    currentFrameRef.current = frameIndex
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => drawFrameAt(frameIndex))
  }, [drawFrameAt])

  useEffect(() => {
    setupCanvas()
    const ro = new ResizeObserver(setupCanvas)
    if (canvasRef.current) ro.observe(canvasRef.current)

    // Preload frames — draw frame 0 immediately when ready
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image()
      const num = String(i).padStart(4, '0')
      img.src = `/video-frames/frame_${num}.jpg`
      img.onload = () => {
        loadedRef.current++
        if (i === 1) {
          currentFrameRef.current = 0
          drawFrameAt(0)
        }
      }
      framesRef.current[i - 1] = img
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onScroll, drawFrameAt, setupCanvas])

  return (
    // 250vh: user scrolls ~1.5 screen-heights to complete the animation
    // then the page continues normally — no long scroll trap
    <div ref={containerRef} className="sva-container">
      <div className="sva-sticky">
        <canvas ref={canvasRef} className="sva-canvas" aria-hidden="true" />
      </div>
    </div>
  )
}
