'use client'
import { useEffect, useState } from 'react'

const useScale = (heightBreakpoint: number): number => {
  const [scale, setScale] = useState<number>(1)

  useEffect(() => {
    const updateScale = () => {
      const height = window.innerHeight
      const scaleFactor =
        height < heightBreakpoint ? height / heightBreakpoint : 1
      setScale(scaleFactor)
    }

    // Initial update
    updateScale()

    // Listen to window resize events
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [heightBreakpoint])

  return scale
}

export default useScale
