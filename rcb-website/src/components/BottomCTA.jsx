import { useRef, useCallback } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BottomCTA() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const btnRef = useRef(null)
  const btnInnerRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
        }
      }
    )

    gsap.fromTo(
      btnRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'center center',
          scrub: 1,
        }
      }
    )
  }, [])

  // Magnetic button effect
  const handleMouseMove = useCallback((e) => {
    const btn = btnInnerRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out',
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    gsap.to(btnInnerRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.3)',
    })
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen bg-rcb-black flex flex-col items-center justify-center overflow-hidden">

      {/* Raw typography background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="font-serif text-[30vw] font-black uppercase tracking-tighter text-white/[0.02] leading-none text-center select-none">
          RCB
        </h2>
      </div>

      {/* Subtle glow */}
      <div className="absolute w-[500px] h-[500px] bg-rcb-red/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">

        <h2 ref={textRef} className="font-serif text-[9vw] md:text-[7vw] font-black uppercase text-white leading-[0.85] tracking-tighter text-center max-w-[90vw]">
          READY TO <br />
          <span className="text-rcb-red" style={{ textShadow: '0 0 60px rgba(228, 0, 43, 0.2)' }}>RELIVE</span><br />
          THE GLORY?
        </h2>

        <div
          ref={btnRef}
          className="mt-16 md:mt-20"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <a
            ref={btnInnerRef}
            href="#contact"
            className="group relative inline-flex items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full border border-white/10 hover:border-rcb-red/50 transition-colors duration-700 overflow-hidden"
          >
            {/* Fill effect */}
            <div className="absolute inset-0 bg-rcb-red scale-0 rounded-full transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100 origin-center" />

            {/* Glow ring on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ boxShadow: '0 0 40px rgba(228, 0, 43, 0.3), inset 0 0 40px rgba(228, 0, 43, 0.1)' }}
            />

            <span className="relative z-10 font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-white/70 group-hover:text-white transition-colors duration-500">
              Get Tickets
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
