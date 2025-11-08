import CardSwitch from '@/components/card-switch'
import SwitchCard from '@/utils/switch-card'
import List from '@/components/list'
import { useState } from 'react'
import { FaReact, FaTachometerAlt } from 'react-icons/fa'
import { IoIosResize } from 'react-icons/io'
import { MdComputer } from 'react-icons/md'
import { CgComponents } from 'react-icons/cg'
import { Route } from 'lucide-react'

export default function Services() {
  const [activeCard, setActiveCard] = useState(1)
  const data = [
    {
      id: 1,
      title: 'Front End',

      desc: 'Start to develop your interface website with a solid layout and clean code.',
    },
    {
      id: 2,
      title: 'Back End',
      desc: 'andle logic, data, and performance — everything that keeps your app running behind the scenes.',
    },
  ]

  const dataListFr = [
    {
      list: 'React.js Development',
      icon: <FaReact size={32} />,
      desc: 'Build modern, high-performance web apps using the React ecosystem — focusing on reusable components and clean architecture.',
    },
    {
      list: 'Responsive Web Design',
      icon: <IoIosResize size={32} />,
      desc: 'Ensure your website looks perfect on every device — from desktop to mobile — with adaptive layouts and smooth interactions.',
    },
    {
      list: 'Landing Page',
      icon: <MdComputer size={32} />,
      desc: 'Design engaging, conversion-focused landing pages that load fast and deliver a memorable first impression.',
    },
    {
      list: 'Reusable Component',
      icon: <CgComponents size={32} />,
      desc: 'Develop modular UI components that can be reused across pages for consistent design and faster iteration.',
    },
    {
      list: 'State Management',
      icon: <Route size={32} />,
      desc: 'Implement predictable and maintainable data flow using Redux Toolkit or Context API to keep your UI synchronized.',
    },
    {
      list: 'Performance Optimization',
      icon: <FaTachometerAlt size={32} className="" />,
      desc: 'Boost website speed and efficiency through code optimization, image compression, for a smoother user experience.',
    },
  ]

  const handleClickCard = (id) => {
    setActiveCard(id)
  }

  return (
    <div
      className="w-full h-screen pt-18 bg-white/5 
                 backdrop-blur-xl border border-white/20 
                 rounded-4xl shadow-lg px-18 pb-14"
    >
      <div className="w-full">
        <h2 className="text-white font-bold text-6xl">
          What I
          <span className="bg-lime-400 ml-3 px-2 py-1 rounded-lg text-black">
            Do
          </span>
        </h2>
      </div>

      <article className="grid grid-cols-2 mt-6 gap-4 gap-x-12">
        <div>
          <div className="grid grid-cols-2 grid-rows-3 gap-3 h-full">
            {dataListFr.map((val, index) => (
              <List dataList={val.list} desc={val.desc} icon={val.icon} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          <img
            src="services.webp"
            alt=""
            className="w-full h-full object-cover rounded-2xl rounded-br-5xl grayscale col-span-2"
          />

          <div className="gap-y-3 grid grid-rows-2">
            {data.map((value, index) => (
              <SwitchCard
                onClick={() => handleClickCard(value.id)}
                isActive={activeCard === value.id}
              >
                <CardSwitch data={value} />
              </SwitchCard>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
