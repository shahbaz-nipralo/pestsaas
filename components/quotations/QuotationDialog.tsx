"use client"

import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Printer, Download, Send } from "lucide-react"

interface QuotationDialogProps {
  quotation: {
    id: string
    status: string
    date: string
    validUntil: string
    customer: string
    email: string
    service: string
    items: Array<{
      description: string
      quantity: number
      rate: number
      amount: number
    }>
    amount: number
    baseAmount?: number
    gstAmount?: number
  }
  type: 'gst' | 'non-gst'
}

export default function QuotationDialog({ quotation, type }: QuotationDialogProps) {
  return (
    <DialogContent className="sm:max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Quotation Details</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Quotation #{quotation.id}</h3>
            <p className="text-sm text-muted-foreground">
              Created on {new Date(quotation.date).toLocaleDateString()}
            </p>
          </div>
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
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">Customer:</h4>
            <p className="font-medium">{quotation.customer}</p>
            <p className="text-sm">{quotation.email}</p>
          </div>
          <div className="text-right">
            <div className="space-y-1">
              <div className="flex justify-end">
                <p className="text-sm font-medium text-muted-foreground w-32">Quotation Date:</p>
                <p className="text-sm w-32">{new Date(quotation.date).toLocaleDateString()}</p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm font-medium text-muted-foreground w-32">Valid Until:</p>
                <p className="text-sm w-32">{new Date(quotation.validUntil).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Quotation Items</h4>
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
              {quotation.items.map((item, index) => (
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

        <div className="flex justify-between border-t pt-4">
          <div></div>
          <div className="space-y-1">
            {type === 'gst' && (
              <>
                <div className="flex justify-between w-[200px]">
                  <p className="text-sm font-medium">Subtotal:</p>
                  <p className="text-sm">${quotation.baseAmount?.toFixed(2)}</p>
                </div>
                <div className="flex justify-between w-[200px]">
                  <p className="text-sm font-medium">GST (10%):</p>
                  <p className="text-sm">${quotation.gstAmount?.toFixed(2)}</p>
                </div>
              </>
            )}
            <div className="flex justify-between w-[200px] border-t pt-1">
              <p className="text-base font-medium">Total:</p>
              <p className="text-base font-bold">${quotation.amount.toFixed(2)}</p>
            </div>
            {type === 'non-gst' && (
              <p className="text-xs text-muted-foreground text-right">Non-GST Quotation</p>
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
        {quotation.status === "Pending" && (
          <div className="flex gap-2">
            <Button variant="outline" className="text-red-600 hover:text-red-700">
              Reject
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Approve</Button>
          </div>
        )}
      </DialogFooter>
    </DialogContent>
  )
}