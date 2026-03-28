import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const lineRef = useRef(null)
  const textRef = useRef(null)
  const counterRef = useRef(null)
  const [count, setCount] = useState(0)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Exit animation
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete: onComplete,
        })
      }
    })

    // Counter animation
    const counter = { val: 0 }
    tl.to(counter, {
      val: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => setCount(Math.floor(counter.val)),
    })

    // Progress line grows
    tl.fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.2, ease: 'power2.inOut' },
      0
    )

    // Logo fades in and scales
    tl.fromTo(logoRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' },
      0.3
    )

    // Text reveals
    tl.fromTo(textRef.current,
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      0.6
    )

    // Pause for a beat then exit
    tl.to({}, { duration: 0.4 })

  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-rcb-black flex flex-col items-center justify-center"
    >
      {/* Subtle red glow */}
      <div className="absolute w-[600px] h-[600px] bg-rcb-red/5 rounded-full blur-[200px]" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo Mark */}
        <div ref={logoRef} className="flex flex-col items-center gap-2">
          <span className="font-serif text-[12vw] md:text-[6vw] font-black tracking-tighter text-white leading-none">
            RCB
          </span>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden">
          <p ref={textRef} className="text-white/40 text-xs tracking-[0.5em] uppercase font-sans">
            Play Bold
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-px bg-white/10 relative mt-4">
          <div
            ref={lineRef}
            className="absolute inset-0 bg-rcb-red origin-left"
          />
        </div>

        {/* Counter */}
        <span ref={counterRef} className="text-white/30 text-xs font-mono tracking-widest tabular-nums">
          {count}%
        </span>
      </div>
    </div>
  )
}
