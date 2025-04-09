"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle,CardFooter,CardDescription  } from "@/components/ui/card"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, CheckCircle2, Clock, Star } from "lucide-react"

interface TechnicianDialogProps {
  technician: {
    id: number
    name: string
    email: string
    phone: string
    address: string
    status: string
    role: string
    hireDate: string
    certifications: string[]
    assignedZones: string[]
    completedJobs: number
    customerRating: number
    availability: string
    schedule: Array<{
      date: string
      appointments: number
      startTime: string
      endTime: string
    }>
    notes: string
  }
}

export default function TechnicianDialog({ technician }: TechnicianDialogProps) {
  return (
    <DialogContent className="sm:max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Technician Details</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="space-y-4 pt-4">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xl">
                {technician.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{technician.name}</h3>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={
                    technician.status === "Active"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }
                >
                  {technician.status}
                </Badge>
                <Badge variant="outline">{technician.role}</Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-[100px_1fr] items-center">
                    <span className="text-sm font-medium text-muted-foreground">Email:</span>
                    <span>{technician.email}</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] items-center">
                    <span className="text-sm font-medium text-muted-foreground">Phone:</span>
                    <span>{technician.phone}</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] items-center">
                    <span className="text-sm font-medium text-muted-foreground">Address:</span>
                    <span>{technician.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Employment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-[120px_1fr] items-center">
                    <span className="text-sm font-medium text-muted-foreground">Hire Date:</span>
                    <span>{new Date(technician.hireDate).toLocaleDateString()}</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-center">
                    <span className="text-sm font-medium text-muted-foreground">Availability:</span>
                    <span>{technician.availability}</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-center">
                    <span className="text-sm font-medium text-muted-foreground">Assigned Zones:</span>
                    <div className="flex flex-wrap gap-1">
                      {technician.assignedZones.map((zone) => (
                        <Badge key={zone} variant="outline" className="text-xs">
                          {zone}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>  
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{technician.notes}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Schedule</CardTitle>
              <CardDescription>Next 5 working days</CardDescription>
            </CardHeader>
            <CardContent>
              {technician.schedule.length === 0 ? (
                <p className="text-center py-4 text-muted-foreground">
                  No scheduled appointments
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Working Hours</TableHead>
                      <TableHead>Appointments</TableHead>
                      <TableHead>Workload</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {technician.schedule.map((day) => (
                      <TableRow key={day.date}>
                        <TableCell>
                          {new Date(day.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </TableCell>
                        <TableCell>
                          {day.startTime} - {day.endTime}
                        </TableCell>
                        <TableCell>{day.appointments}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={day.appointments * 20}
                              className="h-2 w-[100px]"
                            />
                            <span className="text-xs text-muted-foreground">
                              {day.appointments * 20}%
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Full Schedule
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Customer Satisfaction</span>
                      <span className="flex items-center text-sm font-medium">
                        {technician.customerRating}/5.0
                        <Star className="ml-1 h-3 w-3 fill-amber-500 text-amber-500" />
                      </span>
                    </div>
                    <Progress
                      value={technician.customerRating * 20}
                      className="h-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Jobs Completed</span>
                      <span className="text-sm font-medium">
                        {technician.completedJobs}
                      </span>
                    </div>
                    <Progress
                      value={Math.min(technician.completedJobs / 5, 100)}
                      className="h-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">On-Time Arrival</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Service Callbacks</span>
                      <span className="text-sm font-medium">2.1%</span>
                    </div>
                    <Progress value={2.1} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">General Pest Control</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Termite Control</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Rodent Control</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Other Services</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      <DialogFooter className="gap-2 sm:gap-0">
        <Button variant="outline">View Schedule</Button>
        <Button className="bg-emerald-600 hover:bg-emerald-700">Edit Technician</Button>
      </DialogFooter>
    </DialogContent>
  )
}