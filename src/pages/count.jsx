import GlowingBlock from '@/components/glowing-block'
import CountAnimate from '@/utils/count-animation'
import { useRef } from 'react'
import { useInView } from 'motion/react'

export default function Count() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const list = [
    { number: 4, additional: '', desc: 'completed projects', simbol: '+' },
    {
      number: 3,
      additional: 'years',
      desc: 'coding expeeriences',
      simbol: '+',
    },
    {
      number: 300,
      additional: 'hours',
      desc: 'hands-on practices',
      simbol: '+',
    },
    { number: 100, additional: 'passion', desc: 'for clean code', simbol: '%' },
  ]
  return (
    <div className="w-full my-24" ref={ref}>
      <GlowingBlock>
        <div className="grid grid-cols-4 gap-28 text-white">
          {list.map((value, index) => (
            <div>
              <p className="text-2xl font-semibold">
                <CountAnimate
                  number={value.number}
                  value={value}
                  duration={2}
                  Cs={'text-2xl font-mont'}
                  isInView={isInView}
                />
              </p>

              <p className="text-white/20">{value.desc}</p>
            </div>
          ))}
        </div>
      </GlowingBlock>
    </div>
  )
}
