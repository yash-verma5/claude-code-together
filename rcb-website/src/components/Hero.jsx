import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import rcbHero from '../assets/rcb-cinematic-bg.png'
import rcbLogo from '../assets/rcb-logo.png'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const logoRef = useRef(null)
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const textRef3 = useRef(null)
  const scrollHintRef = useRef(null)

  useGSAP(() => {
    // Entrance Animation
    const tl = gsap.timeline()

    tl.fromTo(
      logoRef.current,
      { scale: 0.5, opacity: 0, filter: 'blur(10px)' },
      { scale: 1, opacity: 0.9, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.3 }
    )
    .fromTo(
      textRef1.current,
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
      '-=0.8'
    )
    .fromTo(
      textRef2.current,
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
      '-=0.9'
    )
    .fromTo(
      textRef3.current,
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
      '-=0.9'
    )
    .fromTo(
      imageRef.current,
      { scale: 1.3, opacity: 0 },
      { scale: 1, opacity: 0.5, duration: 2, ease: 'power3.out' },
      '-=1.5'
    )
    .fromTo(
      scrollHintRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )

    // Scroll Animation (Parallax)
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    // Only fade the scroll hint, keep logo + text persistent

    gsap.to(scrollHintRef.current, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: '5% top',
        end: '15% top',
        scrub: true,
      }
    })

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-rcb-black overflow-hidden flex flex-col justify-center">

      {/* Background Media with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="w-full h-[130%] -top-[15%] relative">
          <img
            src={rcbHero}
            alt="RCB Heritage"
            className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity"
          />
          {/* Multi-layer vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-rcb-black via-transparent to-rcb-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-rcb-black/60 via-transparent to-rcb-black/60" />
          <div className="absolute inset-0 bg-rcb-black/20" />
        </div>
      </div>

      {/* Typography */}
      <div className="relative z-10 w-full px-6 md:px-12 pointer-events-none flex flex-col justify-center items-center">

        {/* Official Team Logo */}
        <div className="mb-6 md:mb-10 overflow-hidden">
          <img
            src={rcbLogo}
            alt="Official RCB Logo"
            className="h-20 md:h-28 lg:h-36 xl:h-44 object-contain drop-shadow-[0_0_30px_rgba(228,0,43,0.3)]"
            ref={logoRef}
          />
        </div>

        <div className="overflow-hidden mb-[-1.5vw]">
          <h1
            ref={textRef1}
            className="font-serif text-[12vw] md:text-[13vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent bg-clip-text"
            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.6)' }}
          >
            ROYAL
          </h1>
        </div>

        <div className="overflow-hidden mb-[-1.5vw]">
          <h1
            ref={textRef2}
            className="font-serif text-[12vw] md:text-[13vw] font-black uppercase leading-[0.8] tracking-tighter text-rcb-red"
            style={{ textShadow: '0 0 60px rgba(228, 0, 43, 0.3)' }}
          >
            CHALLENGERS
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={textRef3}
            className="font-serif text-[12vw] md:text-[13vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent bg-clip-text"
            style={{ WebkitTextStroke: '1.5px rgba(200, 169, 94, 0.6)' }}
          >
            BENGALURU
          </h1>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div ref={scrollHintRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-sans">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent scroll-indicator" />
      </div>

    </section>
  )
}
