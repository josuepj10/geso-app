// components/navbar/menuItems.ts
export type MenuItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const menuItems: MenuItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Nosotros",
    href: "/nosotros",
    children: [
      { label: "Sobre GESO", href: "/nosotros/mision-vision" },
      { label: "Competencias", href: "/nosotros/competencias-y-cap" },
      { label: "Principios", href: "/nosotros/principios" },
      { label: "Alianzas", href: "/nosotros/alianzas" },
    ],
  },
  { label: "Proyectos", href: "/proyecto" },
  { label: "Eventos", href: "/eventos" },
  { label: "GESO en medios", href: "/geso-en-medios" },
  { label: "Impacto", href: "/impacto" },
  { label: "Publicaciones", href: "/recursos" },
  { label: "Apóyanos", href: "/apoyo" },
]