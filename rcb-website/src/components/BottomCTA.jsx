export default function BottomCTA() {
  return (
    <section className="relative py-32 md:py-48 bg-rcb-black overflow-hidden flex items-center justify-center border-y border-rcb-gold/20">
      {/* Heavy centered background glow for focus */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-rcb-red/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <div className="reveal w-24 h-[1px] bg-rcb-gold mb-10"></div>

        <h2 className="reveal reveal-delay-1 font-serif text-5xl md:text-7xl lg:text-8xl font-black uppercase text-rcb-cream leading-[0.9] tracking-tight">
          READY TO <span className="text-gradient-red block">RELIVE</span>
          THE <span className="text-gradient-gold">GLORY?</span>
        </h2>

        <p className="reveal reveal-delay-2 text-rcb-cream/60 text-xl mt-10 font-light max-w-2xl mx-auto leading-relaxed">
          The roar of the crowd never fades. Secure your place in the legacy and experience the premium matchday magic firsthand.
        </p>

        {/* High Contrast Solid CTA Block per findings */}
        <div className="reveal reveal-delay-3 mt-14">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-rcb-gold text-rcb-black font-black text-xl tracking-widest uppercase rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(200,169,94,0.4)]"
          >
            <span className="relative z-10">GET TICKETS</span>
          </a>
        </div>

      </div>
    </section>
  )
}
