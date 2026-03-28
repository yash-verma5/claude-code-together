import { useCallback, useRef } from 'react'
import gsap from 'gsap'

const footerLinks = {
  'The Club': ['History', 'Stadium', 'Hall of Fame', 'Trophy Room'],
  'The Team': ['Roster', 'Coaching Staff', 'Records', 'Academy'],
  'Business': ['Corporate', 'Sponsors', 'Careers', 'Press'],
  'Support': ['Contact', 'Ticketing', 'Merch FAQ', 'Terms']
}

export default function Footer() {
  const topBtnRef = useRef(null)

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleMouseMove = useCallback((e) => {
    const btn = topBtnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: 'power2.out' })
  }, [])

  const handleMouseLeave = useCallback(() => {
    gsap.to(topBtnRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' })
  }, [])

  return (
    <footer className="relative bg-rcb-black pb-12 overflow-hidden">

      {/* Bottom glowing anchor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-rcb-gold/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 relative z-10">

        {/* Top border */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-16" />

        {/* Back to Top */}
        <div className="flex justify-center mb-16">
          <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <button
              ref={topBtnRef}
              onClick={scrollToTop}
              className="group relative w-14 h-14 rounded-full border border-white/10 hover:border-rcb-gold/30 flex items-center justify-center transition-colors duration-500"
            >
              <svg
                className="w-4 h-4 text-white/30 group-hover:text-rcb-gold transition-colors duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 text-center mb-20 justify-items-center">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-5 flex flex-col items-center">
              <h4 className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold text-center">
                {heading}
              </h4>
              <ul className="space-y-3 flex flex-col items-center">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="link-hover text-white/25 text-sm hover:text-white/60 transition-colors duration-300 block text-center">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-center space-y-6 pt-12">
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <div className="font-serif text-2xl md:text-4xl font-black text-white/80 uppercase tracking-tighter text-center flex flex-col items-center gap-0.5">
            <span>ROYAL CHALLENGERS</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcb-gold to-rcb-gold-muted">BENGALURU</span>
          </div>

          <div className="text-white/15 text-[10px] tracking-[0.2em] uppercase text-center max-w-sm font-sans mt-2">
            &copy; 2026 RCB Tribute. Built by Yash Verma.
          </div>

        </div>

      </div>
    </footer>
  )
}
