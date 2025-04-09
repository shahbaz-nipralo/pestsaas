"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from "@/components/ui/chart"
import { ReportChartCard } from "./ReportChartCard"
import { ChartData, TechnicianPerformance } from "./types"

interface ReportDashboardProps {
  monthlyRevenue: ChartData[];
  serviceBreakdown: ChartData[];
  customerGrowth: ChartData[];
  technicianPerformance: TechnicianPerformance[];
  colors: string[];
}

export function ReportDashboard({
  monthlyRevenue,
  serviceBreakdown,
  customerGrowth,
  technicianPerformance,
  colors
}: ReportDashboardProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ReportChartCard
          title="Monthly Revenue"
          description="Revenue trends over the past 12 months"
          chart={
            <BarChart
              data={monthlyRevenue}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Revenue']}
                labelFormatter={(label) => `${label} 2025`}
              />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          }
          footerContent={
            <div>
              <p className="text-sm font-medium">Total Revenue</p>
              <p className="text-2xl font-bold">$233,700</p>
            </div>
          }
        />
        
        <ReportChartCard
          title="Service Breakdown"
          description="Revenue by service type"
          chart={
            <PieChart>
              <Pie
                data={serviceBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {serviceBreakdown.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
            </PieChart>
          }
          viewDetailsButton
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <ReportChartCard
          title="Customer Growth"
          description="Customer acquisition over time"
          chart={
            <LineChart
              data={customerGrowth}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="residential" 
                stroke="#10b981" 
                activeDot={{ r: 8 }} 
                name="Residential" 
              />
              <Line 
                type="monotone" 
                dataKey="commercial" 
                stroke="#0ea5e9" 
                name="Commercial" 
              />
            </LineChart>
          }
          footerContent={
            <div className="flex justify-between w-full">
              <div>
                <p className="text-sm font-medium">Total Customers</p>
                <p className="text-2xl font-bold">332</p>
              </div>
              <div>
                <p className="text-sm font-medium">Growth Rate</p>
                <p className="text-2xl font-bold">+24%</p>
              </div>
            </div>
          }
        />
        
        <ReportChartCard
          title="Technician Performance"
          description="Jobs completed and customer ratings"
          chart={
            <BarChart
              data={technicianPerformance}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="completedJobs" fill="#10b981" name="Completed Jobs" />
              <Bar dataKey="customerRating" fill="#0ea5e9" name="Customer Rating (x50)" />
            </BarChart>
          }
          viewDetailsButton
        />
      </div>
    </div>
  )
}