// `GlobalLoader.tsx`
'use client'
import { useGlobalLoader } from '@/context/GlobalLoaderContext'
import React from 'react'

const Loader = () => {
  const { isLoading } = useGlobalLoader()

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="loader"></div>
      <p className="text-white mt-4">Loading...</p>
    </div>
  )
}

export default Loader
