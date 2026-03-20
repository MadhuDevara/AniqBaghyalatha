function GradientBackground({ className = 'absolute inset-0' }) {
  return <div className={`page-gradient-bg ${className}`} aria-hidden="true" />
}

export default GradientBackground
