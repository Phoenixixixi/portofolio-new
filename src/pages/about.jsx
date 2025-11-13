import GlowBox from '@/components/glow-box.jsx'
import Player from '@/components/player'
import { motion, useInView } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
export default function About() {
  const svgs = [
    { name: 'linkedin', src: '/svg/lk.svg' },
    { name: 'gmail', src: '/svg/gm.svg' },
    { name: 'instagram', src: '/svg/ig.svg' },
    { name: 'github', src: '/svg/gb.svg' },
  ]
  const [order, setOrder] = useState(svgs)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => shuffle(prev))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-screen mt-32">
      <div className="grid grid-cols-3 h-[20%] gap-x-6" ref={ref}>
        <motion.div
          className="flex justify-start items-start"
          initial={{ x: -500, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
          transition={{ type: 'spring', duration: 3 }}
        >
          <img
            src="profile.webp"
            alt=""
            className="w-full rounded-lg grayscale"
          />
        </motion.div>
        <div className="flex justify-between col-span-2 ">
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ y: -230, opacity: 0 }}
              animate={
                isInView ? { y: 0, opacity: 1 } : { y: -230, opacity: 0 }
              }
              transition={{ type: 'spring', duration: 3 }}
            >
              <p className="scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance text-white">
                Full Stack Developer <br /> Using MERN Stack
              </p>
              <blockquote className="mt-2 border-l-2 pl-6 italic text-white">
                &quot; I like mathematical symbols, especially f(n) — <br /> the
                symbol &quot; for functions. &quot;
              </blockquote>
              <p></p>
            </motion.div>
            <div className="">
              <motion.div
                className="mt-4 grid grid-cols-2 w-full gap-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                }
                transition={{ type: 'spring', duration: 3 }}
              >
                {order.map((value, index) => (
                  <motion.div
                    key={value.name}
                    layout
                    layoutId={value.name}
                    transition={{
                      type: 'spring',
                      damping: 20,
                      stiffness: 300,
                    }}
                  >
                    <GlowBox src={value.src} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <motion.div
            className="text-white ml-4 h-42 rounded-lg w-92"
            initial={{ y: 230, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -230, opacity: 0 }}
            transition={{ type: 'spring', duration: 3 }}
          >
            <div>
              <p className="scroll-m-20 text-end text-4xl font-extrabold tracking-tight text-balance text-white">
                PLAY DUSTIN FAVOURITE SONG TODAY
              </p>
            </div>
            <div className="mt-12">
              <Player />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function shuffle(arr) {
  const copy = [...arr]

  return copy.sort(() => Math.random() - 0.5)
}
