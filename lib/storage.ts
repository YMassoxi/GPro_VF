"use client"

// Função para verificar se o localStorage está disponível
const isLocalStorageAvailable = () => {
  try {
    const testKey = "__test__"
    localStorage.setItem(testKey, testKey)
    localStorage.removeItem(testKey)
    return true
  } catch (e) {
    return false
  }
}

// Função para salvar dados no localStorage
export const saveData = (key: string, data: any) => {
  if (!isLocalStorageAvailable()) return false

  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem(key, serializedData)
    return true
  } catch (e) {
    console.error("Erro ao salvar dados:", e)
    return false
  }
}

// Função para carregar dados do localStorage
export const loadData = (key: string) => {
  if (!isLocalStorageAvailable()) return null

  try {
    const serializedData = localStorage.getItem(key)
    if (serializedData === null) return null
    return JSON.parse(serializedData)
  } catch (e) {
    console.error("Erro ao carregar dados:", e)
    return null
  }
}

// Função para remover dados do localStorage
export const removeData = (key: string) => {
  if (!isLocalStorageAvailable()) return false

  try {
    localStorage.removeItem(key)
    return true
  } catch (e) {
    console.error("Erro ao remover dados:", e)
    return false
  }
}

// Função para limpar todos os dados do localStorage
export const clearAllData = () => {
  if (!isLocalStorageAvailable()) return false

  try {
    localStorage.clear()
    return true
  } catch (e) {
    console.error("Erro ao limpar dados:", e)
    return false
  }
}

// Função para obter todas as chaves do localStorage
export const getAllKeys = () => {
  if (!isLocalStorageAvailable()) return []

  try {
    return Object.keys(localStorage)
  } catch (e) {
    console.error("Erro ao obter chaves:", e)
    return []
  }
}

// Namespace para dados do GestorPro
export const GestorProStorage = {
  // Dados pessoais
  personal: {
    saveTasks: (tasks: any[]) => saveData("gp_personal_tasks", tasks),
    loadTasks: () => loadData("gp_personal_tasks") || [],
    saveEvents: (events: any[]) => saveData("gp_personal_events", events),
    loadEvents: () => loadData("gp_personal_events") || [],
    saveGoals: (goals: any[]) => saveData("gp_personal_goals", goals),
    loadGoals: () => loadData("gp_personal_goals") || [],
    saveDocuments: (docs: any[]) => saveData("gp_personal_documents", docs),
    loadDocuments: () => loadData("gp_personal_documents") || [],
  },

  // Dados profissionais
  professional: {
    saveProjects: (projects: any[]) => saveData("gp_professional_projects", projects),
    loadProjects: () => loadData("gp_professional_projects") || [],
    saveMeetings: (meetings: any[]) => saveData("gp_professional_meetings", meetings),
    loadMeetings: () => loadData("gp_professional_meetings") || [],
    saveClients: (clients: any[]) => saveData("gp_professional_clients", clients),
    loadClients: () => loadData("gp_professional_clients") || [],
    saveNotes: (notes: any[]) => saveData("gp_professional_notes", notes),
    loadNotes: () => loadData("gp_professional_notes") || [],
  },

  // Dados empresariais
  business: {
    saveInvoices: (invoices: any[]) => saveData("gp_business_invoices", invoices),
    loadInvoices: () => loadData("gp_business_invoices") || [],
    saveClients: (clients: any[]) => saveData("gp_business_clients", clients),
    loadClients: () => loadData("gp_business_clients") || [],
    saveTransactions: (transactions: any[]) => saveData("gp_business_transactions", transactions),
    loadTransactions: () => loadData("gp_business_transactions") || [],
    saveContracts: (contracts: any[]) => saveData("gp_business_contracts", contracts),
    loadContracts: () => loadData("gp_business_contracts") || [],
  },

  // Configurações do usuário
  settings: {
    saveSettings: (settings: any) => saveData("gp_settings", settings),
    loadSettings: () =>
      loadData("gp_settings") || {
        theme: "light",
        language: "pt",
        notifications: true,
      },
  },
}
