'use client'
import React from 'react'
import { FaGift } from 'react-icons/fa'

const WeeklyReward = () => {
  const steps = [1, 2, 3, 4, 5, 6, 7, 8] // Array for numbers

  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-5xl font-bold text-white">Weekly Reward</h2>
      <p className="text-xl font-semibold text-white">
        Play for 7 days in a row and get 3 spins of the Lucky Wheel
      </p>
      <div className="flex items-center justify-center py-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Circle */}
            <div className="flex items-center justify-center drop-shadow-md w-14 h-14 bg-[#A467AF] rounded-full text-white font-bold">
              {index === steps?.length - 1 ? (
                <div className="flex items-center">
                  <FaGift size={24} className="text-white" />
                </div>
              ) : (
                <span className="text-xl font-extrabold text-white">
                  {step}
                </span>
              )}
            </div>
            {/* Line Between Circles */}
            {index < steps.length - 1 && (
              <div className="w-10 h-2 bg-[#A467AF]"></div>
            )}
          </div>
        ))}
      </div>
      <p className="text-sm text-white text-center max-w-2xl mx-auto leading-8">
        This offer does not apply to bets placed in 1xGames using a Free bet
        bonus. This offer doesn’t include the following 1xGames: Crash, Spin and
        Win, African Rouletter, Jackpot Games, Derby Racing, Rouletter, Crown &
        Anchor
      </p>
    </div>
  )
}

export default WeeklyReward
