'use client'
import { useEffect, useRef, useCallback } from 'react'

const TOTAL_FRAMES = 145
const FRAME_W = 1680
const FRAME_H = 544

export default function ScrollVideoAnimation() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const framesRef = useRef([])
  const loadedRef = useRef(0)
  const currentFrameRef = useRef(-1)
  const rafRef = useRef(null)

  // Draw a frame onto the canvas at full device-pixel resolution
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const img = framesRef.current[index]
    if (!img || !img.complete || !img.naturalWidth) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const cssW = canvas.offsetWidth
    const cssH = canvas.offsetHeight
    // Re-size canvas buffer only when needed
    if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
      canvas.width = cssW * dpr
      canvas.height = cssH * dpr
      ctx.scale(dpr, dpr)
    }
    // Cover-fill: scale image to fill canvas, centred
    const scale = Math.max(cssW / FRAME_W, cssH / FRAME_H)
    const sw = FRAME_W * scale
    const sh = FRAME_H * scale
    const sx = (cssW - sw) / 2
    const sy = (cssH - sh) / 2
    ctx.drawImage(img, sx, sy, sw, sh)
  }, [])

  const onScroll = useCallback(() => {
    const container = containerRef.current
    if (!container || loadedRef.current < 1) return
    const { top, height } = container.getBoundingClientRect()
    const vh = window.innerHeight
    // 0 when section enters from bottom, 1 when section exits at top
    // No sticky — section scrolls naturally, frames just track it
    const progress = Math.min(1, Math.max(0, (vh - top) / (vh + height)))
    const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES))
    if (frameIndex === currentFrameRef.current) return
    currentFrameRef.current = frameIndex
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex))
  }, [drawFrame])

  useEffect(() => {
    // Draw frame 0 as soon as it loads
    const priorityImg = new window.Image()
    priorityImg.src = '/video-frames/frame_0001.jpg'
    priorityImg.onload = () => {
      framesRef.current[0] = priorityImg
      loadedRef.current = 1
      currentFrameRef.current = 0
      drawFrame(0)
    }

    // Load the rest in the background
    for (let i = 2; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image()
      img.src = `/video-frames/frame_${String(i).padStart(4, '0')}.jpg`
      img.onload = () => { loadedRef.current++ }
      framesRef.current[i - 1] = img
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onScroll, drawFrame])

  return (
    // Normal element — no sticky, no tall container.
    // Maintains 1680:544 video aspect ratio naturally.
    <div ref={containerRef} className="sva-container">
      <canvas ref={canvasRef} className="sva-canvas" aria-hidden="true" />
    </div>
  )
}
