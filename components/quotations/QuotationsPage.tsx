"use client"

import { useState } from "react"
import { Download, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import QuotationTable from "./QuotationTable"
import NewQuotationDialog from "./NewQuotationDialog"
import QuotationFilters from "./QuotationFilters"

// Sample data imports (would typically be in a separate file)
import { gstQuotations, nonGstQuotations } from "../../data/invoicesData"

export default function QuotationsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [selectedQuotation, setSelectedQuotation] = useState<any | null>(null)
  const [isNewQuotationOpen, setIsNewQuotationOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("gst")
  const [isGst, setIsGst] = useState<boolean>(true)

  // Filter quotations based on selected filters and search query
  const filterQuotations = (quotations: any[]) => {
    return quotations.filter((quotation) => {
      // Filter by status
      if (filterStatus !== "all" && quotation.status !== filterStatus) {
        return false
      }
  
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          quotation.id.toLowerCase().includes(query) ||
          quotation.customer.toLowerCase().includes(query) ||
          quotation.email.toLowerCase().includes(query) ||
          quotation.service.toLowerCase().includes(query)
        )
      }
  
      return true
    })
  }
  

  const filteredGstQuotations = filterQuotations(gstQuotations)
  const filteredNonGstQuotations = filterQuotations(nonGstQuotations)

  const handleQuotationClick = (quotation: any) => {
    setSelectedQuotation(quotation)
  }

  const handleNewQuotation = (isGst: boolean) => {
    setIsGst(isGst)
    setIsNewQuotationOpen(true)
  }

  const resetFilters = () => {
    setFilterStatus("all")
    setSearchQuery("")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Quotations</h1>
          <p className="text-muted-foreground">Create and manage quotations for your pest control services</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" /> New Quotation
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleNewQuotation(true)}>GST Quotation</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNewQuotation(false)}>Non-GST Quotation</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <NewQuotationDialog 
        open={isNewQuotationOpen} 
        onOpenChange={setIsNewQuotationOpen} 
        isGst={isGst} 
      />

      <Tabs defaultValue="gst" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TabsList>
            <TabsTrigger value="gst">GST Quotations</TabsTrigger>
            <TabsTrigger value="non-gst">Non-GST Quotations</TabsTrigger>
          </TabsList>

          <QuotationFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filterStatus={filterStatus}
            onFilterStatusChange={setFilterStatus}
            onResetFilters={resetFilters}
          />
        </div>

        <TabsContent value="gst" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <QuotationTable
                quotations={filteredGstQuotations}
                type="gst"
                onQuotationClick={handleQuotationClick}
                selectedQuotation={selectedQuotation}
                onResetFilters={resetFilters}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="non-gst" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <QuotationTable
                quotations={filteredNonGstQuotations}
                type="non-gst"
                onQuotationClick={handleQuotationClick}
                selectedQuotation={selectedQuotation}
                onResetFilters={resetFilters}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}