"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Bell, Check, ChevronRight, Globe, Lock, Moon, Save, Shield, Sun, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  const [theme, setTheme] = useState("light")

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Masters</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="flex-1">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <TabsList className="flex flex-col h-auto p-0 bg-transparent space-y-1">
              <TabsTrigger value="profile" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="account" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                <Lock className="mr-2 h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
              {/* <TabsTrigger value="appearance" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                <Sun className="mr-2 h-4 w-4" />
                Appearance
              </TabsTrigger> */}
              <TabsTrigger value="company" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                <Globe className="mr-2 h-4 w-4" />
                Company
              </TabsTrigger>
              {/* <TabsTrigger value="security" className="justify-start px-4 py-2 h-10 data-[state=active]:bg-muted">
                <Shield className="mr-2 h-4 w-4" />
                Security
              </TabsTrigger> */}
            </TabsList>
          </div>

          <div className="flex-1">
            <TabsContent value="profile" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>Manage your personal information and profile settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        Change Avatar
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="(555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself"
                      className="min-h-[100px]"
                      defaultValue="Pest control professional with over 10 years of experience in residential and commercial pest management."
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>Manage your account settings and preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Authenticator App</p>
                        <p className="text-sm text-muted-foreground">
                          Use an authenticator app to generate one-time codes.
                        </p>
                      </div>
                      <Button variant="outline">Setup</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Text Message</p>
                        <p className="text-sm text-muted-foreground">Receive a code via SMS to verify your identity.</p>
                      </div>
                      <Button variant="outline">Setup</Button>
                    </div>
                  </div>

                  <Separator />

                  {/* <div className="space-y-4">
                    <h3 className="text-lg font-medium">Account Management</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-red-600">Delete Account</p>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all associated data.
                        </p>
                      </div>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div> */}
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Configure how you receive notifications and alerts.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-appointments">Appointment Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about upcoming appointments.
                          </p>
                        </div>
                        <Switch id="email-appointments" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-schedule">Schedule Changes</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications when your schedule is updated.
                          </p>
                        </div>
                        <Switch id="email-schedule" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-customers">Customer Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about customer activity.
                          </p>
                        </div>
                        <Switch id="email-customers" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-marketing">Marketing & Promotions</Label>
                          <p className="text-sm text-muted-foreground">Receive marketing emails and special offers.</p>
                        </div>
                        <Switch id="email-marketing" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="system-appointments">Appointment Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive in-app notifications for appointments.
                          </p>
                        </div>
                        <Switch id="system-appointments" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="system-messages">Messages</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive in-app notifications for new messages.
                          </p>
                        </div>
                        <Switch id="system-messages" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="system-updates">System Updates</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications about system updates.</p>
                        </div>
                        <Switch id="system-updates" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the appearance of the application.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div
                        className={`flex flex-col items-center gap-2 rounded-md border p-4 cursor-pointer ${theme === "light" ? "border-emerald-600 bg-emerald-50" : ""}`}
                        onClick={() => setTheme("light")}
                      >
                        <Sun className="h-6 w-6" />
                        <span className="text-sm font-medium">Light</span>
                        {theme === "light" && <Check className="h-4 w-4 text-emerald-600" />}
                      </div>
                      <div
                        className={`flex flex-col items-center gap-2 rounded-md border p-4 cursor-pointer ${theme === "dark" ? "border-emerald-600 bg-emerald-50" : ""}`}
                        onClick={() => setTheme("dark")}
                      >
                        <Moon className="h-6 w-6" />
                        <span className="text-sm font-medium">Dark</span>
                        {theme === "dark" && <Check className="h-4 w-4 text-emerald-600" />}
                      </div>
                      <div
                        className={`flex flex-col items-center gap-2 rounded-md border p-4 cursor-pointer ${theme === "system" ? "border-emerald-600 bg-emerald-50" : ""}`}
                        onClick={() => setTheme("system")}
                      >
                        <div className="flex">
                          <Sun className="h-6 w-6" />
                          <Moon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium">System</span>
                        {theme === "system" && <Check className="h-4 w-4 text-emerald-600" />}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Dashboard Layout</h3>
                    <div className="space-y-2">
                      <Label htmlFor="layout-preference">Default View</Label>
                      <Select defaultValue="compact">
                        <SelectTrigger id="layout-preference">
                          <SelectValue placeholder="Select layout" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compact">Compact</SelectItem>
                          <SelectItem value="comfortable">Comfortable</SelectItem>
                          <SelectItem value="spacious">Spacious</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Accessibility</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="reduce-motion">Reduce Motion</Label>
                          <p className="text-sm text-muted-foreground">Minimize animations throughout the interface.</p>
                        </div>
                        <Switch id="reduce-motion" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="high-contrast">High Contrast</Label>
                          <p className="text-sm text-muted-foreground">Increase contrast for better visibility.</p>
                        </div>
                        <Switch id="high-contrast" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="company" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Company Settings</CardTitle>
                  <CardDescription>Manage your company information and business settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Company Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" defaultValue="PestPro Services" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-phone">Phone Number</Label>
                          <Input id="company-phone" defaultValue="(555) 987-6543" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-email">Email</Label>
                          <Input id="company-email" type="email" defaultValue="info@pestproservices.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-address">Address</Label>
                        <Input id="company-address" defaultValue="123 Business Ave, Suite 100" />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-city">City</Label>
                          <Input id="company-city" defaultValue="Springfield" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-state">State</Label>
                          <Input id="company-state" defaultValue="IL" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-zip">ZIP Code</Label>
                          <Input id="company-zip" defaultValue="62701" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Separator /> */}

                  {/* <div className="space-y-4">
                    <h3 className="text-lg font-medium">Business Hours</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="hours-weekday">Weekdays</Label>
                          <Input id="hours-weekday" defaultValue="8:00 AM - 5:00 PM" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hours-weekend">Weekends</Label>
                          <Input id="hours-weekend" defaultValue="Closed" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hours-notes">Special Hours Notes</Label>
                        <Textarea
                          id="hours-notes"
                          placeholder="Enter any special hours information"
                          className="min-h-[100px]"
                          defaultValue="Emergency services available 24/7 by calling our main number."
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* <Separator /> */}

                  {/* <div className="space-y-4">
                    <h3 className="text-lg font-medium">Service Areas</h3>
                    <div className="space-y-2">
                      <Label htmlFor="service-areas">Service ZIP Codes</Label>
                      <Textarea
                        id="service-areas"
                        placeholder="Enter ZIP codes separated by commas"
                        className="min-h-[100px]"
                        defaultValue="62701, 62702, 62703, 62704, 62705, 62706, 62707, 62708, 62711, 62712"
                      />
                    </div>
                  </div> */}
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Manage security settings and access controls.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Login Sessions</h3>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Current Session</p>
                            <p className="text-sm text-muted-foreground">Windows 11 • Chrome • Springfield, IL</p>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-700">Active Now</Badge>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Mobile App</p>
                            <p className="text-sm text-muted-foreground">
                              iOS 17 • PestPro App • Last active 2 hours ago
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Sign Out
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Tablet</p>
                            <p className="text-sm text-muted-foreground">iPadOS • Safari • Last active 3 days ago</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Sign Out
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="login-notification">Login Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications for new login attempts.
                          </p>
                        </div>
                        <Switch id="login-notification" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="session-timeout">Automatic Session Timeout</Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically log out after period of inactivity.
                          </p>
                        </div>
                        <Switch id="session-timeout" defaultChecked />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeout-duration">Timeout Duration</Label>
                        <Select defaultValue="30">
                          <SelectTrigger id="timeout-duration">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                            <SelectItem value="120">2 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Activity Log</h3>
                    <div className="space-y-4">
                      <div className="rounded-md border">
                        <div className="p-4 flex items-center justify-between">
                          <div>
                            <p className="font-medium">Password Changed</p>
                            <p className="text-sm text-muted-foreground">2025-03-15 • 10:23 AM • Springfield, IL</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <Separator />
                        <div className="p-4 flex items-center justify-between">
                          <div>
                            <p className="font-medium">New Login</p>
                            <p className="text-sm text-muted-foreground">2025-03-10 • 8:45 AM • Springfield, IL</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <Separator />
                        <div className="p-4 flex items-center justify-between">
                          <div>
                            <p className="font-medium">Profile Updated</p>
                            <p className="text-sm text-muted-foreground">2025-03-05 • 2:15 PM • Springfield, IL</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Full Activity Log
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

