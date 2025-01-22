import React from 'react'
import SpinRoll from '../SpinRoll/SpinRoll'

const LuckyWheel = () => {
  // const [autoPlay, setAutoPlay] = useState(false)

  // const toggleAutoPlay = () => setAutoPlay(!autoPlay)

  return (
    <div className="text-white flex items-center">
      {/* Left Section - Title, Description, and Button */}
      <div className="w-1/2 pr-6">
        <h2 className="text-5xl font-semibold text-white mb-2">Lucky Wheel</h2>
        <p className="text-lg mb-16">
          Try your luck. Spin the wheel and win valuable Prizes!
        </p>

        {/* Spin Button */}
        <button className=" text-white rounded-[10px] border-b-2 border-[#184D00] bg-gradient-to-b from-[#5DB80A] to-[#286E03] flex items-center justify-center p-5 max-w-48 w-full hover:bg-gradient-to-b hover:to-[#5DB80A] hover:from-[#286E03]">
          Spin for Free
        </button>
        {/* Auto Play Toggle */}
        <div className="flex items-center space-x-2 my-4">
          <span className="text-lg">Auto Play</span>
        </div>

        {/* Footer Links */}
        <div className="mt-2 flex space-x-4">
          <a href="#" className="text-white underline text-sm">
            Rules
          </a>
          <a href="#" className="text-white underline text-sm">
            Bonus description
          </a>
        </div>
      </div>

      {/* Right Section - Wheel Image */}
      <div className="w-1/2 flex justify-center">
        <SpinRoll />
      </div>
    </div>
  )
}

export default LuckyWheel
