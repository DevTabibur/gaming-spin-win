/* eslint-disable no-undef */
'use client'
import useScale from '@/hook/useScale'
import React from 'react'

interface DynamicButtonProps {
  id: string
  tooltip: string
  icon: JSX.Element // Accepts a JSX element
  iconColor: string
  activeIconColor: string
  toolTipBgColor: string
  isActive: boolean
  onClick: (id: string) => void
}

interface DynamicNavProps {
  buttons: DynamicButtonProps[]
  bgColor: string
  iconSize?: number
  onButtonClick: (id: string) => void // Change this line
}

// StickyNavigation Component
const StickyNavigation: React.FC<DynamicNavProps> = ({
  buttons,
  bgColor,
  iconSize = 24,
  onButtonClick,
}) => {
  const scale = useScale(800) // Use the hook with a breakpoint of 800px

  return (
    <div
      style={{
        transform: `scaleY(${scale})`,
        transformOrigin: 'center',
      }}
      className="absolute top-0 z-50 right-[3%] h-full"
    >
      <div className="flex items-center justify-end w-32 h-full">
        <div
          className="rounded-full divide-y  shadow-white/20 flex flex-col border border-white/30 shadow-md"
          style={{ backgroundColor: bgColor }}
        >
          {buttons.map((button, index) => (
            <div
              key={button.id}
              className={`relative text-white border-white/30 group py-8 px-7 ${
                index === 0 ? 'rounded-t-full' : ''
              } ${index === buttons.length - 1 ? `rounded-b-full` : 'cursor-pointer'}`}
              style={{
                backgroundColor:
                  index === buttons.length - 1
                    ? button.activeIconColor
                    : bgColor,
                transition: 'background-color 0.3s',
              }}
              onClick={() =>
                index !== buttons.length - 1 && onButtonClick(button.id)
              } // Only clickable if not last button
            >
              {/* Tooltip (hidden for the last button) */}
              {index !== buttons.length - 1 && (
                <div
                  className="absolute top-1/2 z-50 -left-56 border-l border-y border-white/20 text-nowrap text-center w-40 mr-3 px-35 py-4 rounded-md text-sm font-semibold text-white opacity-0 bg-gray-800 group-hover:opacity-100 hidden group-hover:block transition-opacity duration-300"
                  style={{
                    backgroundColor: button.toolTipBgColor,
                    transform: 'translateY(-50%)',
                  }}
                >
                  {button.tooltip}
                  <div
                    className="absolute drop-shadow-lg -right-10 top-2 z-[-1000] hidden w-0 h-0 group-hover:block"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                      position: 'absolute',
                      width: '52px',
                      height: '34px',
                      backgroundColor: bgColor,
                      transform: 'rotate(90deg)',
                    }}
                  ></div>
                </div>
              )}

              {/* Render the icon with dynamic size */}
              {React.cloneElement(button.icon, {
                size: iconSize,
                color: button.iconColor,
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StickyNavigation
