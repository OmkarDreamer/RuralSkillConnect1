import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Star, Briefcase, MapPin, Clock, CheckCircle } from "lucide-react"
import { testimonials } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-beige">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-green flex items-center justify-center">
              <span className="text-white font-bold">RSC</span>
            </div>
            <span className="text-xl font-bold text-primary-blue">RuralSkillsConnect</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/jobs" className="text-neutral-charcoal hover:text-primary-green transition-colors font-medium">
              Find Jobs
            </Link>
            <Link
              href="/workers"
              className="text-neutral-charcoal hover:text-primary-green transition-colors font-medium"
            >
              Find Workers
            </Link>
            
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="outline"
                className="hidden sm:block border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
              >
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="hidden sm:block bg-secondary-orange hover:bg-secondary-orange/90 text-white">
                Sign Up
              </Button>
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-primary-blue/10 to-primary-green/10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 bg-secondary-yellow/20 rounded-full text-secondary-yellow font-medium text-sm mb-6">
              Empowering Rural Communities
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-charcoal mb-6">
              Connecting Rural Skills with <span className="text-primary-green">Local Opportunities</span>
            </h1>
            <p className="text-xl text-neutral-gray mb-8">
              Find skilled professionals in your community or showcase your talents and get hired locally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/workers">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary-green hover:bg-primary-green/90 shadow-lg shadow-primary-green/20"
                >
                  Find a Skilled Worker
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/jobs">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
                >
                  Find Job Opportunities
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block h-[400px]">
            <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-medium">
              <Image
                src="https://th.bing.com/th/id/OIP.TKlKSI7x_2d2_Ss05yTWpwHaHa?rs=1&pid=ImgDetMain"
                alt="Rural workers collaborating"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl z-20 flex items-center gap-3">
              <div className="bg-primary-green/10 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-primary-green" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-gray">Trusted by</p>
                <p className="text-lg font-bold text-primary-green">15,000+ Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-medium rounded-xl p-6 md:p-8 -mt-16 relative z-20 border border-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary-blue">
              Find Skilled Professionals Near You
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="col-span-4 md:col-span-1">
                <select className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent">
                  <option value="">Select Category</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                  <option value="carpenter">Carpenter</option>
                  <option value="teacher">Teacher</option>
                  <option value="mechanic">Mechanic</option>
                  <option value="painter">Painter</option>
                  <option value="tailor">Tailor</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your location or pin code"
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                  <div className="absolute right-3 top-3 text-neutral-gray">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-1">
                <Button className="w-full h-12 bg-primary-green hover:bg-primary-green/90">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 bg-neutral-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary-blue">Popular Service Categories</h2>
          <p className="text-center text-neutral-gray mb-12 max-w-2xl mx-auto">
            Connect with skilled professionals across various categories to get your work done efficiently and
            affordably.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Electricians", icon: "⚡", color: "bg-secondary-yellow/20", link: "/category/electricians" },
              { name: "Plumbers", icon: "🔧", color: "bg-primary-blue/20", link: "/category/plumbers" },
              { name: "Carpenters", icon: "🪚", color: "bg-secondary-orange/20", link: "/category/carpenters" },
              { name: "Teachers", icon: "📚", color: "bg-primary-green/20", link: "/category/teachers" },
              { name: "Mechanics", icon: "🔩", color: "bg-secondary-yellow/20", link: "/category/mechanics" },
              { name: "Painters", icon: "🖌️", color: "bg-primary-blue/20", link: "/category/painters" },
              { name: "Farmers", icon: "🌾", color: "bg-primary-green/20", link: "/category/farmers" },
              { name: "Healthcare", icon: "⚕️", color: "bg-secondary-orange/20", link: "/category/healthcare" },
            ].map((category, index) => (
              <Link href={category.link} key={index}>
                <div
                  className={`${category.color} p-6 rounded-xl hover:shadow-medium transition-all text-center h-full flex flex-col items-center justify-center cursor-pointer transform hover:-translate-y-1 duration-200 border border-transparent hover:border-gray-200`}
                >
                  <span className="text-4xl mb-3">{category.icon}</span>
                  <h3 className="font-medium text-lg text-neutral-charcoal">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workers */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-green/5 transform skew-x-12 -translate-x-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-blue">Featured Professionals</h2>
              <p className="text-neutral-gray mt-2">Top-rated skilled workers in various categories</p>
            </div>
            <Link href="/workers">
              <Button
                variant="outline"
                className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
              >
                View All Professionals
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-soft overflow-hidden worker-card transition-all duration-300 border border-gray-100 hover:shadow-medium"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-neutral-beige flex items-center justify-center text-primary-green font-bold text-xl">
                      {id === 1 ? "RK" : id === 2 ? "PS" : "AP"}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-charcoal">
                        <Link href={`/workers/${id}`} className="hover:text-primary-green transition-colors">
                          {id === 1 ? "Rajesh Kumar" : id === 2 ? "Priya Sharma" : "Amit Patel"}
                        </Link>
                      </h3>
                      <p className="text-neutral-gray">
                        {id === 1 ? "Certified Electrician" : id === 2 ? "Master Plumber" : "Mathematics Teacher"}
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-secondary-yellow text-secondary-yellow" />
                          ))}
                        </div>
                        <span className="text-sm text-neutral-gray ml-2">
                          {id === 1 ? "4.9 (27 reviews)" : id === 2 ? "4.8 (34 reviews)" : "4.7 (19 reviews)"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-neutral-gray">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {id === 1 ? "Jaipur, Rajasthan" : id === 2 ? "Varanasi, Uttar Pradesh" : "Ahmedabad, Gujarat"}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center text-sm text-neutral-gray">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>
                      {id === 1 ? "₹500 - ₹700 per hour" : id === 2 ? "₹600 - ₹800 per hour" : "₹400 - ₹600 per hour"}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-neutral-gray text-sm line-clamp-2">
                      {id === 1
                        ? "Experienced electrician with 12+ years working on residential and commercial projects. Licensed and insured with specialization in energy-efficient installations."
                        : id === 2
                          ? "Master plumber with over 15 years of experience in residential and commercial plumbing. Specialized in new installations, repairs, and emergency services."
                          : "Certified mathematics teacher with 8 years of experience teaching all grade levels. Strong focus on making math accessible and enjoyable for all students."}
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-beige p-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm font-medium flex items-center">
                    <div
                      className={`h-2 w-2 rounded-full ${id === 3 ? "bg-neutral-gray" : "bg-primary-green"} mr-2`}
                    ></div>
                    {id === 3 ? "Currently Busy" : "Available Now"}
                  </span>
                  <Link href={`/workers/${id}`}>
                    <Button size="sm" className="bg-primary-green hover:bg-primary-green/90">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="py-16 bg-neutral-beige">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-blue">Recent Job Opportunities</h2>
              <p className="text-neutral-gray mt-2">
                Latest projects posted by clients looking for skilled professionals
              </p>
            </div>
            <Link href="/jobs">
              <Button
                variant="outline"
                className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
              >
                View All Jobs
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-soft overflow-hidden job-card transition-all duration-300 border border-gray-100 hover:shadow-medium"
              >
                <div className="p-6">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg text-neutral-charcoal">
                      <Link href={`/jobs/${id}`} className="hover:text-primary-green transition-colors">
                        {id === 1
                          ? "Electrician Needed for Home Renovation"
                          : id === 2
                            ? "Plumbing Repair in Local High School"
                            : id === 3
                              ? "Part-time Math Teacher for Rural School"
                              : "Carpenter for Temple Restoration"}
                      </Link>
                    </h3>
                    {id === 1 || id === 3 ? (
                      <span className="bg-secondary-orange/20 text-secondary-orange text-xs px-2 py-1 rounded-full font-medium">
                        Urgent
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <div className="flex items-center text-neutral-gray text-sm">
                      <MapPin className="mr-1 h-4 w-4" />
                      {id === 1
                        ? "Jaipur, Rajasthan"
                        : id === 2
                          ? "Varanasi, Uttar Pradesh"
                          : id === 3
                            ? "Ahmedabad, Gujarat"
                            : "Coimbatore, Tamil Nadu"}
                    </div>
                    <div className="flex items-center text-neutral-gray text-sm">
                      <Briefcase className="mr-1 h-4 w-4" />
                      {id === 1 ? "Contract" : id === 2 ? "One-time Project" : id === 3 ? "Part-time" : "Contract"}
                    </div>
                    <div className="flex items-center text-neutral-gray text-sm">
                      <Clock className="mr-1 h-4 w-4" />
                      Posted{" "}
                      {id === 1 ? "2 days ago" : id === 2 ? "1 week ago" : id === 3 ? "3 days ago" : "5 days ago"}
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-neutral-gray text-sm line-clamp-2">
                      {id === 1
                        ? "Looking for a licensed electrician to rewire a 3-bedroom home and install new lighting fixtures throughout. The project is expected to take 1-2 weeks."
                        : id === 2
                          ? "The high school needs repairs to the plumbing system in the gymnasium locker rooms. Experience with commercial plumbing required."
                          : id === 3
                            ? "Our small rural school is seeking a qualified math teacher to teach algebra and geometry to grades 9-12, three days a week."
                            : "Historic temple needs restoration work including replacing damaged wooden beams, repairing doors, and reinforcing the structure. Experience with historic buildings preferred."}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {id === 1 ? (
                      <>
                        <span className="bg-neutral-beige text-neutral-charcoal text-xs px-2 py-1 rounded-full">
                          Electrical Wiring
                        </span>
                        <span className="bg-neutral-beige text-neutral-charcoal text-xs px-2 py-1 rounded-full">
                          Lighting Installation
                        </span>
                      </>
                    ) : id === 2 ? (
                      <>
                        <span className="bg-neutral-beige text-neutral-charcoal text-xs px-2 py-1 rounded-full">
                          Commercial Plumbing
                        </span>
                        <span className="bg-neutral-beige text-neutral-charcoal text-xs px-2 py-1 rounded-full">
                          Pipe Repair
                        </span>
                      </>
                    ) : id === 3 ? (
                      <>
                        <span className="bg-neutral-beige text-neutral-charcoal text-xs px-2 py-1 rounded-full">
                          Mathematics
                        </span>
                        <span className="bg-neutral-beige text-neutral-charcoal text-xs px-2 py-1 rounded-full">
                          Teaching
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="bg-neutral-beige text-neutral-charcoal text-xs px-2 py-1 rounded-full">
                          Carpentry
                        </span>
                        <span className="bg-neutral-beige text-neutral-charcoal text-xs px-2 py-1 rounded-full">
                          Restoration
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="bg-neutral-beige p-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-neutral-gray">
                    {id === 1 ? "5 applicants" : id === 2 ? "3 applicants" : id === 3 ? "2 applicants" : "4 applicants"}
                  </span>
                  <Link href={`/jobs/${id}`}>
                    <Button size="sm" className="bg-secondary-orange hover:bg-secondary-orange/90">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] opacity-5 z-0"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-blue/10 rounded-full filter blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary-blue">Success Stories</h2>
          <p className="text-center text-neutral-gray mb-12 max-w-2xl mx-auto">
            Hear from workers and clients who have found success through our platform
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 transform transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-beige flex items-center justify-center text-primary-green font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-charcoal">{testimonial.name}</h3>
                    <p className="text-sm text-neutral-gray">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary-yellow text-secondary-yellow" />
                  ))}
                </div>
                <p className="text-neutral-gray italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
         
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect with Local Talent?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of skilled professionals and clients in rural communities building stronger local economies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary-orange hover:bg-secondary-orange/90 text-white"
              >
                Create Your Account
              </Button>
            </Link>
            <Link href="/jobs">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-charcoal text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-green flex items-center justify-center">
                  <span className="text-white font-bold">RSC</span>
                </div>
                <h3 className="text-xl font-bold text-white">RuralSkillsConnect</h3>
              </div>
              <p className="mb-4">
                Bridging the gap between skilled workers and opportunities in rural communities across India.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/ruralskillsconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/ruralskillsconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/ruralskillsconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/workers" className="hover:text-white transition-colors">
                    Find Workers
                  </a>
                </li>
                <li>
                  <a href="/jobs" className="hover:text-white transition-colors">
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a href="/post-job" className="hover:text-white transition-colors">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="/signup" className="hover:text-white transition-colors">
                    Register as Worker
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/safety" className="hover:text-white transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} RuralSkillsConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

