// buttons.tsx
import { BiSolidDollarCircle } from 'react-icons/bi'
import { BsPatchExclamationFill } from 'react-icons/bs'
import { FaGift } from 'react-icons/fa'
import { FaRankingStar } from 'react-icons/fa6'
import { IoTrophySharp } from 'react-icons/io5'
import { LuFerrisWheel } from 'react-icons/lu'
import { PiNumberSevenBold } from 'react-icons/pi'

export const buttons = (
  activeButton: string,
  handleButtonClick: (id: string) => void
) => [
  {
    id: 'group1',
    tooltip: 'Prizes',
    icon: <BsPatchExclamationFill />,
    iconColor: 'white',
    activeIconColor: '#CBAB53',
    toolTipBgColor: '#48006A',
    isActive: activeButton === 'group1',
    onClick: () => handleButtonClick('group1'),
  },
  {
    id: 'group2',
    tooltip: 'Bonuses',
    icon: <FaGift />,
    iconColor: 'white',
    activeIconColor: '#CBAB53',
    toolTipBgColor: '#48006A',
    isActive: activeButton === 'group2',
    onClick: () => handleButtonClick('group2'),
  },
  {
    id: 'group3',
    tooltip: 'Weekly Reward',
    icon: <PiNumberSevenBold />,
    iconColor: 'white',
    activeIconColor: '#CBAB53',
    toolTipBgColor: '#48006A',
    isActive: activeButton === 'group3',
    onClick: () => handleButtonClick('group3'),
  },
  {
    id: 'group4',
    tooltip: 'Lucky Wheel',
    icon: <LuFerrisWheel />,
    iconColor: 'white',
    activeIconColor: '#CBAB53',
    toolTipBgColor: '#48006A',
    isActive: activeButton === 'group4',
    onClick: () => handleButtonClick('group4'),
  },
  {
    id: 'group5',
    tooltip: 'Quest of the day',
    icon: <IoTrophySharp />,
    iconColor: 'white',
    activeIconColor: '#CBAB53',
    toolTipBgColor: '#48006A',
    isActive: activeButton === 'group5',
    onClick: () => handleButtonClick('group5'),
  },
  {
    id: 'group6',
    tooltip: 'Extra Cashback',
    icon: <BiSolidDollarCircle />,
    iconColor: 'white',
    activeIconColor: '#CBAB53',
    toolTipBgColor: '#48006A',
    isActive: activeButton === 'group6',
    onClick: () => handleButtonClick('group6'),
  },
  {
    id: 'group7',
    tooltip: 'Place 09 Point 12000',
    icon: <FaRankingStar />,
    iconColor: 'white',
    activeIconColor: '#AF6A28',
    toolTipBgColor: '#48006A',
    isActive: activeButton === 'group7',
    onClick: () => handleButtonClick('group7'),
  },
]
