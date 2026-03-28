import { useState } from 'react'
import CustomCursor from './components/CustomCursor'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Stats from './components/Stats'
import Features from './components/Features'
import JerseyViewer from './components/JerseyViewer'
import BottomCTA from './components/BottomCTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <SmoothScrollProvider>
        <div className="min-h-screen bg-rcb-black overflow-x-hidden selection:bg-rcb-red selection:text-white">
          {/* Noise texture overlay */}
          <div className="noise-overlay" />

          <CustomCursor />
          <ScrollProgress />

          <Hero />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <SocialProof />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <Stats />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <Features />

          <JerseyViewer />

          <BottomCTA />

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <ContactForm />
          <Footer />
        </div>
      </SmoothScrollProvider>
    </>
  )
}

export default App
