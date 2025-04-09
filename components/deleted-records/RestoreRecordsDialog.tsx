"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Undo } from "lucide-react"

interface RestoreRecordsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedCount: number
  onConfirm: () => void
}

export default function RestoreRecordsDialog({
  open,
  onOpenChange,
  selectedCount,
  onConfirm,
}: RestoreRecordsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Restore Selected Records</DialogTitle>
          <DialogDescription>
            Are you sure you want to restore the selected records? This action will reinstate them in the system.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            You are about to restore {selectedCount} record(s). This action cannot be undone.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>
            <Undo className="mr-2 h-4 w-4" />
            Restore Records
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}