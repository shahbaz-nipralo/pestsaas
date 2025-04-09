"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Award, Calendar, Clock, Edit, MapPin, Mail, MoreHorizontal, Phone, Star, Trash } from "lucide-react"
import { Dialog,DialogTrigger } from "@/components/ui/dialog"
import TechnicianDialog from "./TechnicianDialog"

interface Technician {
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

interface TechniciansTableProps {
  technicians: Technician[]
  onTechnicianClick: (technician: Technician) => void
  selectedTechnician: Technician | null
  onResetFilters: () => void
}

export default function TechniciansTable({
  technicians,
  onTechnicianClick,
  selectedTechnician,
  onResetFilters,
}: TechniciansTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Employees</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Role & Status</TableHead>

            <TableHead className="text-center">Performance</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {technicians.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                <p className="text-muted-foreground">No technicians found</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={onResetFilters}
                >
                  Reset Filters
                </Button>
              </TableCell>
            </TableRow>
          ) : (
            technicians.map((technician) => (
              <TableRow key={technician.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700">
                        {technician.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{technician.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Hired: {new Date(technician.hireDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs">
                      <Mail className="mr-1 h-3 w-3 text-muted-foreground" />
                      {technician.email}
                    </div>
                    <div className="flex items-center text-xs">
                      <Phone className="mr-1 h-3 w-3 text-muted-foreground" />
                      {technician.phone}
                    </div>
                    {/* <div className="flex items-center text-xs">
                      <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span className="truncate max-w-[150px]" title={technician.address}>
                        {technician.address}
                      </span>
                    </div> */}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium">{technician.role}</div>
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
                    <div className="flex items-center text-xs">
                      <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                      {technician.availability}
                    </div>
                  </div>
                </TableCell>
        
                <TableCell>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">{technician.customerRating}</span>
                      <span className="text-xs text-muted-foreground">rating</span>
                    </div>
                    {/* <div className="text-xs text-muted-foreground">{technician.completedJobs} jobs completed</div> */}
                    <div className="w-full max-w-[100px]">
                      <Progress value={technician.customerRating * 20} className="h-1" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => onTechnicianClick(technician)}>
                          Details
                        </Button>
                      </DialogTrigger>
                      <TechnicianDialog technician={technician} />
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
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>View Schedule</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          <span>Deactivate</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}