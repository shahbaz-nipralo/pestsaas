"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import ExpensesTable from "@/components/expenses/ExpensesTable"
import ExpenseFilters from "@/components/expenses/ExpenseFilters"
import AddExpenseDialog from "@/components/expenses/AddExpenseDialog"
import ExpenseSummaryCards from "@/components/expenses/ExpenseSummaryCards"

// Sample data imports (would typically be in a separate file)
import { expenses } from "../../data/invoicesData"

export default function ExpensesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)

  const filteredExpenses = expenses.filter((expense) => {
    return (
      !searchQuery ||
      expense.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Expense Management</h1>
        <p className="text-muted-foreground">Track and manage business expenses</p>
      </div>

      <ExpenseSummaryCards expenses={expenses} />

      <div className="flex flex-col gap-4">
        <ExpenseFilters 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="flex justify-end">
          <AddExpenseDialog 
            open={isAddExpenseOpen}
            onOpenChange={setIsAddExpenseOpen}
          />
          <Button onClick={() => setIsAddExpenseOpen(true)} className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="mr-2 h-4 w-4 " />
            Add Expense
          </Button>
        </div>

        <ExpensesTable expenses={filteredExpenses} />
      </div>
    </div>
  )
}
