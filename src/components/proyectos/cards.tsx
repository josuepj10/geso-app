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
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="w-full max-h-90 aspect-[4.7/5] sm:w-72 sm:h-[281px] bg-white rounded-[17%] hover:shadow-2xl border border-gray-300
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
          <div className="flex text-center items-center justify-center text-[#374151] h-3/7 p-4">
            <span className="text-xl font-semibold">{title}</span>
          </div>
        </motion.div>
      </Link>
    </div>
  )
}