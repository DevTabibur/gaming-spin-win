'use client'
import useScale from '@/hook/useScale'
import React, { ReactNode } from 'react'

interface FrameProps {
  children: ReactNode
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  const scale = useScale(800) // Use the hook with a breakpoint of 800px

  console.log(scale)
  return (
    <section
      style={{
        transform: `scaleX(${scale})`,
        transformOrigin: 'center',
      }}
      className="frame-container overflow-hidden min-w-[1920px] h-screen"
    >
      <section className="w-[1920px] relative h-full   mx-auto">
        <main className="w-full h-full px-4">{children}</main>
      </section>
    </section>
  )
}

export default Frame
