import { CircleCheck, Ban } from 'lucide-react'
import { easeInOut, motion } from 'motion/react'

export default function Alert({ status = true, fill, show }) {
  return (
    <div>
      {show ? (
        <motion.div
          className="md:w-42 fixed bg-neutral-950 top-10 right-0 w-full z-99"
          initial={{ x: 300 }}
          animate={{ x: [300, 0, 0, 300] }} // 0 = diam
          transition={{
            duration: 5, // total 5s
            times: [0, 0.2, 0.6, 1], // diam 60% dari waktu
            ease: 'easeInOut',
          }}
        >
          <div className="grid grid-cols-2 pr-4">
            <div className={` p-2 ${status ? 'bg-lime-400' : 'bg-red-500'}`}>
              {status ? <CircleCheck size={48} /> : <Ban size={48} />}
            </div>
            <div className="px-2 text-white font-semibold flex items-center">
              <span>{status ? 'SUCCESS' : 'FAILED'}</span>
            </div>
          </div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
