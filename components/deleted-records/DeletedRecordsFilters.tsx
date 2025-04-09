"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, Filter, RefreshCcw, Search } from "lucide-react"

interface DeletedRecordsFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  onRefresh: () => void
}

export default function DeletedRecordsFilters({
  searchQuery,
  onSearchChange,
  onRefresh,
}: DeletedRecordsFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="relative w-full sm:w-auto">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search deleted records..."
          className="w-full sm:w-[300px] pl-8"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Record Type</h4>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    <SelectItem value="customer">Customer</SelectItem>
                    <SelectItem value="appointment">Appointment</SelectItem>
                    <SelectItem value="invoice">Invoice</SelectItem>
                    <SelectItem value="technician">Technician</SelectItem>
                    <SelectItem value="quotation">Quotation</SelectItem>
                    <SelectItem value="lead">Lead</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Deleted By</h4>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All users" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All users</SelectItem>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Smith</SelectItem>
                    <SelectItem value="mike">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Recovery Status</h4>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All statuses</SelectItem>
                    <SelectItem value="recoverable">Recoverable</SelectItem>
                    <SelectItem value="non-recoverable">Non-recoverable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="sm">Apply Filters</Button>
            </div>
          </PopoverContent>
        </Popover>
        <Button variant="outline" className="w-full sm:w-auto" onClick={onRefresh}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>
    </div>
  )
}