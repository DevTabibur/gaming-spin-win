'use client'
import React from 'react'
import crawon from '@/assets/crawon.png'
import Image from 'next/image'

const QuestOfTheDay = () => {
  const tasks = [
    {
      title: 'Get 3 gold bars in Diamond Slot',
      icon: '/path-to-icon1.png', // replace with actual icon path
      progress: '0/3',
    },
    {
      title: 'Play Russian Roulette at least 3 times',
      icon: '/path-to-icon2.png', // replace with actual icon path
      progress: '0/3',
    },
    {
      title: 'Win OXO at least 5 times',
      icon: '/path-to-icon3.png', // replace with actual icon path
      progress: '0/3',
    },
  ]

  return (
    <div>
      <div className="flex items-center gap-10">
        {/* Countdown Timer */}

        <div className="flex flex-col items-start gap-4">
          <h2 className="text-5xl font-semibold text-white">
            Quest of the day
          </h2>
          <p className="text-md text-white">
            Complete the tasks set during the day and get your reward.
          </p>
          <div className="flex items-center text-white gap-2 bg-white/20 rounded-md p-4 my-10">
            <span className="text-lg  mr-4">Remaining:</span>
            <div className="bg-[#489900] text-center rounded-md w-12 h-10 flex items-center justify-center font-bold text-lg">
              10
            </div>
            <span className="text-5xl fontbold">:</span>
            <div className="bg-[#489900] text-center rounded-md w-12 h-10 flex items-center justify-center font-bold text-lg">
              25
            </div>
            <span className="text-5xl fontbold">:</span>
            <div className="bg-[#489900] text-center rounded-md w-12 h-10 flex items-center justify-center font-bold text-lg">
              59
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="flex flex-col gap-10">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center text-white space-x-4">
              {/* Task Icon */}
              <Image
                width={50}
                height={50}
                src={crawon}
                alt={task.title}
                className="w-14 h-14 rounded-md"
              />
              {/* Task Details */}
              <div className="flex-1 ">
                <h3 className="text-xl  font-semibold">{task.title}</h3>
                {/* Progress Bar */}
                <div className="flex items-center space-x-2 mt-1 max-w-72">
                  <div className="flex-1 h-4 bg-white/40 rounded-full relative overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: '20%' }}
                    ></div>
                  </div>
                  <span className="text-sm">{task.progress}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-6 flex space-x-4">
        <a href="#" className="text-white underline text-sm">
          Rules
        </a>
        <a href="#" className="text-white underline text-sm">
          Bonus description
        </a>
      </div>
    </div>
  )
}

export default QuestOfTheDay
