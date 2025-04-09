"use client"

import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Calendar,Edit } from "lucide-react"

interface CustomerDialogProps {
  customer: {
    id: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    status: string
    type: string
    lastService: string | null
    nextService: string | null
    notes: string
    serviceHistory: Array<{
      date: string
      type: string
      technician: string
      notes: string
    }>
  }
}

export default function CustomerDialog({ customer }: CustomerDialogProps) {
  return (
    <DialogContent className="sm:max-w-[800px]">
      <DialogHeader>
        <DialogTitle>Customer Details</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="history">Service History</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="space-y-4 pt-4">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xl">
                {customer.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{customer.name}</h3>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={
                    customer.status === "Active"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-gray-100 text-gray-700"
                  }
                >
                  {customer.status}
                </Badge>
                <Badge variant="outline">{customer.type}</Badge>
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
                    <span>{customer.email}</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] items-center">
                    <span className="text-sm font-medium text-muted-foreground">Phone:</span>
                    <span>{customer.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Service Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p>{customer.address}</p>
                  <p>
                    {customer.city}, {customer.state} {customer.zip}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Service Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Last Service:</p>
                  <p>
                    {customer.lastService
                      ? new Date(customer.lastService).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Next Service:</p>
                  <p>
                    {customer.nextService
                      ? new Date(customer.nextService).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="pt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Service History</CardTitle>
              <CardDescription>Past services performed for this customer</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Service Type</TableHead>
                    <TableHead>Technician</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customer.serviceHistory.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell>{new Date(service.date).toLocaleDateString()}</TableCell>
                      <TableCell>{service.type}</TableCell>
                      <TableCell>{service.technician}</TableCell>
                      <TableCell className="max-w-[300px] truncate">
                        {service.notes}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="pt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Customer Notes</CardTitle>
              <CardDescription>Special instructions and information</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                className="min-h-[200px]"
                defaultValue={customer.notes}
                readOnly
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Edit className="mr-2 h-4 w-4" />
                Edit Notes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <DialogFooter className="gap-2 sm:gap-0">
        <Button variant="outline">Schedule Service</Button>
        <Button className="bg-emerald-600 hover:bg-emerald-700">Edit Customer</Button>
      </DialogFooter>
    </DialogContent>
  )
}