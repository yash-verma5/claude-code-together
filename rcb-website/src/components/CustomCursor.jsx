import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  // Track mouse position globally
  useEffect(() => {
    const moveCursor = (e) => {
      // Very slight lag for that premium weight
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      })
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  useGSAP(() => {
    if (isHovering) {
      gsap.to(cursorRef.current, {
        scale: 4,
        backgroundColor: '#FFFFFF',
        opacity: 1,
        duration: 0.3,
        ease: 'power3.out',
      })
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: '#E4002B', // RCB Red
        opacity: 0.8,
        duration: 0.3,
        ease: 'power3.out',
      })
    }
  }, [isHovering])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  )
}
