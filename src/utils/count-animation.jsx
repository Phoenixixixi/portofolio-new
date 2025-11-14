'use client'

import {
  animate,
  easeIn,
  motion,
  useMotionValue,
  useTransform,
} from 'motion/react'
import { useEffect } from 'react'

export default function CountAnimate({
  number,
  duration,
  Cs,
  value,
  isInView,
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { duration })
      return () => controls.stop()
    } else {
      return
    }
  }, [isInView])

  return (
    <div className="flex">
      <motion.pre className={Cs}>{rounded}</motion.pre>
      <span className="text-lime-400 text-sm md:text-lg xl:text-2xl font-mont">
        {value.simbol}
      </span>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={
          isInView
            ? { opacity: 1, translateY: 0 }
            : { opacity: 0, translateY: 0 }
        }
        transition={{
          ease: easeIn,
          duration: 1,
        }}
        className={'text-sm md:text-lg xl:text-2xl font-mont'}
      >
        {value.additional}
      </motion.div>
    </div>
  )
}

/**
 * ==============   Styles   ================
 */
