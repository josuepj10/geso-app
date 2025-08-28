"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Esquema de validación
const formSchema = z.object({
  username: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Debes ingresar un correo válido.",
  }),
  message: z.string().min(5, {
    message: "El mensaje debe tener al menos 5 caracteres.",
  }),
})

// Tipo de los valores del formulario
type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  //  Configuración del formulario
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  })

  //  Función al enviar
  function onSubmit(values: FormValues) {
    console.log("Datos enviados:", values)
    alert(`Gracias ${values.username}, tu mensaje fue enviado.`)
  }

  //  Retorno del formulario
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">CONTÁCTENOS</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">

          {/* Nombre */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-3">Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/*<FormDescription>Este será tu nombre público</FormDescription>*/}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Correo electrónico */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-3">Correo electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/*<FormDescription>Usaremos este correo para contactarte</FormDescription>*/}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mensaje */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-3">Comentarios</FormLabel>
                
                <FormControl>
                  <Textarea
                    placeholder="Dejanos saber tu opinión"
                    className="resize-none h-32" // <- altura de 32 (puedes ajustarla)
                    {...field}
                  />
                </FormControl>
                {/*<FormDescription>Tu mensaje debe tener al menos 5 caracteres</FormDescription>*/}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Botón de envío */}
          <Button type="submit" className="w-full flex items-center gap-2  bg-[#5B1780] hover:bg-[#8C339D] cursor-pointer ">
            <Send className="w-4 h-4" />
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  )
}