import { useEffect } from 'react'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import BottomCTA from './components/BottomCTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-rcb-black overflow-x-hidden">
      <Hero />

      {/* Gold divider */}
      <div className="px-8 md:px-20 lg:px-40">
        <hr className="gold-rule" />
      </div>

      <SocialProof />

      <div className="px-8 md:px-20 lg:px-40">
        <hr className="gold-rule" />
      </div>

      <Features />

      <BottomCTA />

      <div className="px-8 md:px-20 lg:px-40">
        <hr className="gold-rule" />
      </div>

      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
