
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Briefcase, MapPin, Clock, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Example job listings
const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "We're looking for a Senior Software Engineer to design and develop high-quality software solutions. You'll collaborate with cross-functional teams to define, design, and ship new features.",
    requirements: [
      "5+ years of experience in software development",
      "Proficiency in Java, Spring Boot, and microservices architecture",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving abilities and attention to detail",
      "Excellent communication and teamwork skills"
    ]
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "Bangalore, India",
    type: "Full-time",
    description: "As a Cloud Solutions Architect, you'll design and implement AWS cloud solutions for our enterprise clients. You'll work closely with clients to understand their needs and develop tailored cloud strategies.",
    requirements: [
      "AWS Certified Solutions Architect or equivalent",
      "3+ years of experience architecting solutions on AWS",
      "Knowledge of security, cost optimization, and performance best practices",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Strong communication and client-facing skills"
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description: "Join our DevOps team to build and maintain CI/CD pipelines, automate infrastructure deployment, and ensure the reliability and scalability of our systems.",
    requirements: [
      "3+ years of experience in DevOps or similar role",
      "Experience with containerization (Docker, Kubernetes)",
      "Knowledge of infrastructure as code and configuration management",
      "Familiarity with monitoring and logging tools",
      "Strong scripting skills (Bash, Python)"
    ]
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Pune, India",
    type: "Full-time",
    description: "We're seeking a talented UI/UX Designer to create intuitive and engaging user experiences for our enterprise applications. You'll work closely with product and engineering teams throughout the design process.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency with design tools (Figma, Sketch, Adobe XD)",
      "Experience designing enterprise applications or complex systems",
      "Understanding of accessibility standards and responsive design",
      "Ability to translate user needs into design solutions"
    ]
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Project Management",
    location: "Chennai, India",
    type: "Full-time",
    description: "As a Project Manager, you'll oversee the successful delivery of client projects, manage resources, and ensure that projects are completed on time and within scope.",
    requirements: [
      "PMP certification or equivalent",
      "5+ years of IT project management experience",
      "Strong organizational and leadership skills",
      "Experience with Agile and traditional project management methodologies",
      "Excellent client communication and stakeholder management"
    ]
  },
  {
    id: 6,
    title: "QA Engineer",
    department: "Quality Assurance",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Join our QA team to ensure the quality and reliability of our software products. You'll design and execute test plans, identify bugs, and work with developers to resolve issues.",
    requirements: [
      "3+ years of experience in software testing",
      "Experience with test automation frameworks",
      "Knowledge of testing methodologies and tools",
      "Strong attention to detail and analytical skills",
      "Good communication and documentation abilities"
    ]
  }
];

// Departments and locations for filters
const departments = ["All", "Engineering", "Cloud Services", "Operations", "Design", "Project Management", "Quality Assurance"];
const locations = ["All", "Hyderabad, India", "Bangalore, India", "Pune, India", "Chennai, India", "Remote"];

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [activeJobId, setActiveJobId] = useState<number | null>(null);

  // Filter jobs based on selected filters
  const filteredJobs = jobListings.filter(job => {
    const departmentMatch = selectedDepartment === "All" || job.department === selectedDepartment;
    const locationMatch = selectedLocation === "All" || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-darkBlue py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-lg text-blue-100">
                Explore career opportunities at Gorantla Infotech and be part of our journey to transform enterprises through technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              
              {/* Filters */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <div className="flex items-center mb-4">
                  <Filter className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="font-medium text-gray-900">Filter Positions</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      id="department"
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select
                      id="location"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Job Listings */}
              <div className="space-y-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                    >
                      <div 
                        className="p-6 cursor-pointer"
                        onClick={() => setActiveJobId(activeJobId === job.id ? null : job.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                <span>{job.department}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{job.type}</span>
                              </div>
                            </div>
                          </div>
                          <div className={`transition-transform duration-300 ${activeJobId === job.id ? 'rotate-180' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Job Details */}
                      {activeJobId === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-6 border-t border-gray-100 pt-4"
                        >
                          <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                            <p className="text-gray-700">{job.description}</p>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                              {job.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                            Apply for this position
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  ))
                ) : (
                  <div className="bg-white p-8 rounded-lg text-center">
                    <p className="text-gray-600">No positions found matching your filters. Please try different criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Why Join Gorantla Infotech?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Gorantla Infotech, we believe that our people are our greatest asset. We're committed to creating an inclusive, innovative, and supportive environment where you can grow your career and make an impact.
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Innovation and Growth</h3>
                      <p className="text-gray-600">Work on challenging projects using the latest technologies and expand your skills.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Competitive Compensation</h3>
                      <p className="text-gray-600">We offer attractive salary packages, health benefits, and performance bonuses.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Professional Development</h3>
                      <p className="text-gray-600">Access to learning resources, certification programs, and career advancement opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Inclusive Work Culture</h3>
                      <p className="text-gray-600">A diverse and respectful environment where every voice matters and contributes to our success.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="rounded-lg overflow-hidden shadow-xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                    alt="Team collaboration at Gorantla Infotech"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-blue-100 rounded-lg -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
