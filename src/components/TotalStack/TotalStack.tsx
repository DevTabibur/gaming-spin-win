import React from 'react'

const TotalStack: React.FC = () => {
  const totalStack = 0 // You can change this dynamically if needed

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#AA6426] to-[#D99B3F] p-2 rounded-lg shadow-lg max-w-72 w-full mx-auto">
      {/* Title */}
      <span className="text-white text-xl font-semibold mb-2">Total Stack</span>
      {/* Display Box */}
      <div className="bg-white px-4 py-2 w-full text-center max-w-40 mx-auto rounded-md shadow-inner">
        <span className="text-gray-900 font-bold">{totalStack} BDT</span>
      </div>
    </div>
  )
}

export default TotalStack
