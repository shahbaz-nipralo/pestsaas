"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog,DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, Download, Edit, MoreHorizontal, Printer, Send, Trash } from "lucide-react"
import QuotationDialog from "./QuotationDialog"

interface Quotation {
  id: string
  customer: string
  email: string
  amount: number
  baseAmount?: number
  gstAmount?: number
  status: string
  date: string
  validUntil: string
  service: string
  items: Array<{
    description: string
    quantity: number
    rate: number
    amount: number
  }>
}

interface QuotationTableProps {
  quotations: Quotation[]
  type: 'gst' | 'non-gst'
  onQuotationClick: (quotation: Quotation) => void
  selectedQuotation: Quotation | null
  onResetFilters: () => void
}

export default function QuotationTable({ 
  quotations, 
  type, 
  onQuotationClick, 
  selectedQuotation, 
  onResetFilters 
}: QuotationTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Quotation</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quotations.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-10">
              <p className="text-muted-foreground">No {type === 'gst' ? 'GST' : 'Non-GST'} quotations found</p>
              <Button variant="outline" className="mt-4" onClick={onResetFilters}>
                Reset Filters
              </Button>
            </TableCell>
          </TableRow>
        ) : (
          quotations.map((quotation) => (
            <TableRow key={quotation.id}>
              <TableCell className="font-medium">{quotation.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {quotation.customer.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{quotation.customer}</p>
                    <p className="text-xs text-muted-foreground">{quotation.email}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{quotation.service}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm">{new Date(quotation.date).toLocaleDateString()}</span>
                  <span className="text-xs text-muted-foreground">
                    Valid until: {new Date(quotation.validUntil).toLocaleDateString()}
                  </span>
                </div>
              </TableCell>
              <TableCell>${quotation.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    quotation.status === "Approved"
                      ? "bg-emerald-50 text-emerald-700"
                      : quotation.status === "Rejected"
                        ? "bg-red-50 text-red-700"
                        : "bg-amber-50 text-amber-700"
                  }
                >
                  {quotation.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => onQuotationClick(quotation)}>
                        View
                      </Button>
                    </DialogTrigger>
                    <QuotationDialog quotation={quotation} type={type} />
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
                        <span>Edit Quotation</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Send className="mr-2 h-4 w-4" />
                        <span>Send to Customer</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download PDF</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete Quotation</span>
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