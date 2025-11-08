import { Pause } from 'lucide-react'
export default function Player() {
  return (
    <div
      className=" bg-white/10 
                    backdrop-blur-xl 
                    border border-white/20 
                    rounded-lg 
                    shadow-lg 
                    relative overflow-hidden
                    p-4
                   "
    >
      <div className="text-center">
        <p className="font-bold">Every Breath You Take</p>
        <p className="text-[.6rem] text-white/70">The Police</p>
        <img src="album.jpg" alt="" className="mt-4 rounded-sm" />
        <div className="w-full flex justify-center mt-13">
          <Pause />
        </div>
      </div>
    </div>
  )
}
