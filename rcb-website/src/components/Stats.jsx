import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 16, suffix: '+', label: 'Seasons Played' },
  { value: 119, suffix: '', label: 'IPL Victories' },
  { value: 1, suffix: '', label: 'Championship Title' },
  { value: 50, suffix: 'M+', label: 'Fans Worldwide' },
]

export default function Stats() {
  const containerRef = useRef(null)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const hasAnimated = useRef(false)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true

        stats.forEach((stat, i) => {
          const counter = { val: 0 }
          gsap.to(counter, {
            val: stat.value,
            duration: 2,
            delay: i * 0.15,
            ease: 'power2.out',
            onUpdate: () => {
              setCounts(prev => {
                const next = [...prev]
                next[i] = Math.floor(counter.val)
                return next
              })
            },
          })
        })

        // Animate stat items
        gsap.fromTo(
          containerRef.current.querySelectorAll('.stat-item'),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
        )
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-rcb-black">
      {/* Dot matrix background */}
      <div className="dot-matrix-red absolute inset-0 pointer-events-none" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-rcb-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="font-dot text-white/30 text-[10px] tracking-[0.5em] uppercase"
            style={{ textShadow: '0 0 6px rgba(255,255,255,0.15)' }}
          >
            By The Numbers
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-item interactive-card flex flex-col items-center text-center opacity-0 p-6 rounded-xl border border-transparent hover:border-white/[0.04] cursor-default"
            >
              <span className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                {counts[i]}<span className="text-rcb-red">{stat.suffix}</span>
              </span>
              <div className="w-8 h-px bg-rcb-gold/40 my-4" />
              <span className="font-dot text-white/30 text-[9px] tracking-[0.2em] uppercase"
                style={{ textShadow: '0 0 4px rgba(255,255,255,0.1)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
