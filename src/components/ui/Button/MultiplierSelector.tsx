import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TiArrowSortedDown } from 'react-icons/ti'

interface Option {
  label: string
  value: number
}

const options: Option[] = [
  { label: '2X', value: 20 },
  { label: '4X', value: 40 },
  { label: '5X', value: 60 },
  { label: '7X', value: 80 },
  { label: '10X', value: 100 },
  { label: '20X', value: 120 },
]

const MultiplierSelector: React.FC = () => {
  const [selected, setSelected] = useState<number>(20)

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-center items-start bg-gradient-to-t from-[#AA6426] to-[#D99B3F]  px-5 py-2 rounded-full shadow-lg ">
        {options.map((option) => (
          <motion.div
            key={option.value}
            className={`relative flex flex-col items-center justify-between mx-2 cursor-pointer `}
            onClick={() => setSelected(option.value)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute text-center -top-20 flex flex-col items-start gap-2">
              {/* Multiplier Label */}
              <span className="text-[#F2BD47] font-bold text-lg">
                {option.label}
              </span>
              {/* Triangle Indicator */}
              <TiArrowSortedDown size={30} className="text-white" />
            </div>
            {/* Value Button */}
            <motion.div
              className={`flex justify-center  items-center bg-gradient-to-t from-[#F2BD47 ] to-[#AE6928] max-w-24 w-full rounded-full border ${
                selected === option.value ? ' border-black' : 'border-gray-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-gray-900 px-10 py-2 font-bold">
                {option.value}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MultiplierSelector
