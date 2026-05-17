'use client'

// Picks every Nth frame to fill the strip — doubles up for seamless infinite scroll
const TOTAL_FRAMES = 145
const STEP = 3 // use every 3rd frame → ~48 frames in strip

function getFrames() {
  const frames = []
  for (let i = 1; i <= TOTAL_FRAMES; i += STEP) {
    frames.push(String(i).padStart(4, '0'))
  }
  return frames
}

const FRAMES = getFrames()

export default function FilmstripBanner() {
  // Duplicate for seamless loop
  const allFrames = [...FRAMES, ...FRAMES]

  return (
    <div className="filmstrip-wrap" aria-hidden="true">
      <div className="filmstrip-track">
        {allFrames.map((num, i) => (
          <img
            key={i}
            src={`/video-frames/frame_${num}.jpg`}
            alt=""
            height={120}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}
