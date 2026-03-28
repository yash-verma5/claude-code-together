import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const formRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      }
    )

    gsap.fromTo(
      formRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    )
  }, { scope: containerRef })

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
    <section ref={containerRef} id="contact" className="relative py-32 md:py-44 bg-rcb-black overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-rcb-red/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-rcb-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <span className="text-rcb-red/60 text-[10px] tracking-[0.5em] uppercase font-sans font-bold mb-5">
            Join The Conversation
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white">
            BECOME THE <span className="text-gradient-gold">12TH MAN</span>
          </h2>
          <div className="w-12 h-px bg-rcb-gold/20 mt-6" />
        </div>

        {/* Glass Form */}
        <div ref={formRef} className="max-w-3xl mx-auto p-8 md:p-14 rounded-2xl glass-panel">
          <form onSubmit={handleSubmit} className="space-y-7 flex flex-col">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-bold ml-1">
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
                  className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-base focus:ring-1 focus:ring-rcb-gold/50 focus:border-rcb-gold/30 transition-all duration-300 placeholder-white/15 outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-bold ml-1">
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
                  className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-base focus:ring-1 focus:ring-rcb-gold/50 focus:border-rcb-gold/30 transition-all duration-300 placeholder-white/15 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-bold ml-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Share your story with the team..."
                className="w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-base focus:ring-1 focus:ring-rcb-gold/50 focus:border-rcb-gold/30 transition-all duration-300 placeholder-white/15 resize-none outline-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-6 flex justify-center">
              <button
                type="submit"
                className="group relative px-14 py-4 rounded-full overflow-hidden border border-white/10 hover:border-rcb-red/50 transition-all duration-500"
              >
                {/* Fill animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-rcb-red to-rcb-red-glow translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

                <span className="relative z-10 text-white/70 group-hover:text-white text-xs tracking-[0.3em] uppercase font-bold transition-colors duration-300">
                  {submitted ? 'Transmitted' : 'Send Dispatch'}
                </span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
