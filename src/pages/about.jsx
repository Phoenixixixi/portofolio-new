import GlowBox from '@/components/glow-box.jsx'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
export default function About() {
  const svgs = [
    { name: 'linkedin', src: '/svg/lk.svg', img: '/screen/linkedin.webp' },
    { name: 'gmail', src: '/svg/gm.svg' },
    { name: 'instagram', src: '/svg/ig.svg', img: '/screen/instagram.webp' },
    { name: 'github', src: '/svg/gb.svg' },
  ]

  const [order, setOrder] = useState(svgs)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [picture, setPicture] = useState(svgs[0].img)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => shuffle(prev))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full lg:h-full xl:h-full mt-18 md:py-44" id="About">
      <div className="grid md:grid-cols-3 gap-x-6" ref={ref}>
        <motion.div
          className="flex justify-center md:justify-start items-start w-full"
          initial={{ x: -500, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
          transition={{ type: 'spring', duration: 3 }}
        >
          <img
            src="profile.webp"
            alt=""
            className="w-full rounded-lg grayscale "
          />
        </motion.div>
        <div className="flex justify-between col-span-2">
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ y: -230, opacity: 0 }}
              animate={
                isInView ? { y: 0, opacity: 1 } : { y: -230, opacity: 0 }
              }
              transition={{ type: 'spring', duration: 3 }}
            >
              <p className="scroll-m-20 text-start text-3xl font-extrabold tracking-tight text-balance text-white mt-6 md:mt-0">
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
                className="mt-4 grid grid-cols-2 w-full gap-3 md:mt-2 xl:mt-0"
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
                    className="active:scale-85 duration-100"
                    onClick={() => {
                      if (value.img) {
                        setPicture(value.img)
                      }
                    }}
                  >
                    <GlowBox src={value.src} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <motion.div
            className=" ml-4 md:w-78 2xl:w-92 h-82 p-0 hidden md:block"
            initial={{ y: 230, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -230, opacity: 0 }}
            transition={{ type: 'spring', duration: 3 }}
          >
            <div className="mockup-phone border-[#3d3b3d]">
              <div className="mockup-phone-camera"></div>
              <motion.div
                className="mockup-phone-display relative cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <AnimatePresence>
                  {isHover ? (
                    <motion.div
                      className="bg-neutral-900/90 flex justify-center items-center h-full absolute w-full text-white"
                      key={isHover}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      click to visit
                    </motion.div>
                  ) : (
                    <div></div>
                  )}
                </AnimatePresence>
                <motion.img
                  key={picture} // ⬅️ ini kunci utamanya
                  alt="wallpaper -z-10"
                  src={picture}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1] }} // 0 → 1 = fade/ngedip halus
                  transition={{ duration: 5 }}
                />
              </motion.div>
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
