function BentoGrid({ children }) {
  return (
    <div className="grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-4 md:grid-cols-4">
      {children}
    </div>
  )
}

export default BentoGrid