import { motion } from 'framer-motion'
export default function BackgroundCircle() {
  return (
    <div>
      <motion.div
        className="w-99 h-99 rounded-full bg-lime-400 absolute -left-98 -top-2 
    blur-[200px]"
      ></motion.div>
      <motion.div
        className="w-99 h-99 rounded-full bg-lime-400 absolute left-1/2 top-1/2 translate-y-1/2
     blur-[200px]"
      ></motion.div>
    </div>
  )
}
