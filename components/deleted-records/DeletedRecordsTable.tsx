"use client"

import { Archive, ArrowUpRight, MoreHorizontal, Trash, Undo } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"

interface DeletedRecord {
  id: string
  recordType: string
  recordId: string
  recordName: string
  deletedBy: string
  deletedAt: string
  reason: string
  recoverable: boolean
}

interface DeletedRecordsTableProps {
  records: DeletedRecord[]
  selectedRecords: string[]
  onSelectAll: () => void
  onSelectRecord: (id: string) => void
}

export default function DeletedRecordsTable({
  records,
  selectedRecords,
  onSelectAll,
  onSelectRecord,
}: DeletedRecordsTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={records.length > 0 && selectedRecords.length === records.length}
                  onCheckedChange={onSelectAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Record Type</TableHead>
              <TableHead>Record ID</TableHead>
              <TableHead>Record Name</TableHead>
              <TableHead>Deleted By</TableHead>
              <TableHead>Deleted At</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  <div className="flex flex-col items-center justify-center">
                    <Archive className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium">No deleted records found</p>
                    <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRecords.includes(record.id)}
                      onCheckedChange={() => onSelectRecord(record.id)}
                      aria-label={`Select ${record.recordName}`}
                    />
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-gray-100">
                      {record.recordType}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{record.recordId}</TableCell>
                  <TableCell>{record.recordName}</TableCell>
                  <TableCell>{record.deletedBy}</TableCell>
                  <TableCell className="text-sm">{record.deletedAt}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={record.recoverable ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}
                    >
                      {record.recoverable ? "Recoverable" : "Non-recoverable"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end">
                      {record.recoverable && (
                        <Button variant="ghost" size="sm" className="mr-1">
                          <Undo className="h-4 w-4" />
                          <span className="sr-only">Restore</span>
                        </Button>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <ArrowUpRight className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          {record.recoverable && (
                            <DropdownMenuItem>
                              <Undo className="mr-2 h-4 w-4" />
                              Restore Record
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete Permanently
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
      </CardContent>
    </Card>
  )
}