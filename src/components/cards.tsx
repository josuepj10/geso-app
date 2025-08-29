"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  image: string
  href: string
}

export default function Card({ title, image, href }: CardProps) {
  return (
    <div>
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="w-80 h-96 bg-white text-black rounded-[17%] shadow-2xl 
                     flex flex-col justify-between cursor-pointer overflow-hidden"
        >
          {/* Imagen superior */}
          <div className="relative w-full h-2/3">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Título (parte inferior = 1/3 del contenedor) */}
          <div className="flex items-center justify-center h-1/3 p-4">
            <span className="text-xl font-semibold">{title}</span>
          </div>
        </motion.div>
      </Link>
    </div>
  )
}