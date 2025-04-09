"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { Report } from "./types"

interface ReportListProps {
  reports: Report[];
  onGenerate: (reportId: number) => void;
}

export function ReportList({ reports, onGenerate }: ReportListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Reports</CardTitle>
        <CardDescription>Select and generate reports for your business</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map(report => (
            <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">{report.name}</h3>
                <p className="text-sm text-muted-foreground">{report.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                    {report.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Last generated: {report.lastGenerated}
                  </span>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onGenerate(report.id)}
              >
                <FileText className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}