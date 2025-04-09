"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LeadsTable from "@/components/leads/LeadsTable"
import LeadsFilters from "@/components/leads/LeadsFilters"
import LeadStatsCards from "@/components/leads/LeadStatsCards"
import { leads } from "../../data/invoicesData"

export default function LeadsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter leads based on active tab and search query
  const filteredLeads = leads.filter((lead) => {
    // Filter by tab
    if (activeTab !== "all" && activeTab !== "active" && lead.status.toLowerCase() !== activeTab.toLowerCase()) {
      return false
    }

    // Special case for "active" tab
    if (activeTab === "active" && (lead.status === "Lost" || lead.status === "Won")) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !lead.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !lead.company.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !lead.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !lead.id.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

  // Calculate statistics
  const newLeads = leads.filter((lead) => lead.status === "New").length
  const activeLeads = leads.filter((lead) => !["Lost", "Won"].includes(lead.status)).length
  const wonLeads = leads.filter((lead) => lead.status === "Won").length
  const conversionRate = leads.length > 0 ? Math.round((wonLeads / leads.length) * 100) : 0

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Lead Management</h1>
        <p className="text-muted-foreground">Track and manage potential customers</p>
      </div>

      <LeadStatsCards
        totalLeads={leads.length}
        newLeads={newLeads}
        activeLeads={activeLeads}
        wonLeads={wonLeads}
        conversionRate={conversionRate}
      />

      <div className="flex flex-col gap-4">
        <LeadsFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-[400px]">
            <TabsTrigger value="all">All Leads</TabsTrigger>
            {/* <TabsTrigger value="active">Active</TabsTrigger> */}
            {/* */}
            <TabsTrigger value="lost">Lost</TabsTrigger>
          </TabsList>
          {["all", "active", "won", "lost"].map(tab => (
            <TabsContent key={tab} value={tab} className="mt-4">
              <LeadsTable leads={filteredLeads} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}