"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ReportFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filterCategory: string;
  onFilterCategoryChange: (value: string) => void;
  categories: string[];
}

export function ReportFilters({
  searchQuery,
  onSearchChange,
  filterCategory,
  onFilterCategoryChange,
  categories
}: ReportFiltersProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <Input
        type="text"
        placeholder="Search reports..."
        className="px-3 py-2 border rounded-md"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Select value={filterCategory} onValueChange={onFilterCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map(category => (
            <SelectItem key={category} value={category}>{category}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}