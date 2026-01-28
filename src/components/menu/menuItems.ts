// components/navbar/menuItems.ts
export type MenuItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

// 

export const menuItems: MenuItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Nosotros",
    href: "/nosotros",
    children: [
      { label: "Sobre GESO", href: "/nosotros/sobre-geso" },
      { label: "Competencias", href: "/nosotros/competencias-y-capacidades" },
      { label: "Principios", href: "/nosotros/principios" },
      { label: "Alianzas", href: "/nosotros/alianzas" },
    ],
  },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Publicaciones", href: "/publicaciones-y-recursos" },
  { label: "Apóyanos", href: "/apoyanos" },
]
// { label: "Eventos", href: "/eventos" },
// { label: "GESO en medios", href: "/geso-en-medios" },
// { label: "Impacto", href: "/impacto" },