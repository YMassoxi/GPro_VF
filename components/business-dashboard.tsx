"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ArrowDownUp,
  BarChart3,
  Building2,
  Calendar,
  CreditCard,
  FileText,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BusinessDashboard() {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Empresa ABC",
      contact: "João Silva",
      email: "joao@abc.com",
      phone: "+244 923 456 789",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Loja XYZ",
      contact: "Maria Oliveira",
      email: "maria@xyz.com",
      phone: "+244 912 345 678",
      status: "Ativo",
    },
    {
      id: 3,
      name: "Startup 123",
      contact: "Carlos Santos",
      email: "carlos@123.com",
      phone: "+244 934 567 890",
      status: "Inativo",
    },
  ])

  const [invoices, setInvoices] = useState([
    { id: "INV-001", client: "Empresa ABC", date: "10/03/2023", amount: 150000, status: "Pago" },
    { id: "INV-002", client: "Loja XYZ", date: "25/03/2023", amount: 75000, status: "Pendente" },
    { id: "INV-003", client: "Startup 123", date: "05/04/2023", amount: 225000, status: "Atrasado" },
    { id: "INV-004", client: "Empresa ABC", date: "15/04/2023", amount: 100000, status: "Pendente" },
  ])

  const [transactions, setTransactions] = useState([
    { id: 1, description: "Pagamento INV-001", date: "12/03/2023", amount: 150000, type: "entrada" },
    { id: 2, description: "Aluguel do Escritório", date: "01/04/2023", amount: 80000, type: "saída" },
    { id: 3, description: "Equipamentos", date: "05/04/2023", amount: 45000, type: "saída" },
    { id: 4, description: "Serviços de Internet", date: "10/04/2023", amount: 15000, type: "saída" },
  ])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestão Empresarial</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" /> Relatórios
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nova Fatura
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas do Mês</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">AOA 250.000</div>
            <p className="text-xs text-muted-foreground">+15% em relação ao mês anterior</p>
            <div className="mt-4 h-1 w-full bg-secondary">
              <div className="h-full bg-green-500" style={{ width: "75%" }}></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas do Mês</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">AOA 140.000</div>
            <p className="text-xs text-muted-foreground">-5% em relação ao mês anterior</p>
            <div className="mt-4 h-1 w-full bg-secondary">
              <div className="h-full bg-red-500" style={{ width: "45%" }}></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lucro Líquido</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">AOA 110.000</div>
            <p className="text-xs text-muted-foreground">+25% em relação ao mês anterior</p>
            <div className="mt-4 h-1 w-full bg-secondary">
              <div className="h-full bg-primary" style={{ width: "65%" }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-4">
        <TabsList>
          <TabsTrigger value="invoices">Faturas</TabsTrigger>
          <TabsTrigger value="clients">Clientes</TabsTrigger>
          <TabsTrigger value="finances">Finanças</TabsTrigger>
          <TabsTrigger value="contracts">Contratos</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Faturas</CardTitle>
                <CardDescription>Gerencie suas faturas e pagamentos</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="Pesquisar faturas..." className="w-[250px]" icon={<Search className="h-4 w-4" />} />
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Nova Fatura
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Nº</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.client}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell className="text-right">AOA {invoice.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            invoice.status === "Pago"
                              ? "outline"
                              : invoice.status === "Pendente"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Opções</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                            <DropdownMenuItem>Marcar como Pago</DropdownMenuItem>
                            <DropdownMenuItem>Enviar Lembrete</DropdownMenuItem>
                            <DropdownMenuItem>Excluir</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Mostrando 4 de 4 faturas</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Próximo
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Clientes e Parceiros</CardTitle>
                <CardDescription>Gerencie seus clientes e parceiros de negócios</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="Pesquisar clientes..." className="w-[250px]" />
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Novo Cliente
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Contacto</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">
                              {client.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          {client.name}
                        </div>
                      </TableCell>
                      <TableCell>{client.contact}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>
                        <Badge variant={client.status === "Ativo" ? "outline" : "secondary"}>{client.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Opções</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                            <DropdownMenuItem>Editar</DropdownMenuItem>
                            <DropdownMenuItem>Criar Fatura</DropdownMenuItem>
                            <DropdownMenuItem>Excluir</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finances" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Movimentos Financeiros</CardTitle>
                <CardDescription>Acompanhe suas entradas e saídas financeiras</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <ArrowDownUp className="mr-2 h-4 w-4" /> Filtrar
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Nova Transação
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <Badge variant={transaction.type === "entrada" ? "outline" : "secondary"}>
                          {transaction.type === "entrada" ? "Entrada" : "Saída"}
                        </Badge>
                      </TableCell>
                      <TableCell
                        className={`text-right ${transaction.type === "entrada" ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.type === "entrada" ? "+" : "-"} AOA {transaction.amount.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Opções</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-between">
                <div>
                  <p className="text-sm font-medium">Saldo Total</p>
                  <p className="text-2xl font-bold">AOA 10.000</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-right">Entradas</p>
                  <p className="text-xl font-bold text-green-600">AOA 150.000</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-right">Saídas</p>
                  <p className="text-xl font-bold text-red-600">AOA 140.000</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="contracts" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Contratos</CardTitle>
                <CardDescription>Gerencie seus contratos e acordos comerciais</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Contrato
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Contrato de Serviços - Empresa ABC</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Calendar className="mr-1 h-3 w-3" />
                          Vigência: 01/01/2023 a 31/12/2023
                        </p>
                      </div>
                    </div>
                    <Badge>Ativo</Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium">Valor:</span> AOA 500.000
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                      <Button size="sm">Renovar</Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Contrato de Marketing - Loja XYZ</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Calendar className="mr-1 h-3 w-3" />
                          Vigência: 01/03/2023 a 28/02/2024
                        </p>
                      </div>
                    </div>
                    <Badge>Ativo</Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium">Valor:</span> AOA 300.000
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                      <Button size="sm">Renovar</Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Contrato de Desenvolvimento - Startup 123</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Calendar className="mr-1 h-3 w-3" />
                          Vigência: 15/02/2023 a 15/08/2023
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">Expirado</Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium">Valor:</span> AOA 250.000
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                      <Button size="sm">Renovar</Button>
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
