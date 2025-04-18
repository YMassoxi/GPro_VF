"use client"

import { cn } from "@/lib/utils"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarDays, Clock, FileText, Plus, Target, Trash2 } from "lucide-react"

export default function PersonalDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [tasks, setTasks] = useState([
    { id: 1, title: "Renovar seguro do carro", completed: false, deadline: "15/05/2023" },
    { id: 2, title: "Consulta médica", completed: true, deadline: "10/04/2023" },
    { id: 3, title: "Pagar conta de luz", completed: false, deadline: "20/04/2023" },
    { id: 4, title: "Comprar mantimentos", completed: false, deadline: "05/04/2023" },
  ])

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestão Pessoal</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Adicionar
        </Button>
      </div>

      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tasks">Tarefas</TabsTrigger>
          <TabsTrigger value="calendar">Agenda</TabsTrigger>
          <TabsTrigger value="goals">Metas</TabsTrigger>
          <TabsTrigger value="documents">Documentos</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tarefas Pessoais</CardTitle>
              <CardDescription>Gerencie suas tarefas e compromissos pessoais</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input placeholder="Adicionar nova tarefa..." className="flex-1" />
                  <Button>Adicionar</Button>
                </div>
                <div className="space-y-2">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className={cn(
                        "flex items-center space-x-2 rounded-lg border p-3",
                        task.completed ? "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20" : "",
                      )}
                    >
                      <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
                      <div className="flex-1 space-y-1">
                        <p
                          className={cn(
                            "text-sm font-medium leading-none",
                            task.completed ? "line-through text-muted-foreground" : "",
                          )}
                        >
                          {task.title}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <Clock className="mr-1 h-3 w-3" /> Prazo: {task.deadline}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                {tasks.filter((t) => t.completed).length} de {tasks.length} tarefas concluídas
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agenda Pessoal</CardTitle>
              <CardDescription>Gerencie seus compromissos e eventos</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="p-4 md:border-r md:w-80">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>
                <div className="flex-1 p-4">
                  <h3 className="font-medium mb-4 flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Compromissos para {date?.toLocaleDateString("pt-BR")}
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Consulta Médica</div>
                        <div className="text-sm text-muted-foreground">10:00 - 11:00</div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">Hospital Central</div>
                    </div>
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Almoço com amigos</div>
                        <div className="text-sm text-muted-foreground">13:00 - 14:30</div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">Restaurante Bom Sabor</div>
                    </div>
                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" /> Adicionar Compromisso
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Metas e Objetivos</CardTitle>
              <CardDescription>Acompanhe suas metas pessoais e hábitos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Ler 12 livros este ano</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>3/12</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Economizar para viagem</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>AOA 150.000/300.000</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Praticar exercícios 3x por semana</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>2/3 esta semana</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "66%" }}></div>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Adicionar Meta
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documentos Pessoais</CardTitle>
              <CardDescription>Gerencie seus documentos importantes e lembretes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <h3 className="font-medium">Cartão de Cidadão</h3>
                        <p className="text-sm text-muted-foreground">Renovação: 15/06/2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium">Seguro Automóvel</h3>
                        <p className="text-sm text-muted-foreground">Renovação: 10/08/2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-500" />
                      <div>
                        <h3 className="font-medium">Contrato de Arrendamento</h3>
                        <p className="text-sm text-muted-foreground">Renovação: 01/12/2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                  </div>
                </div>

                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Adicionar Documento
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
