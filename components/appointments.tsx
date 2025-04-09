"use client"

import { useState } from "react"
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Filter,
  MapPin,
  MoreHorizontal,
  Plus,
  Search,
  User,
} from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample data
const appointments = [
  {
    id: 1,
    customer: "Robert Johnson",
    address: "123 Main St, Apt 4B",
    date: "2025-04-05T10:00:00",
    type: "Rodent Control",
    technician: "Mike Smith",
    status: "Scheduled",
    notes: "Customer reported seeing mice in the kitchen area.",
    phone: "(555) 123-4567",
    email: "robert.johnson@example.com",
  },
  {
    id: 2,
    customer: "Sarah Williams",
    address: "456 Oak Ave",
    date: "2025-04-05T14:30:00",
    type: "Termite Inspection",
    technician: "David Chen",
    status: "Scheduled",
    notes: "Annual termite inspection for warranty renewal.",
    phone: "(555) 987-6543",
    email: "sarah.williams@example.com",
  },
  {
    id: 3,
    customer: "Emily Davis",
    address: "789 Pine Rd",
    date: "2025-04-06T09:15:00",
    type: "Ant Treatment",
    technician: "Lisa Wong",
    status: "Scheduled",
    notes: "Recurring ant problem in bathroom and kitchen.",
    phone: "(555) 456-7890",
    email: "emily.davis@example.com",
  },
  {
    id: 4,
    customer: "Michael Brown",
    address: "321 Cedar Ln",
    date: "2025-04-06T13:00:00",
    type: "Mosquito Control",
    technician: "James Taylor",
    status: "Scheduled",
    notes: "Monthly mosquito treatment for backyard.",
    phone: "(555) 234-5678",
    email: "michael.brown@example.com",
  },
  {
    id: 5,
    customer: "Jennifer Miller",
    address: "654 Birch St",
    date: "2025-04-07T11:30:00",
    type: "Bed Bug Treatment",
    technician: "Mike Smith",
    status: "Scheduled",
    notes: "Second treatment in series of three.",
    phone: "(555) 876-5432",
    email: "jennifer.miller@example.com",
  },
  {
    id: 6,
    customer: "Thomas Anderson",
    address: "987 Elm St",
    date: "2025-04-07T15:45:00",
    type: "Cockroach Treatment",
    technician: "David Chen",
    status: "Scheduled",
    notes: "Heavy infestation in kitchen area.",
    phone: "(555) 345-6789",
    email: "thomas.anderson@example.com",
  },
  {
    id: 7,
    customer: "Jessica Lee",
    address: "741 Maple Ave",
    date: "2025-04-08T08:30:00",
    type: "Termite Inspection",
    technician: "Mike Smith",
    status: "Scheduled",
    notes: "Customer reported possible termite damage in basement.",
    phone: "(555) 654-3210",
    email: "jessica.lee@example.com",
  },
]

const technicians = [
  { id: 1, name: "Mike Smith" },
  { id: 2, name: "David Chen" },
  { id: 3, name: "Lisa Wong" },
  { id: 4, name: "James Taylor" },
]

const serviceTypes = [
  "Rodent Control",
  "Termite Inspection",
  "Ant Treatment",
  "Mosquito Control",
  "Bed Bug Treatment",
  "Cockroach Treatment",
  "General Pest Control",
  "Wildlife Removal",
]

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState<"calendar" | "list">("list")
  const [selectedAppointment, setSelectedAppointment] = useState<any | null>(null)
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false)
  const [filterTechnician, setFilterTechnician] = useState<string>("all")
  const [filterServiceType, setFilterServiceType] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filter appointments based on selected filters and search query
  const filteredAppointments = appointments.filter((appointment) => {
    // Filter by technician
    if (filterTechnician !== "all" && appointment.technician !== filterTechnician) {
      return false
    }

    // Filter by service type
    if (filterServiceType !== "all" && appointment.type !== filterServiceType) {
      return false
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        appointment.customer.toLowerCase().includes(query) ||
        appointment.address.toLowerCase().includes(query) ||
        appointment.type.toLowerCase().includes(query)
      )
    }

    return true
  })

  // Group appointments by date for calendar view
  const appointmentsByDate = filteredAppointments.reduce(
    (acc, appointment) => {
      const dateKey = appointment.date.split("T")[0]
      if (!acc[dateKey]) {
        acc[dateKey] = []
      }
      acc[dateKey].push(appointment)
      return acc
    },
    {} as Record<string, typeof appointments>,
  )

  // Format date for display
  const formatAppointmentDate = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, "MMM d, yyyy h:mm a")
  }

  // Handle appointment selection
  const handleAppointmentClick = (appointment: any) => {
    setSelectedAppointment(appointment)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground">Manage and schedule pest control appointments</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isNewAppointmentOpen} onOpenChange={setIsNewAppointmentOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" /> New Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Appointment</DialogTitle>
                <DialogDescription>Fill in the details to schedule a new pest control appointment.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer">Customer Name</Label>
                    <Input id="customer" placeholder="Enter customer name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="customer@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Service Address</Label>
                  <Input id="address" placeholder="Enter full address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date & Time</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }).map((_, i) => (
                          <SelectItem key={`am-${i}`} value={`${i + 8}:00 AM`}>
                            {i + 8 > 12 ? `${i + 8 - 12}:00 PM` : `${i + 8}:00 AM`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="service-type">Service Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="technician">Assign Technician</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select technician" />
                      </SelectTrigger>
                      <SelectContent>
                        {technicians.map((tech) => (
                          <SelectItem key={tech.id} value={tech.name}>
                            {tech.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter any special instructions or notes"
                    className="min-h-[100px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsNewAppointmentOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsNewAppointmentOpen(false)}>
                  Schedule Appointment
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Tabs
            defaultValue="list"
            className="w-[300px]"
            onValueChange={(value) => setView(value as "calendar" | "list")}
          >
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search appointments..."
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
                      <Label htmlFor="filter-technician">Technician</Label>
                      <Select value={filterTechnician} onValueChange={setFilterTechnician}>
                        <SelectTrigger id="filter-technician">
                          <SelectValue placeholder="All Technicians" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Technicians</SelectItem>
                          {technicians.map((tech) => (
                            <SelectItem key={tech.id} value={tech.name}>
                              {tech.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="filter-service">Service Type</Label>
                      <Select value={filterServiceType} onValueChange={setFilterServiceType}>
                        <SelectTrigger id="filter-service">
                          <SelectValue placeholder="All Services" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Services</SelectItem>
                          {serviceTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        setFilterTechnician("all")
                        setFilterServiceType("all")
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

        {view === "list" ? (
          <div className="grid gap-4">
            {filteredAppointments.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <p className="text-muted-foreground">No appointments found</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setFilterTechnician("all")
                      setFilterServiceType("all")
                      setSearchQuery("")
                    }}
                  >
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredAppointments.map((appointment) => (
                <Card key={appointment.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex items-center justify-center bg-emerald-100 p-4 md:w-48">
                        <div className="text-center">
                          <p className="text-lg font-bold text-emerald-700">
                            {format(new Date(appointment.date), "MMM d")}
                          </p>
                          <p className="text-sm text-emerald-600">{format(new Date(appointment.date), "h:mm a")}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{appointment.customer}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="mr-1 h-3 w-3" />
                              {appointment.address}
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                            {appointment.type}
                          </Badge>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center text-sm">
                            <User className="mr-1 h-3 w-3" />
                            <span className="text-muted-foreground">Tech: {appointment.technician}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => handleAppointmentClick(appointment)}>
                                  View Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                  <DialogTitle>Appointment Details</DialogTitle>
                                </DialogHeader>
                                {selectedAppointment && (
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h3 className="font-semibold text-sm text-muted-foreground">Customer</h3>
                                        <p>{selectedAppointment.customer}</p>
                                      </div>
                                      <div>
                                        <h3 className="font-semibold text-sm text-muted-foreground">Service Type</h3>
                                        <p>{selectedAppointment.type}</p>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h3 className="font-semibold text-sm text-muted-foreground">Date & Time</h3>
                                        <p>{formatAppointmentDate(selectedAppointment.date)}</p>
                                      </div>
                                      <div>
                                        <h3 className="font-semibold text-sm text-muted-foreground">Technician</h3>
                                        <p>{selectedAppointment.technician}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold text-sm text-muted-foreground">Address</h3>
                                      <p>{selectedAppointment.address}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h3 className="font-semibold text-sm text-muted-foreground">Phone</h3>
                                        <p>{selectedAppointment.phone}</p>
                                      </div>
                                      <div>
                                        <h3 className="font-semibold text-sm text-muted-foreground">Email</h3>
                                        <p>{selectedAppointment.email}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <h3 className="font-semibold text-sm text-muted-foreground">Notes</h3>
                                      <p>{selectedAppointment.notes}</p>
                                    </div>
                                  </div>
                                )}
                                <DialogFooter>
                                  <Button variant="outline">Cancel Appointment</Button>
                                  <Button variant="outline">Reschedule</Button>
                                  <Button className="bg-emerald-600 hover:bg-emerald-700">Edit Details</Button>
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
                                <DropdownMenuItem>Edit Appointment</DropdownMenuItem>
                                <DropdownMenuItem>Reschedule</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Cancel Appointment</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        ) : (
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h3 className="font-semibold">{date ? format(date, "MMMM yyyy") : "Calendar View"}</h3>
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm" onClick={() => setDate(new Date())}>
                  Today
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">
                  {date ? `Appointments for ${format(date, "MMMM d, yyyy")}` : "No date selected"}
                </h3>
                <div className="space-y-2">
                  {date && appointmentsByDate[format(date, "yyyy-MM-dd")] ? (
                    appointmentsByDate[format(date, "yyyy-MM-dd")].map((appointment) => (
                      <div key={appointment.id} className="flex items-center gap-4 p-2 rounded-md border">
                        <div className="text-sm font-medium">{format(new Date(appointment.date), "h:mm a")}</div>
                        <div className="flex-1">
                          <p className="font-medium">{appointment.customer}</p>
                          <p className="text-xs text-muted-foreground">{appointment.type}</p>
                        </div>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                          {appointment.technician}
                        </Badge>
                        <Button variant="ghost" size="sm" onClick={() => handleAppointmentClick(appointment)}>
                          Details
                        </Button>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-4">No appointments scheduled for this date</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

