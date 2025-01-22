'use client'
import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const ExtraCashback = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold text-white">Extra Cashback</h1>
          <p className="text-lg font-[400] pb-20">Until 31. 10. 2024</p>
          <div className="space-y-2 mb-4">
            <p className="text-lg">Cashback Available</p>
            <div className="bg-white/20 w-40  text-center text-2xl font-semibold py-2.5 px-4 rounded-lg">
              $0
            </div>
          </div>
          <a href="#" className="underline text-sm ">
            Rules
          </a>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <div className="max-w-80">
            <p>Select two other games for the regular 3% cashbacks</p>
            <div className="mt-4 bg-white/20 p-4 rounded-lg flex items-center space-x-4">
              <FaPlusCircle className="text-green-400 w-6 h-6" />
              <p className="text-lg ">Scratch Card</p>
              <p className="ml-auto text-sm text-gray-200">5% cashback</p>
            </div>
          </div>

          <div className="max-w-80">
            <p>Select two other games for the regular 3% cashbacks</p>
            <div className="mt-4 bg-white/20 p-4 rounded-lg flex items-center space-x-4">
              <FaPlusCircle className="text-green-400 w-6 h-6" />
              <p className="text-lg ">Select</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtraCashback
