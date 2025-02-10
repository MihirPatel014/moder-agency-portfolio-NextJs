"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="fixed w-full z-50 bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ModernAgency
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <Link href="#services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Services
          </Link>
          <Link href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Contact
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header

