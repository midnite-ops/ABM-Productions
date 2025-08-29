import { useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue, animate } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Counter({ target }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const count = useMotionValue(1) // start from 1
  const [displayCount, setDisplayCount] = useState(1)

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayCount(Math.floor(latest))
    })
    return () => unsubscribe()
  }, [count])

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: "easeOut" })
    }
  }, [inView, target, count])

  return (
    <motion.h1 ref={ref}>
      {displayCount}
    </motion.h1>
  )
}

export default Counter
