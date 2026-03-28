const eras = [
  {
    year: '2008',
    title: 'The Inception',
    description: 'Born in fire and christened in Bangalore. The Royal Challengers took the field, introducing a brand of cricket defined by sheer passion and an unyielding spirit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    )
  },
  {
    year: '2011—2016',
    title: 'Era of the Titans',
    description: 'Virat Kohli, Chris Gayle, and AB de Villiers formed the most feared batting trio in T20 history. Records shattered, stadiums roared, and the "Play Bold" philosophy was cemented.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    )
  },
  {
    year: '2017—2023',
    title: 'The Fortress & The 12th Man',
    description: 'Through triumph and heartbreak, the M. Chinnaswamy stadium stood as an impenetrable fortress of decibels. The Bold Army proved why they are the greatest fans in the world.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    )
  },
  {
    year: '2024',
    title: 'Glory At Last',
    description: 'Sixteen years of belief paid off. The dream turned into destiny as Royal Challengers Bangalore lifted the trophy, validating the faith of millions who chanted "Ee Sala Cup Namde".',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 0 1-4.27 1.772 6.003 6.003 0 0 1-4.27-1.772" />
      </svg>
    )
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 md:py-40 bg-rcb-black bg-noise">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Monumental Section Header */}
        <div className="reveal text-center mb-28 md:mb-40 max-w-3xl mx-auto">
          <span className="text-rcb-gold text-xs tracking-[0.4em] uppercase font-sans font-medium mb-6 block">
            The Chronicle
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-rcb-cream leading-[1.1]">
            A DECADE OF <span className="text-gradient-red block">DOMINANCE</span>
          </h2>
          <div className="w-24 h-[1px] bg-rcb-gold mx-auto mt-10"></div>
        </div>

        {/* Staggered Alternating Timeline */}
        <div className="space-y-32 md:space-y-48">
          {eras.map((era, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`reveal reveal-delay-1 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}
              >
                
                {/* Media Side (Simulated large monolithic image blocks per findings) */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute -inset-4 border border-rcb-gold/10 rounded-sm pointer-events-none transition-all duration-700 group-hover:border-rcb-gold/30 group-hover:-inset-6" />
                  <div className="aspect-[4/3] w-full bg-rcb-black-card border border-rcb-gold/5 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-rcb-red-deep/10 to-transparent"></div>
                    <div className="text-rcb-gold/20 transform scale-150 transition-transform duration-700 group-hover:scale-[1.8] group-hover:opacity-50">
                      {era.icon}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                  <div className="inline-block px-4 py-1.5 border border-rcb-gold/40 text-rcb-gold text-sm tracking-widest font-mono">
                    {era.year}
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-rcb-cream">
                    {era.title}
                  </h3>
                  <p className="text-rcb-cream/50 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {era.description}
                  </p>
                  
                  {/* Subtle Narrative Link per findings */}
                  <div className="pt-4">
                    <a href="#" className="inline-flex items-center gap-2 text-rcb-gold hover:text-rcb-gold-bright transition-colors uppercase tracking-wider text-xs font-bold">
                      Explore Era <span className="text-lg leading-none">➔</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
