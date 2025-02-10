"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerChildren } from "../utils/animations"

const Hero = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
          We Create
          <br />
          Digital Experiences
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 max-w-2xl">
          Innovative solutions for Development, Marketing, Consulting, and Content Creation.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a
            href="#services"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

