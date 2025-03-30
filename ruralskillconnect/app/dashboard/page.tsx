"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Briefcase,
  Clock,
  DollarSign,
  FileText,
  Home,
  MapPin,
  MessageSquare,
  Settings,
  User,
  Users,
  CheckCircle,
  AlertCircle,
  Search,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function Dashboard() {
  const [userName, setUserName] = useState<string>("")
  const [userType, setUserType] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check if user is authenticated
    const authToken = localStorage.getItem("auth_token")
    const storedUserType = localStorage.getItem("user_type")
    const storedUserName = localStorage.getItem("user_name")

    if (!authToken) {
      // Redirect to login if not authenticated
      router.push("/login")
      return
    }

    setUserName(storedUserName || "")
    setUserType(storedUserType || "")
    setIsLoading(false)

    // Show welcome toast
    if (storedUserName) {
      toast({
        title: "Welcome to your dashboard",
        description: `Good to see you, ${storedUserName}!`,
      })
    }
  }, [router, toast])

  // If still loading or no user type, show loading state
  if (isLoading || !userType) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-beige">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mb-4"></div>
          <p className="text-neutral-gray">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-beige flex">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 shadow-soft">
        <div className="p-4 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-green flex items-center justify-center">
              <span className="text-white font-bold">RSC</span>
            </div>
            <span className="text-lg font-bold text-primary-blue">RuralSkillsConnect</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary-green/10 text-primary-green"
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>

            {userType === "client" ? (
              <>
                <Link
                  href="/dashboard/my-jobs"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <Briefcase className="mr-3 h-5 w-5" />
                  My Job Postings
                </Link>
                <Link
                  href="/dashboard/applications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <FileText className="mr-3 h-5 w-5" />
                  Applications
                </Link>
                <Link
                  href="/dashboard/messages"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Messages
                  <Badge className="ml-auto bg-secondary-yellow text-neutral-charcoal">3</Badge>
                </Link>
                <Link
                  href="/dashboard/payments"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <DollarSign className="mr-3 h-5 w-5" />
                  Payments
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard/my-profile"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <User className="mr-3 h-5 w-5" />
                  My Profile
                </Link>
                <Link
                  href="/dashboard/job-matches"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <Briefcase className="mr-3 h-5 w-5" />
                  Job Matches
                  <Badge className="ml-auto bg-secondary-yellow text-neutral-charcoal">5</Badge>
                </Link>
                <Link
                  href="/dashboard/applications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <FileText className="mr-3 h-5 w-5" />
                  My Applications
                </Link>
                <Link
                  href="/dashboard/messages"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Messages
                  <Badge className="ml-auto bg-secondary-yellow text-neutral-charcoal">2</Badge>
                </Link>
                <Link
                  href="/dashboard/earnings"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
                >
                  <DollarSign className="mr-3 h-5 w-5" />
                  Earnings
                </Link>
              </>
            )}

            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/dashboard/settings"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
              <button
                onClick={() => {
                  // Clear auth data
                  localStorage.removeItem("auth_token")
                  localStorage.removeItem("user_type")
                  localStorage.removeItem("user_name")

                  // Show logout toast
                  toast({
                    title: "Logged out successfully",
                    description: "You have been logged out of your account.",
                  })

                  // Redirect to home
                  router.push("/")
                }}
                className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-charcoal hover:bg-neutral-beige hover:text-primary-green"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow-soft z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center md:hidden">
              <button className="text-neutral-charcoal hover:text-primary-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-gray" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-neutral-gray focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-green focus:border-primary-green sm:text-sm"
                  placeholder={userType === "client" ? "Search for workers..." : "Search for jobs..."}
                  type="search"
                />
              </div>
            </div>

            <div className="flex items-center">
              <button className="p-1 rounded-full text-neutral-gray hover:text-primary-green relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-secondary-orange ring-2 ring-white"></span>
              </button>

              <div className="ml-4 relative flex-shrink-0">
                <div className="flex items-center">
                  <div className="hidden md:block mr-3">
                    <p className="text-sm font-medium text-neutral-charcoal">{userName}</p>
                    <p className="text-xs text-neutral-gray capitalize">{userType}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-green/20 flex items-center justify-center text-primary-green font-bold text-xl">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto bg-neutral-beige p-4 sm:p-6 lg:p-8">
          <div className="pb-5 border-b border-gray-200 mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary-blue">Dashboard</h1>
              <p className="mt-1 text-sm text-neutral-gray">
                Welcome back, {userName}! Here's what's happening with your account.
              </p>
            </div>

            {userType === "client" ? (
              <Link href="/post-job">
                <Button className="bg-secondary-orange hover:bg-secondary-orange/90 text-white">Post a New Job</Button>
              </Link>
            ) : (
              <Link href="/jobs">
                <Button className="bg-secondary-orange hover:bg-secondary-orange/90 text-white">Find New Jobs</Button>
              </Link>
            )}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            {userType === "client" ? (
              <>
                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-gray">Active Job Postings</p>
                      <p className="text-3xl font-bold text-neutral-charcoal mt-1">5</p>
                    </div>
                    <div className="p-3 bg-primary-green/10 rounded-full">
                      <Briefcase className="h-6 w-6 text-primary-green" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-gray">Total Applications</p>
                      <p className="text-3xl font-bold text-neutral-charcoal mt-1">18</p>
                    </div>
                    <div className="p-3 bg-primary-blue/10 rounded-full">
                      <Users className="h-6 w-6 text-primary-blue" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-gray">Hired Workers</p>
                      <p className="text-3xl font-bold text-neutral-charcoal mt-1">3</p>
                    </div>
                    <div className="p-3 bg-primary-green/10 rounded-full">
                      <CheckCircle className="h-6 w-6 text-primary-green" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-gray">Total Spent</p>
                      <p className="text-3xl font-bold text-neutral-charcoal mt-1">₹24,500</p>
                    </div>
                    <div className="p-3 bg-secondary-yellow/10 rounded-full">
                      <DollarSign className="h-6 w-6 text-secondary-yellow" />
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-gray">Job Applications</p>
                      <p className="text-3xl font-bold text-neutral-charcoal mt-1">12</p>
                    </div>
                    <div className="p-3 bg-primary-blue/10 rounded-full">
                      <FileText className="h-6 w-6 text-primary-blue" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-gray">Jobs Completed</p>
                      <p className="text-3xl font-bold text-neutral-charcoal mt-1">8</p>
                    </div>
                    <div className="p-3 bg-primary-green/10 rounded-full">
                      <CheckCircle className="h-6 w-6 text-primary-green" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-gray">Profile Views</p>
                      <p className="text-3xl font-bold text-neutral-charcoal mt-1">42</p>
                    </div>
                    <div className="p-3 bg-primary-blue/10 rounded-full">
                      <User className="h-6 w-6 text-primary-blue" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-gray">Total Earnings</p>
                      <p className="text-3xl font-bold text-neutral-charcoal mt-1">₹32,800</p>
                    </div>
                    <div className="p-3 bg-secondary-yellow/10 rounded-full">
                      <DollarSign className="h-6 w-6 text-secondary-yellow" />
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Main Dashboard Content */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6 bg-white">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-primary-green data-[state=active]:text-white"
              >
                Overview
              </TabsTrigger>
              {userType === "client" ? (
                <>
                  <TabsTrigger
                    value="applications"
                    className="data-[state=active]:bg-primary-green data-[state=active]:text-white"
                  >
                    Applications
                  </TabsTrigger>
                  <TabsTrigger
                    value="workers"
                    className="data-[state=active]:bg-primary-green data-[state=active]:text-white"
                  >
                    Recommended Workers
                  </TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger
                    value="jobs"
                    className="data-[state=active]:bg-primary-green data-[state=active]:text-white"
                  >
                    Job Matches
                  </TabsTrigger>
                  <TabsTrigger
                    value="analytics"
                    className="data-[state=active]:bg-primary-green data-[state=active]:text-white"
                  >
                    Analytics
                  </TabsTrigger>
                </>
              )}
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Activity Feed */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-primary-blue">Recent Activity</CardTitle>
                  <CardDescription className="text-neutral-gray">Your latest interactions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex">
                        <div className="mr-4 flex-shrink-0">
                          <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center ${
                              i === 0
                                ? "bg-primary-blue/10"
                                : i === 1
                                  ? "bg-primary-green/10"
                                  : i === 2
                                    ? "bg-secondary-yellow/10"
                                    : "bg-secondary-orange/10"
                            }`}
                          >
                            {i === 0 ? (
                              <MessageSquare className="h-4 w-4 text-primary-blue" />
                            ) : i === 1 ? (
                              <CheckCircle className="h-4 w-4 text-primary-green" />
                            ) : i === 2 ? (
                              <AlertCircle className="h-4 w-4 text-secondary-yellow" />
                            ) : (
                              <DollarSign className="h-4 w-4 text-secondary-orange" />
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-charcoal">
                            {userType === "client"
                              ? i === 0
                                ? "New message from Priya Sharma"
                                : i === 1
                                  ? "Rajesh Kumar accepted your job offer"
                                  : i === 2
                                    ? "Your job posting is about to expire"
                                    : "Payment of ₹5,500 processed successfully"
                              : i === 0
                                ? "New message from Aditya Sharma"
                                : i === 1
                                  ? "You completed a job successfully"
                                  : i === 2
                                    ? "New job match found for your skills"
                                    : "Payment of ₹8,200 received"}
                          </p>
                          <p className="text-sm text-neutral-gray mt-1">
                            {i === 0 ? "2 hours ago" : i === 1 ? "Yesterday" : i === 2 ? "2 days ago" : "3 days ago"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Calendar / Upcoming */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-primary-blue">Upcoming Schedule</CardTitle>
                  <CardDescription className="text-neutral-gray">
                    Your upcoming appointments and deadlines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-start p-3 rounded-lg hover:bg-neutral-beige">
                        <div className="mr-4 flex-shrink-0">
                          <div className="h-10 w-10 rounded bg-primary-green/10 flex items-center justify-center text-primary-green font-medium">
                            {["12", "15", "18"][i]}
                            <span className="text-xs ml-0.5">May</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-neutral-charcoal">
                            {userType === "client"
                              ? i === 0
                                ? "Interview with Amit Patel"
                                : i === 1
                                  ? "Site visit with Ananya Reddy"
                                  : "Project deadline: Home Renovation"
                              : i === 0
                                ? "Meeting with Rahul Sharma"
                                : i === 1
                                  ? "Start new job: Plumbing Repair"
                                  : "Submit quote for Temple Restoration"}
                          </h4>
                          <div className="mt-1 flex items-center text-sm text-neutral-gray">
                            <Clock className="mr-1.5 h-4 w-4 text-neutral-gray" />
                            {["10:00 AM", "2:30 PM", "End of day"][i]}
                          </div>
                          {i !== 2 && (
                            <div className="mt-1 flex items-center text-sm text-neutral-gray">
                              <MapPin className="mr-1.5 h-4 w-4 text-neutral-gray" />
                              {i === 0 ? "Video Call" : "On-site"}
                            </div>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-shrink-0 border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
                        >
                          Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Additional tabs content would go here */}
          </Tabs>
        </main>
      </div>
    </div>
  )
}

