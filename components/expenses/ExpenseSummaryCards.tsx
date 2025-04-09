"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Receipt } from "lucide-react"

interface ExpenseSummaryCardsProps {
  expenses: {
    id: string
    amount: number
    status: string
  }[]
}

export default function ExpenseSummaryCards({ expenses }: ExpenseSummaryCardsProps) {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const approvedAmount = expenses
    .filter((e) => e.status === "Approved")
    .reduce((sum, e) => sum + e.amount, 0)
  const pendingAmount = expenses
    .filter((e) => e.status === "Pending")
    .reduce((sum, e) => sum + e.amount, 0)
  const rejectedAmount = expenses
    .filter((e) => e.status === "Rejected")
    .reduce((sum, e) => sum + e.amount, 0)

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-sm font-medium">Total Expenses</h3>
          <Receipt className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalAmount.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">For selected period</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-sm font-medium">Approved</h3>
          <Receipt className="h-4 w-4 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${approvedAmount.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {expenses.filter((e) => e.status === "Approved").length} expenses
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-sm font-medium">Pending</h3>
          <Receipt className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${pendingAmount.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {expenses.filter((e) => e.status === "Pending").length} expenses
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-sm font-medium">Rejected</h3>
          <Receipt className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${rejectedAmount.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {expenses.filter((e) => e.status === "Rejected").length} expenses
          </p>
        </CardContent>
      </Card>
    </div>
  )
}