import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GestorPro - O Gestor Digital da Sua Vida",
    short_name: "GestorPro",
    description:
      "Centralize a gestão da sua vida empresarial, profissional e privada num único ambiente funcional e intuitivo.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0070f3",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
