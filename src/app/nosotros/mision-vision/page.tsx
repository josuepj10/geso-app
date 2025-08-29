"use client"


import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function misionPage() {
  return (


    <div className="flex justify-center my-20">
      <Image src="/images/development.png" alt="Construyendo" width={1000} height={1000} priority />
    </div>

  );
}      