const partners = [
  { name: 'Jio', initials: 'JIO' },
  { name: 'Dream11', initials: 'D11' },
  { name: 'Tata', initials: 'TATA' },
  { name: 'CEAT', initials: 'CEAT' },
  { name: 'Unacademy', initials: 'UNA' },
  { name: 'Kingfisher', initials: 'KF' },
]

export default function SocialProof() {
  return (
    <section className="relative py-20 bg-rcb-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal flex flex-col items-center justify-center space-y-12">
          
          <span className="text-rcb-gold/50 text-[10px] tracking-[0.5em] uppercase font-sans font-bold">
            Powered By Champions
          </span>

          {/* Centered Logo Grid */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="group relative flex items-center justify-center min-w-[120px]"
              >
                <div className="px-8 py-5 border-y border-rcb-gold/5 transition-all duration-500 group-hover:border-rcb-gold/30">
                  <span className="font-serif text-2xl font-black text-rcb-cream/20 transition-all duration-500 group-hover:text-rcb-gold/80 tracking-widest">
                    {partner.initials}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
