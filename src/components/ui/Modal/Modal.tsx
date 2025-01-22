import React from 'react'
import CrossIcon from '@/assets/svg/crossIcon.svg'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion' // Import Framer Motion components

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
  size?: string // Size prop can be a string like '1200px' or '800px'
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = '600px', // Default size
}) => {
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Define animation variants for entrance and exit
  const modalVariants = {
    hidden: {
      scale: 0,
      rotate: -10,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      rotate: 10,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleClickOutside}
          initial={{ opacity: 0 }} // Initial opacity for backdrop
          animate={{ opacity: 1 }} // Animate to full opacity
          exit={{ opacity: 0 }} // Animate back to 0 on exit
          transition={{ duration: 0.3 }} // Duration of backdrop transition
        >
          <motion.div
            className={`rounded-[60px] border-[8px] bg-gradient-to-r from-[#341939] to-[#91469F]  border-white p-20 relative`}
            style={{ width: size }} // Apply the width directly
            variants={modalVariants}
            initial="hidden" // Start hidden
            animate="visible" // Animate to visible
            exit="exit" // Animate to exit
          >
            <button
              className="absolute -top-9 -right-7 hover:scale-110 transition-all duration-400 text-gray-500 hover:text-gray-800 p-4"
              onClick={onClose}
            >
              <Image
                src={CrossIcon.src}
                width={60}
                height={60}
                alt="cross_Icon"
              />
            </button>
            {title && <h3 className="text-lg font-bold mb-4">{title}</h3>}
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
