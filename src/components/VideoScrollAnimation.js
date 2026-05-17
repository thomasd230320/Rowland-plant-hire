'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

const TOTAL_FRAMES = 145
const FPS = 24

function preloadFrames(total, onProgress) {
  const images = []
  let loaded = 0
  return new Promise((resolve) => {
    for (let i = 1; i <= total; i++) {
      const img = new window.Image()
      const num = String(i).padStart(4, '0')
      img.src = `/video-frames/frame_${num}.jpg`
      img.onload = img.onerror = () => {
        loaded++
        if (onProgress) onProgress(Math.round((loaded / total) * 100))
        if (loaded === total) resolve(images)
      }
      images[i - 1] = img
    }
  })
}

export default function VideoScrollAnimation({ autoplay = true, loop = true, className = '' }) {
  const canvasRef = useRef(null)
  const framesRef = useRef([])
  const rafRef = useRef(null)
  const frameIndexRef = useRef(0)
  const lastTimeRef = useRef(null)
  const [loadProgress, setLoadProgress] = useState(0)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)

  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const img = framesRef.current[index]
    if (img && img.complete) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
  }, [])

  const animate = useCallback((timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp
    const elapsed = timestamp - lastTimeRef.current
    const frameDuration = 1000 / FPS

    if (elapsed >= frameDuration) {
      lastTimeRef.current = timestamp - (elapsed % frameDuration)
      frameIndexRef.current = (frameIndexRef.current + 1) % TOTAL_FRAMES
      if (!loop && frameIndexRef.current === 0) {
        frameIndexRef.current = TOTAL_FRAMES - 1
        drawFrame(frameIndexRef.current)
        setPlaying(false)
        return
      }
      drawFrame(frameIndexRef.current)
    }
    rafRef.current = requestAnimationFrame(animate)
  }, [drawFrame, loop])

  const start = useCallback(() => {
    if (rafRef.current) return
    lastTimeRef.current = null
    setPlaying(true)
    rafRef.current = requestAnimationFrame(animate)
  }, [animate])

  const stop = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    setPlaying(false)
  }, [])

  useEffect(() => {
    preloadFrames(TOTAL_FRAMES, setLoadProgress).then((images) => {
      framesRef.current = images
      setReady(true)
      drawFrame(0)
      if (autoplay) start()
    })
    return () => stop()
  }, [autoplay, start, stop, drawFrame])

  const togglePlay = () => (playing ? stop() : start())

  return (
    <div className={`vsa-wrap ${className}`}>
      {!ready && (
        <div className="vsa-loader">
          <div className="vsa-loader__bar" style={{ width: `${loadProgress}%` }} />
          <span className="vsa-loader__text">{loadProgress}%</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={960}
        height={304}
        className={`vsa-canvas${ready ? ' vsa-canvas--ready' : ''}`}
        onClick={togglePlay}
        title={playing ? 'Click to pause' : 'Click to play'}
      />
      {ready && (
        <button className="vsa-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>
      )}
    </div>
  )
}
