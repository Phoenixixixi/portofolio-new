'use client'

import {
  animate,
  easeIn,
  motion,
  useMotionValue,
  useTransform,
} from 'motion/react'
import { useEffect } from 'react'

export default function CountAnimate({ number, duration, Cs, value }) {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, number, { duration })
    return () => controls.stop()
  }, [])

  return (
    <div className="flex">
      <motion.pre className={Cs}>{rounded}</motion.pre>
      <span className="text-lime-400">{value.simbol}</span>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          ease: easeIn,
          duration: 1,
        }}
      >
        {value.additional}
      </motion.div>
    </div>
  )
}

/**
 * ==============   Styles   ================
 */
