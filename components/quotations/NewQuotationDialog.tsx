"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

interface NewQuotationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  isGst: boolean
}

export default function NewQuotationDialog({ open, onOpenChange, isGst }: NewQuotationDialogProps) {
  const [items, setItems] = useState([{ description: "", quantity: 1, rate: 0, amount: 0 }])

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, rate: 0, amount: 0 }])
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New {isGst ? "GST" : "Non-GST"} Quotation</DialogTitle>
          <DialogDescription>Create a new quotation for a customer.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="customer">Customer</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Robert Johnson">Robert Johnson</SelectItem>
                <SelectItem value="Sarah Williams">Sarah Williams</SelectItem>
                <SelectItem value="Oakridge Apartments">Oakridge Apartments</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quotation-date">Quotation Date</Label>
              <Input id="quotation-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="valid-until">Valid Until</Label>
              <Input id="valid-until" type="date" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General Pest Control">General Pest Control</SelectItem>
                <SelectItem value="Termite Inspection">Termite Inspection</SelectItem>
                <SelectItem value="Rodent Control">Rodent Control</SelectItem>
                <SelectItem value="Mosquito Control">Mosquito Control</SelectItem>
                <SelectItem value="Bed Bug Treatment">Bed Bug Treatment</SelectItem>
                <SelectItem value="Commercial Pest Control">Commercial Pest Control</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Line Items</Label>
              <Button variant="outline" size="sm" className="h-8" onClick={addItem}>
                <Plus className="mr-1 h-3 w-3" /> Add Item
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[80px]">Qty</TableHead>
                  <TableHead className="w-[100px]">Rate</TableHead>
                  <TableHead className="w-[100px] text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input placeholder="Description" />
                    </TableCell>
                    <TableCell>
                      <Input type="number" min="1" defaultValue="1" />
                    </TableCell>
                    <TableCell>
                      <Input type="number" min="0" step="0.01" defaultValue="0.00" />
                    </TableCell>
                    <TableCell className="text-right">$0.00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {isGst && (
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>GST (10%):</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span>$0.00</span>
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Enter any additional notes for this quotation"
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => onOpenChange(false)}>
            Create Quotation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}