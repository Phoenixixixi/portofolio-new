import { motion } from 'motion/react'
export default function Index({ data, key, isInView, dur }) {
  return (
    <motion.div
      className="bg-neutral-100/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-xl shadow-neutral-300/50"
      key={key}
      initial={{ y: 600, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 600, opacity: 0 }}
      transition={{
        duration: dur,
        type: 'spring',
        ease: 'easeInOut',
      }}
    >
      <header className="flex justify-between items-center">
        <p className="text-white font-medium">{data.title}</p>
      </header>
      <article className="mt-4">
        <p className="text-white text-justify font-extralight text-[.8rem] md:text-[.6rem] xl:text-sm">
          {data.desc}
        </p>
      </article>
    </motion.div>
  )
}
