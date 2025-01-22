// components/PrizeCard.tsx
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

interface PrizeCardProps {
  icon?: StaticImageData // URL or path to the icon image
  iconWidth?: number
  iconHeight?: number
  title: string
  description: string
  backgroundColor: string
  additionalContent?: React.ReactNode // For any additional content like fractions or images
}

const PrizeCard: React.FC<PrizeCardProps> = ({
  icon,
  iconWidth,
  iconHeight,
  title,
  description,
  backgroundColor,
  additionalContent,
}) => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div
        className={`flex-shrink-0 w-16 h-16 mr-[5%] rounded-[5px] p-4 flex items-center justify-center text-white text-xl font-semibold ${backgroundColor} shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)]`}
      >
        <div className="flex flex-col items-center">
          {icon && (
            <Image
              src={icon}
              alt="icon"
              width={iconWidth}
              height={iconHeight}
            />
          )}
          {additionalContent}
        </div>
      </div>
      <div className="w-[74%]">
        <h1 className="text-lg font-[450] text-white">{title}</h1>
        <p className="text-xs pt-2 font-[300] text-white">{description}</p>
      </div>
    </motion.div>
  )
}

export default PrizeCard
