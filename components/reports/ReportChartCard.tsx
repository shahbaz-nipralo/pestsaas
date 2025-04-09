"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDownToLine, FileText } from "lucide-react"
import { ResponsiveContainer } from "@/components/ui/chart"
import { ReactNode } from "react"

interface ReportChartCardProps {
  title: string;
  description: string;
  chart: ReactNode;
  footerContent?: ReactNode;
  downloadButton?: boolean;
  viewDetailsButton?: boolean;
}

export function ReportChartCard({
  title,
  description,
  chart,
  footerContent,
  downloadButton = true,
  viewDetailsButton = false
}: ReportChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            {chart}
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {footerContent || (
          <>
            {downloadButton && (
              <Button variant="outline" size="sm">
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            )}
            {viewDetailsButton && (
              <Button variant="outline" size="sm" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                View Detailed Breakdown
              </Button>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  )
}