"use client"

import { Card, CardContent, CardHeader,CardTitle } from "@/components/ui/card"
import { UserPlus } from "lucide-react"

interface LeadStatsCardsProps {
  totalLeads: number
  newLeads: number
  activeLeads: number
  wonLeads: number
  conversionRate: number
}

export default function LeadStatsCards({
  totalLeads,
  newLeads,
  activeLeads,
  wonLeads,
  conversionRate
}: LeadStatsCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          <UserPlus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalLeads}</div>
          <p className="text-xs text-muted-foreground">All time</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">New Leads</CardTitle>
          <UserPlus className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{newLeads}</div>
          <p className="text-xs text-muted-foreground">Require follow-up</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
          <UserPlus className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeLeads}</div>
          <p className="text-xs text-muted-foreground">In progress</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <UserPlus className="h-4 w-4 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{conversionRate}%</div>
          <p className="text-xs text-muted-foreground">
            {wonLeads} won out of {totalLeads}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}