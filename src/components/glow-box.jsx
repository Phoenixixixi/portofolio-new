export default function Index({ src }) {
  return (
    <div
      className="w-36 h-36 
                    bg-white/10 
                    backdrop-blur-xl 
                    border border-white/20 
                    rounded-xl 
                    shadow-lg 
                    relative overflow-hidden
                    flex justify-center
                    "
    >
      {/* optional efek highlight halus */}

      <img src={src} alt="" className="w-14 invert brightness-0" />
    </div>
  )
}
