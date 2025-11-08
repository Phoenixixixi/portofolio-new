import { Children, useState } from 'react'

export default function SwitchCard({ isActive, children, onClick }) {
  return (
    <div
      className={`
      
        rounded-2xl
        p-4
        w-full
        flex
        items-start
        flex-col
        justify-between
        cursor-pointer
        duration-300
      ${
        isActive ? 'bg-neutral-800 backdrop-blur-2xl text-white' : 'bg-lime-400'
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
