"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  CreditCard,
  Download,
  FileText,
  Filter,
  MoreHorizontal,
  Plus,
  Printer,
  Search,
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Sample data
const invoices = [
  {
    id: "INV-2025-001",
    customer: "Robert Johnson",
    email: "robert.johnson@example.com",
    amount: 150.0,
    status: "Paid",
    date: "2025-03-15",
    dueDate: "2025-03-30",
    paymentDate: "2025-03-20",
    paymentMethod: "Credit Card",
    service: "Quarterly Pest Control",
    items: [
      { description: "General Pest Control Service", quantity: 1, rate: 120.0, amount: 120.0 },
      { description: "Rodent Bait Stations", quantity: 2, rate: 15.0, amount: 30.0 },
    ],
  },
  {
    id: "INV-2025-002",
    customer: "Sarah Williams",
    email: "sarah.williams@example.com",
    amount: 225.0,
    status: "Paid",
    date: "2025-03-18",
    dueDate: "2025-04-02",
    paymentDate: "2025-03-25",
    paymentMethod: "Bank Transfer",
    service: "Termite Inspection",
    items: [
      { description: "Annual Termite Inspection", quantity: 1, rate: 175.0, amount: 175.0 },
      { description: "Moisture Barrier Installation", quantity: 1, rate: 50.0, amount: 50.0 },
    ],
  },
  {
    id: "INV-2025-003",
    customer: "Emily Davis",
    email: "emily.davis@example.com",
    amount: 95.0,
    status: "Pending",
    date: "2025-03-25",
    dueDate: "2025-04-09",
    paymentDate: null,
    paymentMethod: null,
    service: "Ant Treatment",
    items: [{ description: "Targeted Ant Treatment", quantity: 1, rate: 95.0, amount: 95.0 }],
  },
  {
    id: "INV-2025-004",
    customer: "Michael Brown",
    email: "michael.brown@example.com",
    amount: 180.0,
    status: "Pending",
    date: "2025-03-28",
    dueDate: "2025-04-12",
    paymentDate: null,
    paymentMethod: null,
    service: "Mosquito Control",
    items: [
      { description: "Mosquito Barrier Treatment", quantity: 1, rate: 150.0, amount: 150.0 },
      { description: "Standing Water Treatment", quantity: 2, rate: 15.0, amount: 30.0 },
    ],
  },
  {
    id: "INV-2025-005",
    customer: "Jennifer Miller",
    email: "jennifer.miller@example.com",
    amount: 350.0,
    status: "Paid",
    date: "2025-03-10",
    dueDate: "2025-03-25",
    paymentDate: "2025-03-15",
    paymentMethod: "Credit Card",
    service: "Bed Bug Treatment",
    items: [
      { description: "Bed Bug Heat Treatment", quantity: 1, rate: 300.0, amount: 300.0 },
      { description: "Follow-up Inspection", quantity: 1, rate: 50.0, amount: 50.0 },
    ],
  },
  {
    id: "INV-2025-006",
    customer: "Oakridge Apartments",
    email: "manager@oakridgeapts.com",
    amount: 750.0,
    status: "Overdue",
    date: "2025-03-01",
    dueDate: "2025-03-16",
    paymentDate: null,
    paymentMethod: null,
    service: "Commercial Pest Control",
    items: [{ description: "Monthly Commercial Service - 24 Units", quantity: 1, rate: 750.0, amount: 750.0 }],
  },
  {
    id: "INV-2025-007",
    customer: "Springfield Elementary School",
    email: "facilities@springfieldelementary.edu",
    amount: 1200.0,
    status: "Paid",
    date: "2025-03-05",
    dueDate: "2025-04-04",
    paymentDate: "2025-03-30",
    paymentMethod: "Check",
    service: "Commercial Pest Control",
    items: [
      { description: "Quarterly Commercial Service", quantity: 1, rate: 1000.0, amount: 1000.0 },
      { description: "Rodent Control Program", quantity: 1, rate: 200.0, amount: 200.0 },
    ],
  },
]

const subscriptions = [
  {
    id: "SUB-2025-001",
    customer: "Robert Johnson",
    email: "robert.johnson@example.com",
    plan: "Quarterly Pest Control",
    amount: 120.0,
    frequency: "Quarterly",
    status: "Active",
    nextBilling: "2025-06-15",
    startDate: "2024-03-15",
    paymentMethod: "Credit Card (ending in 4567)",
  },
  {
    id: "SUB-2025-002",
    customer: "Sarah Williams",
    email: "sarah.williams@example.com",
    plan: "Annual Termite Warranty",
    amount: 300.0,
    frequency: "Annually",
    status: "Active",
    nextBilling: "2026-03-18",
    startDate: "2023-03-18",
    paymentMethod: "Bank Account (ending in 9876)",
  },
  {
    id: "SUB-2025-003",
    customer: "Michael Brown",
    email: "michael.brown@example.com",
    plan: "Monthly Mosquito Control",
    amount: 85.0,
    frequency: "Monthly",
    status: "Active",
    nextBilling: "2025-04-28",
    startDate: "2024-06-28",
    paymentMethod: "Credit Card (ending in 1234)",
  },
  {
    id: "SUB-2025-004",
    customer: "Oakridge Apartments",
    email: "manager@oakridgeapts.com",
    plan: "Commercial Monthly Service",
    amount: 750.0,
    frequency: "Monthly",
    status: "Past Due",
    nextBilling: "2025-04-01",
    startDate: "2022-01-01",
    paymentMethod: "Bank Account (ending in 5432)",
  },
  {
    id: "SUB-2025-005",
    customer: "Springfield Elementary School",
    email: "facilities@springfieldelementary.edu",
    plan: "Commercial Quarterly Service",
    amount: 1000.0,
    frequency: "Quarterly",
    status: "Active",
    nextBilling: "2025-06-05",
    startDate: "2021-03-05",
    paymentMethod: "Check",
  },
  {
    id: "SUB-2025-006",
    customer: "Thomas Anderson",
    email: "thomas.anderson@example.com",
    plan: "Quarterly Pest Control",
    amount: 120.0,
    frequency: "Quarterly",
    status: "Canceled",
    nextBilling: null,
    startDate: "2023-06-10",
    paymentMethod: "Credit Card (ending in 8765)",
  },
]

export default function BillingPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null)
  const [selectedSubscription, setSelectedSubscription] = useState<any | null>(null)
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("invoices")

  // Filter invoices based on selected filters and search query
  const filteredInvoices = invoices.filter((invoice) => {
    // Filter by status
    if (filterStatus !== "all" && invoice.status !== filterStatus) {
      return false
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        invoice.id.toLowerCase().includes(query) ||
        invoice.customer.toLowerCase().includes(query) ||
        invoice.email.toLowerCase().includes(query) ||
        invoice.service.toLowerCase().includes(query)
      )
    }

    return true
  })

  // Filter subscriptions based on selected filters and search query
  const filteredSubscriptions = subscriptions.filter((subscription) => {
    // Filter by status
    if (filterStatus !== "all" && subscription.status !== filterStatus) {
      return false
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        subscription.id.toLowerCase().includes(query) ||
        subscription.customer.toLowerCase().includes(query) ||
        subscription.email.toLowerCase().includes(query) ||
        subscription.plan.toLowerCase().includes(query)
      )
    }

    return true
  })

  // Calculate total revenue
  const totalRevenue = invoices
    .filter((invoice) => invoice.status === "Paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  // Calculate pending revenue
  const pendingRevenue = invoices
    .filter((invoice) => invoice.status === "Pending" || invoice.status === "Overdue")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  // Calculate monthly recurring revenue
  const monthlyRecurringRevenue = subscriptions
    .filter((sub) => sub.status === "Active")
    .reduce((sum, sub) => {
      let monthlyAmount = sub.amount
      if (sub.frequency === "Quarterly") monthlyAmount = sub.amount / 3
      if (sub.frequency === "Annually") monthlyAmount = sub.amount / 12
      return sum + monthlyAmount
    }, 0)

  // Handle invoice selection
  const handleInvoiceClick = (invoice: any) => {
    setSelectedInvoice(invoice)
  }

  // Handle subscription selection
  const handleSubscriptionClick = (subscription: any) => {
    setSelectedSubscription(subscription)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
          <p className="text-muted-foreground">Manage invoices, payments, and subscriptions</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Dialog open={isNewInvoiceOpen} onOpenChange={setIsNewInvoiceOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" /> Create Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
                <DialogDescription>Create a new invoice for a customer.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="customer">Customer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {invoices.map((invoice) => (
                        <SelectItem key={invoice.customer} value={invoice.customer}>
                          {invoice.customer}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="invoice-date">Invoice Date</Label>
                    <Input id="invoice-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input id="due-date" type="date" />
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
                    <Button variant="outline" size="sm" className="h-8">
                      <Plus className="mr-1 h-3 w-3" /> Add Item
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead className="w-[100px]">Qty</TableHead>
                        <TableHead className="w-[100px]">Rate</TableHead>
                        <TableHead className="w-[100px] text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
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
                    </TableBody>
                  </Table>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter any additional notes for this invoice"
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsNewInvoiceOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsNewInvoiceOpen(false)}>
                  Create Invoice
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +12% from last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Revenue</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-500 flex items-center">
                <ArrowDown className="mr-1 h-3 w-3" />3 unpaid invoices
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${monthlyRecurringRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                +5% from last month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <Tabs defaultValue="invoices" className="w-full" onValueChange={setActiveTab}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <TabsList>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            </TabsList>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={activeTab === "invoices" ? "Search invoices..." : "Search subscriptions..."}
                  className="pl-8 w-full md:w-[200px] lg:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 gap-1">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="filter-status">Status</Label>
                        <Select value={filterStatus} onValueChange={setFilterStatus}>
                          <SelectTrigger id="filter-status">
                            <SelectValue placeholder="All Statuses" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            {activeTab === "invoices" ? (
                              <>
                                <SelectItem value="Paid">Paid</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Overdue">Overdue</SelectItem>
                              </>
                            ) : (
                              <>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Past Due">Past Due</SelectItem>
                                <SelectItem value="Canceled">Canceled</SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          setFilterStatus("all")
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <TabsContent value="invoices" className="mt-4">
            <Card>
              <CardContent className="p-0">
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
                    {filteredInvoices.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-10">
                          <p className="text-muted-foreground">No invoices found</p>
                          <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                              setFilterStatus("all")
                              setSearchQuery("")
                            }}
                          >
                            Reset Filters
                          </Button>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredInvoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium">{invoice.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-emerald-100 text-emerald-700">
                                  {invoice.customer
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
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
                          <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                invoice.status === "Paid"
                                  ? "bg-emerald-50 text-emerald-700"
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
                                  <Button variant="outline" size="sm" onClick={() => handleInvoiceClick(invoice)}>
                                    View
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[800px]">
                                  <DialogHeader>
                                    <DialogTitle>Invoice Details</DialogTitle>
                                  </DialogHeader>
                                  {selectedInvoice && (
                                    <div className="space-y-6">
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <h3 className="text-xl font-semibold">Invoice #{selectedInvoice.id}</h3>
                                          <p className="text-sm text-muted-foreground">
                                            Issued on {new Date(selectedInvoice.date).toLocaleDateString()}
                                          </p>
                                        </div>
                                        <Badge
                                          variant="outline"
                                          className={
                                            selectedInvoice.status === "Paid"
                                              ? "bg-emerald-50 text-emerald-700"
                                              : selectedInvoice.status === "Overdue"
                                                ? "bg-red-50 text-red-700"
                                                : "bg-amber-50 text-amber-700"
                                          }
                                        >
                                          {selectedInvoice.status}
                                        </Badge>
                                      </div>

                                      <div className="grid grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Bill To:</h4>
                                          <p className="font-medium">{selectedInvoice.customer}</p>
                                          <p className="text-sm">{selectedInvoice.email}</p>
                                        </div>
                                        <div className="text-right">
                                          <div className="space-y-1">
                                            <div className="flex justify-end">
                                              <p className="text-sm font-medium text-muted-foreground w-32">
                                                Invoice Date:
                                              </p>
                                              <p className="text-sm w-32">
                                                {new Date(selectedInvoice.date).toLocaleDateString()}
                                              </p>
                                            </div>
                                            <div className="flex justify-end">
                                              <p className="text-sm font-medium text-muted-foreground w-32">
                                                Due Date:
                                              </p>
                                              <p className="text-sm w-32">
                                                {new Date(selectedInvoice.dueDate).toLocaleDateString()}
                                              </p>
                                            </div>
                                            {selectedInvoice.paymentDate && (
                                              <div className="flex justify-end">
                                                <p className="text-sm font-medium text-muted-foreground w-32">
                                                  Payment Date:
                                                </p>
                                                <p className="text-sm w-32">
                                                  {new Date(selectedInvoice.paymentDate).toLocaleDateString()}
                                                </p>
                                              </div>
                                            )}
                                            {selectedInvoice.paymentMethod && (
                                              <div className="flex justify-end">
                                                <p className="text-sm font-medium text-muted-foreground w-32">
                                                  Payment Method:
                                                </p>
                                                <p className="text-sm w-32">{selectedInvoice.paymentMethod}</p>
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
                                            {selectedInvoice.items.map((item: any, index: number) => (
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
                                          <div className="flex justify-between w-[200px]">
                                            <p className="text-sm font-medium">Subtotal:</p>
                                            <p className="text-sm">${selectedInvoice.amount.toFixed(2)}</p>
                                          </div>
                                          <div className="flex justify-between w-[200px]">
                                            <p className="text-sm font-medium">Tax:</p>
                                            <p className="text-sm">$0.00</p>
                                          </div>
                                          <div className="flex justify-between w-[200px] border-t pt-1">
                                            <p className="text-base font-medium">Total:</p>
                                            <p className="text-base font-bold">${selectedInvoice.amount.toFixed(2)}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
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
                                    {selectedInvoice && selectedInvoice.status !== "Paid" && (
                                      <Button className="bg-emerald-600 hover:bg-emerald-700">Record Payment</Button>
                                    )}
                                  </DialogFooter>
                                </DialogContent>
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
                                    <Send className="mr-2 h-4 w-4" />
                                    <span>Send Invoice</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Download className="mr-2 h-4 w-4" />
                                    <span>Download PDF</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Printer className="mr-2 h-4 w-4" />
                                    <span>Print Invoice</span>
                                  </DropdownMenuItem>
                                  {invoice.status !== "Paid" && (
                                    <>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem>
                                        <CreditCard className="mr-2 h-4 w-4" />
                                        <span>Record Payment</span>
                                      </DropdownMenuItem>
                                    </>
                                  )}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscriptions" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subscription</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Next Billing</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubscriptions.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-10">
                          <p className="text-muted-foreground">No subscriptions found</p>
                          <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                              setFilterStatus("all")
                              setSearchQuery("")
                            }}
                          >
                            Reset Filters
                          </Button>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredSubscriptions.map((subscription) => (
                        <TableRow key={subscription.id}>
                          <TableCell className="font-medium">{subscription.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-emerald-100 text-emerald-700">
                                  {subscription.customer
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{subscription.customer}</p>
                                <p className="text-xs text-muted-foreground">{subscription.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="text-sm">{subscription.plan}</span>
                              <span className="text-xs text-muted-foreground">
                                Billed {subscription.frequency.toLowerCase()}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>${subscription.amount.toFixed(2)}</TableCell>
                          <TableCell>
                            {subscription.nextBilling ? (
                              new Date(subscription.nextBilling).toLocaleDateString()
                            ) : (
                              <span className="text-muted-foreground">N/A</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                subscription.status === "Active"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : subscription.status === "Past Due"
                                    ? "bg-red-50 text-red-700"
                                    : "bg-gray-100 text-gray-700"
                              }
                            >
                              {subscription.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleSubscriptionClick(subscription)}
                                  >
                                    View
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[600px]">
                                  <DialogHeader>
                                    <DialogTitle>Subscription Details</DialogTitle>
                                  </DialogHeader>
                                  {selectedSubscription && (
                                    <div className="space-y-6">
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <h3 className="text-xl font-semibold">{selectedSubscription.plan}</h3>
                                          <p className="text-sm text-muted-foreground">
                                            Started on {new Date(selectedSubscription.startDate).toLocaleDateString()}
                                          </p>
                                        </div>
                                        <Badge
                                          variant="outline"
                                          className={
                                            selectedSubscription.status === "Active"
                                              ? "bg-emerald-50 text-emerald-700"
                                              : selectedSubscription.status === "Past Due"
                                                ? "bg-red-50 text-red-700"
                                                : "bg-gray-100 text-gray-700"
                                          }
                                        >
                                          {selectedSubscription.status}
                                        </Badge>
                                      </div>

                                      <div className="grid grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Customer:</h4>
                                          <p className="font-medium">{selectedSubscription.customer}</p>
                                          <p className="text-sm">{selectedSubscription.email}</p>
                                        </div>
                                        <div>
                                          <h4 className="text-sm font-medium text-muted-foreground mb-1">
                                            Billing Details:
                                          </h4>
                                          <p className="text-sm">
                                            <span className="font-medium">
                                              ${selectedSubscription.amount.toFixed(2)}
                                            </span>
                                            <span className="text-muted-foreground">
                                              {" "}
                                              billed {selectedSubscription.frequency.toLowerCase()}
                                            </span>
                                          </p>
                                          <p className="text-sm">
                                            <span className="text-muted-foreground">Next billing: </span>
                                            <span>
                                              {selectedSubscription.nextBilling
                                                ? new Date(selectedSubscription.nextBilling).toLocaleDateString()
                                                : "N/A"}
                                            </span>
                                          </p>
                                          <p className="text-sm">
                                            <span className="text-muted-foreground">Payment method: </span>
                                            <span>{selectedSubscription.paymentMethod}</span>
                                          </p>
                                        </div>
                                      </div>

                                      <div className="border-t pt-4">
                                        <h4 className="text-sm font-medium mb-2">Subscription History</h4>
                                        <div className="space-y-2">
                                          <div className="flex items-center gap-2 text-sm">
                                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                            <span className="text-muted-foreground">Subscription started on </span>
                                            <span>{new Date(selectedSubscription.startDate).toLocaleDateString()}</span>
                                          </div>
                                          {selectedSubscription.status === "Canceled" && (
                                            <div className="flex items-center gap-2 text-sm">
                                              <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                              <span className="text-muted-foreground">Subscription canceled</span>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  <DialogFooter className="gap-2 sm:gap-0">
                                    {selectedSubscription && selectedSubscription.status === "Active" && (
                                      <>
                                        <Button variant="outline">Update Payment Method</Button>
                                        <Button variant="outline" className="text-red-600 hover:text-red-700">
                                          Cancel Subscription
                                        </Button>
                                      </>
                                    )}
                                    {selectedSubscription && selectedSubscription.status === "Past Due" && (
                                      <Button className="bg-emerald-600 hover:bg-emerald-700">Process Payment</Button>
                                    )}
                                  </DialogFooter>
                                </DialogContent>
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
                                    <FileText className="mr-2 h-4 w-4" />
                                    <span>View Invoices</span>
                                  </DropdownMenuItem>
                                  {subscription.status === "Active" && (
                                    <>
                                      <DropdownMenuItem>
                                        <CreditCard className="mr-2 h-4 w-4" />
                                        <span>Update Payment Method</span>
                                      </DropdownMenuItem>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem className="text-red-600">
                                        <span>Cancel Subscription</span>
                                      </DropdownMenuItem>
                                    </>
                                  )}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

