export const testimonials = [
  {
    name: "Radha Sharma",
    role: "Electrician",
    quote:
      "RuralSkillsConnect has transformed my career. I'm now able to connect with clients directly and earn a stable income.",
  },
  {
    name: "Ganesh Patel",
    role: "Plumber",
    quote:
      "I've found consistent work through this platform. It's easy to use and has helped me grow my plumbing business.",
  },
  {
    name: "Lakshmi Srinivasan",
    role: "Teacher",
    quote:
      "This platform has allowed me to offer my teaching services to students in rural areas, making a real difference in their lives.",
  },
  {
    name: "David Miller",
    role: "Carpenter",
    quote:
      "I've been able to find local clients who appreciate quality craftsmanship. RuralSkillsConnect has been a game-changer for my carpentry business.",
  },
  {
    name: "Maria Rodriguez",
    role: "Healthcare Aide",
    quote:
      "I can now provide essential healthcare services to those who need it most in my community, thanks to this platform.",
  },
]

export const jobs = [
  {
    id: 1,
    title: "Electrician Needed for Home Renovation",
    location: "Jaipur, Rajasthan",
    type: "Contract",
    rate: "₹500 - ₹700 per hour",
    posted: "2 days ago",
    description:
      "Looking for a licensed electrician to rewire a 3-bedroom home and install new lighting fixtures throughout. The project is expected to take 1-2 weeks.",
    detailedDescription: `We are renovating our home and need a skilled electrician to handle the electrical work.
      This includes:
        - Rewiring the entire house
        - Installing new lighting fixtures
        - Upgrading the electrical panel
        - Ensuring all work meets safety standards`,
    skills: ["Electrical Wiring", "Lighting Installation", "Circuit Breakers"],
    urgent: true,
    category: "Electrical",
    applicants: 5,
    postedBy: {
      name: "Rajesh Mehra",
      rating: 4.5,
    },
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
    detailedDescription: `Our high school gymnasium locker rooms have several plumbing issues that need immediate attention.
      We need a plumber to:
        - Repair leaking pipes
        - Replace broken fixtures
        - Ensure proper drainage
        - Provide a warranty for the work`,
    skills: ["Commercial Plumbing", "Pipe Repair", "Fixture Installation"],
    urgent: false,
    category: "Plumbing",
    applicants: 3,
    postedBy: {
      name: "Priya Sharma",
      rating: 4.8,
    },
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
    detailedDescription: `We are a small rural school looking for a dedicated math teacher to join our team.
      The responsibilities include:
        - Teaching algebra and geometry to grades 9-12
        - Developing lesson plans
        - Grading assignments
        - Providing extra help to students`,
    skills: ["Mathematics", "Teaching", "Curriculum Development"],
    urgent: true,
    category: "Teaching",
    applicants: 2,
    postedBy: {
      name: "Amit Patel",
      rating: 4.7,
    },
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
    detailedDescription: `Our historic temple is in need of restoration work.
      We need a skilled carpenter to:
        - Replace damaged wooden beams
        - Repair doors and windows
        - Reinforce the structure
        - Preserve the temple's historic integrity`,
    skills: ["Carpentry", "Woodworking", "Restoration"],
    urgent: false,
    category: "Carpentry",
    applicants: 4,
    postedBy: {
      name: "Ananya Reddy",
      rating: 4.9,
    },
  },
]

export const workers = [
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
    about: `I am a certified electrician with over 12 years of experience in residential and commercial projects. I am licensed and insured, and I specialize in energy-efficient installations. I am passionate about providing quality workmanship and excellent customer service.`,
    contactInfo: {
      email: "rajesh.kumar@email.com",
      phone: "+919876543210",
    },
    joinedDate: "2018",
    completedJobs: 125,
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
    about: `I am a master plumber with over 15 years of experience in residential and commercial plumbing. I specialize in new installations, repairs, and emergency services. I am committed to providing reliable and efficient plumbing solutions.`,
    contactInfo: {
      email: "priya.sharma@email.com",
      phone: "+918765432109",
    },
    joinedDate: "2017",
    completedJobs: 150,
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
    about: `I am a certified mathematics teacher with 8 years of experience teaching all grade levels. I have a strong focus on making math accessible and enjoyable for all students. I am dedicated to helping students achieve their full potential.`,
    contactInfo: {
      email: "amit.patel@email.com",
      phone: "+917654321098",
    },
    joinedDate: "2019",
    completedJobs: 80,
  },
]

