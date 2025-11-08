import { Navigation } from '@/components/navigation'
import StickyCursor from '../components/stickyCursor'
import { useRef, createContext, useState } from 'react'
import { isHoverText } from '../utils/isHover' // ✅ import dari file context

export default function Home() {
  const refSticky = useRef(null)
  const [isHover, setIsHover] = useState(false)

  return (
    <isHoverText.Provider value={{ isHover, setIsHover }}>
      <main
        className="w-full h-screen navigation
        rounded-b-5xl
      bg-white py-8 px-18 overflow-hidden"
      >
        <StickyCursor stickyElement={refSticky} />
        <nav className="w-full  flex justify-center">
          <Navigation ref={refSticky} />
        </nav>
        <section className="pt-24 relative">
          <h1
            className={`text-6xl font-semibold text-center ${
              isHover ? 'text-white' : 'text-black'
            } duration-300`}
          >
            Code with Creativity <br /> Design With Purpose.
          </h1>
        </section>
        <div className="relative grid grid-cols-2 mt-32 h-full ">
          <div className="z-0">
            <p className="text-left max-w-[23rem]">
              <q></q>
              I’m Muhammad Dustin, a full-stack developer passionate about
              building modern web experiences that blend clean design and
              efficient code. I enjoy turning ideas into interactive, scalable
              products with React, Node, and a touch of AI.
            </p>

            <button className="mt-8 bg-lime-300 px-4 py-2 rounded-full font-semibold shadow-xl">
              Download My CV
            </button>
          </div>

          {/* RIGHT NAME */}
          <div className="z-20 flex flex-col items-end text-right">
            <p className="font-semibold text-2xl leading-tight">
              Muhammad <br /> Dustin
            </p>
            <p className="text-sm font-light mt-2">Fullstack Developer</p>
          </div>

          {/* AVATAR CENTERED */}
          <img
            src="/cartoon.png"
            alt="avatar"
            className="absolute left-1/2 -translate-x-1/2 bottom-[360px] md:w-[340px] 2xl:w-[420px] z-10"
          />

          {/* BACK CIRCLES */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[200px] z-0">
            <div className="relative">
              <div className="bg-neutral-300/40 w-[500px] 2xl:w-[600px] h-[500px] 2xl:h-[600px] rounded-full"></div>
              <div className="bg-neutral-300 w-[380px] h-[380px] rounded-full absolute inset-0 m-auto"></div>
            </div>
          </div>
        </div>
      </main>
    </isHoverText.Provider>
  )
}
