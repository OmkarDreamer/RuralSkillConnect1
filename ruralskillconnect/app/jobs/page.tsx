"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Filter,
  Search,
  ArrowUpDown,
  MessageCircle,
  X,
  Send,
  Loader2,
} from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function JobsPage() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", message: "नमस्ते! I'm your Rural Skills Connect assistant. How can I help you today?" },
  ])
  const [userMessage, setUserMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)

  // Filter states
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedJobType, setSelectedJobType] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [payRange, setPayRange] = useState([300, 1000])
  const [datePosted, setDatePosted] = useState("")
  const [showUrgentOnly, setShowUrgentOnly] = useState(false)

  const allJobs = [
    {
      id: 1,
      title: "Electrician Needed for Home Renovation",
      location: "Jaipur, Rajasthan",
      type: "Contract",
      rate: "₹500 - ₹700 per hour",
      posted: "2 days ago",
      description:
        "Looking for a licensed electrician to rewire a 3-bedroom home and install new lighting fixtures throughout. The project is expected to take 1-2 weeks.",
      skills: ["Electrical Wiring", "Lighting Installation", "Circuit Breakers"],
      urgent: true,
      category: "Electrical",
      applicants: 5,
    },
    {
      id: 2,
      title: "Plumbing Repair in Local High School",
      location: "Varanasi, Uttar Pradesh",
      type: "One-time Project",
      rate: "₹8,000 - ₹12,000 (Fixed)",
      posted: "1 week ago",
      description:
        "The high school needs repairs to the plumbing system in the gymnasium locker rooms. Experience with commercial plumbing required.",
      skills: ["Commercial Plumbing", "Pipe Repair", "Fixture Installation"],
      urgent: false,
      category: "Plumbing",
      applicants: 3,
    },
    {
      id: 3,
      title: "Part-time Math Teacher for Rural School",
      location: "Ahmedabad, Gujarat",
      type: "Part-time",
      rate: "₹400 - ₹600 per hour",
      posted: "3 days ago",
      description:
        "Our small rural school is seeking a qualified math teacher to teach algebra and geometry to grades 9-12, three days a week.",
      skills: ["Mathematics", "Teaching", "Curriculum Development"],
      urgent: true,
      category: "Teaching",
      applicants: 2,
    },
    {
      id: 4,
      title: "Carpenter for Temple Restoration",
      location: "Coimbatore, Tamil Nadu",
      type: "Contract",
      rate: "₹450 - ₹700 per hour",
      posted: "5 days ago",
      description:
        "Historic temple needs restoration work including replacing damaged wooden beams, repairing doors, and reinforcing the structure. Experience with historic buildings preferred.",
      skills: ["Carpentry", "Woodworking", "Restoration"],
      urgent: false,
      category: "Carpentry",
      applicants: 4,
    },
    {
      id: 5,
      title: "Farm Equipment Mechanic",
      location: "Ludhiana, Punjab",
      type: "Full-time",
      rate: "₹25,000 - ₹35,000 per month",
      posted: "1 day ago",
      description:
        "Local farm cooperative seeking an experienced mechanic to maintain and repair various farm equipment including tractors, harvesters, and irrigation systems.",
      skills: ["Mechanical Repair", "Hydraulics", "Diesel Engines"],
      urgent: false,
      category: "Mechanical",
      applicants: 1,
    },
    {
      id: 6,
      title: "Home Healthcare Aide for Elderly Couple",
      location: "Kochi, Kerala",
      type: "Part-time",
      rate: "₹350 - ₹500 per hour",
      posted: "4 days ago",
      description:
        "Seeking a compassionate healthcare aide to assist an elderly couple with daily activities, medication management, and light housekeeping, 20 hours per week.",
      skills: ["Elder Care", "Medication Management", "Meal Preparation"],
      urgent: false,
      category: "Healthcare",
      applicants: 3,
    },
    {
      id: 7,
      title: "Traditional Mural Painter for Restaurant",
      location: "Mysore, Karnataka",
      type: "Contract",
      rate: "₹15,000 - ₹25,000 (Fixed)",
      posted: "3 days ago",
      description:
        "New restaurant needs interior painting with traditional Karnataka-style murals. Looking for an experienced painter with artistic skills.",
      skills: ["Interior Painting", "Mural Painting", "Traditional Art"],
      urgent: true,
      category: "Painting",
      applicants: 6,
    },
    {
      id: 8,
      title: "Solar Panel Installation for Farm",
      location: "Jodhpur, Rajasthan",
      type: "One-time Project",
      rate: "₹30,000 - ₹45,000 (Fixed)",
      posted: "1 week ago",
      description:
        "Looking for a solar panel installer to set up a 5kW system for our farm to power irrigation pumps and basic farm operations.",
      skills: ["Solar Panel Installation", "Electrical Systems", "System Design"],
      urgent: false,
      category: "Electrical",
      applicants: 2,
    },
    {
      id: 9,
      title: "Handloom Weaver for Traditional Textiles",
      location: "Banaras, Uttar Pradesh",
      type: "Contract",
      rate: "₹20,000 - ₹30,000 per month",
      posted: "2 days ago",
      description:
        "Seeking skilled handloom weaver with experience in traditional Banarasi silk saree weaving. Must have knowledge of intricate designs and patterns.",
      skills: ["Handloom Weaving", "Textile Design", "Traditional Crafts"],
      urgent: true,
      category: "Textiles",
      applicants: 3,
    },
    {
      id: 10,
      title: "Organic Farming Consultant",
      location: "Shimla, Himachal Pradesh",
      type: "Part-time",
      rate: "₹800 - ₹1,200 per hour",
      posted: "1 week ago",
      description:
        "Looking for an experienced organic farming consultant to help transition a 5-acre farm to organic practices. Knowledge of local crops and conditions essential.",
      skills: ["Organic Farming", "Crop Planning", "Soil Management"],
      urgent: false,
      category: "Agriculture",
      applicants: 4,
    },
    {
      id: 11,
      title: "Ayurvedic Practitioner for Wellness Center",
      location: "Trivandrum, Kerala",
      type: "Full-time",
      rate: "₹35,000 - ₹50,000 per month",
      posted: "3 days ago",
      description:
        "New wellness center seeking certified Ayurvedic practitioner with at least 5 years of experience. Must be knowledgeable in traditional treatments and therapies.",
      skills: ["Ayurveda", "Traditional Medicine", "Wellness Therapy"],
      urgent: false,
      category: "Healthcare",
      applicants: 7,
    },
    {
      id: 12,
      title: "Pottery Artisan for Craft Village",
      location: "Jaipur, Rajasthan",
      type: "Contract",
      rate: "₹18,000 - ₹25,000 per month",
      posted: "5 days ago",
      description:
        "Craft village looking for skilled pottery artisan to create traditional Rajasthani pottery and conduct workshops for visitors.",
      skills: ["Pottery Making", "Traditional Crafts", "Workshop Facilitation"],
      urgent: false,
      category: "Crafts",
      applicants: 2,
    },
  ]

  // Filter jobs based on selected filters
  const filteredJobs = allJobs.filter((job) => {
    // Search term filter
    if (
      searchTerm &&
      !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    // Location filter
    if (selectedLocation && !job.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
      return false
    }

    // Job type filter
    if (selectedJobType && job.type !== selectedJobType) {
      return false
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "all" && job.category !== selectedCategory) {
      return false
    }

    // Pay range filter - this is approximate since we have different formats
    const jobRate = job.rate.toLowerCase()
    if (jobRate.includes("per hour")) {
      const matches = jobRate.match(/₹(\d+)\s*-\s*₹?(\d+)/)
      if (matches && matches.length >= 3) {
        const minRate = Number.parseInt(matches[1])
        if (minRate < payRange[0] || minRate > payRange[1]) {
          return false
        }
      }
    }

    // Date posted filter - simplified for demo
    if (datePosted === "today" && !job.posted.includes("day ago")) {
      return false
    } else if (datePosted === "week" && job.posted.includes("week ago")) {
      return false
    } else if (datePosted !== "any" && datePosted !== "") {
      return false
    }

    // Urgent only filter
    if (showUrgentOnly && !job.urgent) {
      return false
    }

    return true
  })

  // Get current jobs for pagination
  const indexOfLastJob = currentPage * itemsPerPage
  const indexOfFirstJob = indexOfLastJob - itemsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)

  // Generate page numbers
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  // Handle chatbot message submission
  const handleSendMessage = () => {
    if (!userMessage.trim()) return

    // Add user message to chat
    setChatMessages([...chatMessages, { sender: "user", message: userMessage }])
    setUserMessage("")
    setIsTyping(true)

    // Simulate bot response after a delay
    setTimeout(() => {
      let botResponse = ""

      // Simple response logic based on keywords
      const lowerMsg = userMessage.toLowerCase()

      if (
        lowerMsg.includes("hello") ||
        lowerMsg.includes("hi") ||
        lowerMsg.includes("hey") ||
        lowerMsg.includes("namaste")
      ) {
        botResponse = "Hello! How can I assist you with finding jobs or workers today?"
      } else if (lowerMsg.includes("job") || lowerMsg.includes("work") || lowerMsg.includes("employment")) {
        botResponse = "I can help you find jobs! What type of work are you looking for, and in which location?"
      } else if (lowerMsg.includes("electrician") || lowerMsg.includes("electrical")) {
        botResponse =
          "We have several electrician jobs available in Jaipur and Jodhpur. Would you like me to show you these listings?"
      } else if (lowerMsg.includes("plumber") || lowerMsg.includes("plumbing")) {
        botResponse = "I found a plumbing job in Varanasi. Would you like to see the details?"
      } else if (lowerMsg.includes("teacher") || lowerMsg.includes("teaching")) {
        botResponse = "There's a part-time teaching position available in Ahmedabad. Would you like more information?"
      } else if (lowerMsg.includes("salary") || lowerMsg.includes("pay") || lowerMsg.includes("wage")) {
        botResponse =
          "Jobs on our platform offer competitive pay ranging from ₹350 to ₹1,200 per hour depending on the skill and experience required."
      } else if (lowerMsg.includes("location") || lowerMsg.includes("where")) {
        botResponse =
          "We have jobs available across India including Rajasthan, Gujarat, Tamil Nadu, Kerala, Punjab, and many other states."
      } else if (lowerMsg.includes("thank")) {
        botResponse = "You're welcome! Feel free to ask if you need any more assistance."
      } else if (lowerMsg.includes("bye") || lowerMsg.includes("goodbye")) {
        botResponse = "Goodbye! Have a great day. Feel free to return if you need more help."
      } else {
        botResponse =
          "I can help you find jobs or skilled workers based on your requirements. Could you please provide more details about what you're looking for?"
      }

      setChatMessages((prev) => [...prev, { sender: "bot", message: botResponse }])
      setIsTyping(false)
    }, 1500)
  }

  // Handle filter application
  const applyFilters = () => {
    setCurrentPage(1) // Reset to first page when filters change
  }

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedLocation("")
    setSelectedJobType("")
    setSelectedCategory("")
    setPayRange([300, 1000])
    setDatePosted("")
    setShowUrgentOnly(false)
    setCurrentPage(1)
  }

  // Handle Enter key in chat input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-crimson-600">RuralSkillsConnect</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/jobs" className="text-crimson-600 font-medium">
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
              <Button className="hidden sm:block bg-secondary-orange hover:bg-secondary-orange/90 text-white">Sign Up</Button>
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

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-crimson-700 to-crimson-900 text-white py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Find Meaningful Work in Rural India</h1>
            <p className="text-lg mb-6 text-green-600">
              Discover job opportunities that match your skills and help build stronger rural communities.
            </p>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Search jobs by title, skill or keyword"
                      className="pl-10 h-12"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  <Button
                    className="w-full md:w-auto h-12 bg-crimson-600 hover:bg-crimson-700 px-8"
                    onClick={applyFilters}
                  >
                    Search Jobs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Search and Filters */}
          <div className="md:w-1/4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 h-5 w-5" /> Filters
                </h2>

                <div className="space-y-6">
                  {/* Search */}
                  <div className="space-y-2">
                    <Label htmlFor="search">Search Jobs</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="search"
                        placeholder="Keywords, titles, skills..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="location"
                        placeholder="City, state, pin code..."
                        className="pl-9"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Job Type */}
                  <div className="space-y-2">
                    <Label htmlFor="jobType">Job Type</Label>
                    <Select value={selectedJobType} onValueChange={setSelectedJobType}>
                      <SelectTrigger id="jobType">
                        <SelectValue placeholder="All job types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All job types</SelectItem>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="One-time Project">One-time Project</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="All categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All categories</SelectItem>
                        <SelectItem value="Electrical">Electrical</SelectItem>
                        <SelectItem value="Plumbing">Plumbing</SelectItem>
                        <SelectItem value="Teaching">Teaching</SelectItem>
                        <SelectItem value="Carpentry">Carpentry</SelectItem>
                        <SelectItem value="Mechanical">Mechanical</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Agriculture">Agriculture</SelectItem>
                        <SelectItem value="Painting">Painting</SelectItem>
                        <SelectItem value="Textiles">Textiles</SelectItem>
                        <SelectItem value="Crafts">Crafts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Pay Range */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Pay Range (hourly)</Label>
                      <span className="text-sm text-gray-500">
                        ₹{payRange[0]} - ₹{payRange[1]}+
                      </span>
                    </div>
                    <Slider value={payRange} min={100} max={2000} step={100} onValueChange={setPayRange} />
                  </div>

                  {/* Date Posted */}
                  <div className="space-y-2">
                    <Label htmlFor="datePosted">Date Posted</Label>
                    <Select value={datePosted} onValueChange={setDatePosted}>
                      <SelectTrigger id="datePosted">
                        <SelectValue placeholder="Any time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any time</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">Past week</SelectItem>
                        <SelectItem value="month">Past month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Urgent Only */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="urgentOnly" checked={showUrgentOnly} onCheckedChange={setShowUrgentOnly} />
                    <Label htmlFor="urgentOnly">Show urgent jobs only</Label>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-crimson-600 hover:bg-crimson-700" onClick={applyFilters}>
                      Apply Filters
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-crimson-600 text-crimson-600 hover:bg-crimson-50"
                      onClick={resetFilters}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Available Jobs <span className="text-crimson-600">({filteredJobs.length})</span>
              </h1>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <ArrowUpDown className="mr-1 h-4 w-4" /> Sort by
                </Button>
                <Select>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Most relevant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Most relevant</SelectItem>
                    <SelectItem value="recent">Most recent</SelectItem>
                    <SelectItem value="highest">Highest pay</SelectItem>
                    <SelectItem value="lowest">Lowest pay</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {currentJobs.length > 0 ? (
              <div className="space-y-6">
                {currentJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="overflow-hidden hover:shadow-md transition-shadow border-l-4 border-l-crimson-600"
                  >
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-xl font-semibold mb-2">
                              <Link
                                href={`/jobs/${job.id}`}
                                className="text-crimson-800 hover:text-crimson-600 transition-colors"
                              >
                                {job.title}
                              </Link>
                            </h2>
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
                                <Badge key={index} variant="secondary" className="bg-gray-100 hover:bg-gray-200">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          {job.urgent && (
                            <Badge variant="destructive" className="bg-red-100 text-red-800 border border-red-200">
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
              <div className="bg-white rounded-lg p-8 text-center border border-gray-200 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  <Button
                    variant="outline"
                    className="border-crimson-600 text-crimson-600 hover:bg-crimson-50"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            )}

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
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

                  {pageNumbers.map((number) => (
                    <Button
                      key={number}
                      variant="outline"
                      size="sm"
                      className={currentPage === number ? "bg-crimson-600 text-white hover:bg-crimson-700" : ""}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
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
            )}
          </div>
        </div>
      </main>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChatbot ? (
          <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 overflow-hidden border border-gray-200">
            <div className="bg-crimson-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                <h3 className="font-medium">Rural Skills Assistant</h3>
              </div>
              <button onClick={() => setShowChatbot(false)} className="text-white hover:text-gray-200">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 bg-gray-50" id="chat-messages">
              <div className="flex flex-col gap-3">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`${
                      msg.sender === "bot"
                        ? "bg-gray-200 rounded-lg p-3 max-w-[80%]"
                        : "bg-crimson-100 rounded-lg p-3 max-w-[80%] self-end"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-gray-200 rounded-lg p-3 max-w-[80%] flex">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="p-3 border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  className="flex-1"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  size="sm"
                  className="bg-crimson-600 hover:bg-crimson-700"
                  onClick={handleSendMessage}
                  disabled={isTyping}
                >
                  {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => setShowChatbot(true)}
            className="rounded-full h-14 w-14 bg-crimson-600 hover:bg-crimson-700 shadow-lg flex items-center justify-center"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  )
}

