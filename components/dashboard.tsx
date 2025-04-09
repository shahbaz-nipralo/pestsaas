// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import {
//   BarChart3,
//   Bell,
//   Bug,
//   Calendar,
//   CreditCard,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   MoreHorizontal,
//   Search,
//   Settings,
//   User,
//   Users,
//   X,
// } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// export default function Dashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   return (
//     <div className="flex min-h-screen bg-muted/20">
//       {/* Sidebar */}
//       <aside
//         className={`fixed inset-y-0 z-20 flex h-full flex-col border-r bg-background transition-all duration-300 ${sidebarOpen ? "left-0" : "-left-64"} md:left-0 md:w-64`}
//       >
//         <div className="flex h-14 items-center border-b px-4">
//           <Link href="#" className="flex items-center gap-2 font-semibold">
//             <Bug className="h-5 w-5 text-emerald-600" />
//             <span>PestPro Admin</span>
//           </Link>
//           <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setSidebarOpen(false)}>
//             <X className="h-4 w-4" />
//             <span className="sr-only">Close sidebar</span>
//           </Button>
//         </div>
//         <nav className="flex-1 overflow-auto py-4">
//           <div className="px-3 py-2">
//             <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Main</h2>
//             <div className="space-y-1">
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-md bg-muted px-3 py-2 text-sm font-medium text-primary"
//               >
//                 <LayoutDashboard className="h-4 w-4" />
//                 Dashboard
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
//               >
//                 <Calendar className="h-4 w-4" />
//                 Appointments
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
//               >
//                 <Users className="h-4 w-4" />
//                 Customers
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
//               >
//                 <User className="h-4 w-4" />
//                 Technicians
//               </Link>
//             </div>
//           </div>
//           <div className="px-3 py-2">
//             <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
//               Management
//             </h2>
//             <div className="space-y-1">
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
//               >
//                 <CreditCard className="h-4 w-4" />
//                 Billing
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
//               >
//                 <BarChart3 className="h-4 w-4" />
//                 Reports
//               </Link>
//               <Link
//                 href="#"
//                 className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
//               >
//                 <Settings className="h-4 w-4" />
//                 Settings
//               </Link>
//             </div>
//           </div>
//         </nav>
//         <div className="mt-auto border-t p-4">
//           <div className="flex items-center gap-3">
//             <Avatar>
//               <AvatarImage src="/placeholder-user.jpg" alt="User" />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//             <div className="flex flex-col">
//               <span className="text-sm font-medium">John Doe</span>
//               <span className="text-xs text-muted-foreground">Administrator</span>
//             </div>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
//                   <MoreHorizontal className="h-4 w-4" />
//                   <span className="sr-only">More options</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem>
//                   <User className="mr-2 h-4 w-4" />
//                   <span>Profile</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Settings className="mr-2 h-4 w-4" />
//                   <span>Settings</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Log out</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className={`flex flex-1 flex-col ${sidebarOpen ? "md:ml-64" : ""}`}>
//         {/* Header */}
//         <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
//           <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
//             <Menu className="h-5 w-5" />
//             <span className="sr-only">Toggle menu</span>
//           </Button>
//           <div className="w-full flex-1">
//             <form>
//               <div className="relative">
//                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="search"
//                   placeholder="Search..."
//                   className="w-full bg-background pl-8 md:w-[200px] lg:w-[300px]"
//                 />
//               </div>
//             </form>
//           </div>
//           <div className="flex items-center gap-2">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" className="relative">
//                   <Bell className="h-5 w-5" />
//                   <span className="sr-only">Notifications</span>
//                   <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-emerald-600"></span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-[300px]">
//                 <DropdownMenuLabel>Notifications</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <div className="max-h-[300px] overflow-auto">
//                   {[1, 2, 3].map((i) => (
//                     <DropdownMenuItem key={i} className="flex flex-col items-start gap-1 p-3">
//                       <div className="flex w-full items-start gap-2">
//                         <span className="rounded-full bg-emerald-100 p-1">
//                           <Calendar className="h-3 w-3 text-emerald-600" />
//                         </span>
//                         <div className="flex-1">
//                           <p className="text-sm font-medium">New appointment scheduled</p>
//                           <p className="text-xs text-muted-foreground">123 Main St, Apt 4B</p>
//                         </div>
//                         <p className="text-xs text-muted-foreground">2h ago</p>
//                       </div>
//                     </DropdownMenuItem>
//                   ))}
//                 </div>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem className="cursor-pointer justify-center text-center">
//                   <span className="text-sm font-medium">View all notifications</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
//                   <Avatar className="h-8 w-8">
//                     <AvatarImage src="/placeholder-user.jpg" alt="User" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <User className="mr-2 h-4 w-4" />
//                   <span>Profile</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Settings className="mr-2 h-4 w-4" />
//                   <span>Settings</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Log out</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </header>

//         {/* Main Dashboard Content */}
//         <main className="flex-1 overflow-auto p-4 sm:p-6">
//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col gap-2">
//               <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
//               <p className="text-muted-foreground">Welcome back, here's an overview of your pest control operations.</p>
//             </div>

//             {/* Analytics Cards */}
//             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between pb-2">
//                   <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
//                   <Calendar className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">248</div>
//                   <p className="text-xs text-muted-foreground">+12% from last month</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between pb-2">
//                   <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
//                   <Users className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">1,429</div>
//                   <p className="text-xs text-muted-foreground">+4% from last month</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between pb-2">
//                   <CardTitle className="text-sm font-medium">Revenue This Month</CardTitle>
//                   <CreditCard className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">$24,780</div>
//                   <p className="text-xs text-muted-foreground">+18% from last month</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="flex flex-row items-center justify-between pb-2">
//                   <CardTitle className="text-sm font-medium">Technicians On Duty</CardTitle>
//                   <User className="h-4 w-4 text-muted-foreground" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold">8</div>
//                   <p className="text-xs text-muted-foreground">2 on scheduled leave</p>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Calendar and Recent Activities */}
//             <div className="grid gap-6 lg:grid-cols-2">
//               {/* Calendar View */}
//               <Card className="col-span-1">
//                 <CardHeader>
//                   <CardTitle>Upcoming Appointments</CardTitle>
//                   <CardDescription>Schedule for the next 7 days</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {[
//                       {
//                         date: "Today, 10:00 AM",
//                         customer: "Robert Johnson",
//                         address: "123 Main St, Apt 4B",
//                         type: "Rodent Control",
//                         technician: "Mike Smith",
//                       },
//                       {
//                         date: "Today, 2:30 PM",
//                         customer: "Sarah Williams",
//                         address: "456 Oak Ave",
//                         type: "Termite Inspection",
//                         technician: "David Chen",
//                       },
//                       {
//                         date: "Tomorrow, 9:15 AM",
//                         customer: "Emily Davis",
//                         address: "789 Pine Rd",
//                         type: "Ant Treatment",
//                         technician: "Lisa Wong",
//                       },
//                       {
//                         date: "Tomorrow, 1:00 PM",
//                         customer: "Michael Brown",
//                         address: "321 Cedar Ln",
//                         type: "Mosquito Control",
//                         technician: "James Taylor",
//                       },
//                       {
//                         date: "Apr 6, 11:30 AM",
//                         customer: "Jennifer Miller",
//                         address: "654 Birch St",
//                         type: "Bed Bug Treatment",
//                         technician: "Mike Smith",
//                       },
//                     ].map((appointment, i) => (
//                       <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
//                         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
//                           <Calendar className="h-4 w-4 text-emerald-600" />
//                         </div>
//                         <div className="flex-1 space-y-1">
//                           <div className="flex items-center gap-2">
//                             <p className="text-sm font-medium">{appointment.customer}</p>
//                             <Badge variant="outline" className="ml-auto">
//                               {appointment.type}
//                             </Badge>
//                           </div>
//                           <p className="text-xs text-muted-foreground">{appointment.address}</p>
//                           <div className="flex items-center gap-2 text-xs">
//                             <span className="font-medium">{appointment.date}</span>
//                             <span className="text-muted-foreground">•</span>
//                             <span className="text-muted-foreground">Tech: {appointment.technician}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Recent Activities Table */}
//               <Card className="col-span-1">
//                 <CardHeader>
//                   <CardTitle>Recent Activities</CardTitle>
//                   <CardDescription>Latest completed jobs and activities</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Customer</TableHead>
//                         <TableHead>Service</TableHead>
//                         <TableHead>Technician</TableHead>
//                         <TableHead>Status</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {[
//                         {
//                           customer: "Thomas Anderson",
//                           service: "Cockroach Treatment",
//                           technician: "David Chen",
//                           status: "Completed",
//                         },
//                         {
//                           customer: "Jessica Lee",
//                           service: "Termite Inspection",
//                           technician: "Mike Smith",
//                           status: "Completed",
//                         },
//                         {
//                           customer: "William Garcia",
//                           service: "Rodent Control",
//                           technician: "Lisa Wong",
//                           status: "Completed",
//                         },
//                         {
//                           customer: "Amanda Wilson",
//                           service: "Mosquito Treatment",
//                           technician: "James Taylor",
//                           status: "Rescheduled",
//                         },
//                         {
//                           customer: "Daniel Martinez",
//                           service: "Ant Control",
//                           technician: "David Chen",
//                           status: "Completed",
//                         },
//                       ].map((activity, i) => (
//                         <TableRow key={i}>
//                           <TableCell className="font-medium">{activity.customer}</TableCell>
//                           <TableCell>{activity.service}</TableCell>
//                           <TableCell>{activity.technician}</TableCell>
//                           <TableCell>
//                             <Badge
//                               variant={activity.status === "Completed" ? "outline" : "secondary"}
//                               className={activity.status === "Completed" ? "bg-emerald-100 text-emerald-700" : ""}
//                             >
//                               {activity.status}
//                             </Badge>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

