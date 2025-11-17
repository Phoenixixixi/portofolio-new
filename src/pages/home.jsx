import { Navigation } from '@/components/navigation'
import StickyCursor from '../components/stickyCursor'
import { useRef, createContext, useState } from 'react'
import { isHoverText } from '../utils/isHover' // ✅ import dari file context
import { motion } from 'motion/react'

export default function Home() {
  const refSticky = useRef(null)
  const [isHover, setIsHover] = useState(false)

  return (
    <isHoverText.Provider value={{ isHover, setIsHover }}>
      <motion.main
        className="w-full h-screen navigation
        md:rounded-b-4xl
        xl:rounded-b-5xl 
      bg-white py-8 md:px-18 overflow-hidden"
      >
        <StickyCursor stickyElement={refSticky} />
        <nav className="w-full  flex justify-center">
          <Navigation ref={refSticky} />
        </nav>

        <section className="pt-12 md:pt-24 relative">
          <motion.h1
            className={` text-2xl md:text-4xl xl:text-6xl font-semibold text-center font-montserrat ${
              isHover ? 'text-white' : 'text-black'
            } duration-300`}
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4 }}
          >
            Code with Creativity <br /> Design With Purpose.
          </motion.h1>
        </section>
        <div className="relative md:grid md:grid-cols-2 mt-0 md:mt-32 h-full ">
          <motion.div
            className="z-0 p-4 md:p-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <p className="md:text-left text-center md:max-w-[18rem] xl:max-w-[23rem] text-[.4rem] md:text-[.7rem] xl:text-sm">
              I’m Muhammad Dustin, a full-stack developer passionate about
              building modern web experiences that blend clean design and
              efficient code. I enjoy turning ideas into interactive, scalable
              products with React, Node, and a touch of AI.
            </p>

            <a
              className="md:mt-4 xl:mt-8 bg-lime-300 px-4 py-2 rounded-full font-semibold shadow-xl hidden md:block md:text-[.6rem] xl:text-sm max-w-42"
              href="/Muhammad_Dustin_CV.pdf"
              download
            >
              Download My CV
            </a>
          </motion.div>

          {/* RIGHT NAME */}
          <motion.div
            className="z-20 flex flex-col text-[.6rem] md:items-end md:text-right  mt-36 md:mt-0 p-3 md:p-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <p className="font-semibold md:text-lg xl:text-2xl leading-tight">
              Muhammad <br /> Dustin
            </p>
            <p className="text-[.6rem] xl:text-sm font-light mt-2">
              Fullstack Developer
            </p>
          </motion.div>

          {/* AVATAR CENTERED */}
          <motion.img
            src="/cartoon.webp"
            alt="avatar"
            className="absolute left-1/2 -translate-x-1/2 bottom-[80px] md:bottom-[300px] xl:bottom-[360px] max-w-[340px] xl:w-[340px] 2xl:w-[420px] z-10"
            fetchpriority="high"
          />

          {/* BACK CIRCLES */}
          <div className="md:absolute left-1/2 -translate-x-1/2 bottom-[200px] z-0 hidden">
            <div className="relative">
              <div className="bg-neutral-300/40 w-[500px] 2xl:w-[600px] h-[500px] 2xl:h-[600px] rounded-full"></div>
              <div className="bg-neutral-300 w-[380px] h-[380px] rounded-full absolute inset-0 m-auto"></div>
            </div>
          </div>
        </div>
      </motion.main>
    </isHoverText.Provider>
  )
}
