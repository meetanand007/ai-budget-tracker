import GlassCard from './GlassCard'

// Full class names written out, so Tailwind can find them
const spans = {
  small: '',
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
  big: 'md:col-span-2 md:row-span-2',
}

function BentoTile({ title, size = 'small', className = '', children }) {
  return (
    <GlassCard className={spans[size] + ' ' + className}>
      {title && <h3 className="mb-3 text-sm font-medium text-muted">{title}</h3>}
      {children}
    </GlassCard>
  )
}

export default BentoTile