const footerLinks = {
  'The Club': ['History', 'Stadium', 'Hall of Fame', 'Trophy Room'],
  'The Team': ['Roster', 'Coaching Staff', 'Records', 'Academy'],
  'Business': ['Corporate', 'Sponsors', 'Careers', 'Press'],
  'Support': ['Contact', 'Ticketing', 'Merch FAQ', 'Terms']
}

export default function Footer() {
  return (
    <footer className="relative bg-rcb-black pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 border-t border-rcb-gold/30">
        
        {/* Top Section: Symmetric Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 text-center md:text-left mb-20">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-5">
              <h4 className="text-rcb-gold text-xs tracking-[0.3em] uppercase font-bold">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-rcb-cream/50 text-sm hover:text-rcb-gold transition-colors block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Logo centered, Socials flanking (or neatly stacked) */}
        <div className="flex flex-col items-center justify-center space-y-8 pt-10 border-t border-rcb-gold/10">
          
          <div className="font-serif text-3xl font-black text-rcb-cream uppercase tracking-[0.2em]">
            Royal Challengers <span className="text-rcb-red block text-center mt-2 tracking-[0.4em] text-sm">Bangalore</span>
          </div>

          <div className="text-rcb-cream/20 text-xs tracking-widest uppercase text-center max-w-sm">
            © 2026 RCB Tribute Website.<br />Built with 🔴 and ❤️ by Yash Verma.
          </div>

        </div>

      </div>
    </footer>
  )
}
