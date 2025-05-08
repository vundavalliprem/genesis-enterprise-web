
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Mail, Phone, Users, GraduationCap, Briefcase, Heart, Library, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers: React.FC = () => {
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

        {/* Current Openings Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Current Openings
              </h2>
              
              <div className="bg-white p-10 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="h-7 w-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">We're Growing Our Team</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Thank you for your interest in joining Gorantla Infotech. While we don't have any open positions at the moment, we're always looking for talented individuals to join our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.location.href = "mailto:careers@gorantla-infotech.com"}
                    className="bg-brand-blue hover:bg-brand-darkBlue"
                  >
                    Submit Your Resume
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = "mailto:careers@gorantla-infotech.com?subject=Notification for Future Openings"}
                  >
                    Get Notified About Future Openings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-4 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-5">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Why Join Gorantla Infotech?
              </h2>
              <p className="text-lg text-gray-600">
                At Gorantla Infotech, we believe that our people are our greatest asset. We're committed to creating an inclusive, innovative, and supportive environment where you can grow your career and make an impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth & Learning</h3>
                <p className="text-gray-600">
                  We invest in your professional development with training programs, certification support, and mentorship opportunities to help you reach your full potential.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenging Projects</h3>
                <p className="text-gray-600">
                  Work on innovative, complex projects for leading enterprises across various industries, using cutting-edge technologies and methodologies.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Culture</h3>
                <p className="text-gray-600">
                  Enjoy a positive work environment where teamwork, creativity, and open communication are valued and encouraged every day.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We prioritize your wellbeing with flexible work arrangements, competitive benefits, and programs that support your physical and mental health.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Library className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge Sharing</h3>
                <p className="text-gray-600">
                  Access a wealth of resources, internal tech talks, and opportunities to contribute to our engineering blog and open-source projects.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Advancement</h3>
                <p className="text-gray-600">
                  Clear growth paths and opportunities for advancement based on your performance, skills, and aspirations within our organization.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Interested in joining our team?</h3>
                  <p className="text-gray-600">Submit your resume today, and we'll contact you when a suitable position opens up.</p>
                </div>
                <Button 
                  onClick={() => window.location.href = "mailto:careers@gorantla-infotech.com"} 
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-darkBlue text-white"
                >
                  Send Your Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-4 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-5">
                Employee Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Life at Gorantla Infotech
              </h2>
              <p className="text-lg text-gray-600">
                Hear from our team members about their experiences working with us and the impact they've made.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mr-4 flex items-center justify-center font-bold text-brand-blue">RK</div>
                  <div>
                    <h4 className="text-lg font-semibold">Rahul Kumar</h4>
                    <p className="text-gray-600">Senior Software Engineer</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "The collaborative culture at Gorantla Infotech has allowed me to grow technically while working on challenging enterprise projects. There's always something new to learn, and the team is incredibly supportive."
                </blockquote>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mr-4 flex items-center justify-center font-bold text-brand-blue">AS</div>
                  <div>
                    <h4 className="text-lg font-semibold">Ananya Sharma</h4>
                    <p className="text-gray-600">Project Manager</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "The leadership team truly values innovation and work-life balance. I've been able to implement new project management methodologies that have significantly improved our delivery processes."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
