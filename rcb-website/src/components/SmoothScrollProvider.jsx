export default function SmoothScrollProvider({ children }) {
  // Removed ReactLenis due to React 19 peer dependency hook violations.
  // We will rely on CSS smooth scrolling or native scroll for this demo.
  return (
    <div className="smooth-scroll-wrapper">
      {children}
    </div>
  )
}
