"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Plus, Trash } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function CreateInvoicePage() {
  const router = useRouter()
  const [invoiceType, setInvoiceType] = useState<string>("gst")
  const [lineItems, setLineItems] = useState([{ description: "", quantity: 1, rate: 0, amount: 0 }])
  const [splits, setSplits] = useState<{ description: string; amount: number }[]>([])
  const [isSplitInvoice, setIsSplitInvoice] = useState(false)

  // Calculate subtotal, GST, and total
  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0)
  const gstAmount = invoiceType === "gst" ? subtotal * 0.1 : 0
  const total = subtotal + gstAmount

  // Handle line item changes
  const handleItemChange = (index: number, field: string, value: any) => {
    const newItems = [...lineItems]

    if (field === "quantity" || field === "rate") {
      newItems[index][field] = Number.parseFloat(value) || 0
      newItems[index].amount = newItems[index].quantity * newItems[index].rate
    } else {
      newItems[index][field] = value
    }

    setLineItems(newItems)
  }

  // Add new line item
  const addLineItem = () => {
    setLineItems([...lineItems, { description: "", quantity: 1, rate: 0, amount: 0 }])
  }

  // Remove line item
  const removeLineItem = (index: number) => {
    if (lineItems.length > 1) {
      const newItems = [...lineItems]
      newItems.splice(index, 1)
      setLineItems(newItems)
    }
  }

  // Handle split changes
  const handleSplitChange = (index: number, field: string, value: any) => {
    const newSplits = [...splits]

    if (field === "amount") {
      newSplits[index][field] = Number.parseFloat(value) || 0
    } else {
      newSplits[index][field] = value
    }

    setSplits(newSplits)
  }

  // Add new split
  const addSplit = () => {
    setSplits([...splits, { description: "", amount: 0 }])
  }

  // Remove split
  const removeSplit = (index: number) => {
    if (splits.length > 0) {
      const newSplits = [...splits]
      newSplits.splice(index, 1)
      setSplits(newSplits)
    }
  }

  // Toggle split invoice
  const toggleSplitInvoice = () => {
    setIsSplitInvoice(!isSplitInvoice)
    if (!isSplitInvoice && splits.length === 0) {
      // Add initial split if enabling split invoice
      setSplits([{ description: "", amount: total }])
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the invoice data
    // For now, we'll just navigate back to the invoices page
    router.push("/invoices")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 py-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/invoices")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Create New Invoice</h1>
          <p className="text-muted-foreground">Create a new invoice for a customer</p>
        </div>
      </div>

      <Tabs value={invoiceType} onValueChange={setInvoiceType} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="gst">GST Invoice</TabsTrigger>
          <TabsTrigger value="non-gst">Non-GST Invoice</TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Select a customer or enter new customer details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customer">Customer</Label>
                  <Select>
                    <SelectTrigger id="customer">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="robert-johnson">Robert Johnson</SelectItem>
                      <SelectItem value="sarah-williams">Sarah Williams</SelectItem>
                      <SelectItem value="oakridge-apartments">Oakridge Apartments</SelectItem>
                      <SelectItem value="springfield-elementary">Springfield Elementary School</SelectItem>
                      <SelectItem value="emily-davis">Emily Davis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="customer@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Customer address" />
                </div>
              </CardContent>
            </Card>

            {/* Invoice Details */}
            <Card>
              <CardHeader>
                <CardTitle>Invoice Details</CardTitle>
                <CardDescription>Enter the details for this invoice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="invoice-date">Invoice Date</Label>
                    <Input id="invoice-date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input
                      id="due-date"
                      type="date"
                      defaultValue={new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().split("T")[0]}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select>
                    <SelectTrigger id="service">
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
                  <Label htmlFor="reference">Reference Number (Optional)</Label>
                  <Input id="reference" placeholder="Customer reference or PO number" />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Switch id="split-invoice" checked={isSplitInvoice} onCheckedChange={toggleSplitInvoice} />
                  <Label htmlFor="split-invoice">Split Invoice Payments</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Line Items */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Line Items</CardTitle>
              <CardDescription>Add the services and products for this invoice</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Description</TableHead>
                    <TableHead className="w-[15%]">Quantity</TableHead>
                    <TableHead className="w-[15%]">Rate</TableHead>
                    <TableHead className="w-[15%] text-right">Amount</TableHead>
                    <TableHead className="w-[15%]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lineItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Input
                          placeholder="Description"
                          value={item.description}
                          onChange={(e) => handleItemChange(index, "description", e.target.value)}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.rate}
                          onChange={(e) => handleItemChange(index, "rate", e.target.value)}
                        />
                      </TableCell>
                      <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeLineItem(index)}
                          disabled={lineItems.length === 1}
                        >
                          <Trash className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button variant="outline" size="sm" className="mt-4" onClick={addLineItem}>
                <Plus className="mr-2 h-4 w-4" /> Add Item
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-4">
              <div></div>
              <div className="space-y-2 text-right">
                <div className="flex justify-between w-[250px]">
                  <span className="font-medium">Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {invoiceType === "gst" && (
                  <div className="flex justify-between w-[250px]">
                    <span className="font-medium">GST (10%):</span>
                    <span>${gstAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between w-[250px] border-t pt-2">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                {invoiceType === "non-gst" && <p className="text-xs text-muted-foreground">Non-GST Invoice</p>}
              </div>
            </CardFooter>
          </Card>

          {/* Split Payments (if enabled) */}
          {isSplitInvoice && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Split Payments</CardTitle>
                <CardDescription>Divide the invoice into multiple payment portions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[60%]">Description</TableHead>
                      <TableHead className="w-[25%]">Amount</TableHead>
                      <TableHead className="w-[15%]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {splits.map((split, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Input
                            placeholder="Split description (e.g., Deposit, Insurance Portion)"
                            value={split.description}
                            onChange={(e) => handleSplitChange(index, "description", e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            min="0"
                            step="0.01"
                            value={split.amount}
                            onChange={(e) => handleSplitChange(index, "amount", e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => removeSplit(index)}>
                            <Trash className="h-4 w-4 text-muted-foreground" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button variant="outline" size="sm" className="mt-4" onClick={addSplit}>
                  <Plus className="mr-2 h-4 w-4" /> Add Split
                </Button>

                <div className="mt-4 flex justify-end">
                  <div className="space-y-2 text-right">
                    <div className="flex justify-between w-[250px]">
                      <span className="font-medium">Total Invoice:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between w-[250px]">
                      <span className="font-medium">Total Splits:</span>
                      <span>${splits.reduce((sum, split) => sum + split.amount, 0).toFixed(2)}</span>
                    </div>
                    {Math.abs(total - splits.reduce((sum, split) => sum + split.amount, 0)) > 0.01 && (
                      <div className="flex justify-between w-[250px] text-red-500">
                        <span className="font-medium">Difference:</span>
                        <span>
                          ${Math.abs(total - splits.reduce((sum, split) => sum + split.amount, 0)).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Notes */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>Add any notes or payment instructions for this invoice</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Enter any additional notes for this invoice"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment-instructions">Payment Instructions</Label>
                <Textarea
                  id="payment-instructions"
                  placeholder="Enter payment instructions"
                  className="min-h-[100px]"
                  defaultValue="Please make payment within 14 days of invoice date.
Bank Transfer: ABC Bank
Account Name: PestPro Services
Account Number: 12345678
Reference: Invoice Number"
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline" type="button" onClick={() => router.push("/invoices")}>
              Cancel
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700" type="submit">
              Create Invoice
            </Button>
          </div>
        </form>
      </Tabs>
    </div>
  )
}
