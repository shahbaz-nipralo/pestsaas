"use client"
import { useState } from "react"
import { UserPlus, MoreHorizontal, Trash, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Lead {
  id: string
  name: string
  company: string
  email: string
  phone: string
  source: string
  status: string
  date: string
  notes: string
  assignedTo: string
}

interface LeadsTableProps {
  leads: Lead[]
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "New": return "bg-blue-100 text-blue-800"
    case "Contacted": return "bg-purple-100 text-purple-800"
    case "Qualified": return "bg-cyan-100 text-cyan-800"
    case "Proposal": return "bg-amber-100 text-amber-800"
    case "Negotiation": return "bg-orange-100 text-orange-800"
    case "Won": return "bg-emerald-100 text-emerald-800"
    case "Lost": return "bg-red-100 text-red-800"
    default: return "bg-gray-100 text-gray-800"
  }
}

const getInitials = (name: string) => {
  return name.split(" ").map(part => part[0]).join("").toUpperCase()
}

export default function LeadsTable({ leads }: LeadsTableProps) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const handleViewDetails = (lead: Lead) => {
    setSelectedLead(lead)
    setIsDialogOpen(true)
    setDropdownOpen(null) 
  }

  return (
    <>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Lead</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <div className="flex flex-col items-center justify-center">
                      <UserPlus className="h-10 w-10 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium">No leads found</p>
                      <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{getInitials(lead.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-muted-foreground">{lead.company}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{lead.email}</div>
                        <div className="text-muted-foreground">{lead.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{lead.source}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{lead.date}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu
                        open={dropdownOpen === lead.id}
                        onOpenChange={(open) => setDropdownOpen(open ? lead.id : null)}
                      >
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" onInteractOutside={() => setDropdownOpen(null)}>
                          <DropdownMenuItem onClick={() => handleViewDetails(lead)}>
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                          <DropdownMenuItem>Convert to Customer</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Lead Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4 rounded-sm opacity-70 " 
              onClick={() => setIsDialogOpen(false)}
            >
              {/* <X className="h-4 w-4" /> */}
            </Button>
          </DialogHeader>
          {selectedLead && (
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>{getInitials(selectedLead.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">{selectedLead.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedLead.company}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p>{selectedLead.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p>{selectedLead.phone}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Source</p>
                  <p>{selectedLead.source}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <Badge variant="outline" className={getStatusColor(selectedLead.status)}>
                    {selectedLead.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Date Added</p>
                  <p>{selectedLead.date}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Assigned To</p>
                  <p>{selectedLead.assignedTo || "Unassigned"}</p>
                </div>
              </div>

              {selectedLead.notes && (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Notes</p>
                  <p className="whitespace-pre-line">{selectedLead.notes}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}