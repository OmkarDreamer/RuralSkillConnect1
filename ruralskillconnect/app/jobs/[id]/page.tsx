import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  User,
  Star,
  MessageSquare,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { jobs } from "@/lib/data"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const jobId = Number.parseInt(params.id)
  const job = jobs.find((j) => j.id === jobId)

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-crimson-600">RuralSkillsConnect</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/jobs" className="text-gray-600 hover:text-crimson-600 transition-colors">
              Find Jobs
            </Link>
            <Link href="/workers" className="text-gray-600 hover:text-crimson-600 transition-colors">
              Find Workers
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button
                variant="outline"
                className="hidden sm:block border-crimson-600 text-crimson-600 hover:bg-crimson-50"
              >
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="hidden sm:block bg-crimson-600 hover:bg-crimson-700">Sign Up</Button>
            </Link>
            <Button variant="ghost" className="md:hidden" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/jobs" className="text-crimson-600 hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-crimson-800 mb-2">{job.title}</h1>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="mr-1 h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Briefcase className="mr-1 h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <DollarSign className="mr-1 h-4 w-4" />
                        {job.rate}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="mr-1 h-4 w-4" />
                        Posted {job.posted}
                      </div>
                    </div>
                  </div>
                  {job.urgent && (
                    <Badge variant="destructive" className="bg-red-100 text-red-800 border border-red-200">
                      Urgent
                    </Badge>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h2 className="text-lg font-semibold mb-3">Job Description</h2>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <p className="text-gray-700 whitespace-pre-line">{job.detailedDescription}</p>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h2 className="text-lg font-semibold mb-3">Required Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 hover:bg-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h2 className="text-lg font-semibold mb-3">About the Client</h2>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium mr-3">
                      {job.postedBy.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-medium">{job.postedBy.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(job.postedBy.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">{job.postedBy.rating} rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Apply for this Job</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter
                    </label>
                    <Textarea
                      id="cover-letter"
                      placeholder="Introduce yourself and explain why you're a good fit for this job..."
                      rows={6}
                    />
                  </div>
                  <div>
                    <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Rate
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input
                        type="text"
                        name="rate"
                        id="rate"
                        className="focus:ring-crimson-500 focus:border-crimson-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-10 border"
                        placeholder="0.00"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">
                          {job.rate.includes("hour") ? "/ hour" : job.rate.includes("month") ? "/ month" : "fixed"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-crimson-500 focus:border-crimson-500 sm:text-sm rounded-md h-10 border"
                    >
                      <option>Immediately</option>
                      <option>Within a week</option>
                      <option>Within two weeks</option>
                      <option>Within a month</option>
                    </select>
                  </div>
                  <Button className="w-full bg-crimson-600 hover:bg-crimson-700">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Job Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Job Type:</span>
                    <span className="font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pay Rate:</span>
                    <span className="font-medium">{job.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posted:</span>
                    <span className="font-medium">{job.posted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Applicants:</span>
                    <span className="font-medium">{job.applicants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{job.category}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full border-crimson-600 text-crimson-600 hover:bg-crimson-50">
                  <MessageSquare className="mr-2 h-4 w-4" /> Message Client
                </Button>
                <Button variant="outline" className="w-full border-crimson-600 text-crimson-600 hover:bg-crimson-50">
                  <FileText className="mr-2 h-4 w-4" /> Save Job
                </Button>
                <Button variant="outline" className="w-full border-crimson-600 text-crimson-600 hover:bg-crimson-50">
                  <User className="mr-2 h-4 w-4" /> View Client Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safety Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Always communicate and make payments through our platform for your protection.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Check client reviews and ratings before accepting any job offers.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Be wary of jobs that require upfront payments or seem too good to be true.
                  </p>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    For on-site work, inform someone of your location and expected return time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

