import { motion } from 'framer-motion'
export default function BackgroundCircle({ cs }) {
  return (
    <div>
      <motion.div
        className={`w-99 h-99 rounded-full bg-lime-400 hidden absolute md:block
        blur-[200px] ${cs}`}
        animate={{}}
      ></motion.div>
    </div>
  )
}
