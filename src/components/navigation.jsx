import { forwardRef } from 'react'
import Magnetic from './magnetic'

export const Navigation = forwardRef(function index(props, ref) {
  const navigationName = [
    { name: 'Projects', id: '#Projects' },
    { name: 'About', id: '#About' },
    { name: 'MUGIWARA' },
    { name: 'Services', id: '#Services' },
    { name: 'Contact', id: '#Contact' },
  ]
  return (
    <Magnetic>
      <nav
        className="w-full md:w-[60%] h-14 px-8 py-4
                flex flex-row
                justify-between rounded-full 
                text-[.6rem] md:text-sm xl:text-lg 2xl:text-lg text-neutral-950
                hover:text-white duration-100
                "
        ref={ref}
      >
        {navigationName.map((val, index) => (
          <a
            key={index}
            className={`cursor-pointer hover:text-lime-400 transition ${
              index === 2 ? 'font-extrabold italic text-lime-400' : 'font-light'
            }`}
            href={val.id}
          >
            {val.name}
          </a>
        ))}
      </nav>
    </Magnetic>
  )
})
