import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const squad = {
  batters: [
    { name: 'Virat Kohli', role: 'Batter', number: '18' },
    { name: 'Rajat Patidar', role: 'Batter (C)', number: '7' },
    { name: 'Devdutt Padikkal', role: 'Batter', number: '5' },
    { name: 'Phil Salt', role: 'WK-Batter', number: '55' },
    { name: 'Jitesh Sharma', role: 'WK-Batter', number: '42' },
    { name: 'Jordan Cox', role: 'WK-Batter', number: '19' },
    { name: 'Satvik Deswal', role: 'Batter', number: '28' },
  ],
  allRounders: [
    { name: 'Jacob Bethell', role: 'All-Rounder', number: '23' },
    { name: 'Tim David', role: 'All-Rounder', number: '8' },
    { name: 'Krunal Pandya', role: 'All-Rounder', number: '44' },
    { name: 'Venkatesh Iyer', role: 'All-Rounder', number: '33' },
    { name: 'Romario Shepherd', role: 'All-Rounder', number: '36' },
    { name: 'Swapnil Singh', role: 'All-Rounder', number: '14' },
    { name: 'Vihaan Malhotra', role: 'All-Rounder', number: '60' },
    { name: 'Abhinandan Singh', role: 'All-Rounder', number: '72' },
  ],
  bowlers: [
    { name: 'Josh Hazlewood', role: 'Pacer', number: '38' },
    { name: 'Bhuvneshwar Kumar', role: 'Pacer', number: '15' },
    { name: 'Nuwan Thushara', role: 'Pacer', number: '9' },
    { name: 'Jacob Duffy', role: 'Pacer', number: '11' },
    { name: 'Mangesh Yadav', role: 'Pacer', number: '91' },
    { name: 'Rasikh Dar', role: 'Pacer', number: '17' },
    { name: 'Suyash Sharma', role: 'Spinner', number: '25' },
    { name: 'Vicky Ostwal', role: 'Spinner', number: '22' },
    { name: 'Kanishk Chouhan', role: 'Spinner', number: '30' },
  ],
}

const allPlayers = [...squad.batters, ...squad.allRounders, ...squad.bowlers]
const marqueeRow1 = [...allPlayers.slice(0, 12), ...allPlayers.slice(0, 12)]
const marqueeRow2 = [...allPlayers.slice(12), ...allPlayers.slice(12)]

export default function SocialProof() {
  const trackRef1 = useRef(null)
  const trackRef2 = useRef(null)
  const containerRef = useRef(null)
  const gridRef = useRef(null)

  useGSAP(() => {
    // Top marquee - scrolls left
    gsap.to(trackRef1.current, {
      xPercent: -50,
      ease: 'none',
      duration: 35,
      repeat: -1,
    })

    // Bottom marquee - scrolls right
    gsap.to(trackRef2.current, {
      xPercent: 50,
      ease: 'none',
      duration: 30,
      repeat: -1,
    })

    // Grid reveal
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          gridRef.current.querySelectorAll('.player-card'),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.03, ease: 'power3.out' }
        )
      }
    })
  }, [])

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 bg-rcb-black overflow-hidden">
      {/* Prominent dot matrix background */}
      <div className="dot-matrix-bg absolute inset-0 pointer-events-none" />

      {/* Section Header — Nothing dot matrix style */}
      <div className="text-center mb-10 px-6 relative z-10">
        <span className="dot-text text-rcb-red text-[10px] tracking-[0.5em] uppercase mb-3 block">
          IPL 2026
        </span>
        <h2 className="font-dot text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white leading-tight"
          style={{ textShadow: '0 0 15px rgba(255,255,255,0.15)' }}
        >
          THE SQUAD
        </h2>
        <div className="w-16 h-px bg-rcb-red/30 mx-auto mt-5" />
      </div>

      {/* Marquee Row 1 — visible dot-matrix names scrolling left */}
      <div className="w-full overflow-hidden flex whitespace-nowrap mb-1 relative z-10">
        <div ref={trackRef1} className="flex items-center w-max">
          {marqueeRow1.map((player, i) => (
            <div key={`t-${i}`} className="flex items-center">
              <span className="font-dot text-lg md:text-2xl lg:text-3xl text-white/30 uppercase tracking-wider px-4 md:px-6 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] cursor-default">
                {player.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-rcb-red/40 flex-shrink-0 shadow-[0_0_6px_rgba(228,0,43,0.4)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — visible dot-matrix names scrolling right */}
      <div className="w-full overflow-hidden flex whitespace-nowrap mb-14 relative z-10">
        <div ref={trackRef2} className="flex items-center w-max" style={{ transform: 'translateX(-50%)' }}>
          {marqueeRow2.map((player, i) => (
            <div key={`b-${i}`} className="flex items-center">
              <span className="font-dot text-base md:text-xl lg:text-2xl text-rcb-red/30 uppercase tracking-wider px-4 md:px-6 transition-all duration-300 hover:text-rcb-red hover:drop-shadow-[0_0_8px_rgba(228,0,43,0.5)] cursor-default">
                {player.name}
              </span>
              <span className="w-1 h-1 rounded-full bg-rcb-gold/20 flex-shrink-0 shadow-[0_0_4px_rgba(200,169,94,0.3)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Player Grid */}
      <div ref={gridRef} className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {Object.entries(squad).map(([category, players]) => (
          <div key={category} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-dot text-rcb-red/40 text-[10px] tracking-[0.3em] uppercase"
                style={{ textShadow: '0 0 6px rgba(228,0,43,0.3)' }}
              >
                {category === 'batters' ? 'Batters' : category === 'allRounders' ? 'All-Rounders' : 'Bowlers'}
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
              {players.map((player, i) => (
                <div
                  key={i}
                  className="player-card group relative p-4 rounded-lg border border-white/[0.04] bg-white/[0.015] hover:border-rcb-red/20 hover:bg-rcb-red/[0.03] transition-all duration-500 cursor-default opacity-0 overflow-hidden interactive-card"
                >
                  {/* Dot matrix micro pattern inside card */}
                  <div className="absolute inset-0 dot-matrix-bg opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-lg" />

                  <div className="relative z-10">
                    <span className="font-dot text-2xl md:text-3xl text-white/[0.06] group-hover:text-rcb-red/30 transition-colors duration-500 leading-none block"
                      style={{ textShadow: 'none' }}
                    >
                      {player.number}
                    </span>
                    <h4 className="font-serif text-sm md:text-base font-bold text-white/60 group-hover:text-white transition-colors duration-300 uppercase tracking-tight leading-tight mt-2">
                      {player.name}
                    </h4>
                    <span className="font-dot text-white/15 text-[8px] tracking-[0.2em] uppercase mt-1.5 block group-hover:text-rcb-red/40 transition-colors duration-300"
                      style={{ textShadow: '0 0 4px currentColor' }}
                    >
                      {player.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
