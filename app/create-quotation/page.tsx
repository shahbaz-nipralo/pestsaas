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

export default function CreateQuotationPage() {
  const router = useRouter()
  const [quotationType, setQuotationType] = useState<string>("gst")
  const [lineItems, setLineItems] = useState([{ description: "", quantity: 1, rate: 0, amount: 0 }])

  // Calculate subtotal, GST, and total
  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0)
  const gstAmount = quotationType === "gst" ? subtotal * 0.1 : 0
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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the quotation data
    // For now, we'll just navigate back to the quotations page
    router.push("/quotations")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 py-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/quotations")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Create New Quotation</h1>
          <p className="text-muted-foreground">Create a new quotation for a customer</p>
        </div>
      </div>

      <Tabs value={quotationType} onValueChange={setQuotationType} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="gst">GST Quotation</TabsTrigger>
          <TabsTrigger value="non-gst">Non-GST Quotation</TabsTrigger>
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

            {/* Quotation Details */}
            <Card>
              <CardHeader>
                <CardTitle>Quotation Details</CardTitle>
                <CardDescription>Enter the details for this quotation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quotation-date">Quotation Date</Label>
                    <Input id="quotation-date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="valid-until">Valid Until</Label>
                    <Input
                      id="valid-until"
                      type="date"
                      defaultValue={new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split("T")[0]}
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
              </CardContent>
            </Card>
          </div>

          {/* Line Items */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Line Items</CardTitle>
              <CardDescription>Add the services and products for this quotation</CardDescription>
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
                {quotationType === "gst" && (
                  <div className="flex justify-between w-[250px]">
                    <span className="font-medium">GST (10%):</span>
                    <span>${gstAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between w-[250px] border-t pt-2">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                {quotationType === "non-gst" && <p className="text-xs text-muted-foreground">Non-GST Quotation</p>}
              </div>
            </CardFooter>
          </Card>

          {/* Notes */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>Add any notes or terms for this quotation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Enter any additional notes for this quotation"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="terms">Terms and Conditions</Label>
                <Textarea
                  id="terms"
                  placeholder="Enter terms and conditions"
                  className="min-h-[100px]"
                  defaultValue="1. This quotation is valid for 30 days from the date of issue.
2. 50% deposit required to commence work.
3. Balance payment due upon completion of service.
4. All prices are in USD."
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline" type="button" onClick={() => router.push("/quotations")}>
              Cancel
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700" type="submit">
              Create Quotation
            </Button>
          </div>
        </form>
      </Tabs>
    </div>
  )
}
