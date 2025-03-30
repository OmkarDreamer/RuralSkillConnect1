import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Star,
  Briefcase,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  MessageSquare,
  FileText,
  Award,
  ThumbsUp,
} from "lucide-react"
import { workers, jobs } from "@/lib/data"

export default function WorkerProfilePage({ params }: { params: { id: string } }) {
  const workerId = Number.parseInt(params.id)
  const worker = workers.find((w) => w.id === workerId)

  if (!worker) {
    notFound()
  }

  // Get relevant jobs that match worker's skills
  const relevantJobs = jobs.filter((job) => job.skills.some((skill) => worker.skills.includes(skill))).slice(0, 3)

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
          <Link href="/workers" className="text-crimson-600 hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Workers
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-4xl">
                      {worker.name.charAt(0).toUpperCase()}
                    </div>
                    {worker.available ? (
                      <div className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full border-2 border-white">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                    ) : (
                      <div className="absolute bottom-0 right-0 bg-gray-500 p-1 rounded-full border-2 border-white">
                        <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                      </div>
                    )}
                  </div>
                  <h1 className="text-2xl font-bold text-crimson-800">{worker.name}</h1>
                  <p className="text-gray-600 font-medium">{worker.profession}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(worker.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {worker.rating} ({worker.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-crimson-600" />
                    <span>{worker.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-5 w-5 mr-3 text-crimson-600" />
                    <span>{worker.hourlyRate}/hour</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-crimson-600" />
                    <span>Member since {worker.joinedDate}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 mr-3 text-crimson-600" />
                    <span>{worker.completedJobs} jobs completed</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {worker.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-crimson-50 text-crimson-700 hover:bg-crimson-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-3 text-crimson-600" />
                      <a
                        href={`mailto:${worker.contactInfo.email}`}
                        className="hover:text-crimson-600 transition-colors"
                      >
                        {worker.contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-3 text-crimson-600" />
                      <a href={`tel:${worker.contactInfo.phone}`} className="hover:text-crimson-600 transition-colors">
                        {worker.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Button className="w-full bg-crimson-600 hover:bg-crimson-700">
                    <MessageSquare className="mr-2 h-4 w-4" /> Contact
                  </Button>
                  <Button variant="outline" className="w-full border-crimson-600 text-crimson-600 hover:bg-crimson-50">
                    <FileText className="mr-2 h-4 w-4" /> Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Availability Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Current Status:</span>
                    <Badge
                      variant={worker.available ? "success" : "outline"}
                      className={worker.available ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                    >
                      {worker.available ? "Available Now" : "Currently Busy"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="text-gray-800 font-medium">Within 2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Preferred Work:</span>
                    <span className="text-gray-800 font-medium">On-site & Remote</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Tabs */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="jobs">Recommended Jobs</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {worker.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 whitespace-pre-line">{worker.about}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Experience & Qualifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-2 border-crimson-600 pl-4">
                        <h3 className="font-semibold text-gray-800">Professional Experience</h3>
                        <p className="text-gray-600 mt-1">
                          {worker.profession} with{" "}
                          {worker.description.includes("years") ? worker.description.match(/\d+\+?/)[0] : "several"}{" "}
                          years of experience in the field.
                        </p>
                      </div>

                      <div className="border-l-2 border-crimson-600 pl-4">
                        <h3 className="font-semibold text-gray-800">Certifications</h3>
                        <p className="text-gray-600 mt-1">
                          {worker.profession.includes("Certified")
                            ? "Fully certified and licensed professional."
                            : "Professional with relevant qualifications in the field."}
                        </p>
                      </div>

                      <div className="border-l-2 border-crimson-600 pl-4">
                        <h3 className="font-semibold text-gray-800">Specializations</h3>
                        <ul className="list-disc list-inside text-gray-600 mt-1">
                          {worker.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Client Reviews</CardTitle>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(worker.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                            />
                          ))}
                        </div>
                        <span className="font-bold text-lg">{worker.rating}</span>
                        <span className="text-gray-500 ml-1">({worker.reviews})</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl mr-3">
                                {"C"}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800">Client Name</h4>
                                <p className="text-gray-500 text-sm">Location</p>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${j < 5 - i * 0.1 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600">
                            {worker.name} did an excellent job with our project. Very professional, punctual, and the
                            quality of work was outstanding. Would definitely hire again.
                          </p>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-gray-500 text-sm">2 weeks ago</span>
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-crimson-600">
                              <ThumbsUp className="h-4 w-4 mr-1" /> Helpful
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline" className="border-crimson-600 text-crimson-600 hover:bg-crimson-50">
                        View All {worker.reviews} Reviews
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Portfolio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                            <div className="text-gray-500">Portfolio Image {i + 1}</div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-800">Project Title {i + 1}</h4>
                            <p className="text-gray-600 text-sm mt-1">Project Description</p>
                            <div className="flex justify-between items-center mt-3">
                              <span className="text-gray-500 text-sm">Date</span>
                              <Badge variant="outline" className="bg-crimson-50 text-crimson-700 hover:bg-crimson-100">
                                Skill
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certifications & Awards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-start">
                          <div className="mr-4 mt-1">
                            <Award className="h-6 w-6 text-crimson-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Certification/Award {i + 1}</h4>
                            <p className="text-gray-600 text-sm mt-1">Description of the certification or award</p>
                            <p className="text-gray-500 text-sm mt-1">Issued Date</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Jobs for {worker.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">No matching jobs found at the moment.</p>
                        <Link href="/jobs">
                          <Button className="bg-crimson-600 hover:bg-crimson-700">Browse All Jobs</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skill Match Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Based on {worker.name}'s skills and experience, here's how they match with current job market
                      demands:
                    </p>

                    <div className="space-y-4">
                      {worker.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-gray-700">{skill}</span>
                            <span className="text-sm text-gray-500">{90 - index * 10}% match</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-crimson-600 h-2 rounded-full"
                              style={{ width: `${90 - index * 10}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-crimson-50 rounded-lg border border-crimson-100">
                      <h4 className="font-semibold text-crimson-800 mb-2">AI-Powered Recommendation</h4>
                      <p className="text-gray-700">
                        Based on current market trends, {worker.name} could increase their job opportunities by adding
                        skills in
                        {worker.profession.includes("Electrician")
                          ? " renewable energy systems and EV charging installations."
                          : worker.profession.includes("Plumber")
                            ? " water conservation systems and smart plumbing technologies."
                            : worker.profession.includes("Teacher")
                              ? " digital learning platforms and personalized education techniques."
                              : worker.profession.includes("Carpenter")
                                ? " sustainable materials and modern design software."
                                : " emerging technologies in their field."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

