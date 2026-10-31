function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night"
    >
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-violet/40 blur-3xl will-change-transform animate-drift-a motion-reduce:animate-none" />
      <div className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan/30 blur-3xl will-change-transform animate-drift-b motion-reduce:animate-none" />
      <div className="absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-pink/25 blur-3xl will-change-transform animate-drift-a motion-reduce:animate-none" />
    </div>
  )
}

export default Aurora