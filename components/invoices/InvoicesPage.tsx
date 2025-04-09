"use client"

import { useState } from "react"
import { Calendar, Download, Edit, Filter, MoreHorizontal, Plus, Printer, Search, Send, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InvoiceTable from "@/components/invoices/InvoiceTable"
import NewInvoiceDialog from "@/components/invoices/NewInvoiceDialog"
import InvoiceFilters from "@/components/invoices/InvoiceFilters"


// Sample data imports (would typically be in a separate file)
import { gstInvoices, nonGstInvoices, splitInvoices } from "../../data/invoicesData"

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null)
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("gst")
  const [invoiceType, setInvoiceType] = useState<string>("gst")

  // Filter invoices based on selected filters and search query
  const filterInvoices = (invoices: any[]) => {
    return invoices.filter((invoice) => {
      // Filter by status
      if (filterStatus !== "all" && invoice.status !== filterStatus) {
        return false
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          invoice.id.toLowerCase().includes(query) ||
          invoice.customer.toLowerCase().includes(query) ||
          invoice.email.toLowerCase().includes(query) ||
          invoice.service.toLowerCase().includes(query)
        )
      }

      return true
    })
  }

  const filteredGstInvoices = filterInvoices(gstInvoices)
  const filteredNonGstInvoices = filterInvoices(nonGstInvoices)
  const filteredSplitInvoices = filterInvoices(splitInvoices)

  const handleInvoiceClick = (invoice: any) => {
    setSelectedInvoice(invoice)
  }

  const handleNewInvoice = (type: string) => {
    setInvoiceType(type)
    setIsNewInvoiceOpen(true)
  }

  const resetFilters = () => {
    setFilterStatus("all")
    setSearchQuery("")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground">Create and manage invoices for your pest control services</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" /> New Invoice
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleNewInvoice("gst")}>GST Invoice</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNewInvoice("non-gst")}>Non-GST Invoice</DropdownMenuItem>
              {/* <DropdownMenuItem onClick={() => handleNewInvoice("split")}>Split Invoice</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <NewInvoiceDialog 
        open={isNewInvoiceOpen} 
        onOpenChange={setIsNewInvoiceOpen} 
        type={invoiceType as 'gst' | 'non-gst' | 'split'} 
      />

      <Tabs defaultValue="gst" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TabsList>
            <TabsTrigger value="gst">GST Invoices</TabsTrigger>
            <TabsTrigger value="non-gst">Non-GST Invoices</TabsTrigger>
            {/* <TabsTrigger value="split">Split Invoices</TabsTrigger> */}
          </TabsList>

          <InvoiceFilters
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
              <InvoiceTable
                invoices={filteredGstInvoices}
                type="gst"
                onInvoiceClick={handleInvoiceClick}
                selectedInvoice={selectedInvoice}
                onResetFilters={resetFilters}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="non-gst" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <InvoiceTable
                invoices={filteredNonGstInvoices}
                type="non-gst"
                onInvoiceClick={handleInvoiceClick}
                selectedInvoice={selectedInvoice}
                onResetFilters={resetFilters}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="split" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <InvoiceTable
                invoices={filteredSplitInvoices}
                type="split"
                onInvoiceClick={handleInvoiceClick}
                selectedInvoice={selectedInvoice}
                onResetFilters={resetFilters}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}