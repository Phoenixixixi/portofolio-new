export default function GlowingBlock({ children }) {
  return (
    <div
      className="
    w-full px-8 py-12
    rounded-3xl
    bg-neutrall-100/10
    backdrop-blur-3xl
    border border-white/30
    
    relative overflow-hidden
  "
    >
      {children}
    </div>
  )
}
