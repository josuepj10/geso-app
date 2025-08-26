"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"

export default function BarHeader() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-6 left-1/2 -translate-x-1/2 
                 w-3/5 bg-white text-gray-900 
                 px-6 py-4 rounded-2xl shadow-lg flex justify-center items-center z-50"
    >
      <Navbar />
    </motion.div>
  )
}