"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import PersonalDashboard from "@/components/personal-dashboard"
import ProfessionalDashboard from "@/components/professional-dashboard"
import BusinessDashboard from "@/components/business-dashboard"
import { BarChart3, CheckCircle2, Clock, CreditCard, FileText, Users } from "lucide-react"

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  // Ensure we're running on the client before rendering interactive elements
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full max-w-4xl mx-auto">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="personal">Pessoal</TabsTrigger>
              <TabsTrigger value="professional">Profissional</TabsTrigger>
              <TabsTrigger value="business">Empresarial</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tarefas Pendentes</CardTitle>
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">4 pessoais, 5 profissionais, 3 empresariais</p>
                    <Progress value={33} className="mt-3 h-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Compromissos Hoje</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Próximo: Reunião com cliente (14:00)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Finanças</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">AOA 250.000</div>
                    <p className="text-xs text-muted-foreground">+15% em relação ao mês anterior</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Atividades Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Fatura #1234 emitida",
                          time: "Hoje, 10:30",
                          type: "business",
                          icon: <FileText className="h-4 w-4" />,
                        },
                        {
                          title: "Reunião com equipe de design",
                          time: "Ontem, 15:00",
                          type: "professional",
                          icon: <Users className="h-4 w-4" />,
                        },
                        {
                          title: "Pagamento de seguro automóvel",
                          time: "2 dias atrás",
                          type: "personal",
                          icon: <CreditCard className="h-4 w-4" />,
                        },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center">
                          <div className="mr-4">
                            <Avatar className="h-9 w-9">
                              <AvatarFallback
                                className={
                                  activity.type === "business"
                                    ? "bg-blue-100 text-blue-500"
                                    : activity.type === "professional"
                                      ? "bg-green-100 text-green-500"
                                      : "bg-purple-100 text-purple-500"
                                }
                              >
                                {activity.icon}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                          </div>
                          <Badge
                            className="ml-auto"
                            variant={
                              activity.type === "business"
                                ? "default"
                                : activity.type === "professional"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {activity.type === "business"
                              ? "Empresarial"
                              : activity.type === "professional"
                                ? "Profissional"
                                : "Pessoal"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Calendário</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar mode="single" selected={new Date()} className="rounded-md border" />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="col-span-2">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle>Integrações</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-20 flex flex-col gap-1">
                        <span className="text-green-500 text-xl">WhatsApp</span>
                        <span className="text-xs text-muted-foreground">Comunicação rápida</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-1">
                        <span className="text-red-500 text-xl">Google Maps</span>
                        <span className="text-xs text-muted-foreground">Localização e rotas</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-1">
                        <span className="text-blue-500 text-xl">Multicaixa</span>
                        <span className="text-xs text-muted-foreground">Pagamentos</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col gap-1">
                        <span className="text-yellow-500 text-xl">Gmail</span>
                        <span className="text-xs text-muted-foreground">E-mail e calendário</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-2">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle>Estatísticas</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div>Tarefas Concluídas</div>
                          <div className="font-medium">65%</div>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div>Projetos Ativos</div>
                          <div className="font-medium">80%</div>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div>Metas Alcançadas</div>
                          <div className="font-medium">45%</div>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="personal">
              <PersonalDashboard />
            </TabsContent>

            <TabsContent value="professional">
              <ProfessionalDashboard />
            </TabsContent>

            <TabsContent value="business">
              <BusinessDashboard />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
