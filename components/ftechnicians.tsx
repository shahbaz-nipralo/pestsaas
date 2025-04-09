// "use client"

// import { useState } from "react"
// import {
//   Calendar,
//   CheckCircle2,
//   Download,
//   Edit,
//   Filter,
//   MoreHorizontal,
//   Phone,
//   Plus,
//   Search,
//   Star,
//   Trash,
// } from "lucide-react"

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
// import { Progress } from "@/components/ui/progress"

// // Sample data
// const technicians = [
//   {
//     id: 1,
//     name: "Mike Smith",
//     email: "mike.smith@pestpro.com",
//     phone: "(555) 123-4567",
//     address: "123 Tech St, Springfield, IL 62704",
//     status: "Active",
//     role: "Senior Technician",
//     hireDate: "2020-05-15",
//     certifications: ["General Pest Control", "Termite Control", "Rodent Control"],
//     assignedZones: ["North Springfield", "Downtown"],
//     completedJobs: 248,
//     customerRating: 4.8,
//     availability: "Full-time",
//     schedule: [
//       { date: "2025-04-05", appointments: 5, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-06", appointments: 4, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-07", appointments: 6, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-08", appointments: 5, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-09", appointments: 4, startTime: "08:00", endTime: "17:00" },
//     ],
//     notes: "Experienced technician with excellent customer service skills. Preferred for complex termite jobs.",
//   },
//   {
//     id: 2,
//     name: "David Chen",
//     email: "david.chen@pestpro.com",
//     phone: "(555) 987-6543",
//     address: "456 Tech Ave, Springfield, IL 62701",
//     status: "Active",
//     role: "Technician",
//     hireDate: "2022-03-10",
//     certifications: ["General Pest Control", "Termite Control"],
//     assignedZones: ["East Springfield", "Southeast County"],
//     completedJobs: 187,
//     customerRating: 4.6,
//     availability: "Full-time",
//     schedule: [
//       { date: "2025-04-05", appointments: 4, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-06", appointments: 5, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-07", appointments: 3, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-08", appointments: 4, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-09", appointments: 5, startTime: "08:00", endTime: "17:00" },
//     ],
//     notes: "Specializes in commercial pest control. Very detail-oriented and thorough.",
//   },
//   {
//     id: 3,
//     name: "Lisa Wong",
//     email: "lisa.wong@pestpro.com",
//     phone: "(555) 456-7890",
//     address: "789 Tech Rd, Springfield, IL 62702",
//     status: "Active",
//     role: "Technician",
//     hireDate: "2021-08-22",
//     certifications: ["General Pest Control", "Mosquito Control", "Ant Control"],
//     assignedZones: ["West Springfield", "Northwest County"],
//     completedJobs: 203,
//     customerRating: 4.9,
//     availability: "Full-time",
//     schedule: [
//       { date: "2025-04-05", appointments: 5, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-06", appointments: 4, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-07", appointments: 5, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-08", appointments: 3, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-09", appointments: 4, startTime: "08:00", endTime: "17:00" },
//     ],
//     notes: "Excellent with residential customers. Has received multiple customer commendations.",
//   },
//   {
//     id: 4,
//     name: "James Taylor",
//     email: "james.taylor@pestpro.com",
//     phone: "(555) 234-5678",
//     address: "321 Tech Ln, Springfield, IL 62703",
//     status: "Active",
//     role: "Technician",
//     hireDate: "2023-01-15",
//     certifications: ["General Pest Control", "Mosquito Control"],
//     assignedZones: ["South Springfield", "Southwest County"],
//     completedJobs: 124,
//     customerRating: 4.5,
//     availability: "Full-time",
//     schedule: [
//       { date: "2025-04-05", appointments: 4, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-06", appointments: 3, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-07", appointments: 4, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-08", appointments: 5, startTime: "08:00", endTime: "17:00" },
//       { date: "2025-04-09", appointments: 3, startTime: "08:00", endTime: "17:00" },
//     ],
//     notes: "Newer technician showing great promise. Particularly good with mosquito control services.",
//   },
//   {
//     id: 5,
//     name: "Sarah Johnson",
//     email: "sarah.johnson@pestpro.com",
//     phone: "(555) 876-5432",
//     address: "654 Tech Dr, Springfield, IL 62704",
//     status: "On Leave",
//     role: "Senior Technician",
//     hireDate: "2019-06-10",
//     certifications: ["General Pest Control", "Termite Control", "Bed Bug Control", "Wildlife Control"],
//     assignedZones: ["Central Springfield", "Northeast County"],
//     completedJobs: 312,
//     customerRating: 4.9,
//     availability: "On Medical Leave",
//     schedule: [],
//     notes:
//       "On medical leave until April 15, 2025. One of our most experienced technicians with excellent customer feedback.",
//   },
//   {
//     id: 6,
//     name: "Robert Martinez",
//     email: "robert.martinez@pestpro.com",
//     phone: "(555) 345-6789",
//     address: "987 Tech Blvd, Springfield, IL 62701",
//     status: "Active",
//     role: "Part-time Technician",
//     hireDate: "2024-01-05",
//     certifications: ["General Pest Control"],
//     assignedZones: ["South Springfield"],
//     completedJobs: 45,
//     customerRating: 4.3,
//     availability: "Part-time",
//     schedule: [
//       { date: "2025-04-05", appointments: 3, startTime: "08:00", endTime: "13:00" },
//       { date: "2025-04-07", appointments: 3, startTime: "08:00", endTime: "13:00" },
//       { date: "2025-04-09", appointments: 3, startTime: "08:00", endTime: "13:00" },
//     ],
//     notes: "Part-time technician currently working on additional certifications.",
//   },
// ]

// export default function TechniciansPage() {
//   const [searchQuery, setSearchQuery] = useState<string>("")
//   const [filterStatus, setFilterStatus] = useState<string>("all")
//   const [filterCertification, setFilterCertification] = useState<string>("all")
//   const [selectedTechnician, setSelectedTechnician] = useState<any | null>(null)
//   const [isNewTechnicianOpen, setIsNewTechnicianOpen] = useState(false)
//   const [activeTab, setActiveTab] = useState<string>("all")

//   // Get unique certifications from technicians
//   const allCertifications = Array.from(new Set(technicians.flatMap((tech) => tech.certifications)))

//   // Filter technicians based on selected filters and search query
//   const filteredTechnicians = technicians.filter((technician) => {
//     // Filter by status
//     if (filterStatus !== "all" && technician.status !== filterStatus) {
//       return false
//     }

//     // Filter by certification
//     if (filterCertification !== "all" && !technician.certifications.includes(filterCertification)) {
//       return false
//     }

//     // Filter by search query
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase()
//       return (
//         technician.name.toLowerCase().includes(query) ||
//         technician.email.toLowerCase().includes(query) ||
//         technician.phone.includes(query) ||
//         technician.role.toLowerCase().includes(query)
//       )
//     }

//     return true
//   })

//   // Handle technician selection
//   const handleTechnicianClick = (technician: any) => {
//     setSelectedTechnician(technician)
//   }

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex items-center justify-between py-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Technicians</h1>
//           <p className="text-muted-foreground">Manage your pest control technicians and their schedules</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button variant="outline">
//             <Download className="mr-2 h-4 w-4" /> Export
//           </Button>
//           <Dialog open={isNewTechnicianOpen} onOpenChange={setIsNewTechnicianOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-emerald-600 hover:bg-emerald-700">
//                 <Plus className="mr-2 h-4 w-4" /> Add Technician
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[600px]">
//               <DialogHeader>
//                 <DialogTitle>Add New Technician</DialogTitle>
//                 <DialogDescription>Enter technician details to add them to your team.</DialogDescription>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name">Full Name</Label>
//                     <Input id="name" placeholder="Enter full name" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="role">Role</Label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select role" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="Senior Technician">Senior Technician</SelectItem>
//                         <SelectItem value="Technician">Technician</SelectItem>
//                         <SelectItem value="Part-time Technician">Part-time Technician</SelectItem>
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
//                   <Label htmlFor="address">Address</Label>
//                   <Input id="address" placeholder="Full address" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="hire-date">Hire Date</Label>
//                     <Input id="hire-date" type="date" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="availability">Availability</Label>
//                     <Select>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select availability" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="Full-time">Full-time</SelectItem>
//                         <SelectItem value="Part-time">Part-time</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="certifications">Certifications</Label>
//                   <div className="grid grid-cols-2 gap-2">
//                     {allCertifications.map((cert) => (
//                       <div key={cert} className="flex items-center gap-2">
//                         <input type="checkbox" id={`cert-${cert}`} className="h-4 w-4 rounded border-gray-300" />
//                         <Label htmlFor={`cert-${cert}`} className="text-sm font-normal">
//                           {cert}
//                         </Label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="notes">Notes</Label>
//                   <Textarea id="notes" placeholder="Enter any additional information" className="min-h-[100px]" />
//                 </div>
//               </div>
//               <DialogFooter>
//                 <Button variant="outline" onClick={() => setIsNewTechnicianOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsNewTechnicianOpen(false)}>
//                   Add Technician
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
//               <TabsTrigger value="all">All Technicians</TabsTrigger>
//               <TabsTrigger value="active">Active</TabsTrigger>
//               <TabsTrigger value="on-leave">On Leave</TabsTrigger>
//             </TabsList>
//           </Tabs>

//           <div className="flex flex-col gap-4 sm:flex-row">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search technicians..."
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
//                           <SelectItem value="On Leave">On Leave</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="filter-certification">Certification</Label>
//                       <Select value={filterCertification} onValueChange={setFilterCertification}>
//                         <SelectTrigger id="filter-certification">
//                           <SelectValue placeholder="All Certifications" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="all">All Certifications</SelectItem>
//                           {allCertifications.map((cert) => (
//                             <SelectItem key={cert} value={cert}>
//                               {cert}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="w-full"
//                       onClick={() => {
//                         setFilterStatus("all")
//                         setFilterCertification("all")
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

//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {filteredTechnicians.length === 0 ? (
//             <Card className="md:col-span-2 lg:col-span-3">
//               <CardContent className="flex flex-col items-center justify-center py-10">
//                 <p className="text-muted-foreground">No technicians found</p>
//                 <Button
//                   variant="outline"
//                   className="mt-4"
//                   onClick={() => {
//                     setFilterStatus("all")
//                     setFilterCertification("all")
//                     setSearchQuery("")
//                   }}
//                 >
//                   Reset Filters
//                 </Button>
//               </CardContent>
//             </Card>
//           ) : (
//             filteredTechnicians
//               .filter((technician) => {
//                 if (activeTab === "all") return true
//                 if (activeTab === "active" && technician.status === "Active") return true
//                 if (activeTab === "on-leave" && technician.status === "On Leave") return true
//                 return false
//               })
//               .map((technician) => (
//                 <Card key={technician.id} className="overflow-hidden">
//                   <CardHeader className="pb-2">
//                     <div className="flex items-start justify-between">
//                       <div className="flex items-center gap-3">
//                         <Avatar className="h-10 w-10">
//                           <AvatarFallback className="bg-emerald-100 text-emerald-700">
//                             {technician.name
//                               .split(" ")
//                               .map((n) => n[0])
//                               .join("")}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div>
//                           <CardTitle className="text-base">{technician.name}</CardTitle>
//                           <CardDescription>{technician.role}</CardDescription>
//                         </div>
//                       </div>
//                       <Badge
//                         variant="outline"
//                         className={
//                           technician.status === "Active"
//                             ? "bg-emerald-50 text-emerald-700"
//                             : "bg-amber-50 text-amber-700"
//                         }
//                       >
//                         {technician.status}
//                       </Badge>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pb-2">
//                     <div className="space-y-3">
//                       <div className="flex items-center text-sm">
//                         <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
//                         {technician.phone}
//                       </div>
//                       <div className="flex items-center text-sm">
//                         <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
//                         Hired: {new Date(technician.hireDate).toLocaleDateString()}
//                       </div>
//                       <div className="space-y-1">
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-muted-foreground">Completed Jobs</span>
//                           <span className="font-medium">{technician.completedJobs}</span>
//                         </div>
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-muted-foreground">Customer Rating</span>
//                           <span className="flex items-center font-medium">
//                             {technician.customerRating}
//                             <Star className="ml-1 h-3 w-3 fill-amber-500 text-amber-500" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="space-y-1">
//                         <p className="text-xs font-medium text-muted-foreground">Certifications</p>
//                         <div className="flex flex-wrap gap-1">
//                           {technician.certifications.map((cert) => (
//                             <Badge key={cert} variant="secondary" className="text-xs">
//                               {cert}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="flex justify-between pt-2">
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button variant="outline" size="sm" onClick={() => handleTechnicianClick(technician)}>
//                           View Details
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent className="sm:max-w-[800px]">
//                         <DialogHeader>
//                           <DialogTitle>Technician Details</DialogTitle>
//                         </DialogHeader>
//                         {selectedTechnician && (
//                           <Tabs defaultValue="details">
//                             <TabsList className="grid w-full grid-cols-3">
//                               <TabsTrigger value="details">Details</TabsTrigger>
//                               <TabsTrigger value="schedule">Schedule</TabsTrigger>
//                               <TabsTrigger value="performance">Performance</TabsTrigger>
//                             </TabsList>
//                             <TabsContent value="details" className="space-y-4 pt-4">
//                               <div className="flex items-start gap-4">
//                                 <Avatar className="h-16 w-16">
//                                   <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xl">
//                                     {selectedTechnician.name
//                                       .split(" ")
//                                       .map((n) => n[0])
//                                       .join("")}
//                                   </AvatarFallback>
//                                 </Avatar>
//                                 <div className="space-y-1">
//                                   <h3 className="text-xl font-semibold">{selectedTechnician.name}</h3>
//                                   <div className="flex items-center gap-2">
//                                     <Badge
//                                       variant="outline"
//                                       className={
//                                         selectedTechnician.status === "Active"
//                                           ? "bg-emerald-50 text-emerald-700"
//                                           : "bg-amber-50 text-amber-700"
//                                       }
//                                     >
//                                       {selectedTechnician.status}
//                                     </Badge>
//                                     <Badge variant="outline">{selectedTechnician.role}</Badge>
//                                   </div>
//                                 </div>
//                               </div>

//                               <div className="grid grid-cols-2 gap-4">
//                                 <Card>
//                                   <CardHeader className="pb-2">
//                                     <CardTitle className="text-sm font-medium">Contact Information</CardTitle>
//                                   </CardHeader>
//                                   <CardContent>
//                                     <div className="space-y-2">
//                                       <div className="grid grid-cols-[100px_1fr] items-center">
//                                         <span className="text-sm font-medium text-muted-foreground">Email:</span>
//                                         <span>{selectedTechnician.email}</span>
//                                       </div>
//                                       <div className="grid grid-cols-[100px_1fr] items-center">
//                                         <span className="text-sm font-medium text-muted-foreground">Phone:</span>
//                                         <span>{selectedTechnician.phone}</span>
//                                       </div>
//                                       <div className="grid grid-cols-[100px_1fr] items-center">
//                                         <span className="text-sm font-medium text-muted-foreground">Address:</span>
//                                         <span>{selectedTechnician.address}</span>
//                                       </div>
//                                     </div>
//                                   </CardContent>
//                                 </Card>

//                                 <Card>
//                                   <CardHeader className="pb-2">
//                                     <CardTitle className="text-sm font-medium">Employment Details</CardTitle>
//                                   </CardHeader>
//                                   <CardContent>
//                                     <div className="space-y-2">
//                                       <div className="grid grid-cols-[120px_1fr] items-center">
//                                         <span className="text-sm font-medium text-muted-foreground">Hire Date:</span>
//                                         <span>{new Date(selectedTechnician.hireDate).toLocaleDateString()}</span>
//                                       </div>
//                                       <div className="grid grid-cols-[120px_1fr] items-center">
//                                         <span className="text-sm font-medium text-muted-foreground">Availability:</span>
//                                         <span>{selectedTechnician.availability}</span>
//                                       </div>
//                                       <div className="grid grid-cols-[120px_1fr] items-center">
//                                         <span className="text-sm font-medium text-muted-foreground">
//                                           Assigned Zones:
//                                         </span>
//                                         <div className="flex flex-wrap gap-1">
//                                           {selectedTechnician.assignedZones.map((zone: string) => (
//                                             <Badge key={zone} variant="outline" className="text-xs">
//                                               {zone}
//                                             </Badge>
//                                           ))}
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </CardContent>
//                                 </Card>
//                               </div>

//                               <Card>
//                                 <CardHeader className="pb-2">
//                                   {/* <CardTitle className="text-sm font-medium">Certifications</CardTitle> */}
//                                 </CardHeader>
//                                 {/* <CardContent>
//                                   <div className="flex flex-wrap gap-2">
//                                     {selectedTechnician.certifications.map((cert: string) => (
//                                       <div
//                                         key={cert}
//                                         className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700"
//                                       >
//                                         <CheckCircle2 className="h-4 w-4" />
//                                         {cert}
//                                       </div>
//                                     ))}
//                                   </div>
//                                 </CardContent> */}
//                               </Card>

//                               <Card>
//                                 <CardHeader className="pb-2">
//                                   <CardTitle className="text-sm font-medium">Notes</CardTitle>
//                                 </CardHeader>
//                                 <CardContent>
//                                   <p>{selectedTechnician.notes}</p>
//                                 </CardContent>
//                               </Card>
//                             </TabsContent>

//                             <TabsContent value="schedule" className="pt-4">
//                               <Card>
//                                 <CardHeader>
//                                   <CardTitle>Upcoming Schedule</CardTitle>
//                                   <CardDescription>Next 5 working days</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                   {selectedTechnician.schedule.length === 0 ? (
//                                     <p className="text-center py-4 text-muted-foreground">No scheduled appointments</p>
//                                   ) : (
//                                     <Table>
//                                       <TableHeader>
//                                         <TableRow>
//                                           <TableHead>Date</TableHead>
//                                           <TableHead>Working Hours</TableHead>
//                                           <TableHead>Appointments</TableHead>
//                                           <TableHead>Workload</TableHead>
//                                         </TableRow>
//                                       </TableHeader>
//                                       <TableBody>
//                                         {selectedTechnician.schedule.map((day: any) => (
//                                           <TableRow key={day.date}>
//                                             <TableCell>
//                                               {new Date(day.date).toLocaleDateString("en-US", {
//                                                 weekday: "short",
//                                                 month: "short",
//                                                 day: "numeric",
//                                               })}
//                                             </TableCell>
//                                             <TableCell>
//                                               {day.startTime} - {day.endTime}
//                                             </TableCell>
//                                             <TableCell>{day.appointments}</TableCell>
//                                             <TableCell>
//                                               <div className="flex items-center gap-2">
//                                                 <Progress value={day.appointments * 20} className="h-2 w-[100px]" />
//                                                 <span className="text-xs text-muted-foreground">
//                                                   {day.appointments * 20}%
//                                                 </span>
//                                               </div>
//                                             </TableCell>
//                                           </TableRow>
//                                         ))}
//                                       </TableBody>
//                                     </Table>
//                                   )}
//                                 </CardContent>
//                                 <CardFooter>
//                                   <Button variant="outline" className="w-full">
//                                     View Full Schedule
//                                   </Button>
//                                 </CardFooter>
//                               </Card>
//                             </TabsContent>

//                             <TabsContent value="performance" className="pt-4">
//                               <div className="grid gap-4 md:grid-cols-2">
//                                 <Card>
//                                   <CardHeader>
//                                     <CardTitle>Performance Metrics</CardTitle>
//                                   </CardHeader>
//                                   <CardContent>
//                                     <div className="space-y-4">
//                                       <div className="space-y-2">
//                                         <div className="flex items-center justify-between">
//                                           <span className="text-sm font-medium">Customer Satisfaction</span>
//                                           <span className="flex items-center text-sm font-medium">
//                                             {selectedTechnician.customerRating}/5.0
//                                             <Star className="ml-1 h-3 w-3 fill-amber-500 text-amber-500" />
//                                           </span>
//                                         </div>
//                                         <Progress value={selectedTechnician.customerRating * 20} className="h-2" />
//                                       </div>
//                                       <div className="space-y-2">
//                                         <div className="flex items-center justify-between">
//                                           <span className="text-sm font-medium">Jobs Completed</span>
//                                           <span className="text-sm font-medium">
//                                             {selectedTechnician.completedJobs}
//                                           </span>
//                                         </div>
//                                         <Progress
//                                           value={Math.min(selectedTechnician.completedJobs / 5, 100)}
//                                           className="h-2"
//                                         />
//                                       </div>
//                                       <div className="space-y-2">
//                                         <div className="flex items-center justify-between">
//                                           <span className="text-sm font-medium">On-Time Arrival</span>
//                                           <span className="text-sm font-medium">98%</span>
//                                         </div>
//                                         <Progress value={98} className="h-2" />
//                                       </div>
//                                       <div className="space-y-2">
//                                         <div className="flex items-center justify-between">
//                                           <span className="text-sm font-medium">Service Callbacks</span>
//                                           <span className="text-sm font-medium">2.1%</span>
//                                         </div>
//                                         <Progress value={2.1} className="h-2" />
//                                       </div>
//                                     </div>
//                                   </CardContent>
//                                 </Card>

//                                 <Card>
//                                   <CardHeader>
//                                     <CardTitle>Service Breakdown</CardTitle>
//                                   </CardHeader>
//                                   <CardContent>
//                                     <div className="space-y-4">
//                                       <div className="space-y-2">
//                                         <div className="flex items-center justify-between">
//                                           <span className="text-sm font-medium">General Pest Control</span>
//                                           <span className="text-sm font-medium">45%</span>
//                                         </div>
//                                         <Progress value={45} className="h-2" />
//                                       </div>
//                                       <div className="space-y-2">
//                                         <div className="flex items-center justify-between">
//                                           <span className="text-sm font-medium">Termite Control</span>
//                                           <span className="text-sm font-medium">30%</span>
//                                         </div>
//                                         <Progress value={30} className="h-2" />
//                                       </div>
//                                       <div className="space-y-2">
//                                         <div className="flex items-center justify-between">
//                                           <span className="text-sm font-medium">Rodent Control</span>
//                                           <span className="text-sm font-medium">15%</span>
//                                         </div>
//                                         <Progress value={15} className="h-2" />
//                                       </div>
//                                       <div className="space-y-2">
//                                         <div className="flex items-center justify-between">
//                                           <span className="text-sm font-medium">Other Services</span>
//                                           <span className="text-sm font-medium">10%</span>
//                                         </div>
//                                         <Progress value={10} className="h-2" />
//                                       </div>
//                                     </div>
//                                   </CardContent>
//                                 </Card>
//                               </div>
//                             </TabsContent>
//                           </Tabs>
//                         )}
//                         <DialogFooter className="gap-2 sm:gap-0">
//                           <Button variant="outline">View Schedule</Button>
//                           <Button className="bg-emerald-600 hover:bg-emerald-700">Edit Technician</Button>
//                         </DialogFooter>
//                       </DialogContent>
//                     </Dialog>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon" className="h-8 w-8">
//                           <MoreHorizontal className="h-4 w-4" />
//                           <span className="sr-only">More options</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>
//                           <Calendar className="mr-2 h-4 w-4" />
//                           <span>View Schedule</span>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                           <Edit className="mr-2 h-4 w-4" />
//                           <span>Edit Details</span>
//                         </DropdownMenuItem>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuItem className="text-red-600">
//                           <Trash className="mr-2 h-4 w-4" />
//                           <span>Deactivate</span>
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </CardFooter>
//                 </Card>
//               ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

