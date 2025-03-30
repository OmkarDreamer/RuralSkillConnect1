import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Clock, DollarSign, Filter, Search, ArrowUpDown, Star } from "lucide-react"
import { jobs, workers } from "@/lib/data"

// Define the categories and their corresponding data
const categories = {
  electricians: {
    title: "Electricians",
    description: "Find skilled electricians for all your electrical needs, from wiring to installations.",
    icon: "⚡",
    color: "bg-yellow-100",
    jobCategory: "Electrical",
    workerProfession: "Electrician",
  },
  plumbers: {
    title: "Plumbers",
    description: "Connect with experienced plumbers for repairs, installations, and maintenance.",
    icon: "🔧",
    color: "bg-blue-100",
    jobCategory: "Plumbing",
    workerProfession: "Plumber",
  },
  carpenters: {
    title: "Carpenters",
    description: "Hire professional carpenters for furniture making, repairs, and woodworking projects.",
    icon: "🪚",
    color: "bg-amber-100",
    jobCategory: "Carpentry",
    workerProfession: "Carpenter",
  },
  teachers: {
    title: "Teachers",
    description: "Find qualified teachers for various subjects and educational needs.",
    icon: "📚",
    color: "bg-green-100",
    jobCategory: "Teaching",
    workerProfession: "Teacher",
  },
  mechanics: {
    title: "Mechanics",
    description: "Connect with skilled mechanics for vehicle and equipment repairs.",
    icon: "🔩",
    color: "bg-red-100",
    jobCategory: "Mechanical",
    workerProfession: "Mechanic",
  },
  painters: {
    title: "Painters",
    description: "Hire professional painters for interior and exterior painting projects.",
    icon: "🖌️",
    color: "bg-purple-100",
    jobCategory: "Painting",
    workerProfession: "Painter",
  },
  farmers: {
    title: "Farmers",
    description: "Connect with experienced farmers for agricultural services and advice.",
    icon: "🌾",
    color: "bg-emerald-100",
    jobCategory: "Agriculture",
    workerProfession: "Farmer",
  },
  healthcare: {
    title: "Healthcare",
    description: "Find healthcare professionals for home care and medical assistance.",
    icon: "⚕️",
    color: "bg-pink-100",
    jobCategory: "Healthcare",
    workerProfession: "Healthcare",
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase()

  // Check if the category exists
  if (!categories[slug as keyof typeof categories]) {
    notFound()
  }

  const category = categories[slug as keyof typeof categories]

  // Filter jobs by category
  const categoryJobs = jobs.filter(
    (job) => job.category === category.jobCategory || job.title.toLowerCase().includes(category.title.toLowerCase()),
  )

  // Filter workers by profession
  const categoryWorkers = workers.filter(
    (worker) =>
      worker.profession.includes(category.workerProfession) ||
      worker.skills.some((skill) => skill.toLowerCase().includes(category.title.toLowerCase())),
  )

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

      {/* Category Hero */}
      <section className={`${category.color} py-12 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{category.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-crimson-800">{category.title}</h1>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl">{category.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Search and Filters */}
          <div className="md:w-1/4">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 h-5 w-5" /> Filters
                </h2>

                <div className="space-y-6">
                  {/* Search */}
                  <div className="space-y-2">
                    <Label htmlFor="search">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="search" placeholder="Keywords, titles, skills..." className="pl-9" />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="location" placeholder="City, state, pin code..." className="pl-9" />
                    </div>
                  </div>

                  {/* Type */}
                  <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="All types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All types</SelectItem>
                        <SelectItem value="jobs">Jobs</SelectItem>
                        <SelectItem value="workers">Workers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Pay Range */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Pay Range (hourly)</Label>
                      <span className="text-sm text-gray-500">₹300 - ₹1000+</span>
                    </div>
                    <Slider defaultValue={[300, 1000]} min={100} max={2000} step={100} />
                  </div>

                  {/* Rating */}
                  <div className="space-y-2">
                    <Label htmlFor="rating">Minimum Rating</Label>
                    <Select>
                      <SelectTrigger id="rating">
                        <SelectValue placeholder="Any rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any rating</SelectItem>
                        <SelectItem value="4.5">4.5+ stars</SelectItem>
                        <SelectItem value="4">4+ stars</SelectItem>
                        <SelectItem value="3.5">3.5+ stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-crimson-600 hover:bg-crimson-700">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Listings */}
          <div className="md:w-3/4">
            {/* Jobs Section */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-crimson-800">Available Jobs</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <ArrowUpDown className="mr-1 h-4 w-4" /> Sort by
                  </Button>
                  <Select>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Most recent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most recent</SelectItem>
                      <SelectItem value="highest">Highest pay</SelectItem>
                      <SelectItem value="lowest">Lowest pay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {categoryJobs.length > 0 ? (
                <div className="space-y-6">
                  {categoryJobs.map((job) => (
                    <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                <Link
                                  href={`/jobs/${job.id}`}
                                  className="text-crimson-800 hover:text-crimson-600 transition-colors"
                                >
                                  {job.title}
                                </Link>
                              </h3>
                              <div className="flex flex-wrap gap-3 mb-3">
                                <div className="flex items-center text-gray-500 text-sm">
                                  <MapPin className="mr-1 h-4 w-4" />
                                  {job.location}
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                  <Briefcase className="mr-1 h-4 w-4" />
                                  {job.type}
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                  <DollarSign className="mr-1 h-4 w-4" />
                                  {job.rate}
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                  <Clock className="mr-1 h-4 w-4" />
                                  Posted {job.posted}
                                </div>
                              </div>
                              <p className="text-gray-600 mb-4">{job.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {job.urgent && (
                              <Badge variant="destructive" className="ml-2">
                                Urgent
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-gray-100">
                          <span className="text-sm text-gray-500">{job.applicants} applicants</span>
                          <Link href={`/jobs/${job.id}`}>
                            <Button className="bg-crimson-600 hover:bg-crimson-700">Apply Now</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
                  <p className="text-gray-600 mb-4">No jobs found in this category at the moment.</p>
                  <Link href="/post-job">
                    <Button className="bg-crimson-600 hover:bg-crimson-700">Post a Job</Button>
                  </Link>
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-crimson-600 text-white hover:bg-crimson-700">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Workers Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-crimson-800">Available Professionals</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <ArrowUpDown className="mr-1 h-4 w-4" /> Sort by
                  </Button>
                  <Select>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Top rated" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Top rated</SelectItem>
                      <SelectItem value="experience">Most experienced</SelectItem>
                      <SelectItem value="highest">Highest rate</SelectItem>
                      <SelectItem value="lowest">Lowest rate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {categoryWorkers.length > 0 ? (
                <div className="space-y-6">
                  {categoryWorkers.map((worker) => (
                    <Card key={worker.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                                {"AB"}
                              </div>
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h2 className="text-xl font-semibold mb-1">
                                    <Link
                                      href={`/workers/${worker.id}`}
                                      className="text-crimson-800 hover:text-crimson-600 transition-colors"
                                    >
                                      {worker.name}
                                    </Link>
                                  </h2>
                                  <p className="text-gray-600 font-medium">{worker.profession}</p>
                                </div>
                                <Badge variant="success" className="bg-green-100 text-green-800 hover:bg-green-100">
                                  Available Now
                                </Badge>
                              </div>
                              <div className="flex flex-wrap gap-3 mt-2 mb-3">
                                <div className="flex items-center text-gray-500 text-sm">
                                  <MapPin className="mr-1 h-4 w-4" />
                                  {worker.location}
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                  <Briefcase className="mr-1 h-4 w-4" />₹{worker.rate}/hour
                                </div>
                                <div className="flex items-center text-amber-500 text-sm">
                                  <Star className="mr-1 h-4 w-4 fill-amber-500" />
                                  <span>{worker.rating}</span>
                                  <span className="text-gray-500 ml-1">({worker.reviews} reviews)</span>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-4">{worker.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {worker.skills.map((skill, index) => (
                                  <Badge key={index} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-gray-100">
                          <span className="text-sm text-gray-500">Available for on-site and remote work</span>
                          <Link href={`/workers/${worker.id}`}>
                            <Button className="bg-crimson-600 hover:bg-crimson-700">View Profile</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
                  <p className="text-gray-600 mb-4">No professionals found in this category at the moment.</p>
                  <Link href="/become-worker">
                    <Button className="bg-crimson-600 hover:bg-crimson-700">Become a Worker</Button>
                  </Link>
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-crimson-600 text-white hover:bg-crimson-700">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

