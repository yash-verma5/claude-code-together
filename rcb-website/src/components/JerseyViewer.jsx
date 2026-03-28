import { useState, useRef, useCallback, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function JerseyViewer() {
  const [customName, setCustomName] = useState('KOHLI')
  const [customNumber, setCustomNumber] = useState('18')
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startRotation, setStartRotation] = useState(0)
  const [activeView, setActiveView] = useState('front')

  const containerRef = useRef(null)
  const jerseyRef = useRef(null)
  const headerRef = useRef(null)
  const controlsRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
      }
    )
    gsap.fromTo(jerseyRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, delay: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
      }
    )
    gsap.fromTo(controlsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 65%' }
      }
    )
  }, { scope: containerRef })

  const handlePointerDown = useCallback((e) => {
    setIsDragging(true)
    setStartX(e.clientX || e.touches?.[0]?.clientX || 0)
    setStartRotation(rotation)
  }, [rotation])

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0
    const delta = (clientX - startX) * 0.5
    setRotation(startRotation + delta)
    const normalized = (((startRotation + delta) % 360) + 360) % 360
    if (normalized < 60 || normalized > 300) setActiveView('front')
    else if (normalized > 120 && normalized < 240) setActiveView('back')
    else setActiveView('side')
  }, [isDragging, startX, startRotation])

  const handlePointerUp = useCallback(() => setIsDragging(false), [])

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  const snapTo = (view) => {
    const targets = { front: 0, side: 90, back: 180 }
    gsap.to({ val: rotation }, {
      val: targets[view], duration: 0.8, ease: 'power3.out',
      onUpdate: function () { setRotation(this.targets()[0].val) }
    })
    setActiveView(view)
  }

  // Shared SVG patterns
  const LightningPattern = ({ id }) => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 520" preserveAspectRatio="none">
      <defs>
        <pattern id={id} x="0" y="0" width="40" height="60" patternUnits="userSpaceOnUse">
          <path d="M20 0 L14 22 L24 18 L16 60" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" fill="none" />
          <path d="M35 10 L30 28 L37 26 L32 50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )

  return (
    <section ref={containerRef} className="relative py-28 md:py-36 bg-rcb-black overflow-hidden">
      {/* Dot matrix bg */}
      <div className="dot-matrix-bg absolute inset-0 pointer-events-none" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rcb-red/[0.03] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-[#0a1628]/50 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div ref={headerRef} className="text-center mb-14 px-6 relative z-10">
        <span className="font-dot text-rcb-gold/50 text-[10px] tracking-[0.5em] uppercase mb-3 block"
          style={{ textShadow: '0 0 6px rgba(200,169,94,0.3)' }}
        >
          2026 Official Match Kit
        </span>
        <h2 className="font-dot text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white leading-tight"
          style={{ textShadow: '0 0 15px rgba(255,255,255,0.1)' }}
        >
          YOUR JERSEY
        </h2>
        <p className="text-white/20 text-xs md:text-sm font-sans mt-4 max-w-sm mx-auto tracking-wide">
          Drag to rotate &middot; Customize with your name
        </p>
      </div>

      {/* 3D Jersey Viewer */}
      <div
        ref={jerseyRef}
        className="relative z-10 flex flex-col items-center"
        onPointerDown={handlePointerDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}
      >
        <div className="relative w-[280px] h-[380px] md:w-[340px] md:h-[460px] lg:w-[380px] lg:h-[520px]"
          style={{ perspective: '1200px' }}
        >
          <div className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d', transform: `rotateY(${rotation}deg)` }}
          >
            {/* ============ FRONT FACE ============ */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.08]"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="w-full h-full relative">
                {/* Navy to Scarlet gradient — matching Puma 2026 */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#1a1040] via-40% via-[#5c0a1a] to-[#C8001E]" />

                {/* Lightning jacquard pattern */}
                <LightningPattern id="front-lightning" />

                {/* Side panels — darker navy */}
                <div className="absolute top-0 left-0 w-[12%] h-full bg-gradient-to-r from-[#060e1e] to-transparent" />
                <div className="absolute top-0 right-0 w-[12%] h-full bg-gradient-to-l from-[#060e1e] to-transparent" />

                {/* Shoulder seam lines */}
                <div className="absolute top-[12%] left-[12%] right-[12%] h-px bg-white/[0.06]" />

                {/* Zipper collar — half zip */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[10%] rounded-b-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-[#060e1e] to-[#0a1628] border-b border-white/[0.06]" />
                  {/* Zip line */}
                  <div className="absolute top-[20%] left-1/2 -translate-x-[0.5px] w-[2px] h-[80%] bg-gradient-to-b from-rcb-gold/40 to-rcb-gold/10" />
                  {/* Zip pull */}
                  <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-2 h-3 bg-rcb-gold/30 rounded-sm" />
                </div>

                {/* Gold championship star */}
                <div className="absolute top-[13%] left-1/2 -translate-x-1/2">
                  <span className="text-rcb-gold text-base drop-shadow-[0_0_8px_rgba(200,169,94,0.5)]">&#9733;</span>
                </div>

                {/* RCB crest */}
                <div className="absolute top-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-rcb-gold/30 flex items-center justify-center bg-[#0a1628]/60 backdrop-blur-sm">
                    <span className="font-serif text-sm md:text-base font-black text-white tracking-tight">
                      RCB
                    </span>
                  </div>
                </div>

                {/* Puma logo (right chest) */}
                <div className="absolute top-[18%] right-[18%]">
                  <div className="w-6 h-6 opacity-30">
                    <svg viewBox="0 0 24 24" fill="white">
                      <path d="M21.5 12.5c-1 1-3 0.5-4-0.5s-2-3-3.5-3.5c-1.5-0.5-3 1-4 2s-2.5 2.5-4 2.5-3.5-1-4-2c0 0 1.5 4 4 4s3.5-2 5-3 2.5-1.5 3.5-1 1.5 2 3 3 4 0.5 4-1.5z" />
                    </svg>
                  </div>
                </div>

                {/* Sponsor area */}
                <div className="absolute top-[38%] left-1/2 -translate-x-1/2 text-center">
                  <div className="px-4 py-1 border border-white/[0.04] rounded">
                    <span className="font-dot text-white/15 text-[7px] tracking-[0.4em] uppercase">Sponsor</span>
                  </div>
                </div>

                {/* Jersey number (small on front) */}
                <div className="absolute top-[52%] left-1/2 -translate-x-1/2">
                  <span className="font-serif text-lg md:text-xl font-black text-white/20">
                    {customNumber || '18'}
                  </span>
                </div>

                {/* Bottom hem gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-gradient-to-t from-[#060e1e] to-transparent" />

                {/* Dot matrix texture overlay */}
                <div className="absolute inset-0 dot-matrix-bg opacity-10 pointer-events-none" />
              </div>
            </div>

            {/* ============ BACK FACE ============ */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.08]"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="w-full h-full relative">
                {/* Same gradient as front */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#1a1040] via-40% via-[#5c0a1a] to-[#C8001E]" />

                {/* Lightning pattern */}
                <LightningPattern id="back-lightning" />

                {/* Side panels */}
                <div className="absolute top-0 left-0 w-[12%] h-full bg-gradient-to-r from-[#060e1e] to-transparent" />
                <div className="absolute top-0 right-0 w-[12%] h-full bg-gradient-to-l from-[#060e1e] to-transparent" />

                {/* Collar back */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[7%] bg-gradient-to-b from-[#060e1e] to-[#0a1628] rounded-b-lg border-b border-white/[0.04]" />

                {/* Custom Number — big */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <span className="font-serif text-7xl md:text-8xl lg:text-[110px] font-black text-white leading-none"
                    style={{
                      textShadow: '0 0 30px rgba(255,255,255,0.15), 0 4px 8px rgba(0,0,0,0.5)',
                      WebkitTextStroke: '1px rgba(255,255,255,0.8)',
                    }}
                  >
                    {customNumber || '18'}
                  </span>
                </div>

                {/* Custom Name */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[75%] text-center">
                  <span className="font-serif text-lg md:text-xl lg:text-2xl font-black text-white uppercase tracking-[0.2em]"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                  >
                    {customName || 'YOUR NAME'}
                  </span>
                  <div className="w-full h-px bg-white/15 mt-2" />
                </div>

                {/* RCB small crest back */}
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2">
                  <span className="font-dot text-white/10 text-[8px] tracking-[0.3em] uppercase">RCB</span>
                </div>

                {/* Bottom hem */}
                <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-gradient-to-t from-[#060e1e] to-transparent" />

                {/* Dot matrix overlay */}
                <div className="absolute inset-0 dot-matrix-bg opacity-10 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Shadow / reflection */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[50%] h-6 bg-rcb-red/8 blur-xl rounded-full" />
        </div>

        {/* Drag hint */}
        <div className="mt-6 flex items-center gap-2 text-white/15">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          <span className="font-dot text-[9px] tracking-[0.3em] uppercase">Drag to rotate</span>
        </div>
      </div>

      {/* View Buttons */}
      <div className="flex justify-center gap-2 mt-5 relative z-10">
        {['front', 'side', 'back'].map((view) => (
          <button
            key={view}
            onClick={() => snapTo(view)}
            className={`font-dot px-4 py-2 rounded-full text-[9px] tracking-[0.2em] uppercase border transition-all duration-300 ${
              activeView === view
                ? 'border-rcb-red/40 text-white bg-rcb-red/10 shadow-[0_0_12px_rgba(228,0,43,0.15)]'
                : 'border-white/[0.06] text-white/20 hover:text-white/40 hover:border-white/10'
            }`}
          >
            {view}
          </button>
        ))}
      </div>

      {/* Customization */}
      <div ref={controlsRef} className="relative z-10 max-w-md mx-auto mt-10 px-6">
        <div className="p-6 md:p-8 rounded-2xl glass-panel">
          <h4 className="font-dot text-white/25 text-[9px] tracking-[0.4em] uppercase mb-6 text-center"
            style={{ textShadow: '0 0 6px rgba(255,255,255,0.1)' }}
          >
            Personalize Your Kit
          </h4>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-1.5">
              <label className="font-dot text-white/15 text-[8px] tracking-[0.3em] uppercase ml-1">Name</label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value.toUpperCase().slice(0, 14))}
                maxLength={14}
                placeholder="YOUR NAME"
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm font-serif font-bold tracking-wider focus:ring-1 focus:ring-rcb-red/40 focus:border-rcb-red/20 transition-all duration-300 placeholder-white/10 outline-none uppercase"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-dot text-white/15 text-[8px] tracking-[0.3em] uppercase ml-1">No.</label>
              <input
                type="text"
                value={customNumber}
                onChange={(e) => setCustomNumber(e.target.value.replace(/\D/g, '').slice(0, 2))}
                maxLength={2}
                placeholder="00"
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm font-serif font-bold tracking-wider text-center focus:ring-1 focus:ring-rcb-red/40 focus:border-rcb-red/20 transition-all duration-300 placeholder-white/10 outline-none"
              />
            </div>
          </div>

          {/* Quick select */}
          <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
            {[
              { name: 'KOHLI', num: '18' },
              { name: 'PATIDAR', num: '7' },
              { name: 'SALT', num: '55' },
              { name: 'HAZLEWOOD', num: '38' },
              { name: 'BETHELL', num: '23' },
              { name: 'TIM DAVID', num: '8' },
            ].map((p) => (
              <button
                key={p.name}
                onClick={() => { setCustomName(p.name); setCustomNumber(p.num) }}
                className="font-dot px-3 py-1.5 rounded-full text-[8px] tracking-[0.15em] uppercase border border-white/[0.05] text-white/20 hover:text-white hover:border-rcb-red/25 hover:bg-rcb-red/5 hover:shadow-[0_0_10px_rgba(228,0,43,0.1)] transition-all duration-300"
              >
                {p.name} #{p.num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
