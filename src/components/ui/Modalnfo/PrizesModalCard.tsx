// components/PrizesModalCard.tsx
import React from 'react'
import CurveArrow from '@/assets/modal/svg/curveArrow.svg'
import PrizeCard from '../Cards/PrizeCard/PrizeCard'

const PrizesModalCard: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <h1 className="text-white font-[600] text-5xl  mb-7">Prizes</h1>
        <h4 className="text-white text-lg">Prizes you can win</h4>
      </div>

      <div className="space-y-10">
        {/* Prize Cards */}
        <PrizeCard
          title="Half your stake refunded"
          description="If your bet in the specified game loses, you will get half of your stake refunded."
          backgroundColor="bg-[#FC3236]"
          additionalContent={<h1 className="text-xl font-[400]">1/2</h1>}
        />

        <PrizeCard
          icon={CurveArrow.src}
          title="Half your stake refunded"
          description="If your bet in the specified game loses, you will get half of your stake refunded."
          backgroundColor="bg-[#EBC105]"
          additionalContent={
            <h1 className="text-[17px]  text-center font-[600]">1/2</h1>
          }
          iconWidth={30}
          iconHeight={30}
        />

        <PrizeCard
          title="Half your stake refunded"
          description="If your bet in the specified game loses, you will get half of your stake refunded."
          backgroundColor="bg-[#73E51C]"
          additionalContent={
            <h1 className="text-[17px]  text-center font-[600]">FREE BET</h1>
          }
        />

        <PrizeCard
          title="Half your stake refunded"
          description="If your bet in the specified game loses, you will get half of your stake refunded."
          backgroundColor="bg-[#0187FE]"
          additionalContent={
            <h1 className="text-[17px]  text-center font-[600]">FREE SKIN</h1>
          }
        />
      </div>
    </div>
  )
}

export default PrizesModalCard
