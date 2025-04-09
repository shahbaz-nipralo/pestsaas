"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReportDashboard } from "@/components/reports/ReportDashboard"
import { ReportList } from "./ReportList"
import { ReportFilters } from "@/components/reports/ReportFilters"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select"
  
import { 
  monthlyRevenue, 
  serviceBreakdown, 
  customerGrowth, 
  technicianPerformance,
  availableReports,
  COLORS 
} from "../../data/invoicesData"

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [dateRange, setDateRange] = useState<string>("year")

  // Filter reports based on selected filters and search query
  const filteredReports = availableReports.filter(report => {
    // Filter by category
    if (filterCategory !== "all" && report.category !== filterCategory) {
      return false
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        report.name.toLowerCase().includes(query) ||
        report.description.toLowerCase().includes(query) ||
        report.category.toLowerCase().includes(query)
      )
    }
    
    return true
  })

  // Get unique categories from reports
  const categories = Array.from(
    new Set(availableReports.map(report => report.category))
  )

  const handleGenerateReport = (reportId: number) => {
    console.log("Generating report:", reportId)
    // Add your report generation logic here
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            View and generate reports for your pest control business
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="flex-1">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="reports">Available Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="mt-4">
          <ReportDashboard
            monthlyRevenue={monthlyRevenue}
            serviceBreakdown={serviceBreakdown}
            customerGrowth={customerGrowth}
            technicianPerformance={technicianPerformance}
            colors={COLORS}
          />
        </TabsContent>
        
        <TabsContent value="reports" className="mt-4">
          <ReportList 
            reports={filteredReports} 
            onGenerate={handleGenerateReport} 
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}