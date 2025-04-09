// "use client"

// import { useState } from "react"
// import { Calendar, Download, Edit, Filter, MoreHorizontal, Plus, Search, Trash, User } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// // Sample data
// const customers = [
//   {
//     id: 1,
//     name: "Robert Johnson",
//     email: "robert.johnson@example.com",
//     phone: "(555) 123-4567",
//     address: "123 Main St, Apt 4B",
//     city: "Springfield",
//     state: "IL",
//     zip: "62704",
//     status: "Active",
//     type: "Residential",
//     lastService: "2025-03-15",
//     nextService: "2025-04-15",
//     notes: "Customer prefers afternoon appointments. Has a dog that needs to be secured during service.",
//     serviceHistory: [
//       {
//         date: "2025-03-15",
//         type: "Quarterly Pest Control",
//         technician: "Mike Smith",
//         notes: "Treated for ants in kitchen and bathroom.",
//       },
//       {
//         date: "2024-12-10",
//         type: "Quarterly Pest Control",
//         technician: "David Chen",
//         notes: "Treated exterior perimeter.",
//       },
//       {
//         date: "2024-09-05",
//         type: "Quarterly Pest Control",
//         technician: "Lisa Wong",
//         notes: "Customer reported spiders in basement.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Sarah Williams",
//     email: "sarah.williams@example.com",
//     phone: "(555) 987-6543",
//     address: "456 Oak Ave",
//     city: "Springfield",
//     state: "IL",
//     zip: "62701",
//     status: "Active",
//     type: "Residential",
//     lastService: "2025-03-20",
//     nextService: "2025-04-20",
//     notes: "Has termite warranty. Annual inspection due in November.",
//     serviceHistory: [
//       {
//         date: "2025-03-20",
//         type: "Termite Inspection",
//         technician: "David Chen",
//         notes: "No signs of termite activity.",
//       },
//       {
//         date: "2024-11-15",
//         type: "Annual Termite Inspection",
//         technician: "Mike Smith",
//         notes: "Renewed warranty for another year.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Emily Davis",
//     email: "emily.davis@example.com",
//     phone: "(555) 456-7890",
//     address: "789 Pine Rd",
//     city: "Springfield",
//     state: "IL",
//     zip: "62702",
//     status: "Active",
//     type: "Residential",
//     lastService: "2025-03-10",
//     nextService: "2025-04-10",
//     notes: "Recurring ant problem in bathroom and kitchen.",
//     serviceHistory: [
//       {
//         date: "2025-03-10",
//         type: "Ant Treatment",
//         technician: "Lisa Wong",
//         notes: "Applied gel bait in kitchen and bathroom.",
//       },
//       {
//         date: "2025-02-15",
//         type: "Ant Treatment",
//         technician: "Mike Smith",
//         notes: "Customer reported ants returning.",
//       },
//       {
//         date: "2025-01-20",
//         type: "Initial Treatment",
//         technician: "Lisa Wong",
//         notes: "Full home inspection and initial treatment.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Michael Brown",
//     email: "michael.brown@example.com",
//     phone: "(555) 234-5678",
//     address: "321 Cedar Ln",
//     city: "Springfield",
//     state: "IL",
//     zip: "62703",
//     status: "Active",
//     type: "Residential",
//     lastService: "2025-03-05",
//     nextService: "2025-04-05",
//     notes: "Monthly mosquito treatment for backyard.",
//     serviceHistory: [
//       {
//         date: "2025-03-05",
//         type: "Mosquito Control",
//         technician: "James Taylor",
//         notes: "Treated yard perimeter and standing water areas.",
//       },
//       {
//         date: "2025-02-05",
//         type: "Mosquito Control",
//         technician: "James Taylor",
//         notes: "Winter treatment for dormant mosquitoes.",
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Jennifer Miller",
//     email: "jennifer.miller@example.com",
//     phone: "(555) 876-5432",
//     address: "654 Birch St",
//     city: "Springfield",
//     state: "IL",
//     zip: "62704",
//     status: "Active",
//     type: "Residential",
//     lastService: "2025-03-25",
//     nextService: "2025-04-15",
//     notes: "Bed bug treatment series in progress. Second of three treatments completed.",
//     serviceHistory: [
//       {
//         date: "2025-03-25",
//         type: "Bed Bug Treatment",
//         technician: "Mike Smith",
//         notes: "Second treatment completed. Customer following preparation instructions well.",
//       },
//       {
//         date: "2025-03-11",
//         type: "Bed Bug Treatment",
//         technician: "David Chen",
//         notes: "Initial treatment. Heavy infestation in bedroom.",
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "Oakridge Apartments",
//     email: "manager@oakridgeapts.com",
//     phone: "(555) 345-6789",
//     address: "987 Elm St",
//     city: "Springfield",
//     state: "IL",
//     zip: "62701",
//     status: "Active",
//     type: "Commercial",
//     lastService: "2025-03-18",
//     nextService: "2025-04-18",
//     notes: "Monthly service for 24-unit apartment complex. Contact property manager upon arrival.",
//     serviceHistory: [
//       {
//         date: "2025-03-18",
//         type: "Commercial Pest Control",
//         technician: "David Chen",
//         notes: "Treated common areas and exterior.",
//       },
//       {
//         date: "2025-02-18",
//         type: "Commercial Pest Control",
//         technician: "Lisa Wong",
//         notes: "Treated units 103, 108, and 212 for reported cockroach issues.",
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Springfield Elementary School",
//     email: "facilities@springfieldelementary.edu",
//     phone: "(555) 654-3210",
//     address: "741 Maple Ave",
//     city: "Springfield",
//     state: "IL",
//     zip: "62702",
//     status: "Active",
//     type: "Commercial",
//     lastService: "2025-03-22",
//     nextService: "2025-04-22",
//     notes: "Monthly service. Must be performed after school hours or on weekends.",
//     serviceHistory: [
//       {
//         date: "2025-03-22",
//         type: "Commercial Pest Control",
//         technician: "Mike Smith",
//         notes: "Treated cafeteria and exterior perimeter.",
//       },
//       {
//         date: "2025-02-22",
//         type: "Commercial Pest Control",
//         technician: "James Taylor",
//         notes: "Focused on rodent prevention in storage areas.",
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Thomas Anderson",
//     email: "thomas.anderson@example.com",
//     phone: "(555) 987-1234",
//     address: "852 Walnut Dr",
//     city: "Springfield",
//     state: "IL",
//     zip: "62703",
//     status: "Inactive",
//     type: "Residential",
//     lastService: "2024-12-15",
//     nextService: null,
//     notes: "Customer moved out of service area. Final service completed in December 2024.",
//     serviceHistory: [
//       {
//         date: "2024-12-15",
//         type: "General Pest Control",
//         technician: "David Chen",
//         notes: "Final service before customer relocation.",
//       },
//       { date: "2024-09-15", type: "General Pest Control", technician: "Lisa Wong", notes: "Quarterly service." },
//     ],
//   },
// ]

// export default function CustomersPage() {
//   const [searchQuery, setSearchQuery] = useState<string>("")
//   const [filterStatus, setFilterStatus] = useState<string>("all")
//   const [filterType, setFilterType] = useState<string>("all")
//   const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null)
//   const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false)
//   const [activeTab, setActiveTab] = useState<string>("all")

//   // Filter customers based on selected filters and search query
//   const filteredCustomers = customers.filter((customer) => {
//     // Filter by status
//     if (filterStatus !== "all" && customer.status !== filterStatus) {
//       return false
//     }

//     // Filter by type
//     if (filterType !== "all" && customer.type !== filterType) {
//       return false
//     }

//     // Filter by search query
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase()
//       return (
//         customer.name.toLowerCase().includes(query) ||
//         customer.email.toLowerCase().includes(query) ||
//         customer.phone.includes(query) ||
//         customer.address.toLowerCase().includes(query)
//       )
//     }

//     return true
//   })

//   // Handle customer selection
//   const handleCustomerClick = (customer: any) => {
//     setSelectedCustomer(customer)
//   }

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
//           <p className="text-muted-foreground">Manage your customer database and service history</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button variant="outline">
//             <Download className="mr-2 h-4 w-4" /> Export
//           </Button>
//           <Dialog open={isNewCustomerOpen} onOpenChange={setIsNewCustomerOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-emerald-600 hover:bg-emerald-700">
//                 <Plus className="mr-2 h-4 w-4" /> Add Customer
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[600px]">
//               <DialogHeader>
//                 <DialogTitle>Add New Customer</DialogTitle>
//                 <DialogDescription>Enter customer details to add them to your database.</DialogDescription>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name">Customer Name</Label>
//                     <Input id="name" placeholder="Enter full name" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="type">Customer Type</Label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="Residential">Residential</SelectItem>
//                         <SelectItem value="Commercial">Commercial</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" placeholder="email@example.com" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input id="phone" placeholder="(555) 123-4567" />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="address">Service Address</Label>
//                   <Input id="address" placeholder="Street address" />
//                 </div>
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="city">City</Label>
//                     <Input id="city" placeholder="City" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="state">State</Label>
//                     <Input id="state" placeholder="State" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="zip">ZIP Code</Label>
//                     <Input id="zip" placeholder="ZIP" />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="notes">Notes</Label>
//                   <Textarea
//                     id="notes"
//                     placeholder="Enter any special instructions or notes"
//                     className="min-h-[100px]"
//                   />
//                 </div>
//               </div>
//               <DialogFooter>
//                 <Button variant="outline" onClick={() => setIsNewCustomerOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsNewCustomerOpen(false)}>
//                   Add Customer
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <div className="flex flex-col gap-4">
//         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <Tabs defaultValue="all" className="w-[400px]" onValueChange={setActiveTab}>
//             <TabsList>
//               <TabsTrigger value="all">All Customers</TabsTrigger>
//               <TabsTrigger value="residential">Residential</TabsTrigger>
//               <TabsTrigger value="commercial">Commercial</TabsTrigger>
//             </TabsList>
//           </Tabs>

//           <div className="flex flex-col gap-4 sm:flex-row">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search customers..."
//                 className="pl-8 w-full md:w-[200px] lg:w-[300px]"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             <div className="flex items-center gap-2">
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button variant="outline" size="sm" className="h-9 gap-1">
//                     <Filter className="h-4 w-4" />
//                     Filter
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-[200px] p-4">
//                   <div className="space-y-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="filter-status">Status</Label>
//                       <Select value={filterStatus} onValueChange={setFilterStatus}>
//                         <SelectTrigger id="filter-status">
//                           <SelectValue placeholder="All Statuses" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="all">All Statuses</SelectItem>
//                           <SelectItem value="Active">Active</SelectItem>
//                           <SelectItem value="Inactive">Inactive</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="filter-type">Customer Type</Label>
//                       <Select value={filterType} onValueChange={setFilterType}>
//                         <SelectTrigger id="filter-type">
//                           <SelectValue placeholder="All Types" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="all">All Types</SelectItem>
//                           <SelectItem value="Residential">Residential</SelectItem>
//                           <SelectItem value="Commercial">Commercial</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="w-full"
//                       onClick={() => {
//                         setFilterStatus("all")
//                         setFilterType("all")
//                       }}
//                     >
//                       Reset Filters
//                     </Button>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             </div>
//           </div>
//         </div>

//         <Card>
//           <CardContent className="p-0">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Customer</TableHead>
//                   <TableHead>Contact</TableHead>
//                   <TableHead>Address</TableHead>
//                   <TableHead>Last Service</TableHead>
//                   <TableHead>Next Service</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredCustomers.length === 0 ? (
//                   <TableRow>
//                     <TableCell colSpan={7} className="text-center py-10">
//                       <p className="text-muted-foreground">No customers found</p>
//                       <Button
//                         variant="outline"
//                         className="mt-4"
//                         onClick={() => {
//                           setFilterStatus("all")
//                           setFilterType("all")
//                           setSearchQuery("")
//                         }}
//                       >
//                         Reset Filters
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ) : (
//                   filteredCustomers
//                     .filter((customer) => {
//                       if (activeTab === "all") return true
//                       if (activeTab === "residential" && customer.type === "Residential") return true
//                       if (activeTab === "commercial" && customer.type === "Commercial") return true
//                       return false
//                     })
//                     .map((customer) => (
//                       <TableRow key={customer.id}>
//                         <TableCell>
//                           <div className="flex items-center gap-3">
//                             <Avatar className="h-9 w-9">
//                               <AvatarFallback className="bg-emerald-100 text-emerald-700">
//                                 {customer.name
//                                   .split(" ")
//                                   .map((n) => n[0])
//                                   .join("")}
//                               </AvatarFallback>
//                             </Avatar>
//                             <div>
//                               <p className="font-medium">{customer.name}</p>
//                               <p className="text-xs text-muted-foreground">{customer.type}</p>
//                             </div>
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           <div className="space-y-1">
//                             <p className="text-sm">{customer.email}</p>
//                             <p className="text-xs text-muted-foreground">{customer.phone}</p>
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           <p className="text-sm truncate max-w-[200px]">{customer.address}</p>
//                           <p className="text-xs text-muted-foreground">
//                             {customer.city}, {customer.state} {customer.zip}
//                           </p>
//                         </TableCell>
//                         <TableCell>
//                           {customer.lastService ? (
//                             <div className="flex items-center gap-2">
//                               <Calendar className="h-4 w-4 text-muted-foreground" />
//                               <span className="text-sm">{new Date(customer.lastService).toLocaleDateString()}</span>
//                             </div>
//                           ) : (
//                             <span className="text-sm text-muted-foreground">N/A</span>
//                           )}
//                         </TableCell>
//                         <TableCell>
//                           {customer.nextService ? (
//                             <div className="flex items-center gap-2">
//                               <Calendar className="h-4 w-4 text-muted-foreground" />
//                               <span className="text-sm">{new Date(customer.nextService).toLocaleDateString()}</span>
//                             </div>
//                           ) : (
//                             <span className="text-sm text-muted-foreground">N/A</span>
//                           )}
//                         </TableCell>
//                         <TableCell>
//                           <Badge
//                             variant="outline"
//                             className={
//                               customer.status === "Active"
//                                 ? "bg-emerald-50 text-emerald-700"
//                                 : "bg-gray-100 text-gray-700"
//                             }
//                           >
//                             {customer.status}
//                           </Badge>
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <div className="flex items-center justify-end gap-2">
//                             <Dialog>
//                               <DialogTrigger asChild>
//                                 <Button variant="outline" size="sm" onClick={() => handleCustomerClick(customer)}>
//                                   View
//                                 </Button>
//                               </DialogTrigger>
//                               <DialogContent className="sm:max-w-[800px]">
//                                 <DialogHeader>
//                                   <DialogTitle>Customer Details</DialogTitle>
//                                 </DialogHeader>
//                                 {selectedCustomer && (
//                                   <Tabs defaultValue="details">
//                                     <TabsList className="grid w-full grid-cols-3">
//                                       <TabsTrigger value="details">Details</TabsTrigger>
//                                       <TabsTrigger value="history">Service History</TabsTrigger>
//                                       <TabsTrigger value="notes">Notes</TabsTrigger>
//                                     </TabsList>
//                                     <TabsContent value="details" className="space-y-4 pt-4">
//                                       <div className="flex items-start gap-4">
//                                         <Avatar className="h-16 w-16">
//                                           <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xl">
//                                             {selectedCustomer.name
//                                               .split(" ")
//                                               .map((n) => n[0])
//                                               .join("")}
//                                           </AvatarFallback>
//                                         </Avatar>
//                                         <div className="space-y-1">
//                                           <h3 className="text-xl font-semibold">{selectedCustomer.name}</h3>
//                                           <div className="flex items-center gap-2">
//                                             <Badge
//                                               variant="outline"
//                                               className={
//                                                 selectedCustomer.status === "Active"
//                                                   ? "bg-emerald-50 text-emerald-700"
//                                                   : "bg-gray-100 text-gray-700"
//                                               }
//                                             >
//                                               {selectedCustomer.status}
//                                             </Badge>
//                                             <Badge variant="outline">{selectedCustomer.type}</Badge>
//                                           </div>
//                                         </div>
//                                       </div>

//                                       <div className="grid grid-cols-2 gap-4">
//                                         <Card>
//                                           <CardHeader className="pb-2">
//                                             <CardTitle className="text-sm font-medium">Contact Information</CardTitle>
//                                           </CardHeader>
//                                           <CardContent>
//                                             <div className="space-y-2">
//                                               <div className="grid grid-cols-[100px_1fr] items-center">
//                                                 <span className="text-sm font-medium text-muted-foreground">
//                                                   Email:
//                                                 </span>
//                                                 <span>{selectedCustomer.email}</span>
//                                               </div>
//                                               <div className="grid grid-cols-[100px_1fr] items-center">
//                                                 <span className="text-sm font-medium text-muted-foreground">
//                                                   Phone:
//                                                 </span>
//                                                 <span>{selectedCustomer.phone}</span>
//                                               </div>
//                                             </div>
//                                           </CardContent>
//                                         </Card>

//                                         <Card>
//                                           <CardHeader className="pb-2">
//                                             <CardTitle className="text-sm font-medium">Service Address</CardTitle>
//                                           </CardHeader>
//                                           <CardContent>
//                                             <div className="space-y-1">
//                                               <p>{selectedCustomer.address}</p>
//                                               <p>
//                                                 {selectedCustomer.city}, {selectedCustomer.state} {selectedCustomer.zip}
//                                               </p>
//                                             </div>
//                                           </CardContent>
//                                         </Card>
//                                       </div>

//                                       <Card>
//                                         <CardHeader className="pb-2">
//                                           <CardTitle className="text-sm font-medium">Service Schedule</CardTitle>
//                                         </CardHeader>
//                                         <CardContent>
//                                           <div className="grid grid-cols-2 gap-4">
//                                             <div className="space-y-1">
//                                               <p className="text-sm font-medium text-muted-foreground">Last Service:</p>
//                                               <p>
//                                                 {selectedCustomer.lastService
//                                                   ? new Date(selectedCustomer.lastService).toLocaleDateString()
//                                                   : "N/A"}
//                                               </p>
//                                             </div>
//                                             <div className="space-y-1">
//                                               <p className="text-sm font-medium text-muted-foreground">Next Service:</p>
//                                               <p>
//                                                 {selectedCustomer.nextService
//                                                   ? new Date(selectedCustomer.nextService).toLocaleDateString()
//                                                   : "N/A"}
//                                               </p>
//                                             </div>
//                                           </div>
//                                         </CardContent>
//                                       </Card>
//                                     </TabsContent>

//                                     <TabsContent value="history" className="pt-4">
//                                       <Card>
//                                         <CardHeader className="pb-2">
//                                           <CardTitle>Service History</CardTitle>
//                                           <CardDescription>Past services performed for this customer</CardDescription>
//                                         </CardHeader>
//                                         <CardContent>
//                                           <Table>
//                                             <TableHeader>
//                                               <TableRow>
//                                                 <TableHead>Date</TableHead>
//                                                 <TableHead>Service Type</TableHead>
//                                                 <TableHead>Technician</TableHead>
//                                                 <TableHead>Notes</TableHead>
//                                               </TableRow>
//                                             </TableHeader>
//                                             <TableBody>
//                                               {selectedCustomer.serviceHistory.map((service: any, index: number) => (
//                                                 <TableRow key={index}>
//                                                   <TableCell>{new Date(service.date).toLocaleDateString()}</TableCell>
//                                                   <TableCell>{service.type}</TableCell>
//                                                   <TableCell>{service.technician}</TableCell>
//                                                   <TableCell className="max-w-[300px] truncate">
//                                                     {service.notes}
//                                                   </TableCell>
//                                                 </TableRow>
//                                               ))}
//                                             </TableBody>
//                                           </Table>
//                                         </CardContent>
//                                       </Card>
//                                     </TabsContent>

//                                     <TabsContent value="notes" className="pt-4">
//                                       <Card>
//                                         <CardHeader className="pb-2">
//                                           <CardTitle>Customer Notes</CardTitle>
//                                           <CardDescription>Special instructions and information</CardDescription>
//                                         </CardHeader>
//                                         <CardContent>
//                                           <Textarea
//                                             className="min-h-[200px]"
//                                             defaultValue={selectedCustomer.notes}
//                                             readOnly
//                                           />
//                                         </CardContent>
//                                         <CardFooter>
//                                           <Button variant="outline" className="w-full">
//                                             <Edit className="mr-2 h-4 w-4" />
//                                             Edit Notes
//                                           </Button>
//                                         </CardFooter>
//                                       </Card>
//                                     </TabsContent>
//                                   </Tabs>
//                                 )}
//                                 <DialogFooter className="gap-2 sm:gap-0">
//                                   <Button variant="outline">Schedule Service</Button>
//                                   <Button className="bg-emerald-600 hover:bg-emerald-700">Edit Customer</Button>
//                                 </DialogFooter>
//                               </DialogContent>
//                             </Dialog>
//                             <DropdownMenu>
//                               <DropdownMenuTrigger asChild>
//                                 <Button variant="ghost" size="icon" className="h-8 w-8">
//                                   <MoreHorizontal className="h-4 w-4" />
//                                   <span className="sr-only">More options</span>
//                                 </Button>
//                               </DropdownMenuTrigger>
//                               <DropdownMenuContent align="end">
//                                 <DropdownMenuItem>
//                                   <User className="mr-2 h-4 w-4" />
//                                   <span>View Profile</span>
//                                 </DropdownMenuItem>
//                                 <DropdownMenuItem>
//                                   <Edit className="mr-2 h-4 w-4" />
//                                   <span>Edit Customer</span>
//                                 </DropdownMenuItem>
//                                 <DropdownMenuItem>
//                                   <Calendar className="mr-2 h-4 w-4" />
//                                   <span>Schedule Service</span>
//                                 </DropdownMenuItem>
//                                 <DropdownMenuSeparator />
//                                 <DropdownMenuItem className="text-red-600">
//                                   <Trash className="mr-2 h-4 w-4" />
//                                   <span>Delete Customer</span>
//                                 </DropdownMenuItem>
//                               </DropdownMenuContent>
//                             </DropdownMenu>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))
//                 )}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

