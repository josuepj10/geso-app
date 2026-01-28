"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/menu/navbar"
import { useEffect, useState } from "react"

export default function BarHeader() {
  
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full 
                 bg-white/90 backdrop-blur-sm
                 flex justify-center items-center 
                 lg:px-6 lg:py-2 
                 z-50 px-3 "
    >
      <Navbar />
    </motion.div>
  )
}