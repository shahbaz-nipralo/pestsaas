// "use client"

// import { useState } from "react"
// import { ArrowDownToLine, Download, FileText } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
// } from "@/components/ui/chart"

// // Sample data for charts
// const monthlyRevenue = [
//   { name: "Jan", revenue: 12500 },
//   { name: "Feb", revenue: 14200 },
//   { name: "Mar", revenue: 16800 },
//   { name: "Apr", revenue: 15900 },
//   { name: "May", revenue: 17500 },
//   { name: "Jun", revenue: 19200 },
//   { name: "Jul", revenue: 20100 },
//   { name: "Aug", revenue: 21500 },
//   { name: "Sep", revenue: 22800 },
//   { name: "Oct", revenue: 24500 },
//   { name: "Nov", revenue: 23700 },
//   { name: "Dec", revenue: 25000 },
// ]

// const serviceBreakdown = [
//   { name: "General Pest Control", value: 45 },
//   { name: "Termite Control", value: 20 },
//   { name: "Rodent Control", value: 15 },
//   { name: "Mosquito Control", value: 10 },
//   { name: "Other Services", value: 10 },
// ]

// const customerGrowth = [
//   { name: "Jan", residential: 120, commercial: 15 },
//   { name: "Feb", residential: 132, commercial: 18 },
//   { name: "Mar", residential: 145, commercial: 20 },
//   { name: "Apr", residential: 160, commercial: 22 },
//   { name: "May", residential: 178, commercial: 25 },
//   { name: "Jun", residential: 195, commercial: 28 },
//   { name: "Jul", residential: 210, commercial: 30 },
//   { name: "Aug", residential: 228, commercial: 32 },
//   { name: "Sep", residential: 245, commercial: 35 },
//   { name: "Oct", residential: 260, commercial: 38 },
//   { name: "Nov", residential: 275, commercial: 40 },
//   { name: "Dec", residential: 290, commercial: 42 },
// ]

// const technicianPerformance = [
//   { name: "Mike Smith", completedJobs: 248, customerRating: 4.8 },
//   { name: "David Chen", completedJobs: 187, customerRating: 4.6 },
//   { name: "Lisa Wong", completedJobs: 203, customerRating: 4.9 },
//   { name: "James Taylor", completedJobs: 124, customerRating: 4.5 },
//   { name: "Sarah Johnson", completedJobs: 312, customerRating: 4.9 },
//   { name: "Robert Martinez", completedJobs: 45, customerRating: 4.3 },
// ]

// const COLORS = ["#10b981", "#0ea5e9", "#8b5cf6", "#f59e0b", "#ef4444"]

// // Sample data for reports list
// const availableReports = [
//   {
//     id: 1,
//     name: "Monthly Revenue Report",
//     description: "Summary of revenue by month with comparisons to previous periods",
//     category: "Financial",
//     lastGenerated: "2025-04-01",
//   },
//   {
//     id: 2,
//     name: "Service Breakdown Analysis",
//     description: "Analysis of services performed and their contribution to revenue",
//     category: "Operations",
//     lastGenerated: "2025-04-01",
//   },
//   {
//     id: 3,
//     name: "Customer Growth Report",
//     description: "Tracking of customer acquisition and retention over time",
//     category: "Sales",
//     lastGenerated: "2025-04-01",
//   },
//   {
//     id: 4,
//     name: "Technician Performance Report",
//     description: "Evaluation of technician productivity and customer satisfaction",
//     category: "HR",
//     lastGenerated: "2025-04-01",
//   },
//   {
//     id: 5,
//     name: "Accounts Receivable Aging",
//     description: "Analysis of outstanding invoices by age",
//     category: "Financial",
//     lastGenerated: "2025-04-01",
//   },
//   {
//     id: 6,
//     name: "Service Area Heat Map",
//     description: "Geographic distribution of service calls",
//     category: "Operations",
//     lastGenerated: "2025-04-01",
//   },
//   {
//     id: 7,
//     name: "Customer Satisfaction Survey Results",
//     description: "Summary of customer feedback and satisfaction scores",
//     category: "Customer Service",
//     lastGenerated: "2025-04-01",
//   },
//   {
//     id: 8,
//     name: "Inventory Usage Report",
//     description: "Tracking of chemical and equipment usage",
//     category: "Operations",
//     lastGenerated: "2025-04-01",
//   },
// ]

// export default function ReportsPagcce() {
//   const [searchQuery, setSearchQuery] = useState<string>("")
//   const [filterCategory, setFilterCategory] = useState<string>("all")
//   const [dateRange, setDateRange] = useState<string>("year")

//   // Filter reports based on selected filters and search query
//   const filteredReports = availableReports.filter(report => {
//     // Filter by category
//     if (filterCategory !== "all" && report.category !== filterCategory) {
//       return false
//     }
    
//     // Filter by search query
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase()
//       return (
//         report.name.toLowerCase().includes(query) ||
//         report.description.toLowerCase().includes(query) ||
//         report.category.toLowerCase().includes(query)
//       )
//     }
    
//     return true
//   })

//   // Get unique categories from reports
//   const categories = Array.from(
//     new Set(
//       availableReports.map(report => report.category)
//     )
//   )

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex items-center justify-between py-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
//           <p className="text-muted-foreground">
//             View and generate reports for your pest control business
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <Select defaultValue={dateRange} onValueChange={setDateRange}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Select date range" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="month">This Month</SelectItem>
//               <SelectItem value="quarter">This Quarter</SelectItem>
//               <SelectItem value="year">This Year</SelectItem>
//               <SelectItem value="custom">Custom Range</SelectItem>
//             </SelectContent>
//           </Select>
//           <Button variant="outline">
//             <Download className="mr-2 h-4 w-4" /> Export
//           </Button>
//         </div>
//       </div>

//       <Tabs defaultValue="dashboard" className="flex-1">
//         <TabsList>
//           <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
//           <TabsTrigger value="reports">Available Reports</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="dashboard" className="mt-4 space-y-4">
//           <div className="grid gap-4 md:grid-cols-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Monthly Revenue</CardTitle>
//                 <CardDescription>Revenue trends over the past 12 months</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                       data={monthlyRevenue}
//                       margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                       }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip 
//                         formatter={(value) => [`$${value}`, 'Revenue']}
//                         labelFormatter={(label) => `${label} 2025`}
//                       />
//                       <Bar dataKey="revenue" fill="#10b981" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <div>
//                   <p className="text-sm font-medium">Total Revenue</p>
//                   <p className="text-2xl font-bold">$233,700</p>
//                 </div>
//                 <Button variant="outline" size="sm">
//                   <ArrowDownToLine className="mr-2 h-4 w-4" />
//                   Download Report
//                 </Button>
//               </CardFooter>
//             </Card>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Service Breakdown</CardTitle>
//                 <CardDescription>Revenue by service type</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={serviceBreakdown}
//                         cx="50%"
//                         cy="50%"
//                         labelLine={false}
//                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                         outerRadius={100}
//                         fill="#8884d8"
//                         dataKey="value"
//                       >
//                         {serviceBreakdown.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button variant="outline" size="sm" className="w-full">
//                   <FileText className="mr-2 h-4 w-4" />
//                   View Detailed Breakdown
//                 </Button>
//               </CardFooter>
//             </Card>
//           </div>
          
//           <div className="grid gap-4 md:grid-cols-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Customer Growth</CardTitle>
//                 <CardDescription>Customer acquisition over time</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart
//                       data={customerGrowth}
//                       margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                       }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="residential" stroke="#10b981" activeDot={{ r: 8 }} name="Residential" />
//                       <Line type="monotone" dataKey="commercial" stroke="#0ea5e9" name="Commercial" />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <div>
//                   <p className="text-sm font-medium">Total Customers</p>
//                   <p className="text-2xl font-bold">332</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium">Growth Rate</p>
//                   <p className="text-2xl font-bold">+24%</p>
//                 </div>
//               </CardFooter>
//             </Card>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Technician Performance</CardTitle>
//                 <CardDescription>Jobs completed and customer ratings</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                       data={technicianPerformance}
//                       margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                       }}
//                       layout="vertical"
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={100} />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="completedJobs" fill="#10b981" name="Completed Jobs" />
//                       <Bar dataKey="customerRating" fill="#0ea5e9" name="Customer Rating (x50)" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button variant="outline" size="sm" className="w-full">
//                   <FileText className="mr-2 h-4 w-4" />
//                   View Full Performance Report
//                 </Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </TabsContent>
        
//         <TabsContent value="reports" className="mt-4">
//           <Card>
//             <CardHeader>
//               <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//                 <div>
//                   <CardTitle>Available Reports</CardTitle>
//                   <CardDescription>Select and generate reports for your business</CardDescription>
//                 </div>
//                 <div className="flex flex-col gap-2 sm:flex-row">
//                   <input
//                     type="text"
//                     placeholder="Search reports..."
//                     className="px-3 py-2 border rounded-md"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   <Select value={filterCategory} onValueChange={setFilterCategory}>
//                     <SelectTrigger className="w-[180px]">
//                       <SelectValue placeholder="Filter by category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Categories</SelectItem>
//                       {categories.map(category => (
//                         <SelectItem key={category} value={category}>{category}</SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {filteredReports.map(report => (
//                   <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
//                     <div>
//                       <h3 className="font-medium">{report.name}</h3>
//                       <p className="text-sm text-muted-foreground">{report.description}</p>
//                       <div className="flex items-center gap-2 mt-2">
//                         <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
//                           {report.category}
//                         </span>
//                         <span className="text-xs text-muted-foreground">
//                           Last generated: {report.lastGenerated}
//                         </span>
//                       </div>
//                     </div>
//                     <Button variant="outline" size="sm">
//                       <FileText className="mr-2 h-4 w-4" />
//                       Generate
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }