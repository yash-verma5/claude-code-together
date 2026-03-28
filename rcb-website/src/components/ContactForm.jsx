import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-rcb-black bg-noise">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Centered Section Header */}
        <div className="reveal text-center mb-16 flex flex-col items-center">
          <span className="text-rcb-red-glow text-xs tracking-[0.4em] uppercase font-sans font-bold mb-4">
            Join The Conversation
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-black uppercase tracking-tight text-rcb-cream">
            BECOME THE <span className="text-gradient-gold">12TH MAN</span>
          </h2>
        </div>

        {/* Centered Form Layout */}
        <div className="reveal reveal-delay-1 max-w-2xl mx-auto p-8 md:p-12 border border-rcb-gold/10 bg-rcb-black-card shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-rcb-cream/40 text-xs tracking-[0.2em] uppercase font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Virat Kohli"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-rcb-gold/20 text-rcb-cream text-lg focus:ring-0 focus:outline-none focus:border-rcb-gold transition-colors duration-300 placeholder-rcb-cream/10"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-rcb-cream/40 text-xs tracking-[0.2em] uppercase font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="king@rcb.com"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-rcb-gold/20 text-rcb-cream text-lg focus:ring-0 focus:outline-none focus:border-rcb-gold transition-colors duration-300 placeholder-rcb-cream/10"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-rcb-cream/40 text-xs tracking-[0.2em] uppercase font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Share your history with the team..."
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-rcb-gold/20 text-rcb-cream text-lg focus:ring-0 focus:outline-none focus:border-rcb-gold transition-colors duration-300 placeholder-rcb-cream/10 resize-none"
              />
            </div>

            {/* Submit Block (Centered) */}
            <div className="pt-8 flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-16 py-4 bg-rcb-red text-white uppercase tracking-widest font-black transition-all hover:bg-rcb-red-deep hover:shadow-[0_0_20px_rgba(228,0,43,0.5)]"
              >
                {submitted ? '✓ TRANSMITTED' : 'SEND DISPATCH'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
