import GlowBox from '@/components/glow-box.jsx'
import Player from '@/components/player'
export default function About() {
  const svgs = [
    { name: 'linkedin', src: '/svg/lk.svg' },
    { name: 'gmail', src: '/svg/gm.svg' },
    { name: 'instagram', src: '/svg/ig.svg' },
    { name: 'github', src: '/svg/gb.svg' },
  ]
  return (
    <div className="w-full h-screen mt-32">
      <div className="grid grid-cols-3 h-[20%] gap-x-6">
        <div className="flex justify-start items-start ">
          <img
            src="profile.webp"
            alt=""
            className="w-full rounded-lg grayscale-75"
          />
        </div>
        <div className="flex justify-between col-span-2 ">
          <div className="flex flex-col justify-between">
            <div>
              <p className="scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance text-white">
                Full Stack Developer <br /> Using MERN Stack
              </p>
              <blockquote className="mt-2 border-l-2 pl-6 italic text-white">
                &quot; I like mathematical symbols, especially f(n) — <br /> the
                symbol &quot; for functions. &quot;
              </blockquote>
              <p></p>
            </div>
            <div>
              <div className="mt-4 grid grid-cols-2 w-[80%] gap-y-3">
                {svgs.map((value, index) => (
                  <GlowBox src={value.src} />
                ))}
              </div>
            </div>
          </div>
          <div className="text-white ml-4 h-42 rounded-lg w-92 ">
            <div>
              <p className="scroll-m-20 text-end text-4xl font-extrabold tracking-tight text-balance text-white">
                PLAY DUSTIN FAVOURITE SONG TODAY
              </p>
            </div>
            <div className="mt-12">
              <Player />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
