"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  CreditCard,
  FileText,
  Home,
  LayoutDashboard,
  List,
  Settings,
  User,
  Users,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobile()

  // Ensure we're running on the client before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isMobile) {
    return null
  }

  return (
    <div className="hidden border-r bg-background md:block md:w-64">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <LayoutDashboard className="h-6 w-6" />
          <span className="text-lg font-bold">
            <span className="text-primary">Gestor</span>Pro
          </span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-64px)]">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Visão Geral</h2>
          <div className="space-y-1">
            <Button
              variant={activeTab === "overview" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Calendário
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <List className="mr-2 h-4 w-4" />
              Tarefas
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Áreas</h2>
          <div className="space-y-1">
            <Button
              variant={activeTab === "personal" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("personal")}
            >
              <User className="mr-2 h-4 w-4" />
              Pessoal
            </Button>
            <Button
              variant={activeTab === "professional" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("professional")}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Profissional
            </Button>
            <Button
              variant={activeTab === "business" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("business")}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Empresarial
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Ferramentas</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Documentos
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Finanças
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Contactos
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="mr-2 h-4 w-4" />
              Relatórios
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Sistema</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
