'use client'
import { useEffect, useRef, useCallback } from 'react'

const TOTAL_FRAMES = 145

export default function ScrollVideoAnimation() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const framesRef = useRef([])
  const loadedRef = useRef(0)
  const currentFrameRef = useRef(0)
  const rafRef = useRef(null)

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const img = framesRef.current[index]
    if (!img || !img.complete || !img.naturalWidth) return
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  }, [])

  const onScroll = useCallback(() => {
    const container = containerRef.current
    if (!container || loadedRef.current < TOTAL_FRAMES) return

    const { top, height } = container.getBoundingClientRect()
    // progress 0 (top of sticky zone) → 1 (bottom of sticky zone)
    const progress = Math.min(1, Math.max(0, -top / (height - window.innerHeight)))
    const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES))

    if (frameIndex === currentFrameRef.current) return
    currentFrameRef.current = frameIndex

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex))
  }, [drawFrame])

  useEffect(() => {
    // Preload all frames
    framesRef.current = []
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image()
      const num = String(i).padStart(4, '0')
      img.src = `/video-frames/frame_${num}.jpg`
      img.onload = () => {
        loadedRef.current++
        // Draw first frame as soon as it's ready
        if (i === 1) drawFrame(0)
      }
      framesRef.current[i - 1] = img
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onScroll, drawFrame])

  return (
    // Tall container = scroll distance. 500vh gives ~6s of scroll travel.
    <div ref={containerRef} className="sva-container">
      <div className="sva-sticky">
        <canvas
          ref={canvasRef}
          width={960}
          height={304}
          className="sva-canvas"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
