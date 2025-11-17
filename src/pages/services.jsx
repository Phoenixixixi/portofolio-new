import CardSwitch from '@/components/card-switch'
import SwitchCard from '@/utils/switch-card'
import List from '@/components/list'
import { useState } from 'react'

import {
  Route,
  Server,
  Database,
  ShieldCheck,
  Braces,
  Cloud,
  Bug,
  Globe,
  Scaling,
  Dock,
  Component,
  Wrench,
  ClockArrowUp,
} from 'lucide-react'
import { easeInOut, motion, AnimatePresence } from 'motion/react'

export default function Services() {
  const [activeCard, setActiveCard] = useState(1)

  const dataListFr = [
    {
      list: 'React.js Development',
      icon: <Globe size={32} />,
      desc: 'Build modern, high-performance web apps using the React ecosystem — focusing on reusable components and clean architecture.',
    },
    {
      list: 'Responsive Web Design',
      icon: <Scaling size={32} />,
      desc: 'Ensure your website looks perfect on every device — from desktop to mobile — with adaptive layouts and smooth interactions.',
    },
    {
      list: 'Landing Page',
      icon: <Dock size={32} />,
      desc: 'Design engaging, conversion-focused landing pages that load fast and deliver a memorable first impression.',
    },
    {
      list: 'Reusable Component',
      icon: <Component size={32} />,
      desc: 'Develop modular UI components that can be reused across pages for consistent design and faster iteration.',
    },
    {
      list: 'State Management',
      icon: <Wrench size={32} />,
      desc: 'Implement predictable and maintainable data flow using Redux Toolkit or Context API to keep your UI synchronized.',
    },
    {
      list: 'Performance Optimization',
      icon: <ClockArrowUp size={32} className="" />,
      desc: 'Boost website speed and efficiency through code optimization, image compression, for a smoother user experience.',
    },
  ]

  const dataListBe = [
    {
      list: 'RESTful API Development',
      icon: <Server size={32} />,
      desc: 'Design and build secure RESTful APIs using Node.js & Express to handle business logic and dynamic web features.',
    },
    {
      list: 'Database Design & Management',
      icon: <Database size={32} />,
      desc: 'Structure and optimize MongoDB or MySQL databases with proper indexing and efficient query handling.',
    },
    {
      list: 'Authentication & Authorization',
      icon: <ShieldCheck size={32} />,
      desc: 'Implement secure user authentication using JWT, OAuth, bcrypt, and session-based methods.',
    },
    {
      list: 'CRUD API Development',
      icon: <Braces size={32} />,
      desc: 'Build clean and scalable CRUD endpoints using MVC architecture for fast development.',
    },
    {
      list: 'Cloud & Deployment',
      icon: <Cloud size={32} />,
      desc: 'Deploy production-grade applications using Nginx, PM2, SSL, and VPS environment optimization.',
    },
    {
      list: 'Error Handling & Logging',
      icon: <Bug size={32} />,
      desc: 'Implement centralized error handlers and logging systems for easier debugging and backend stability.',
    },
  ]

  const data = [
    {
      id: 1,
      title: 'Front End',

      desc: 'Start to develop your interface website with a solid layout and clean code.',
      show: dataListFr,
    },
    {
      id: 2,
      title: 'Back End',
      desc: 'andle logic, data, and performance — everything that keeps your app running behind the scenes.',
      show: dataListBe,
    },
  ]
  const [contentShow, setContentShow] = useState(dataListFr)

  const handleClickCard = (id, show) => {
    setActiveCard(id)
    setContentShow(show)
  }

  return (
    <div
      className="w-full h-full pt-18 bg-white/5 
                 backdrop-blur-xl border border-white/20 
                 rounded-4xl shadow-lg p-4 md:px-8 xl:px-18 pb-14 md:mt-0"
    >
      <div className="w-full">
        <h2 className="text-white font-bold md:text-6xl text-2xl">
          What Can I
          <span className="bg-lime-400 ml-3 px-2 py-1 rounded-lg text-black">
            Do
          </span>
        </h2>
      </div>

      <article className="grid md:grid-cols-2 mt-6 gap-4 xl:gap-x-12">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard} // ⬅️ kalau pindah Frontend ↔ Backend, ini berubah → trigger exit + enter
              className="grid grid-cols-2 grid-rows-3 gap-3 h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: easeInOut,
              }}
            >
              {contentShow.map((val, index) => (
                <motion.div
                  key={val.list} // ⬅️ jangan pakai key={contentShow}, itu sama untuk semua item
                  className="p-3 px-3 bg-neutral-100/2 backdrop-blur-xl rounded-lg text-white text-2xl 
          tracking-wide border-1 border-white/30 flex flex-col items-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.7, // sedikit stagger biar lebih hidup
                    type: 'spring',
                    ease: easeInOut,
                  }}
                >
                  <List dataList={val.list} desc={val.desc} icon={val.icon} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid md:grid-cols-3 gap-4 ">
          <img
            src="services.webp"
            alt=""
            className="w-full h-full object-cover rounded-2xl rounded-br-5xl grayscale col-span-2 hidden md:block"
            fetchpriority="high"
          />

          <div className="gap-y-3 grid grid-rows-2">
            {data.map((value, index) => (
              <SwitchCard
                onClick={() => handleClickCard(value.id, value.show)}
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
