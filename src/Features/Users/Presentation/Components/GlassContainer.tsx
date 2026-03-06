interface GlassContainerProps {
  children: React.ReactNode
}

export default function GlassContainer({ children }: GlassContainerProps) {
  return (
    <div className="glass-container">
      {children}
    </div>
  )
}