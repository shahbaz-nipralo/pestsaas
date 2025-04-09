"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  CreditCard,
  User,
  Users,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, here's an overview of your pest control operations.</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,429</div>
            <p className="text-xs text-muted-foreground">+4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue This Month</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,780</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Technicians On Duty</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 on scheduled leave</p>
          </CardContent>
        </Card>
      </div>

      {/* Calendar and Recent Activities */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Calendar View */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Schedule for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "Today, 10:00 AM",
                  customer: "Robert Johnson",
                  address: "123 Main St, Apt 4B",
                  type: "Rodent Control",
                  technician: "Mike Smith",
                },
                {
                  date: "Today, 2:30 PM",
                  customer: "Sarah Williams",
                  address: "456 Oak Ave",
                  type: "Termite Inspection",
                  technician: "David Chen",
                },
                {
                  date: "Tomorrow, 9:15 AM",
                  customer: "Emily Davis",
                  address: "789 Pine Rd",
                  type: "Ant Treatment",
                  technician: "Lisa Wong",
                },
                {
                  date: "Tomorrow, 1:00 PM",
                  customer: "Michael Brown",
                  address: "321 Cedar Ln",
                  type: "Mosquito Control",
                  technician: "James Taylor",
                },
                {
                  date: "Apr 6, 11:30 AM",
                  customer: "Jennifer Miller",
                  address: "654 Birch St",
                  type: "Bed Bug Treatment",
                  technician: "Mike Smith",
                },
              ].map((appointment, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">{appointment.customer}</p>
                      <Badge variant="outline" className="ml-auto">
                        {appointment.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{appointment.address}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-medium">{appointment.date}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">Tech: {appointment.technician}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities Table */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest completed jobs and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Technician</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    customer: "Thomas Anderson",
                    service: "Cockroach Treatment",
                    technician: "David Chen",
                    status: "Completed",
                  },
                  {
                    customer: "Jessica Lee",
                    service: "Termite Inspection",
                    technician: "Mike Smith",
                    status: "Completed",
                  },
                  {
                    customer: "William Garcia",
                    service: "Rodent Control",
                    technician: "Lisa Wong",
                    status: "Completed",
                  },
                  {
                    customer: "Amanda Wilson",
                    service: "Mosquito Treatment",
                    technician: "James Taylor",
                    status: "Rescheduled",
                  },
                  {
                    customer: "Daniel Martinez",
                    service: "Ant Control",
                    technician: "David Chen",
                    status: "Completed",
                  },
                ].map((activity, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{activity.customer}</TableCell>
                    <TableCell>{activity.service}</TableCell>
                    <TableCell>{activity.technician}</TableCell>
                    <TableCell>
                      <Badge
                        variant={activity.status === "Completed" ? "outline" : "secondary"}
                        className={activity.status === "Completed" ? "bg-emerald-100 text-emerald-700" : ""}
                      >
                        {activity.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
