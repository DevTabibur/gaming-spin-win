/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import WheelImage from '@/assets/wheel-image.png'
import GiftBox from '@/assets/svg/gift-box-svgrepo-com.svg'
import Star from '@/assets/svg/star.svg'
import { motion } from 'framer-motion'

const BonusesModalCard = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-white text-5xl font-bold mb-10">Bonuses</h1>

          {/* First row */}
          <div className="rounded-[10px] border border-white/15 bg-white/5 p-4 mb-6">
            <div className="flex flex-row items-center mb-4">
              <Image
                src={WheelImage}
                width={40}
                height={40}
                alt="wheel_image"
              />
              <h3 className="text-white ml-2 text-2xl">Spin the lucky wheel</h3>
            </div>
            <div>
              <button className="w-full text-white rounded-[10px] border-b-2 border-[#184D00] bg-gradient-to-b from-[#5DB80A] to-[#286E03] flex items-center justify-center p-2 hover:bg-gradient-to-b hover:to-[#5DB80A] hover:from-[#286E03]">
                Spin
              </button>
            </div>
          </div>

          {/* Second row */}
          <div className="rounded-[10px] border border-white/15 bg-white/5 p-4">
            <div className="flex flex-row items-center mb-4">
              <Image
                src={WheelImage}
                width={40}
                height={40}
                alt="wheel_image"
              />
              <h3 className="text-white ml-2 text-2xl">Spin the lucky wheel</h3>
            </div>
            <div>
              <button className="w-full text-white rounded-[10px] border-b-2 border-[#184D00] bg-gradient-to-b from-[#5DB80A] to-[#286E03] flex items-center justify-center p-2 hover:bg-gradient-to-b hover:to-[#5DB80A] hover:from-[#286E03]">
                Spin
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center w-full">
          {/* Star SVGs around the gift box */}
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              className={`absolute ${getStarPosition(index)} rounded-full`} // Add rounded-full here
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="gift-box-glow before:w-[30px] before:-left-4 before:top-4 before:h-[30px] top-0 right-0  absolute" />

              <Image
                src={Star}
                alt="star"
                width={30}
                height={30}
                className="shadow-white/50 rounded-full" // Ensure the star has rounded corners
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center -rotate-[40deg] w-28 h-28 relative"
          >
            <div className="gift-box-glow before:top-14 before:-left-[60px] before:w-[150px] before:h-[150px] top-0 right-0  absolute" />
            <Image
              src={GiftBox}
              width={200}
              quality={100}
              height={200}
              alt="gift_box"
              className="mx-auto duration-500 w-full h-full" // Apply the glow effect
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

// Function to get star positions based on index
const getStarPosition = (index: any) => {
  const positions = [
    'top-4 left-9', // Top Right
    'top-8 left-24', // Slightly lower Top Right
    'top-20 left-10', // Middle Right
    'bottom-10 right-9', // Top Right
    'bottom-8 right-24', // Slightly lower Top Right
    'bottom-20 right-4', // Middle Right
    'bottom-0 left-5', // Top Right
    'bottom-5 left-20', // Slightly lower Top Right
    'bottom-14 left-2', // Middle Right
    'top-4 right-10', // Top Right
    'top-9 right-24', // Slightly lower Top Right
    'top-20 right-5', // Middle Right
  ]

  return positions[index]
}

export default BonusesModalCard
