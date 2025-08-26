"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"

export default function BarHeader() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full 
                 bg-white/35 backdrop-blur-sm
                 text-gray-900 
                 flex justify-center items-center 
                 px-6 py-7 z-50"
    >
      <Navbar />
    </motion.div>
  )
}