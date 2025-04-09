"use client"

import { useState } from "react"
import { Download, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import TechniciansTable from "./TechniciansTable"
import NewTechnicianDialog from "./NewTechnicianDialog"
import TechniciansFilters from "./TechniciansFilters"

// Sample data imports (would typically be in a separate file)
import { employee } from "../../data/invoicesData"

export default function EmployeesPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [selectedTechnician, setSelectedTechnician] = useState<any | null>(null)
  const [isNewTechnicianOpen, setIsNewTechnicianOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("all")

  // Filter technicians based on selected filters and search query
  const filteredTechnicians = employee.filter((technician) => {
    // Filter by status
    if (filterStatus !== "all" && technician.status !== filterStatus) {
      return false
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        technician.name.toLowerCase().includes(query) ||
        technician.email.toLowerCase().includes(query) ||
        technician.phone.includes(query) ||
        technician.role.toLowerCase().includes(query)
      )
    }

    return true
  })

  // Handle technician selection
  const handleTechnicianClick = (technician: any) => {
    setSelectedTechnician(technician)
  }

  // Handle reset filters
  const handleResetFilters = () => {
    setFilterStatus("all")
    setSearchQuery("")
  }

  // Handle refresh
  const handleRefresh = () => {
    // In a real app, this would refetch data
    setSearchQuery("")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between py-">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Employees</h1>
          <p className="text-muted-foreground">Manage your pest control technicians and their schedules</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <NewTechnicianDialog 
            open={isNewTechnicianOpen} 
            onOpenChange={setIsNewTechnicianOpen} 
          />
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => setIsNewTechnicianOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Employees
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <TechniciansFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterStatus={filterStatus}
          onFilterStatusChange={setFilterStatus}
          onResetFilters={handleResetFilters}
          onRefresh={handleRefresh}
        />

        <TechniciansTable
          technicians={filteredTechnicians}
          onTechnicianClick={handleTechnicianClick}
          selectedTechnician={selectedTechnician}
          onResetFilters={handleResetFilters}
        />
      </div>
    </div>
  )
}
