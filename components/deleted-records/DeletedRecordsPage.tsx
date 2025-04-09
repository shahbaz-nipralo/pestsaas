"use client"

import { useState } from "react"
import { Archive, Undo } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DeletedRecordsTable from "@/components/deleted-records/DeletedRecordsTable"
import DeletedRecordsFilters from "@/components/deleted-records/DeletedRecordsFilters"
import RestoreRecordsDialog from "@/components/deleted-records/RestoreRecordsDialog"

// Sample data imports (would typically be in a separate file)
import { deletedRecords } from "../../data/invoicesData"

export default function DeletedRecordsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRecords, setSelectedRecords] = useState<string[]>([])
  const [isRestoreDialogOpen, setIsRestoreDialogOpen] = useState(false)

  // Filter records based on active tab and search query
  const filterRecords = () => {
    return deletedRecords.filter((record) => {
      // Filter by tab
      if (activeTab !== "all" && record.recordType.toLowerCase() !== activeTab.toLowerCase()) {
        return false
      }

      // Filter by search query
      if (
        searchQuery &&
        !record.recordName.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !record.recordId.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      return true
    })
  }

  const filteredRecords = filterRecords()

  // Handle select all records
  const handleSelectAll = () => {
    if (selectedRecords.length === filteredRecords.length) {
      setSelectedRecords([])
    } else {
      setSelectedRecords(filteredRecords.map((record) => record.id))
    }
  }

  // Handle select individual record
  const handleSelectRecord = (id: string) => {
    if (selectedRecords.includes(id)) {
      setSelectedRecords(selectedRecords.filter((recordId) => recordId !== id))
    } else {
      setSelectedRecords([...selectedRecords, id])
    }
  }

  // Handle refresh
  const handleRefresh = () => {
    // In a real app, this would refetch data
    setSelectedRecords([])
    setSearchQuery("")
  }

  // Handle restore confirmation
  const handleRestoreConfirm = () => {
    // In a real app, this would call an API to restore records
    console.log("Restoring records:", selectedRecords)
    setSelectedRecords([])
    setIsRestoreDialogOpen(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Deleted Records</h1>
        <p className="text-muted-foreground">View and manage deleted records across the system</p>
      </div>

      <div className="flex flex-col gap-4">
        <DeletedRecordsFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onRefresh={handleRefresh}
        />

        <div className="flex justify-end">
          <RestoreRecordsDialog
            open={isRestoreDialogOpen}
            onOpenChange={setIsRestoreDialogOpen}
            selectedCount={selectedRecords.length}
            onConfirm={handleRestoreConfirm}
          />
          <Button
            variant="default"
            onClick={() => setIsRestoreDialogOpen(true)}
            disabled={selectedRecords.length === 0}
          >
            <Undo className="mr-2 h-4 w-4" />
            Restore Selected
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 md:grid-cols-7 lg:w-[600px]">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="customer">Customers</TabsTrigger>
            <TabsTrigger value="appointment">Appointments</TabsTrigger>
            <TabsTrigger value="invoice">Invoices</TabsTrigger>
            <TabsTrigger value="technician">Technicians</TabsTrigger>
            <TabsTrigger value="quotation">Quotations</TabsTrigger>
            <TabsTrigger value="lead">Leads</TabsTrigger>
          </TabsList>
          
          {["all", "customer", "appointment", "invoice", "technician", "quotation", "lead"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-4">
              <DeletedRecordsTable
                records={filteredRecords}
                selectedRecords={selectedRecords}
                onSelectAll={handleSelectAll}
                onSelectRecord={handleSelectRecord}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}