"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, Download, Edit, MoreHorizontal, Printer, Send, Trash, } from "lucide-react"
import InvoiceDialog from "./InvoiceDialog"

interface Invoice {
  id: string
  customer: string
  email: string
  amount?: number
  totalAmount?: number
  status: string
  date: string
  dueDate: string
  paymentDate?: string | null
  paymentMethod?: string | null
  service: string
  items: Array<{
    description: string
    quantity: number
    rate: number
    amount: number
  }>
  splits?: Array<{
    description: string
    amount: number
    status: string
    paymentDate: string | null
    paymentMethod?: string | null
    dueDate?: string
  }>
  baseAmount?: number
  gstAmount?: number
}

interface InvoiceTableProps {
  invoices: Invoice[]
  type: 'gst' | 'non-gst' | 'split'
  onInvoiceClick: (invoice: Invoice) => void
  selectedInvoice: Invoice | null
  onResetFilters: () => void
}

export default function InvoiceTable({ invoices, type, onInvoiceClick, selectedInvoice, onResetFilters }: InvoiceTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-10">
              <p className="text-muted-foreground">No {type === 'gst' ? 'GST' : type === 'non-gst' ? 'Non-GST' : 'Split'} invoices found</p>
              <Button variant="outline" className="mt-4" onClick={onResetFilters}>
                Reset Filters
              </Button>
            </TableCell>
          </TableRow>
        ) : (
          invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {invoice.customer.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{invoice.customer}</p>
                    <p className="text-xs text-muted-foreground">{invoice.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{invoice.service}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm">{new Date(invoice.date).toLocaleDateString()}</span>
                  <span className="text-xs text-muted-foreground">
                    Due: {new Date(invoice.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </TableCell>
              <TableCell>${(invoice.amount || invoice.totalAmount || 0).toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    invoice.status === "Paid"
                      ? "bg-emerald-50 text-emerald-700"
                      : invoice.status === "Partially Paid"
                        ? "bg-blue-50 text-blue-700"
                        : invoice.status === "Overdue"
                          ? "bg-red-50 text-red-700"
                          : "bg-amber-50 text-amber-700"
                  }
                >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => onInvoiceClick(invoice)}>
                        View
                      </Button>
                    </DialogTrigger>
                    <InvoiceDialog invoice={invoice} type={type} />
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
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit Invoice</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Send className="mr-2 h-4 w-4" />
                        <span>Send to Customer</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download PDF</span>
                      </DropdownMenuItem>
                      {invoice.status !== "Paid" && (
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Record Payment</span>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete Invoice</span>
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