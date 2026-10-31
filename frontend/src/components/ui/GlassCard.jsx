function GlassCard({ children, className = '' }) {
  return (
    <div
      className={
        'rounded-3xl border border-edge bg-glass p-6 backdrop-blur-xl transition duration-300 hover:border-violet/40 hover:shadow-[0_0_32px_rgba(139,92,246,0.15)] ' +
        className
      }
    >
      {children}
    </div>
  )
}

export default GlassCard