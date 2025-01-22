/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react'
import wheel_hanging from '@/assets/elements/wheel_hanging.png'
import host from '@/assets/elements/host.png'
import Image from 'next/image'
import MultiplierSelector from '../ui/Button/MultiplierSelector'
import TotalStack from '../TotalStack/TotalStack'
import StickyNavigation from '../ui/stickyNavigation/StickyNavigation'
import { buttons } from '../ui/stickyNavigation/Buttons'
import { motion } from 'framer-motion'
import PrizesModalCard from '../ui/Modalnfo/PrizesModalCard'
import BonusesModalCard from '../ui/Modalnfo/BonusesModalCard'
import WeeklyReward from '../ui/WeeklyReward/WeeklyReward'
import LuckyWheel from '../ui/LuckyWheel/LuckyWheel'
import QuestOfTheDay from '../ui/QuestOfTheDay/QuestOfTheDay'
import ExtraCashback from '../ui/ExtraCashback/ExtraCashback'
import Modal from '../ui/Modal'
import Wheel3D from '@/components/3D/Wheel'

// CASE 1 ==> Face x5
// CASE 2 ==> Face x4
// CASE 3 ===>  Face x2
// CASE 4 ===> Face x7
// CASE 5 ==> Face x20
// CASE 6 ==> Face x10

const Game = () => {
  const [isLoading, setIsLoading] = useState(false)
  const rotationSpeed = 2
  const [initialValue, setInitialValue] = useState(0) // track initial face values

  // its fake api
  const mockApiCall = () => {
    return new Promise<{ wheelValue: number }>((resolve) => {
      setTimeout(() => {
        const randomWheelValue = Math.floor(Math.random() * 6) + 1 // Generates a number between 1 and 6
        resolve({ wheelValue: randomWheelValue })
      }, 2000)
    })
  }

  // have to place bet function here
  const handleBetClick = async () => {
    setIsLoading(true)
    try {
      const { wheelValue } = await mockApiCall()
      setInitialValue(wheelValue)
      // setInitialValue(1)
    } catch (error) {
      // console.log('Failed to retrieve dice points.', error)
    } finally {
      setIsLoading(false)
    }
  }

  const [activeButton, setActiveButton] = useState<string>('group1')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = (id: string) => {
    setActiveButton(id)
    setIsModalOpen(true) // Open the modal when a button is clicked
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // setActiveButton(null)
  }

  const buttonList = buttons(activeButton, handleButtonClick)

  // Define content based on the active button
  const renderModalContent = () => {
    switch (activeButton) {
      case 'group1':
        return <PrizesModalCard />
      case 'group2':
        return <BonusesModalCard />
      case 'group3':
        return <WeeklyReward />
      case 'group4':
        return <LuckyWheel />
      case 'group5':
        return <QuestOfTheDay />
      case 'group6':
        return <ExtraCashback />
      case 'group7':
        return null
      default:
        return null
    }
  }

  return (
    <div className="h-full flex  items-center justify-between">
      <div className="w-[20%] flex flex-col items-center gap-4">
        <div>
          <Image
            src={wheel_hanging}
            className="w-72 h-full"
            alt="wheel_hanging.png"
            width={200}
            height={200}
          />
        </div>
        <TotalStack />
      </div>
      <div className="h-full flex flex-col justify-end py-4 w-[60%]">
        <div className="h-[80%]">
          <Wheel3D
            isLoading={isLoading}
            key="wheel1"
            initialValue={initialValue}
            rotationSpeed={rotationSpeed}
          />
        </div>

        <MultiplierSelector />
        <button
          className={`bg-gradient-to-t from-[#F2BD47] to-[#AE6928] rounded-full border border-yellow-500 py-2 px-5 mt-5 font-semibold max-w-32 mx-auto`}
          onClick={handleBetClick}
        >
          Spin & Win
        </button>
      </div>
      <motion.div
        className="h-[90vh] fixed -bottom-20  right-32 z-40"
        animate={{
          y: ['0%', '-10%', '0%'], // Move up and down for a bounce effect
        }}
        transition={{
          duration: 2, // Controls the speed of the bounce
          ease: 'easeInOut',
          repeat: Infinity, // Loop the animation infinitely
          repeatType: 'mirror', // Creates a smooth up-and-down motion
        }}
      >
        <Image
          src={host}
          alt="host"
          width={1000}
          height={1000}
          className="drop-shadow-lg h-full w-full"
        />
      </motion.div>
      <div className="w-[20%]">
        <StickyNavigation
          buttons={buttonList}
          bgColor="#48006A"
          onButtonClick={handleButtonClick}
        />
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} size="1100px">
          {renderModalContent()}
        </Modal>
      )}
    </div>
  )
}

export default Game
