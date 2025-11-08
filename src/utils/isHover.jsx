import { createContext } from 'react'

export const isHoverText = createContext({
  isHover: false,
  // no-op agar tidak undefined saat di luar provider (opsional)
  setIsHover: () => {},
})
