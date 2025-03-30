"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Filter, Search, Briefcase, ArrowUpDown, MessageCircle, X, Send, Loader2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function WorkersPage() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      message: "नमस्ते! I'm your Rural Skills Connect assistant. How can I help you find skilled workers today?",
    },
  ])
  const [userMessage, setUserMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)

  // Filter states
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedAvailability, setSelectedAvailability] = useState("")
  const [selectedRating, setSelectedRating] = useState("")
  const [rateRange, setRateRange] = useState([300, 1000])

  const allWorkers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      profession: "Certified Electrician",
      location: "Jaipur, Rajasthan",
      hourlyRate: "₹500 - ₹700",
      rating: 4.9,
      reviews: 27,
      description:
        "Experienced electrician with 12+ years working on residential and commercial projects. Licensed and insured with specialization in energy-efficient installations.",
      skills: ["Electrical Wiring", "Lighting Installation", "Circuit Breakers", "Smart Home Systems"],
      available: true,
      category: "Electrical",
    },
    {
      id: 2,
      name: "Priya Sharma",
      profession: "Master Plumber",
      location: "Varanasi, Uttar Pradesh",
      hourlyRate: "₹600 - ₹800",
      rating: 4.8,
      reviews: 34,
      description:
        "Master plumber with over 15 years of experience in residential and commercial plumbing. Specialized in new installations, repairs, and emergency services.",
      skills: ["Pipe Installation", "Leak Repair", "Fixture Installation", "Water Heaters"],
      available: true,
      category: "Plumbing",
    },
    {
      id: 3,
      name: "Amit Patel",
      profession: "Mathematics Teacher",
      location: "Ahmedabad, Gujarat",
      hourlyRate: "₹400 - ₹600",
      rating: 4.7,
      reviews: 19,
      description:
        "Certified mathematics teacher with 8 years of experience teaching all grade levels. Strong focus on making math accessible and enjoyable for all students.",
      skills: ["Algebra", "Geometry", "Calculus", "Tutoring"],
      available: false,
      category: "Teaching",
    },
    {
      id: 4,
      name: "Ananya Reddy",
      profession: "Skilled Carpenter",
      location: "Coimbatore, Tamil Nadu",
      hourlyRate: "₹450 - ₹700",
      rating: 4.9,
      reviews: 42,
      description:
        "Third-generation carpenter with expertise in custom furniture, cabinetry, framing, and restoration. Passionate about preserving traditional woodworking techniques.",
      skills: ["Furniture Making", "Cabinetry", "Framing", "Restoration"],
      available: true,
      category: "Carpentry",
    },
    {
      id: 5,
      name: "Vikram Singh",
      profession: "Farm Equipment Mechanic",
      location: "Ludhiana, Punjab",
      hourlyRate: "₹400 - ₹650",
      rating: 4.6,
      reviews: 15,
      description:
        "Specialized mechanic with 10+ years focusing on agricultural equipment. Experienced with all major brands of tractors, harvesters, and irrigation systems.",
      skills: ["Tractor Repair", "Hydraulics", "Diesel Engines", "Preventative Maintenance"],
      available: true,
      category: "Mechanical",
    },
    {
      id: 6,
      name: "Meera Iyer",
      profession: "Healthcare Aide",
      location: "Kochi, Kerala",
      hourlyRate: "₹350 - ₹500",
      rating: 4.9,
      reviews: 31,
      description:
        "Certified healthcare aide with 6 years of experience in home care and assisted living. Compassionate care for elderly and disabled individuals.",
      skills: ["Elder Care", "Medication Management", "Mobility Assistance", "Vital Signs Monitoring"],
      available: true,
      category: "Healthcare",
    },
    {
      id: 7,
      name: "Arjun Nair",
      profession: "Painter & Decorator",
      location: "Mysore, Karnataka",
      hourlyRate: "₹400 - ₹600",
      rating: 4.8,
      reviews: 23,
      description:
        "Professional painter with 9 years of experience in interior and exterior painting. Specializes in traditional and modern painting techniques.",
      skills: ["Interior Painting", "Exterior Painting", "Wall Texturing", "Decorative Finishes"],
      available: true,
      category: "Painting",
    },
    {
      id: 8,
      name: "Deepak Verma",
      profession: "Solar Panel Installer",
      location: "Jodhpur, Rajasthan",
      hourlyRate: "₹550 - ₹800",
      rating: 4.7,
      reviews: 18,
      description:
        "Certified solar panel installer with 5 years of experience. Specializes in residential and small commercial solar installations.",
      skills: ["Solar Panel Installation", "Electrical Systems", "Roof Mounting", "System Maintenance"],
      available: false,
      category: "Electrical",
    },
    {
      id: 9,
      name: "Lakshmi Menon",
      profession: "Tailor & Seamstress",
      location: "Trivandrum, Kerala",
      hourlyRate: "₹300 - ₹500",
      rating: 4.9,
      reviews: 37,
      description:
        "Skilled tailor with 20+ years of experience in custom clothing, alterations, and traditional Indian garments.",
      skills: ["Custom Clothing", "Alterations", "Traditional Garments", "Pattern Making"],
      available: true,
      category: "Textiles",
    },
    {
      id: 10,
      name: "Ravi Malhotra",
      profession: "Computer Technician",
      location: "Chandigarh, Punjab",
      hourlyRate: "₹400 - ₹600",
      rating: 4.8,
      reviews: 29,
      description:
        "IT professional with 7 years of experience in computer repair, network setup, and software troubleshooting.",
      skills: ["Computer Repair", "Network Setup", "Software Installation", "Data Recovery"],
      available: true,
      category: "Technology",
    },
    {
      id: 11,
      name: "Sunita Devi",
      profession: "Organic Farming Expert",
      location: "Dehradun, Uttarakhand",
      hourlyRate: "₹450 - ₹650",
      rating: 4.7,
      reviews: 22,
      description:
        "Experienced organic farmer with 15+ years specializing in sustainable farming practices and crop management.",
      skills: ["Organic Farming", "Crop Planning", "Soil Management", "Pest Control"],
      available: true,
      category: "Agriculture",
    },
    {
      id: 12,
      name: "Karthik Rajan",
      profession: "Traditional Potter",
      location: "Pondicherry, Tamil Nadu",
      hourlyRate: "₹350 - ₹550",
      rating: 4.9,
      reviews: 33,
      description:
        "Master potter with 25+ years of experience in traditional South Indian pottery techniques and modern ceramic arts.",
      skills: ["Traditional Pottery", "Ceramic Arts", "Clay Sculpting", "Kiln Firing"],
      available: false,
      category: "Crafts",
    },
  ]

  // Filter workers based on selected filters
  const filteredWorkers = allWorkers.filter((worker) => {
    // Search term filter
    if (
      searchTerm &&
      !worker.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !worker.profession.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !worker.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    // Location filter
    if (selectedLocation && !worker.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
      return false
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "all" && worker.category !== selectedCategory) {
      return false
    }

    // Availability filter
    if (selectedAvailability === "available" && !worker.available) {
      return false
    }

    // Rating filter
    if (selectedRating && selectedRating !== "any") {
      const minRating = Number.parseFloat(selectedRating)
      if (worker.rating < minRating) {
        return false
      }
    }

    // Rate range filter
    const matches = worker.hourlyRate.match(/₹(\d+)\s*-\s*₹?(\d+)/)
    if (matches && matches.length >= 3) {
      const minRate = Number.parseInt(matches[1])
      if (minRate < rateRange[0] || minRate > rateRange[1]) {
        return false
      }
    }

    return true
  })

  // Get current workers for pagination
  const indexOfLastWorker = currentPage * itemsPerPage
  const indexOfFirstWorker = indexOfLastWorker - itemsPerPage
  const currentWorkers = filteredWorkers.slice(indexOfFirstWorker, indexOfLastWorker)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Calculate total pages
  const totalPages = Math.ceil(filteredWorkers.length / itemsPerPage)

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
        botResponse = "Hello! How can I assist you with finding skilled workers today?"
      } else if (lowerMsg.includes("electrician") || lowerMsg.includes("electrical")) {
        botResponse =
          "We have several skilled electricians available in Jaipur and Jodhpur. Would you like me to show you their profiles?"
      } else if (lowerMsg.includes("plumber") || lowerMsg.includes("plumbing")) {
        botResponse = "I found a master plumber in Varanasi. Would you like to see her profile?"
      } else if (lowerMsg.includes("carpenter")) {
        botResponse = "There's a skilled carpenter available in Coimbatore. Would you like more information?"
      } else if (lowerMsg.includes("rate") || lowerMsg.includes("pay") || lowerMsg.includes("cost")) {
        botResponse =
          "Our skilled workers offer competitive rates ranging from ₹300 to ₹800 per hour depending on their expertise and experience."
      } else if (lowerMsg.includes("location") || lowerMsg.includes("where")) {
        botResponse =
          "We have skilled workers available across India including Rajasthan, Gujarat, Tamil Nadu, Kerala, Punjab, and many other states."
      } else if (lowerMsg.includes("thank")) {
        botResponse = "You're welcome! Feel free to ask if you need any more assistance."
      } else if (lowerMsg.includes("bye") || lowerMsg.includes("goodbye")) {
        botResponse = "Goodbye! Have a great day. Feel free to return if you need more help."
      } else {
        botResponse =
          "I can help you find skilled workers based on your requirements. Could you please provide more details about what type of professional you're looking for?"
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
    setSelectedCategory("")
    setSelectedAvailability("")
    setSelectedRating("")
    setRateRange([300, 1000])
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
            <Link href="/jobs" className="text-gray-600 hover:text-crimson-600 transition-colors">
              Find Jobs
            </Link>
            <Link href="/workers" className="text-crimson-600 font-medium">
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Find Skilled Professionals in Rural India</h1>
            <p className="text-lg mb-6 text-green-600">Connect with verified, skilled workers for your projects and needs.</p>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Search by skill, profession or location"
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
                    Find Workers
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
                    <Label htmlFor="search">Search Workers</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="search"
                        placeholder="Skills, profession, name..."
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

                  {/* Skill Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Skill Category</Label>
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
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Crafts">Crafts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Availability */}
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                      <SelectTrigger id="availability">
                        <SelectValue placeholder="Any availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any availability</SelectItem>
                        <SelectItem value="available">Available now</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Rate Range */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label>Hourly Rate Range</Label>
                      <span className="text-sm text-gray-500">
                        ₹{rateRange[0]} - ₹{rateRange[1]}+
                      </span>
                    </div>
                    <Slider value={rateRange} min={100} max={2000} step={100} onValueChange={setRateRange} />
                  </div>

                  {/* Rating */}
                  <div className="space-y-2">
                    <Label htmlFor="rating">Minimum Rating</Label>
                    <Select value={selectedRating} onValueChange={setSelectedRating}>
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

          {/* Worker Listings */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Skilled Professionals <span className="text-crimson-600">({filteredWorkers.length})</span>
              </h1>

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

            {currentWorkers.length > 0 ? (
              <div className="space-y-6">
                {currentWorkers.map((worker) => (
                  <Card
                    key={worker.id}
                    className="overflow-hidden hover:shadow-md transition-shadow border-l-4 border-l-crimson-600"
                  >
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                              {worker.name.charAt(0)}
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
                              {worker.available ? (
                                <Badge
                                  variant="success"
                                  className="bg-green-100 text-green-800 hover:bg-green-100 border border-green-200"
                                >
                                  Available Now
                                </Badge>
                              ) : (
                                <Badge
                                  variant="outline"
                                  className="bg-gray-100 text-gray-800 hover:bg-gray-100 border border-gray-200"
                                >
                                  Currently Busy
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-3 mt-2 mb-3">
                              <div className="flex items-center text-gray-500 text-sm">
                                <MapPin className="mr-1 h-4 w-4" />
                                {worker.location}
                              </div>
                              <div className="flex items-center text-gray-500 text-sm">
                                <Briefcase className="mr-1 h-4 w-4" />
                                {worker.hourlyRate}/hour
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
                                <Badge key={index} variant="secondary" className="bg-gray-100 hover:bg-gray-200">
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
              <div className="bg-white rounded-lg p-8 text-center border border-gray-200 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No workers found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any workers matching your criteria. Try adjusting your filters or search terms.
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
            {filteredWorkers.length > 0 && (
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

