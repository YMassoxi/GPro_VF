"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CalendarClock, Clock, FileText, Folder, MoreHorizontal, Plus, Users } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function ProfessionalDashboard() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Redesign do Website",
      client: "Empresa ABC",
      status: "Em progresso",
      deadline: "15/05/2023",
      progress: 65,
    },
    {
      id: 2,
      name: "Campanha de Marketing",
      client: "Loja XYZ",
      status: "Pendente",
      deadline: "30/06/2023",
      progress: 20,
    },
    {
      id: 3,
      name: "Desenvolvimento de App",
      client: "Startup 123",
      status: "Concluído",
      deadline: "01/03/2023",
      progress: 100,
    },
  ])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestão Profissional</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Novo Projeto
        </Button>
      </div>

      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projetos</TabsTrigger>
          <TabsTrigger value="meetings">Reuniões</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="notes">Notas</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.client}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Opções</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Arquivar</DropdownMenuItem>
                        <DropdownMenuItem>Excluir</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          project.status === "Em progresso"
                            ? "default"
                            : project.status === "Pendente"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {project.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {project.deadline}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progresso</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            project.progress === 100 ? "bg-green-500" : "bg-primary",
                          )}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="flex flex-col items-center justify-center h-[230px] border-dashed">
              <Button variant="ghost" className="h-20 w-20 rounded-full">
                <Plus className="h-10 w-10 text-muted-foreground" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Adicionar Projeto</p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reuniões Agendadas</CardTitle>
              <CardDescription>Gerencie suas reuniões e compromissos profissionais</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/20">ABC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Reunião com Empresa ABC</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <CalendarClock className="mr-1 h-3 w-3" />
                          Hoje, 14:00 - 15:30
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Notas
                      </Button>
                      <Button size="sm">Entrar</Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-100 text-blue-500">XYZ</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Apresentação para Loja XYZ</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <CalendarClock className="mr-1 h-3 w-3" />
                          Amanhã, 10:00 - 11:30
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Notas
                      </Button>
                      <Button size="sm">Entrar</Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-green-100 text-green-500">123</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Revisão de Projeto - Startup 123</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <CalendarClock className="mr-1 h-3 w-3" />
                          15/04/2023, 09:00 - 10:00
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Notas
                      </Button>
                      <Button size="sm">Entrar</Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Agendar Reunião
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Clientes</CardTitle>
                <CardDescription>Gerencie seus clientes e contactos profissionais</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Cliente
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Pesquisar clientes..." />

                <div className="rounded-lg border divide-y">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>ABC</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Empresa ABC</h3>
                          <p className="text-sm text-muted-foreground">João Silva - Diretor</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span>3 projetos ativos</span>
                      </div>
                      <Button variant="link" className="h-auto p-0 justify-start">
                        Ver detalhes
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>XYZ</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Loja XYZ</h3>
                          <p className="text-sm text-muted-foreground">Maria Oliveira - Marketing</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span>1 projeto ativo</span>
                      </div>
                      <Button variant="link" className="h-auto p-0 justify-start">
                        Ver detalhes
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>123</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Startup 123</h3>
                          <p className="text-sm text-muted-foreground">Carlos Santos - CEO</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span>2 projetos ativos</span>
                      </div>
                      <Button variant="link" className="h-auto p-0 justify-start">
                        Ver detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Notas Profissionais</CardTitle>
                <CardDescription>Organize suas notas e documentos por projeto</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Nova Nota
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Folder className="h-4 w-4 text-blue-500" />
                        <h3 className="font-medium">Empresa ABC</h3>
                      </div>
                      <Badge>3 notas</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="h-3 w-3" />
                        <span>Requisitos do Website</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="h-3 w-3" />
                        <span>Reunião Inicial</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="h-3 w-3" />
                        <span>Orçamento</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Folder className="h-4 w-4 text-green-500" />
                        <h3 className="font-medium">Loja XYZ</h3>
                      </div>
                      <Badge>2 notas</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="h-3 w-3" />
                        <span>Estratégia de Marketing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="h-3 w-3" />
                        <span>Cronograma</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Nova Nota</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Cancelar
                        </Button>
                        <Button size="sm">Salvar</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Título da nota" />
                      <div className="flex gap-2">
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Selecionar projeto</option>
                          <option value="abc">Empresa ABC</option>
                          <option value="xyz">Loja XYZ</option>
                          <option value="123">Startup 123</option>
                        </select>
                      </div>
                      <Textarea placeholder="Conteúdo da nota..." className="min-h-[150px]" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
