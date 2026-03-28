import rcbHero from '../assets/rcb-hero.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-rcb-black bg-noise overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rcb-red/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Epic Centered Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="reveal inline-flex items-center gap-3 px-5 py-2.5 border border-rcb-gold/30 rounded-full mb-10">
          <span className="w-2 h-2 rounded-full bg-rcb-red animate-pulse-glow" />
          <span className="text-rcb-gold text-xs tracking-[0.3em] uppercase font-sans font-medium">
            Est. 2008 — Indian Premier League
          </span>
        </div>

        {/* Headline - Monumental, Uppercase Serif */}
        <h1 className="reveal reveal-delay-1 font-serif text-6xl md:text-8xl lg:text-[140px] font-black uppercase leading-[0.85] tracking-tight mb-8">
          <span className="text-rcb-cream block">WHERE</span>
          <span className="text-gradient-red block tracking-tighter">LEGACY</span>
          <span className="text-rcb-cream block mt-2 relative">
            MEETS <span className="text-gradient-gold">FIRE</span>
            {/* Minimalist gold accent line under headline */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-rcb-gold/80" />
          </span>
        </h1>

        <p className="reveal reveal-delay-2 text-rcb-cream/60 text-xl max-w-2xl font-light leading-relaxed mt-12 mb-14">
          Eighteen seasons of relentless passion, iconic battles, and a fortress
          called Chinnaswamy. The story of Royal Challengers Bangalore.
        </p>

        {/* Hero Media Integration (Centered below text) */}
        <div className="reveal reveal-delay-3 relative w-full max-w-3xl mb-16 group">
          <div className="absolute -inset-4 border border-rcb-gold/20 rounded-sm pointer-events-none transition-all duration-700 group-hover:border-rcb-gold/50 group-hover:-inset-6" />
          <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-rcb-red/20">
            <img
              src={rcbHero}
              alt="RCB Neo-Retro Art"
              className="w-full h-auto object-cover animate-float"
            />
            {/* Dark vignette to blend image into background */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,10,10,0.8)] pointer-events-none" />
          </div>
        </div>

        {/* Primary CTAs - High Contrast Blocks */}
        <div className="reveal reveal-delay-4 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
          <a
            href="#features"
            className="group relative flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-rcb-red to-rcb-red-deep text-white font-bold text-lg tracking-wide uppercase rounded-sm overflow-hidden shadow-[0_4px_20px_rgba(228,0,43,0.3)] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(228,0,43,0.5)] hover:-translate-y-1"
          >
            <span className="relative z-10">Start The Story</span>
            <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* Full width gold divider at very bottom */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rcb-gold/50 to-transparent" />
    </section>
  )
}
