"use client";
import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  Bug,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  MoreHorizontal,
  Receipt,
  Search,
  Settings,
  User,
  Users,
  X,
  UserPlus,
  Archive,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Import all tab components
import AppointmentsPage from "../components/appointments";
import BillingPage from "../components/billing";
import ReportsPage from "@/components/reports/ReportsPage";
import SettingsPage from "../components/settings";
import QuotationsPage from "../components/quotations/QuotationsPage";
import InvoicesPage from "../components/invoices/InvoicesPage";
import HomePage from "@/components/home/HomePage";
import DeletedRecordsPage from "@/components/deleted-records/DeletedRecordsPage";
import ExpenseSummaryCards from "@/components/expenses/ExpenseSummaryCards";
import ExpensesPage from "@/components/expenses/ExpensesPage";
import LeadsPage from "@/components/leads/LeadsPage";
import EmployeesPage from "@/components/employees/EmployeesPage";
import CustomersPage from "@/components/Customers/CustomersPage";
import Image from "next/image";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "customers":
        return <CustomersPage />;
      case "appointments":
        return <AppointmentsPage />;
      case "employees":
        return <EmployeesPage />;
      case "leads":
        return <LeadsPage />;
      case "billing":
        return <BillingPage />;
      case "expenses":
        return <ExpensesPage />;
      case "reports":
        return <ReportsPage />;
      case "deleted-records":
        return <DeletedRecordsPage />;
      case "settings":
        return <SettingsPage />;
      case "quotations":
        return <QuotationsPage />;
      case "invoices":
        return <InvoicesPage />;
      default:
        return HomePage();
    }
  };

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 z-20 flex h-full flex-col border-r bg-background transition-all duration-300 ${
          sidebarOpen ? "left-0" : "-left-64"
        } md:left-0 md:w-64`}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            {/* <Bug className="h-5 w-5 text-emerald-600" />
            <span>NIPRALO</span> */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="hidden h-6 w-[160px] rounded-md md:block"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <nav className="flex-1 overflow-auto py-2">
          <div className="px-3 py-2">
            {/* <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Main
            </h2> */}
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "dashboard"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab("customers")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "customers"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Users className="h-4 w-4" />
                Client
              </button>
              <button
                onClick={() => setActiveTab("employees")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "employees"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <User className="h-4 w-4" />
                Employee
              </button>
              <button
                onClick={() => setActiveTab("appointments")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "appointments"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Calendar className="h-4 w-4" />
                Appointments
              </button>
              <button
                onClick={() => setActiveTab("leads")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "leads"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <UserPlus className="h-4 w-4" />
                Leads
              </button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Finance
            </h2>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("quotations")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "quotations"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <FileText className="h-4 w-4" />
                Quotations
              </button>
              <button
                onClick={() => setActiveTab("invoices")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "invoices"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Receipt className="h-4 w-4" />
                Invoices
              </button>
              <button
                onClick={() => setActiveTab("billing")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "billing"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <CreditCard className="h-4 w-4" />
                Billing
              </button>
              <button
                onClick={() => setActiveTab("expenses")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "expenses"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Receipt className="h-4 w-4" />
                Expenses
              </button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Management
            </h2>
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("reports")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "reports"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <BarChart3 className="h-4 w-4" />
                Reports
              </button>
              <button
                onClick={() => setActiveTab("deleted-records")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "deleted-records"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Archive className="h-4 w-4" />
                Deleted Records
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === "settings"
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Settings className="h-4 w-4" />
                Masters
              </button>
            </div>
          </div>
        </nav>
        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Shahbaz Khan</span>
              <span className="text-xs text-muted-foreground">
                Administrator
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4 cursor-pointer" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex flex-1 flex-col ${sidebarOpen ? "md:ml-64" : ""}`}>
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="w-full flex-1">
            <form>
              {/* <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-background pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div> */}
            </form>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                  <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-emerald-600"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px]">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-auto">
                  {[1, 2, 3].map((i) => (
                    <DropdownMenuItem
                      key={i}
                      className="flex flex-col items-start gap-1 p-3"
                    >
                      <div className="flex w-full items-start gap-2">
                        <span className="rounded-full bg-emerald-100 p-1">
                          <Calendar className="h-3 w-3 text-emerald-600" />
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            New appointment scheduled
                          </p>
                          <p className="text-xs text-muted-foreground">
                            123 Main St, Apt 4B
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">2h ago</p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center text-center">
                  <span className="text-sm font-medium">
                    View all notifications
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>SK</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}
