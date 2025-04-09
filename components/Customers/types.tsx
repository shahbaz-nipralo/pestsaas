// types/index.ts
export interface ServiceHistoryItem {
    date: string
    type: string
    technician: string
    notes: string
  }
  
  export interface Customer {
    id: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    status: "Active" | "Inactive"
    type: "Residential" | "Commercial"
    lastService: string | null
    nextService: string | null
    notes: string
    serviceHistory: ServiceHistoryItem[]
  }