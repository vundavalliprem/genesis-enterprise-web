
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Target, Award, Globe, Clock, Check, Building, ThumbsUp, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  // Updated company stats
  const stats = [
    { label: "Years in business", value: "7+" },
    { label: "Global clients", value: "12+" },
    { label: "Team members", value: "45+" },
    { label: "Projects delivered", value: "23+" }
  ];

  // Example team members
  const teamMembers = [
    { 
      name: "Aditya Gorantla", 
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    },
    { 
      name: "Priya Sharma", 
      title: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80"
    },
    { 
      name: "Rajesh Kumar", 
      title: "VP of Operations",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
    },
    { 
      name: "Sarah Johnson", 
      title: "Director of Strategy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
    }
  ];

  // Example values
  const values = [
    { 
      icon: <Target className="h-8 w-8 text-brand-blue" />,
      title: "Excellence",
      description: "We strive for excellence in every project, consistently delivering high-quality solutions that exceed client expectations."
    },
    { 
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients to ensure their success."
    },
    { 
      icon: <Award className="h-8 w-8 text-brand-blue" />,
      title: "Innovation",
      description: "We embrace innovation, continuously exploring new technologies and approaches to solve complex business challenges."
    },
    { 
      icon: <Globe className="h-8 w-8 text-brand-blue" />,
      title: "Integrity",
      description: "We operate with unwavering integrity, fostering trust and building lasting relationships with our clients and partners."
    }
  ];

  // Timeline events
  const timeline = [
    {
      year: "Apr 2018",
      title: "Founded in Hyderabad",
      description: "Gorantla Infotech Solutions was established with a vision to provide innovative technology solutions to enterprises."
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      description: "Secured our first major enterprise client and successfully delivered a transformative digital solution."
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Expanded our team to 25+ professionals and enhanced our service offerings to include cloud solutions."
    },
    {
      year: "2021",
      title: "AWS Partnership",
      description: "Became an official AWS partner to provide optimized cloud solutions to our clients."
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Recognized for technical excellence and innovation in enterprise software solutions."
    },
    {
      year: "2023",
      title: "Service Expansion",
      description: "Added specialized services in AI/ML and data analytics to our portfolio."
    },
    {
      year: "2024",
      title: "Team Growth to 45+",
      description: "Expanded our talented team to over 45 professionals across various technology specializations."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-gray-900 via-brand-darkBlue to-brand-blue py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                About Gorantla Infotech
              </h1>
              <p className="text-lg text-blue-100">
                Empowering enterprises with innovative technology solutions since April 2018
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded on April 9, 2018, Gorantla Infotech Solutions began as a vision to transform how businesses leverage technology for growth and innovation. What started as a small team of passionate technologists has evolved into a comprehensive enterprise solution provider with expertise across multiple domains.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  With our headquarters in Hyderabad, we bring together diverse perspectives and technical expertise to solve complex business challenges. Our multi-disciplinary team includes software architects, developers, UI/UX specialists, cloud experts, and project managers who collaborate to deliver exceptional solutions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We believe that technology should be an enabler, not a constraint. This philosophy guides our approach to every client engagement, ensuring we deliver solutions that are not just technically sound but also aligned with business objectives and future growth.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
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
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                    alt="Gorantla Infotech office"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-blue-100 rounded-lg -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700">
                The principles that guide our work and define our culture
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <ThumbsUp className="h-10 w-10 text-brand-blue mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Client-Centric</h3>
                    <p className="text-gray-600">We prioritize understanding our clients' unique needs and challenges to deliver tailored solutions.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Lightbulb className="h-10 w-10 text-brand-blue mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Innovative</h3>
                    <p className="text-gray-600">We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Check className="h-10 w-10 text-brand-blue mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Quality-Focused</h3>
                    <p className="text-gray-600">We maintain rigorous quality standards through comprehensive testing and validation processes.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Building className="h-10 w-10 text-brand-blue mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Scalable</h3>
                    <p className="text-gray-600">We design solutions that can grow and evolve with our clients' changing business needs.</p>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Our Approach to Technology
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  At Gorantla Infotech, we believe that technology should serve business objectives, not the other way around. Our approach combines technical excellence with strategic thinking to deliver solutions that drive real business value.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We follow a collaborative methodology that involves clients throughout the development process, ensuring that the final solution aligns perfectly with their vision and requirements.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our solutions are built with scalability, security, and future-readiness in mind, enabling businesses to adapt and evolve in today's rapidly changing technological landscape.
                </p>
                <Link to="/services">
                  <Button className="bg-brand-blue hover:bg-brand-darkBlue text-white px-6 py-2 rounded-md">
                    Explore Our Services
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-700">
                From our founding on April 9, 2018, to the present day
              </p>
            </motion.div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 z-0"></div>
              
              {/* Timeline items */}
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative z-10 flex items-center justify-between mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-300 flex items-center justify-center shadow-md">
                    <Clock className="h-5 w-5 text-brand-blue" />
                  </div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-left pl-8" : "text-right pr-8"}`}>
                    <div className="inline-block py-1 px-3 bg-brand-blue/10 rounded-full text-brand-blue font-semibold">
                      {item.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-700">
                Meet the experts guiding our vision and strategy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex space-x-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                          </svg>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.68 14-14.36 0-.22 0-.43-.02-.65A10 10 0 0 0 24 4.37z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-brand-blue">{member.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-darkBlue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Partner with Gorantla Infotech for innovative technology solutions that drive growth and competitive advantage.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-brand-blue hover:bg-blue-50 px-8 py-3 text-lg font-medium rounded-md">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
