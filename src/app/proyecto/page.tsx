"use client"

import { Reveal } from "@/components/reveal"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function proyectoPage() {
  return (
    <div>
      
      <h1>Esta es la página de proyectos. </h1> <br />
      <p>Se debe agregar cuadros con imagenes dentro y un título, para subdividir en (ciudadania, medios, migracion, violencia de género) </p>

      <Card>
        
        <CardContent>
          

          
          <Link href="historia">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 250 }}
            
          >
            
            <Image src="/images/logo.png" alt="logo" width={170} height={170} />
           
          </motion.div>  
          
        </Link>
          
          
          {/*<p>Card Content</p>*/}
        </CardContent>
        <CardFooter>
          <p>Migración</p>
        </CardFooter>
      </Card>



      
    </div>
  );
}