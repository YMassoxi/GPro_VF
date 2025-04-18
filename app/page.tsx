import type { Metadata } from "next"
import Dashboard from "@/components/dashboard"

export const metadata: Metadata = {
  title: "GestorPro - O Gestor Digital da Sua Vida",
  description:
    "Centralize a gestão da sua vida empresarial, profissional e privada num único ambiente funcional e intuitivo.",
}

export default function Home() {
  return <Dashboard />
}
