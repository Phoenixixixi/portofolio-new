import { Children, useState } from 'react'

export default function SwitchCard({ isActive, children, onClick }) {
  return (
    <div
      className={`

        rounded-2xl
        p-4
        md:p-2
        xl:p-4
        w-full
        flex
        items-start
        flex-col
        justify-between
        cursor-pointer
        duration-300
      ${
        isActive ? 'bg-lime-400' : 'bg-neutral-800 backdrop-blur-2xl text-white'
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
