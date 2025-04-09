"use client"

import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Printer, Download, Send } from "lucide-react"

interface InvoiceDialogProps {
  invoice: {
    id: string
    status: string
    date: string
    customer: string
    email: string
    service: string
    items: Array<{
      description: string
      quantity: number
      rate: number
      amount: number
    }>
    amount?: number
    totalAmount?: number
    baseAmount?: number
    gstAmount?: number
    dueDate: string
    paymentDate?: string | null
    paymentMethod?: string | null
    splits?: Array<{
      description: string
      amount: number
      status: string
      paymentDate: string | null
    }>
  }
  type: 'gst' | 'non-gst' | 'split'
}

export default function InvoiceDialog({ invoice, type }: InvoiceDialogProps) {
  return (
    <DialogContent className="sm:max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Invoice Details</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Invoice #{invoice.id}</h3>
            <p className="text-sm text-muted-foreground">
              Issued on {new Date(invoice.date).toLocaleDateString()}
            </p>
          </div>
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
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">Bill To:</h4>
            <p className="font-medium">{invoice.customer}</p>
            <p className="text-sm">{invoice.email}</p>
          </div>
          <div className="text-right">
            <div className="space-y-1">
              <div className="flex justify-end">
                <p className="text-sm font-medium text-muted-foreground w-32">Invoice Date:</p>
                <p className="text-sm w-32">{new Date(invoice.date).toLocaleDateString()}</p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm font-medium text-muted-foreground w-32">Due Date:</p>
                <p className="text-sm w-32">{new Date(invoice.dueDate).toLocaleDateString()}</p>
              </div>
              {invoice.paymentDate && (
                <div className="flex justify-end">
                  <p className="text-sm font-medium text-muted-foreground w-32">Payment Date:</p>
                  <p className="text-sm w-32">{new Date(invoice.paymentDate).toLocaleDateString()}</p>
                </div>
              )}
              {invoice.paymentMethod && (
                <div className="flex justify-end">
                  <p className="text-sm font-medium text-muted-foreground w-32">Payment Method:</p>
                  <p className="text-sm w-32">{invoice.paymentMethod}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Invoice Items</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Rate</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoice.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">${item.rate.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {type === 'split' && (
          <div>
            <h4 className="text-sm font-medium mb-2">Payment Splits</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice.splits?.map((split, index) => (
                  <TableRow key={index}>
                    <TableCell>{split.description}</TableCell>
                    <TableCell>${split.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          split.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }
                      >
                        {split.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {split.paymentDate
                        ? new Date(split.paymentDate).toLocaleDateString()
                        : "Pending"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="flex justify-between border-t pt-4">
          <div></div>
          <div className="space-y-1">
            {type === 'gst' && (
              <>
                <div className="flex justify-between w-[200px]">
                  <p className="text-sm font-medium">Subtotal:</p>
                  <p className="text-sm">${invoice.baseAmount?.toFixed(2)}</p>
                </div>
                <div className="flex justify-between w-[200px]">
                  <p className="text-sm font-medium">GST (10%):</p>
                  <p className="text-sm">${invoice.gstAmount?.toFixed(2)}</p>
                </div>
              </>
            )}
            <div className="flex justify-between w-[200px] border-t pt-1">
              <p className="text-base font-medium">Total:</p>
              <p className="text-base font-bold">${(invoice.amount || invoice.totalAmount || 0).toFixed(2)}</p>
            </div>
            {type === 'non-gst' && (
              <p className="text-xs text-muted-foreground text-right">Non-GST Invoice</p>
            )}
          </div>
        </div>
      </div>
      <DialogFooter className="gap-2 sm:gap-0">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm">
            <Send className="mr-2 h-4 w-4" />
            Send
          </Button>
        </div>
        {invoice.status !== "Paid" && (
          <Button className="bg-emerald-600 hover:bg-emerald-700">Record Payment</Button>
        )}
      </DialogFooter>
    </DialogContent>
  )
}