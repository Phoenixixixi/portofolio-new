'use client'
import { useEffect, useState, useContext } from 'react'
import styles from './style.module.scss'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { isHoverText } from '../../utils/isHover' // ✅ import dari file context
export default function index({ stickyElement }) {
  const { setIsHover } = useContext(isHoverText)
  const [isHovered, setIsHovered] = useState(false)
  const [size, setSize] = useState({})
  const cursorSize = isHovered ? size.width + 50 : 15

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  //Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  }

  const manageMouseMove = (e) => {
    const el = stickyElement?.current
    if (!el) return
    const { clientX, clientY } = e
    const { left, top, height, width } = el.getBoundingClientRect()
    setSize({ height, width })

    //center position of the stickyElement
    const center = { x: left + width / 2, y: top + height / 2 }

    if (isHovered) {
      //distance between the mouse pointer and the center of the custom cursor and
      const distance = { x: clientX - center.x, y: clientY - center.y }
      setIsHover(true)

      //move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1)
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1)
    } else {
      //move custom cursor to center of stickyElement
      mouse.x.set(clientX - cursorSize / 2)
      mouse.y.set(clientY - cursorSize / 2)
      setIsHover(false)
    }
  }

  const manageMouseOver = (e) => {
    setIsHovered(true)
  }

  const manageMouseLeave = (e) => {
    setIsHovered(false)
  }

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
  }, [isHovered])

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
        className={`${styles.cursor}`}
      ></motion.div>
    </div>
  )
}
