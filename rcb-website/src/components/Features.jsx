import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import rcb2008 from '../assets/rcb_2008.png'
import rcb2016 from '../assets/rcb_2016.png'
import rcb2023 from '../assets/rcb_2023.png'
import rcb2024 from '../assets/rcb_2024.png'

gsap.registerPlugin(ScrollTrigger)

const eras = [
  { year: '2008', title: 'The Inception', description: 'Born in fire and christened in Bangalore. The Royal Challengers took the field, introducing a brand of cricket defined by sheer passion and an unyielding spirit.', image: rcb2008, num: '01' },
  { year: '2011—2016', title: 'Era of the Titans', description: 'Virat Kohli, Chris Gayle, and AB de Villiers formed the most feared batting trio in T20 history. Records shattered, stadiums roared, and the "Play Bold" philosophy was cemented.', image: rcb2016, num: '02' },
  { year: '2017—2023', title: 'The Fortress', description: 'Through triumph and heartbreak, the M. Chinnaswamy stadium stood as an impenetrable fortress. The Bold Army proved why they are the greatest fans in the world.', image: rcb2023, num: '03' },
  { year: '2024', title: 'Glory At Last', description: 'Sixteen years of belief paid off. The dream turned into destiny as Royal Challengers Bangalore lifted the trophy, validating the faith of millions who chanted "Ee Sala Cup Namde".', image: rcb2024, num: '04' },
]

export default function Features() {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      '.chronicle-header',
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    )

    gsap.fromTo(
      '.chronicle-sub',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="features" className="relative w-full bg-rcb-black">

      {/* Intro Header */}
      <div className="h-[60vh] flex flex-col items-center justify-center px-6 gap-4">
        <span className="chronicle-sub text-white/20 text-[10px] tracking-[0.5em] uppercase font-sans font-bold">
          Our Journey
        </span>
        <h2 className="chronicle-header font-serif text-[10vw] md:text-[7vw] font-black uppercase tracking-tighter text-white leading-[0.85] text-center">
          THE <span className="text-rcb-red">CHRONICLE</span>
        </h2>
        <div className="chronicle-sub w-12 h-px bg-rcb-gold/30 mt-2" />
      </div>

      {/* Stacked Sticky Cards */}
      <div className="relative w-full">
        {eras.map((era, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-20"
            style={{
              zIndex: index,
              backgroundImage: `url(${era.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-rcb-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-rcb-black via-transparent to-rcb-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-rcb-black/40 via-transparent to-rcb-black/40" />

            {/* Dot matrix overlay for professional texture */}
            <div className="absolute inset-0 dot-matrix-bg opacity-15 pointer-events-none" />

            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Era number */}
            <div className="absolute top-8 right-8 md:top-12 md:right-16">
              <span className="text-white/8 font-serif text-8xl md:text-9xl font-black">{era.num}</span>
            </div>

            <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Year & Title */}
              <div className="flex flex-col">
                <span className="text-rcb-red/40 text-[10px] tracking-[0.5em] uppercase font-sans font-bold mb-4">
                  Chapter {era.num}
                </span>
                <span
                  className="font-serif text-[13vw] md:text-[7vw] font-black leading-[0.8] tracking-tighter text-transparent"
                  style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.7)' }}
                >
                  {era.year}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tighter mt-4">
                  {era.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="text-white/50 text-base md:text-xl lg:text-2xl font-light leading-relaxed">
                  {era.description}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-rcb-gold/40" />
                  <span className="text-rcb-gold/40 text-[10px] tracking-[0.3em] uppercase font-sans">
                    {era.year}
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
