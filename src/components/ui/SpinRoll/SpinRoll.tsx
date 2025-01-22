'use client'
import React, { useState } from 'react'
import './style.css'

const SpinRoll: React.FC = () => {
  const [wheelValue, setWheelValue] = useState(0)
  const [innerValue, setInnerValue] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)

  const spinWheel = () => {
    setIsSpinning(true)
    const newWheelValue = wheelValue + Math.ceil(Math.random() * -3600)
    const newInnerValue = innerValue + Math.ceil(Math.random() * 3600)

    setWheelValue(newWheelValue)
    setInnerValue(newInnerValue)

    // Stop spinning and pulse after 5 seconds
    setTimeout(() => {
      setIsSpinning(false)
    }, 5000)
  }

  return (
    <div className="relative flex justify-center items-center">
      {/* Pulse effect around the spinner while it's spinning */}
      {isSpinning && <div className="pulse-ring"></div>}

      <div className="container-spin">
        <div className="spinBtn" onClick={spinWheel}>
          Spin
        </div>

        <div
          className="wheel"
          style={{ transform: `rotate(${wheelValue}deg)` }}
        >
          <span style={{ '--i': 0 } as React.CSSProperties}></span>
          <span style={{ '--i': 1 } as React.CSSProperties}></span>
          <span style={{ '--i': 2 } as React.CSSProperties}></span>
          <span style={{ '--i': 3 } as React.CSSProperties}></span>
          <span style={{ '--i': 4 } as React.CSSProperties}></span>
          <div className="number">
            <b style={{ '--i': 0 } as React.CSSProperties}>5</b>
            <b style={{ '--i': 1 } as React.CSSProperties}>1</b>
            <b style={{ '--i': 2 } as React.CSSProperties}>4</b>
            <b style={{ '--i': 3 } as React.CSSProperties}>6</b>
            <b style={{ '--i': 4 } as React.CSSProperties}>2</b>
            <b style={{ '--i': 5 } as React.CSSProperties}>8</b>
            <b style={{ '--i': 6 } as React.CSSProperties}>7</b>
            <b style={{ '--i': 7 } as React.CSSProperties}>3</b>
          </div>
        </div>

        <div
          className="wheel inner_wheel"
          style={{ transform: `rotate(${innerValue}deg)` }}
        >
          <span style={{ '--i': 0 } as React.CSSProperties}></span>
          <span style={{ '--i': 1 } as React.CSSProperties}></span>
          <span style={{ '--i': 2 } as React.CSSProperties}></span>
          <span style={{ '--i': 3 } as React.CSSProperties}></span>
          <span style={{ '--i': 4 } as React.CSSProperties}></span>
          <div className="number">
            <b style={{ '--i': 0 } as React.CSSProperties}>5</b>
            <b style={{ '--i': 1 } as React.CSSProperties}>1</b>
            <b style={{ '--i': 2 } as React.CSSProperties}>4</b>
            <b style={{ '--i': 3 } as React.CSSProperties}>6</b>
            <b style={{ '--i': 4 } as React.CSSProperties}>2</b>
            <b style={{ '--i': 5 } as React.CSSProperties}>8</b>
            <b style={{ '--i': 6 } as React.CSSProperties}>7</b>
            <b style={{ '--i': 7 } as React.CSSProperties}>3</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpinRoll
