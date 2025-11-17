'use client'
import { useEffect, useState, useContext, useRef } from 'react'
import styles from './style.module.scss'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { isHoverText } from '../../utils/isHover'

export default function StickyCursor({ stickyElement }) {
  const { setIsHover } = useContext(isHoverText)
  const [isHovered, setIsHovered] = useState(false)
  const [size, setSize] = useState({ width: 0, height: 0 })

  // simpan rect supaya nggak perlu getBoundingClientRect di tiap mousemove
  const rectRef = useRef(null)

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  }

  // ukuran cursor tergantung ukuran stickyElement (nav) hanya saat hover
  const baseSize = 15
  const hoveredSize = size.width ? size.width + 50 : baseSize
  const cursorSize = isHovered ? hoveredSize : baseSize

  // 🔹 Hitung rect SEKALI (dan saat resize), bukan di mousemove
  useEffect(() => {
    const el = stickyElement?.current
    if (!el) return

    const measure = () => {
      const { left, top, width, height } = el.getBoundingClientRect()
      rectRef.current = {
        left,
        top,
        width,
        height,
        centerX: left + width / 2,
        centerY: top + height / 2,
      }
      setSize({ width, height })
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [stickyElement])

  const manageMouseMove = (e) => {
    const rect = rectRef.current
    if (!rect) return

    const { clientX, clientY } = e
    const { centerX, centerY, width } = rect
    const currentSize = isHovered ? width + 50 : baseSize

    if (isHovered) {
      const distance = { x: clientX - centerX, y: clientY - centerY }
      setIsHover(true)
      mouse.x.set(centerX - currentSize / 2 + distance.x * 0.1)
      mouse.y.set(centerY - currentSize / 2 + distance.y * 0.1)
    } else {
      mouse.x.set(clientX - currentSize / 2)
      mouse.y.set(clientY - currentSize / 2)
      setIsHover(false)
    }
  }

  const manageMouseOver = () => setIsHovered(true)
  const manageMouseLeave = () => setIsHovered(false)

  useEffect(() => {
    const el = stickyElement?.current
    if (!el) return

    el.addEventListener('mouseenter', manageMouseOver)
    el.addEventListener('mouseleave', manageMouseLeave)
    window.addEventListener('mousemove', manageMouseMove)

    return () => {
      el.removeEventListener('mouseenter', manageMouseOver)
      el.removeEventListener('mouseleave', manageMouseLeave)
      window.removeEventListener('mousemove', manageMouseMove)
    }
  }, [stickyElement, isHovered]) // boleh juga [stickyElement] kalau mau pakai ref buat isHovered
  // tapi ini nggak masalah besar buat performa

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={`${styles.cursor} md:block hidden`}
      />
    </div>
  )
}
