'use client'
import React, { createContext, useContext, useState } from 'react'

interface GlobalLoaderContextProps {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const GlobalLoaderContext = createContext<GlobalLoaderContextProps | undefined>(
  undefined
)

export const GlobalLoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true) // Default to loading state

  return (
    <GlobalLoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </GlobalLoaderContext.Provider>
  )
}

export const useGlobalLoader = () => {
  const context = useContext(GlobalLoaderContext)
  if (!context) {
    throw new Error(
      'useGlobalLoader must be used within a GlobalLoaderProvider'
    )
  }
  return context
}
