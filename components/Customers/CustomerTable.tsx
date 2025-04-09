"use client"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog,DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Calendar, Edit, MoreHorizontal, Trash, User } from "lucide-react"
import CustomerDialog from "./CustomerDialog"

interface Customer {
  id: number
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  status: string
  type: string
  lastService: string | null
  nextService: string | null
  notes: string
  serviceHistory: Array<{
    date: string
    type: string
    technician: string
    notes: string
  }>
}

interface CustomerTableProps {
  customers: Customer[]
  activeTab: string
  onCustomerClick: (customer: Customer) => void
  selectedCustomer: Customer | null
  onResetFilters: () => void
}

export default function CustomerTable({ customers, activeTab, onCustomerClick, selectedCustomer, onResetFilters }: CustomerTableProps) {
  const filteredCustomers = customers.filter((customer) => {
    if (activeTab === "all") return true
    if (activeTab === "residential" && customer.type === "Residential") return true
    if (activeTab === "commercial" && customer.type === "Commercial") return true
    return false
  })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Last Service</TableHead>
          <TableHead>Next Service</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredCustomers.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-10">
              <p className="text-muted-foreground">No customers found</p>
              <Button variant="outline" className="mt-4" onClick={onResetFilters}>
                Reset Filters
              </Button>
            </TableCell>
          </TableRow>
        ) : (
          filteredCustomers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {customer.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-xs text-muted-foreground">{customer.type}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <p className="text-sm">{customer.email}</p>
                  <p className="text-xs text-muted-foreground">{customer.phone}</p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-sm truncate max-w-[200px]">{customer.address}</p>
                <p className="text-xs text-muted-foreground">
                  {customer.city}, {customer.state} {customer.zip}
                </p>
              </TableCell>
              <TableCell>
                {customer.lastService ? (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{new Date(customer.lastService).toLocaleDateString()}</span>
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">N/A</span>
                )}
              </TableCell>
              <TableCell>
                {customer.nextService ? (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{new Date(customer.nextService).toLocaleDateString()}</span>
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">N/A</span>
                )}
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    customer.status === "Active"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-gray-100 text-gray-700"
                  }
                >
                  {customer.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => onCustomerClick(customer)}>
                        View
                      </Button>
                    </DialogTrigger>
                    <CustomerDialog customer={customer} />
                  </Dialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>View Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit Customer</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Schedule Service</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete Customer</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}